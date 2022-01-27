import { Component } from 'react';


class ClassComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0,
      name: "james"
    }
    this.increment = this.increment.bind(this);

  }

  increment(){
    this.setState({counter: this.state.counter + 1})
  }



  render(){
    const { someProp } = this.props;
    return (
      <section>
        <h2>The Class Component</h2>
        {/* <p>{someProp}</p> */}
        <p>{this.props.someProp}</p>
        <p>the counter is currently at {this.state.counter}</p>
        <button onClick={this.increment}>increment</button>
      </section>
    );
  };

};

export default ClassComponent;

