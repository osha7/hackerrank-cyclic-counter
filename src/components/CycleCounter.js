import React from 'react';

class CycleCounter extends React.Component {
  state = {
    counter: 0
  }

  handleOnClick = () => {
    // console.log(this.props)
    // console.log(this.state.counter)
    if (this.state.counter + 1 < this.props.cycle) {
    this.setState(prevState => ({
      counter: prevState.counter += 1
    }))
    } else {
      this.setState({
        counter: 0
      })
    }

    // let cycle = this.props.cycle
    // let newValue = this.state.counter + 1 < cycle ? this.state.counter + 1 : 0
    //   this.setState({ counter: newValue })
  }

  render() {
    return (
      <button
      onClick={this.handleOnClick}
        data-testid="cycle-counter"
        style={{ fontSize: '1rem', width: 120, height: 30, }}
      >{this.state.counter}</button>
    );
  }
}

export default CycleCounter;
