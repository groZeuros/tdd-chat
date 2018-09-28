import PropTypes from 'prop-types'
import React, { Component } from 'react'

import Message from './Message';
import './Chat.css'

class Chat extends Component {
  state = {
    textMessage:''
  }

  // Arrow fx for binding
  sendMessage = (event) => {
    event.preventDefault()
    if (this.state.textMessage) {
      this.props.sendMessage({
        name:this.props.userName,
        date:new Date(),
        text:this.state.textMessage,
      });
    }
  }

  // Arrow fx for binding
  textChanged = (event) => {
    this.setState({ textMessage: event.target.value })
  }

  render() {
    return (
      <div>
        <div className="messageSection">
          {
            console.log(this.props.messages)
          }
          {
            this.props.messages.length && this.props.messages.map((message, index) => (
               <Message
                 name={message.name}
                 date={message.date}
                 text={message.text}
                 index={index}
                 key={index}
               />
             ))
          }
        </div>
        <form className="Chat" onSubmit={this.sendMessage}>
          <div className="textSection">
            <label>
              {this.props.userName}
              <br />
              <textarea
                autoComplete="given-name"
                type="text"
                onChange={this.textChanged}
                onFocus={this.focused}
                placeholder="Votre message"
              >
              </textarea>
            </label>
            <button type="submit">Envoi !</button>
          </div>
        </form>
      </div>
    )
  }
}

Chat.propTypes = {
  userName: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired,
  sendMessage: PropTypes.func.isRequired,
}

export default Chat
