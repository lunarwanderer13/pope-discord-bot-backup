// export const name = "pope";
// export const once = false;
// export const on = true;
// export function execute(client) {
//     console.log(`Logged in as ${client.user.tag}!`);
// }

export default {
    name: "messageCreate",
    once: false,
    execute(message) {
        if (message.content === "2137"
            && Date.now().getHours() == "16" && Date.now().getMinutes() == "13") {
            console.log(true)
        }

        console.log(Date.now().getHours())
    }
}

export const name = "messageCreate"
export const once = false
export function execute(message) {
    let now = new Date()

    if (message.content === "2137"
        && now.getUTCHours() == 21 - 1 && now.getUTCMinutes() == 37) {
        message.reply(`${message.author} to twoja x papieżowa, trzymaj kremówkę! 🍮`)
    }
}