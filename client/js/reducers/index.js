const initialState = {
    user: {
        id: 0,
        name: 'Vlad'
    },
    messages: [
        {
            userId: 1,
            text: 'Hi, bro'
        },
        {
            userId: 1,
            text: 'How are you?'
        }
    ],
    contacts: [
        {
            id: 0,
            name: 'Vlad'
        },
        {
            id: 1,
            name: 'Peter'
        },
        {
            id: 2,
            name: 'Ivan'
        }
    ]
};

function updateMessages(messages, newMessage) {
    var newMList = messages.slice(0);
    newMList.push(newMessage);
    return newMList;
}

export default function userstate(state = initialState, action) {
    switch (action.type) {
        case 'INITIAL_STATE':
            return action.payload;
        case 'SEND_MESSAGE':
            return Object.assign({}, state, { messages: updateMessages(state.messages, action.payload) });
        default:
            return state;
    }
}