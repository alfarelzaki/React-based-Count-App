import React from "react"
import Cards from "./Cards"
import cardData from "./cardData"

class CardGame extends React.Component {
    constructor() {
        super()
    }

    render() {
        const cardComponents = cardData.map((item) => {
            return <Cards card={item} />
        })

        return (
            <div className="col-md-3">{cardComponents}</div>
        )
    }
}

export default CardGame