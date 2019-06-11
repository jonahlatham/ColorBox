import React, { Component } from 'react'
import './ColorBox.css'

const colors = [
    'white',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
    'pink',
    'brown',
    'black',

]


class ColorBox extends Component {

    render() {
        // function colorThat () {
        //     if( colors === 'yellow'){
        //         return `style = {color:'white'}`
        //     } else {
        //         return `style = {color:'white'}`
        //     }
        // }

        const colorList = colors.map((e, i) => {
            return <button onClick={()=>{this.props.abc(e)}} className="colors" style={{ backgroundColor: e }} key={i} name={e}>{e[0].toUpperCase() + e.slice(1)} </button>
        })
        return (
            <div>
                {colorList}
            </div>
        )
    }
}

export default ColorBox