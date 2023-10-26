import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super();
    this.state = {
      Count: props.count,
    };
    console.log("1st")
    this.interval = setInterval(() => console.log(1), 2000);
  }

  dec = () => {
    const currentCount = this.state.Count;
    this.setState({
      Count: currentCount - this.props.value,
    });
  };
  inc = () => {
    const currentCount = this.state.Count;
    this.setState({
      Count: currentCount + this.props.value,
    });
  };

  componentDidMount = () => {
    console.log("mounted")
  }

  shouldComponentUpdate = () => {
    console.log("should mount")
    return true;
  }
  
  componentDidUpdate = () => {
    console.log("Updated")
  }

  componentWillUnmount = () => {
    clearInterval(this.interval);
    console.log("Unmounted")
  }

  render() {
    console.log("inside render")
    return (
      // <>
      //   <p className="underline">This is a Counter</p>
      //   <div className="flex justify-center items-center py-2">
      //     <button onClick={this.dec} className="mx-4 bg-teal-300 text-black">
      //       -
      //     </button>
      //     <p>{this.state.Count}</p>
      //     <button
      //       onClick={this.inc}
      //       className="inc mx-4 bg-teal-300 text-black"
      //     >
      //       +
      //     </button>
      //   </div>
      // </>
    );
  }
}

export default Counter;
