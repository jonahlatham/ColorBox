import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ColorBox from './ColorBox/ColorBox'
import Posts from './Posts/Posts'
import ColorBlox from './ColorBlox/ColorBlox'

const dropDown = [
  '',
  'Ten',
  'Twenty',
  'Thirty',
  'Forty',
  'Fifty'
]

class App extends Component {

  state = {
    color: '',
    sizeClass: '',
    blox: 121,
    colorBlox: []
  }
  onHandle = (color) => {
    this.setState({
      color
    })
  }
  dropIt = (e) => {
    let number = 0
    let cssClass = ''
    switch (e.target.value){
      case 'Ten':
      number = 1764
      cssClass = 'Tenpx'
      break;
      case 'Twenty':
      number = 625
      cssClass = 'Twentypx'
      break;
      case 'Thirty':
      number = 289
      cssClass = 'Thirtypx'
      break;
      case 'Forty':
      number = 169
      cssClass = 'Fortypx'
      break;
      case 'Fifty':
      number = 121
      cssClass = 'Fiftypx'
      break;
    }
    this.setState ({
      sizeClass: cssClass,
      blox: number
    })
  }
//write method for drop down that updates sizclass and blox
//to the correct size and amount of blocks



// 50px 121 blocks
// 40px 169 blocks
// 30px 289 blocks
// 20px 625 blocks
// 10px 1764 blocks

  render() {
    const blox = []
    for(let i=0; i<this.state.blox; i++){
      blox.push(<ColorBlox sizeClass={this.state.sizeClass} color={this.state.color} key={i}/>)
    }
    const loopDropDown = dropDown.map((e,i)=>{
      return <option value={e} key={i}>{e}</option>
    })
    return (
      <div className="App">
        <div className="colorChangeBox">
          <div className="divForColorBox" style={{ background: this.state.color }}></div>
          <ColorBox abc={this.onHandle} />
        </div>
        <select className="dropDownBox" onChange={this.dropIt}>
            {loopDropDown}        
        </select>
        <div className="colorBlox-Container">
          {/* <div className="inputSection">
            <Posts />
          </div> */}
          {blox}
        </div>
      </div>
    );
  }
}

export default App;
