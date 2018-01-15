import React from "react"
import { render } from "react-dom"
import { Header } from "./components/Header"
import { Home } from "./components/Home"

class App extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="cols-xs-10 cols-xs-offset-1">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="cols-xs-10 cols-xs-offset-1">
                        <Home name={"Max"} initialAge={27} />
                    </div>
                </div>
            </div>
        )
    }
}

render(<App/>, window.document.getElementById("app"))