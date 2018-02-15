import React, { Component } from 'react';
import ArrayAnimals from './animals';
import List from './components/list';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      animals: ArrayAnimals,
      showList: true,
      bg: 'orange',
      any: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleNoUseState = this.handleNoUseState.bind(this);
    this.addAnimals = this.addAnimals.bind(this);
  }
  handleClick(){
    this.setState({
      showList: !this.state.showList
    })
  }
  handleChangeColor(){
    this.setState({
      bg: 'blue'
    })
  }
  handleNoUseState(){
    this.setState({
      any: !this.state.any
    })
  }
  addAnimals(){
    const newAnimal = {id: '6', name: 'fish'};
    this.setState({
      animals: this.state.animals.concat(newAnimal)
    })
  }
  componentDidUpdate(){
    console.log('componentDidUpdate pai');
  }
  render() {
    console.log('render pai');
    const { animals } = this.state;
    return (
      <div>
        {this.state.showList && <List bg={this.state.bg} animals={this.state.animals}/>}
        <button onClick={this.handleClick}>Ocutar lista</button>
        <button onClick={this.handleChangeColor}>Mudar cor</button>
        <button onClick={this.handleNoUseState}>Mudar um state que não se usa</button>
        <button onClick={this.addAnimals}>Adicionar Animal</button>
      </div>
    );
  }
}

export default App;