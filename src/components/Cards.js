import React from "react"

class Cards extends React.Component {
    constructor() {
        super()
    }

    render() {
        const cardStyle = {
            width: "18rem"
        }

        return (
            <div className="card mb-3" style={cardStyle}>
                <img src={this.props.card.src} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h3>{this.props.card.name}</h3>
                    <p className="card-text">{this.props.card.description}</p>
                </div>
            </div>
        )
    }
}

export default Cards