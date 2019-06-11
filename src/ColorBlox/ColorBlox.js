import React, { Component } from 'react'
import './ColorBlox.css'

class ColorBlox extends Component {
    state = {
        background: '',
    }
    handleColorChange = (color) => {
        this.setState ({
            background: color === 'white' ? color : this.props.color
        })
    }
    render() {
        return (
            <div className={`colorBlox ${this.props.sizeClass}`} onClick={()=>{this.handleColorChange('white')}} onMouseOver={this.handleColorChange} style={{background:this.state.background}}>
                
            </div>
        )
    }
}

export default ColorBlox