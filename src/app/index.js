import React from "react"
import { render } from "react-dom"
import { Header } from "./components/Header"
import { Home } from "./components/Home"

class App extends React.Component {
    render() {
        var user = {
            name: "Anna",
            hobbies: [
                { id: 1,
                    name: "Sports"
                },
                {
                    id: 2,
                    name: "Bingo"
                }
            ]
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="cols-xs-10 cols-xs-offset-1">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="cols-xs-10 cols-xs-offset-1">
                        <Home name={"Max"} age={27} user={user}/>
                    </div>
                </div>
            </div>
        )
    }
}

render(<App/>, window.document.getElementById("app"))