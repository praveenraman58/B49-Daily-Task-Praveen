import React, { Component } from 'react'

export class Index extends Component {
    constructor(){
        super();
        this.state = {
            item: 0,
        }
        console.log("Constructor called!!!");
    }

    componentDidMount(){
        console.log("component did mount called!!");

    }
    componentDidUpdate(){
        console.log("Component did updated called!!!");
    }
    componentWillUnmount(){
        alert("the component is going to be unmounted");
    }

    handleButtonClick = () => {
        this.setState({item: this.state.item + 1});
    }
  render() {
    console.log("Render called!!!")
    return (
        <>
      <div>Index</div>
      <p>Items: {this.state.item}</p>
      <button onClick={this.handleButtonClick}>Click Me</button>
      </>
    )
  }
}

export default Index