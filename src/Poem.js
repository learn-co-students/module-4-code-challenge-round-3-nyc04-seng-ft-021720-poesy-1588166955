import React from "react";

class Poem extends React.Component {

  state = {
    markRead: true
  }

  handleRead = () => {
    this.setState({
      markRead: !this.state.markRead
    })
  }


  render() {

    let {title, content, author} = this.props.poem


    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>
          <strong>- By {author}</strong>
        </p>
        <button onClick= {this.handleRead}>
          {this.state.markRead ? "Mark as read" : "Mark as unread"
           }
      </button>
      </div>
    );
  }
}

export default Poem;
