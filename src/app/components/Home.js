import React from "react"
import PropTypes from 'prop-types'

export class Home extends React.Component {

    constructor(props) {
        super()
        this.state = {
            age: props.initialAge,
            status: 0
        }
    }

    onMakeOlder() {
        this.setState({
            age: this.state.age += 3
        })
    }

    render() {
        let content = ""
        if (true) {
            content = "Hello from Home!"
        }
        return (
            <div>
                <p>In a new component</p>
                <p>Your name is {this.props.name} and age is {this.state.age}</p>
                <hr/>
                <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older</button>
            </div>
        )
    }
}
