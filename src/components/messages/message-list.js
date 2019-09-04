import React, { Component } from "react";
import MessageViews from "./message-views";

export default class MessageList extends Component {
  state = {
    messages: [
      {
        from: "Martha",
        content: "I will be traveling soon",
        status: "read"
      }
    ]
  };
  render() {
    const messageViews = this.state.messages.map((message, i) => {
      return <MessageViews key={i} message={message} />;
    });
    return (
      <div>
        <h1> List Of Messages</h1>
        {messageViews}
      </div>
    );
  }
}
