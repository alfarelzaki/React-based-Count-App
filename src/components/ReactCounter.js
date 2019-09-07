import React from "react"

class ReactCounter extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }

        this.increase = this.increase.bind(this)
        this.decrease = this.decrease.bind(this)
    }    

    increase() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }

    decrease() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }

    render() {
        return (
            <div className="mt-5 text-center">
                <h1 style={{fontSize: "6em"}}>{this.state.count}</h1>
                <button className="btn btn-danger" onClick={this.decrease} style={{marginRight: "1em"}}>-</button>
                <button className="btn btn-success" onClick={this.increase}>+</button>
            </div>
        )
    } 
}

export default ReactCounter