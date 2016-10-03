import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import  * as chatActions from '../actions/ChatActions'

class App extends Component {
    sendMessage(e) {
        e.preventDefault();
        let messageText = document.getElementById('message-input').value;
        if (messageText) {
            this.props.chatActions.sendMessage(this.props.user.id, messageText);
        }
    }

    render() {
        const { contacts, messages } = this.props;
        return <div>
            <div>
                {messages.map((m, i) => {
                    return <p key={i}>{contacts.find(c => c.id === m.userId).name}: {m.text}</p>
                })}
            </div>
            <form>
                <input type="text" id="message-input"/>
                <input type="submit" value="Отправить" onClick={this.sendMessage.bind(this)}/>
            </form>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        messages: state.messages,
        contacts: state.contacts,
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        chatActions: bindActionCreators(chatActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)