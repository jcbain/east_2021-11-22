import { Component } from 'react';

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      interval: null
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({searchTerm: event.target.value})
  }

  componentDidMount(){
   
    console.log('this component mounted');

    const interval = setInterval(() => {
      console.log("i'm the interval that is running");
    }, 2000)

    this.setState({interval: interval})


    // axios.get('')
    //   .then((res) => {this.setState({data: res.data})})
  };

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevState);
    console.log("the component had an update")
    // if(prevProps.user !== this.props.user) {
    //   axios.get(`/api/user/${user}`)
    // }
  };

  componentWillUnmount(){
    console.log('I am about to unmount!!!!');
    clearInterval(this.state.interval);
  }



  render() {
    return (
      <section>
        <h2>Lifecycle Component</h2>
        <p>the search term is {this.state.searchTerm}</p>
        <input 
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
      </section>
    );
  }
};

export default Lifecycle;