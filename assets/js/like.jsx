// Note: We're using the CDN in "production".
import * as React from 'react'
import * as ReactDOM from 'react-dom';
import { AwesomeButton } from "react-awesome-button";

// A simple React JSX component.
class LikeButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = { liked: false };
    }
  
    render() {
      if (this.state.liked) {
        return 'You liked this!';
      }
  
      return (
        <AwesomeButton onClick={() => this.setState({ liked: true }) }>
          Like
        </AwesomeButton>
      );
    }
  }
  

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<LikeButton />, domContainer);
