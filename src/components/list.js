import React, { Component } from 'react';
import Item from './item';

class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      any: true
    }
    this.handleNoUseState = this.handleNoUseState.bind(this);
    //console.log('constructor');
  }
  handleNoUseState(){
    this.setState({
      any: !this.state.any
    })
  }
  componentWillMount(){
    //console.log('componentWillMount');
  }
  componentDidMount(){
    //console.log('componentDidMount');
  }
  componentWillUnmount(){
    //console.log('componentWillUnmount');
  }
  componentWillReceiveProps(nextProps){
    //console.log(this.props)
    //console.log(nextProps)
    //console.log('componentWillReceiveProps');
    //console.log(this.props)
    //console.log(nextProps)
  }
  shouldComponentUpdate(nextProps, nextState){
    //console.log(this.props.animals !== nextState.animals);
    //console.log('shouldComponentUpdate');
    return true;
  }
  componentWillUpdate(nextProps, nextState){
    //console.log('componentWillUpdate');
    //console.log(nextProps)
  }
  componentDidUpdate(prevProps, prevState){
    console.log('componentDidUpdate filho');
    //console.log(prevProps);
  }
  render() {
    console.log('render filho');
    return (
      <div>
        <ul style={{backgroundColor: this.props.bg}}>
          {this.props.animals.map((animal, index) => (
            <Item key={index} name={animal.name} />
          ))}
        </ul>
        {/* <button onClick={this.handleNoUseState}>Mudar um state que não se usa</button> */}
      </div>
    );
  }
}

export default List;
