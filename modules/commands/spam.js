module.exports.config = {
  name: "spam",
  version: "1.0.0",
  hasPermssion: 3,
  Rent: 2,
  credits: "Vtuan",
  description: "spam đến chết một nội dung",
  commandCategory: "War/tag",
  usages: "",
  cooldowns: 1,
  envConfig: {
    spamDelay: 2// Thay đổi thời gian spam thành 30 giây
  }
};

const spamThreads = new Set();
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
module.exports.run = async function ({ api, event, args }) {
  const { threadID, messageID, senderID } = event;
  const content = (args.length != 0) ? args.join(" ") : "🔵🟣🟢🔴𝑯𝒐𝒂 𝑹𝒐̛𝒊 𝑪𝒖̛̉𝒂 𝑷𝒉𝒂̣̂𝒕 , 𝑽𝒂̣𝒏 𝑽𝒂̣̂𝒕 𝑪𝒖́𝒊 𝑫𝒂̂̀𝒖……❄️[𝑵𝑪𝑻] 𝒙 [𝑵𝑻𝒀𝑵]🏙🌃🌇🌆\n🔵🟣🟢🔴𝑯𝒐𝒂 𝑹𝒐̛𝒊 𝑪𝒖̛̉𝒂 𝑷𝒉𝒂̣̂𝒕 , 𝑽𝒂̣𝒏 𝑽𝒂̣̂𝒕 𝑪𝒖́𝒊 𝑫𝒂̂̀𝒖……❄️[𝑵𝑪𝑻] 𝒙 [𝑵𝑻𝒀𝑵]🏙🌃🌇🌆\n🔵🟣🟢🔴𝑯𝒐𝒂 𝑹𝒐̛𝒊 𝑪𝒖̛̉𝒂 𝑷𝒉𝒂̣̂𝒕 , 𝑽𝒂̣𝒏 𝑽𝒂̣̂𝒕 𝑪𝒖́𝒊 𝑫𝒂̂̀𝒖……❄️[𝑵𝑪𝑻] 𝒙 [𝑵𝑻𝒀𝑵]🏙🌃🌇🌆\n🔵🟣🟢🔴𝑯𝒐𝒂 𝑹𝒐̛𝒊 𝑪𝒖̛̉𝒂 𝑷𝒉𝒂̣̂𝒕 , 𝑽𝒂̣𝒏 𝑽𝒂̣̂𝒕 𝑪𝒖́𝒊 𝑫𝒂̂̀𝒖……❄️[𝑵𝑪𝑻] 𝒙 [𝑵𝑻𝒀𝑵]🏙🌃🌇🌆\n🔵🟣🟢🔴𝑯𝒐𝒂 𝑹𝒐̛𝒊 𝑪𝒖̛̉𝒂 𝑷𝒉𝒂̣̂𝒕 , 𝑽𝒂̣𝒏 𝑽𝒂̣̂𝒕 𝑪𝒖́𝒊 𝑫𝒂̂̀𝒖……❄️[𝑵𝑪𝑻] 𝒙 [𝑵𝑻𝒀𝑵]🏙🌃🌇🌆\n🔵🟣🟢🔴𝑯𝒐𝒂 𝑹𝒐̛𝒊 𝑪𝒖̛̉𝒂 𝑷𝒉𝒂̣̂𝒕 , 𝑽𝒂̣𝒏 𝑽𝒂̣̂𝒕 𝑪𝒖́𝒊 𝑫𝒂̂̀𝒖……❄️[𝑵𝑪𝑻] 𝒙 [𝑵𝑻𝒀𝑵]🏙🌃🌇🌆\n🔵🟣🟢🔴𝑯𝒐𝒂 𝑹𝒐̛𝒊 𝑪𝒖̛̉𝒂 𝑷𝒉𝒂̣̂𝒕 , 𝑽𝒂̣𝒏 𝑽𝒂̣̂𝒕 𝑪𝒖́𝒊 𝑫𝒂̂̀𝒖……❄️[𝑵𝑪𝑻] 𝒙 [𝑵𝑻𝒀𝑵]🏙🌃🌇🌆\n🔵🟣🟢🔴𝑯𝒐𝒂 𝑹𝒐̛𝒊 𝑪𝒖̛̉𝒂 𝑷𝒉𝒂̣̂𝒕 , 𝑽𝒂̣𝒏 𝑽𝒂̣̂𝒕 𝑪𝒖́𝒊 𝑫𝒂̂̀𝒖……❄️[𝑵𝑪𝑻] 𝒙 [𝑵𝑻𝒀𝑵]🏙🌃🌇🌆\n🔵🟣🟢🔴𝑯𝒐𝒂 𝑹𝒐̛𝒊 𝑪𝒖̛̉𝒂 𝑷𝒉𝒂̣̂𝒕 , 𝑽𝒂̣𝒏 𝑽𝒂̣̂𝒕 𝑪𝒖́𝒊 𝑫𝒂̂̀𝒖……❄️[𝑵𝑪𝑻] 𝒙 [𝑵𝑻𝒀𝑵]🏙🌃🌇🌆\n🔵🟣🟢🔴𝑯𝒐𝒂 𝑹𝒐̛𝒊 𝑪𝒖̛̉𝒂 𝑷𝒉𝒂̣̂𝒕 , 𝑽𝒂̣𝒏 𝑽𝒂̣̂𝒕 𝑪𝒖́𝒊 𝑫𝒂̂̀𝒖……❄️[𝑵𝑪𝑻] 𝒙 [𝑵𝑻𝒀𝑵]🏙🌃🌇🌆\n🔵🟣🟢🔴𝑯𝒐𝒂 𝑹𝒐̛𝒊 𝑪𝒖̛̉𝒂 𝑷𝒉𝒂̣̂𝒕 , 𝑽𝒂̣𝒏 𝑽𝒂̣̂𝒕 𝑪𝒖́𝒊 𝑫𝒂̂̀𝒖……❄️[𝑵𝑪𝑻] 𝒙 [𝑵𝑻𝒀𝑵]🏙🌃🌇🌆\n🔵🟣🟢🔴𝑯𝒐𝒂 𝑹𝒐̛𝒊 𝑪𝒖̛̉𝒂 𝑷𝒉𝒂̣̂𝒕 , 𝑽𝒂̣𝒏 𝑽𝒂̣̂𝒕 𝑪𝒖́𝒊 𝑫𝒂̂̀𝒖……❄️[𝑵𝑪𝑻] 𝒙 [𝑵𝑻𝒀𝑵]🏙🌃🌇🌆\n🔵🟣🟢🔴𝑯𝒐𝒂 𝑹𝒐̛𝒊 𝑪𝒖̛̉𝒂 𝑷𝒉𝒂̣̂𝒕 , 𝑽𝒂̣𝒏 𝑽𝒂̣̂𝒕 𝑪𝒖́𝒊 𝑫𝒂̂̀𝒖……❄️[𝑵𝑪𝑻] 𝒙 [𝑵𝑻𝒀𝑵]🏙🌃🌇🌆\n🔵🟣🟢🔴𝑯𝒐𝒂 𝑹𝒐̛𝒊 𝑪𝒖̛̉𝒂 𝑷𝒉𝒂̣̂𝒕 , 𝑽𝒂̣𝒏 𝑽𝒂̣̂𝒕 𝑪𝒖́𝒊 𝑫𝒂̂̀𝒖……❄️[𝑵𝑪𝑻] 𝒙 [𝑵𝑻𝒀𝑵]🏙🌃🌇🌆\n🔵🟣🟢🔴𝑯𝒐𝒂 𝑹𝒐̛𝒊 𝑪𝒖̛̉𝒂 𝑷𝒉𝒂̣̂𝒕 , 𝑽𝒂̣𝒏 𝑽𝒂̣̂𝒕 𝑪𝒖́𝒊 𝑫𝒂̂̀𝒖……❄️[𝑵𝑪𝑻] 𝒙 [𝑵𝑻𝒀𝑵]🏙🌃🌇🌆\n🔵🟣🟢🔴𝑯𝒐𝒂 𝑹𝒐̛𝒊 𝑪𝒖̛̉𝒂 𝑷𝒉𝒂̣̂𝒕 , 𝑽𝒂̣𝒏 𝑽𝒂̣̂𝒕 𝑪𝒖́𝒊 𝑫𝒂̂̀𝒖……❄️[𝑵𝑪𝑻] 𝒙 [𝑵𝑻𝒀𝑵]🏙🌃🌇🌆\n🔵🟣🟢🔴𝑯𝒐𝒂 𝑹𝒐̛𝒊 𝑪𝒖̛̉𝒂 𝑷𝒉𝒂̣̂𝒕 , 𝑽𝒂̣𝒏 𝑽𝒂̣̂𝒕 𝑪𝒖́𝒊 𝑫𝒂̂̀𝒖……❄️[𝑵𝑪𝑻] 𝒙 [𝑵𝑻𝒀𝑵]🏙🌃🌇🌆\n🔵🟣🟢🔴𝑯𝒐𝒂 𝑹𝒐̛𝒊 𝑪𝒖̛̉𝒂 𝑷𝒉𝒂̣̂𝒕 , 𝑽𝒂̣𝒏 𝑽𝒂̣̂𝒕 𝑪𝒖́𝒊 𝑫𝒂̂̀𝒖……❄️[𝑵𝑪𝑻] 𝒙 [𝑵𝑻𝒀𝑵]🏙🌃🌇🌆\n🔵🟣🟢🔴𝑯𝒐𝒂 𝑹𝒐̛𝒊 𝑪𝒖̛̉𝒂 𝑷𝒉𝒂̣̂𝒕 , 𝑽𝒂̣𝒏 𝑽𝒂̣̂𝒕 𝑪𝒖́𝒊 𝑫𝒂̂̀𝒖……❄️[𝑵𝑪𝑻] 𝒙 [𝑵𝑻𝒀𝑵]🏙🌃🌇🌆\n";
  if (args[0] === "stop") {
    if (spamThreads.has(threadID)) {
      spamThreads.delete(threadID);
      return api.sendMessage('Đã dừng spam!', threadID, messageID);
    }
    return api.sendMessage('Không có quá trình spam nào đang diễn ra!', threadID, messageID);
  }
  if (!spamThreads.has(threadID)) {
    spamThreads.add(threadID);
    api.sendMessage(`Bắt đầu spam!`, threadID, messageID);
    while (spamThreads.has(threadID)) {
      await delay(this.config.envConfig.spamDelay * 1000);
      if (spamThreads.has(threadID)) {
        api.sendMessage(content, threadID);
      }
    }
  } else {
    api.sendMessage('Đang spam rồi cut!', threadID, messageID);
  }
};
