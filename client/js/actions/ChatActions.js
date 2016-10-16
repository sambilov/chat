export function sendMessage(userId, messageText) {
    return {
        type: 'SEND_MESSAGE',
        payload: {
            userId: userId,
            text: messageText
        }
    }
}