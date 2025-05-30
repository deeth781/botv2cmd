// File: handle/handleUnsend.js

module.exports = function ({ api }) {
  return async function handleUnsend({ event }) {
    const { senderID, reaction, messageID } = event;

    // Lấy ID của bot
    const botID = api.getCurrentUserID();

    // Nếu người thả cảm xúc không phải bot thì bỏ qua
    if (senderID !== botID) return;

    // Nếu cảm xúc là "❤️" thì gỡ tin nhắn
    if (reaction === "❤️") {
      try {
        await api.unsendMessage(messageID);
        console.log(`[BOT] Đã tự gỡ tin nhắn sau khi thả tim ❤️.`);
      } catch (err) {
        console.error("[LỖI UNSEND]", err);
      }
    }
  };
};
