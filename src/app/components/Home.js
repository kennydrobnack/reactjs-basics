import React from "react"

export class Home extends React.Component {
    render() {
        let content = ""
        if (true) {
            content = "Hello from Home!"
        }
        return (
            <div>
                <p>In a new component</p>
                <p>Your name is {this.props.name}</p>
                <p>User object => {this.props.user.name}</p>
                <div>
                    <h4>Hobbies</h4>
                    <ul>
{/*     This doesn't gets an error Cannot read property 'fn' of undefined */ }                   
{this.props.user.hobbies.map((hobby) => <li key={hobby.id}>{hobby.name}</li>) }                
 { /* This gets a warning about keys not being unique */}
{/*                         { this.props.user.hobbies.map((hobby) => <li>{hobby.name}</li>)}     */}
                    </ul>
                </div>
            </div>
        )
    }
}