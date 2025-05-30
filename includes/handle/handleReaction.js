const fs = require("fs-extra");

module.exports = function ({ api, models, Users, Threads, Currencies }) {
    return async function ({ event }) {
        const { handleReaction, commands } = global.client;
        const { messageID, threadID, senderID, reaction } = event;

        // 👉 1. Tạo đối tượng unsend xử lý các thao tác unsend
        const unsend = {
            // Kiểm tra và tạo thư mục + file nếu chưa có
            async initialize() {
                const dirPath = "./modules/data";
                const unsendPath = "./modules/data/unsend.json";
                
                if (!fs.existsSync(dirPath)) {
                    fs.mkdirSync(dirPath, { recursive: true }); // Tạo thư mục nếu chưa tồn tại
                }
                
                if (!fs.existsSync(unsendPath)) {
                    fs.writeFileSync(unsendPath, JSON.stringify([])); // Tạo file JSON trống
                }
            },

            // Kiểm tra và lưu dữ liệu unsend
            async saveData(threadID, icon, messageID) {
                const unsendPath = "./modules/data/unsend.json";
                const data = JSON.parse(fs.readFileSync(unsendPath, "utf-8"));
                const groupData = data.find(entry => entry.threadID === threadID);
                
                if (groupData) {
                    // Nếu đã có, cập nhật icon
                    groupData.Icon = icon;
                    fs.writeFileSync(unsendPath, JSON.stringify(data, null, 2));
                } else {
                    // Nếu chưa có, tạo mới
                    data.push({ threadID, Icon: icon, messageID });
                    fs.writeFileSync(unsendPath, JSON.stringify(data, null, 2));
                }
            },

            // Xử lý việc gỡ tin nhắn unsend nếu hợp lệ
            async unsendMessage(messageID, threadID, senderID, reaction) {
                const unsendPath = "./modules/data/unsend.json";
                const data = JSON.parse(fs.readFileSync(unsendPath, "utf-8"));
                const groupData = data.find(entry => entry.threadID === threadID);

                if (groupData && reaction === groupData.Icon && senderID === api.getCurrentUserID()) {
                    return api.unsendMessage(messageID, err => {
                        if (err) console.error("[UNSEND-ICON] Gỡ tin nhắn lỗi:", err.message);
                    });
                }
            }
        };

        // Khởi tạo thư mục và file nếu chưa có
        await unsend.initialize();

        // 👉 2. Xử lý unsend icon nếu hợp lệ
        try {
            await unsend.unsendMessage(messageID, threadID, senderID, reaction);
        } catch (err) {
            console.error("[UNSEND-ICON] Lỗi xử lý:", err.message);
        }

        // 👉 3. Tiếp tục xử lý handleReaction có sẵn
        if (handleReaction.length !== 0) {
            const indexOfHandle = handleReaction.findIndex(e => e.messageID === messageID);
            if (indexOfHandle < 0) return;

            const indexOfMessage = handleReaction[indexOfHandle];
            const handleNeedExec = commands.get(indexOfMessage.name);
            if (!handleNeedExec) return api.sendMessage(global.getText('handleReaction', 'missingValue'), threadID, messageID);

            try {
                let getText2;
                if (handleNeedExec.languages && typeof handleNeedExec.languages === 'object') {
                    getText2 = (...value) => {
                        const react = handleNeedExec.languages || {};
                        if (!react.hasOwnProperty(global.config.language)) {
                            return api.sendMessage(global.getText('handleCommand', 'notFoundLanguage', handleNeedExec.config.name), threadID, messageID);
                        }

                        let lang = handleNeedExec.languages[global.config.language][value[0]] || '';
                        for (let i = value.length - 1; i >= 0; i--) {
                            const expReg = new RegExp('%' + i, 'g');
                            lang = lang.replace(expReg, value[i]);
                        }
                        return lang;
                    };
                } else {
                    getText2 = () => {};
                }

                const Obj = {
                    api,
                    event,
                    models,
                    Users,
                    Threads,
                    Currencies,
                    handleReaction: indexOfMessage,
                    getText: getText2
                };

                handleNeedExec.handleReaction(Obj);
                return;
            } catch (error) {
                return api.sendMessage(global.getText('handleReaction', 'executeError', error), threadID, messageID);
            }
        }
    };
};
