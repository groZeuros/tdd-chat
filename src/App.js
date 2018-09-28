import React, { Component } from 'react';
import Chat from './Chat';
import './App.css';

class App extends Component {

  state = {
    chats: [{
        name: "Jean Poldeux",
        messages: [],
      },{
        name: "Schwarz Eneger",
        messages: [],
      },
    ]
  }

  // dispatch message to all but sender
  // @param => message obj
  chatSendMessage = (message) => {
    let chats = this.state.chats.slice()

    for (let i = 0 ; i < chats.length ; i++ ){
      if( chats[i].name !== message.name ){
        chats[i].messages.push(message)
      }
    }

    this.setState({ chats: chats })
  }

  render() {
    return (
      <div className="App">
        {
          this.state.chats.map((chat, index) => (
            <Chat userName={chat.name} key={index} messages={chat.messages} sendMessage={this.chatSendMessage} />
          ))
        }
      </div>
    )
  }
}

export default App;
