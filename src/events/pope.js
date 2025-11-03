export const name = "messageCreate"
export const once = false
export function execute(message) {
    let now = new Date()

    if (message.content === "2137"
        && now.getUTCHours() == 21 - 1 && now.getUTCMinutes() == 37) {
        message.reply(`${message.author} to twoja x papieżowa, trzymaj kremówkę! 🍮`)
    }
}