import React from "react";

class Poem extends React.Component {
    state = {
        markRead: false
    }

    toggleRead = (event) => { // I have a habit of putting event in the args just so I know I have access to it, if this is not okay let me know
        this.setState(prevState => {
            return { markRead: !prevState.markRead }
        })
    }

    render() {
        const {id, title, content, author} = this.props.poemObj
        return (
        <div id={id}>
            <h3>{title}</h3>
            <p>{content}</p>
            <p>
            <strong>- By {author}</strong>
            </p>
            <button onClick={this.toggleRead}>
                {this.state.markRead ? "Mark as unread" : "Mark as read"}
            </button>
        </div>
        );
    }
}

export default Poem;
