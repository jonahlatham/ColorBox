import React, { Component } from 'react'
import './Posts.css'

const input = {
    Name: '',
    Age: '',
    Home: '',
    Favorite_Band: '',
    Favorite_Book: '',
}

class Posts extends Component {
    state = {
        Name: '',
        Age: '',
        Home: '',
        Favorite_Band: '',
        Favorite_Book: '',
        submission: []
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    subs = () => {
        const submissions = {
            Name: this.state.Name,
            Age: this.state.Age,
            Home: this.state.Home,
            Favorite_Band: this.state.Favorite_Band,
            Favorite_Book: this.state.Favorite_Book
        }
        this.setState({
            submission: [...this.state.submission, submissions],
            Name: '',
            Age: '',
            Home: '',
            Favorite_Band: '',
            Favorite_Book: '',
        })
    }

    render() {
        const loopInput = Object.keys(input).map((e, i) => {
            return <input className='inputss' type="text" name={e} onChange={this.handleChange} value={this.state[e]} placeholder={e.split('_').join(' ')} key={i} />
        })
        const submits = this.state.submission.map((e, i) => {
            return <div>{e.Name} + {e.Age} + {e.Home} + {e.Favorite_Band} + {e.Favorite_Book}</div>
        })
        return (
            <div>
                {loopInput}
                <button onClick={this.subs}>Click Me!!!</button>
                <div className="displayText" onChange={this.handleChange}>
                    {this.state.Name}
                    {submits}
                
                </div>
            </div>
        )
    }
}

export default Posts