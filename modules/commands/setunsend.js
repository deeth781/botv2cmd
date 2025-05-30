const fs = require('fs-extra');
const path = "./modules/data/unsend.json";

module.exports.config = {
	name: "setunsend",
	version: "1.0.0",
	hasPermssion: 1,
	credits: "ChatGPT & HungCatMoi",
	description: "Đặt emoji để gỡ tin nhắn bot khi có người thả icon đó",
	commandCategory: "Quản trị nhóm",
	usages: "[emoji]",
	cooldowns: 5
};

module.exports.run = async function({ api, event, args }) {
	const { threadID, messageID } = event;
	const emoji = args[0];

	if (!emoji) return api.sendMessage("⚠️ Vui lòng nhập emoji muốn đặt làm trigger unsend.", threadID, messageID);

	let data = [];
	if (fs.existsSync(path)) data = JSON.parse(fs.readFileSync(path, "utf8"));

	const index = data.findIndex(item => item.threadID === threadID);
	if (index !== -1) {
		data[index].Icon = emoji;
	} else {
		data.push({ threadID, Icon: emoji });
	}

	fs.writeFileSync(path, JSON.stringify(data, null, 2));
	return api.sendMessage(`✅ Đã cập nhật emoji unsend cho nhóm này thành: ${emoji}`, threadID, messageID);
};
