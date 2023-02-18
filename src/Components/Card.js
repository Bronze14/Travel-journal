import React from "react"
import Fill from "../images/Fill 219.png"
export default function Card(props){
  return (
    <div className="Card--bar">
        <img src={props.imageUrl} className="Card--img"/>
        <div className="Card--bar2">
            <div className="Card--bar3">
                <img src={Fill} />
                <h1 className="Card--bar3--text1">{props.location}</h1>
                <a href={props.googleMapsUrl} className="Card--bar3--text2">View on Google Maps</a>
            </div>
            <div className="Card--bar4">
            <h1 className="Card--bar2--text1">{props.title}</h1>
            <h1 className="Card--bar2--text2">{props.startDate} - {props.endDate}</h1>
            <h1 className="Card--bar2--text3">{props.description}</h1>
            </div>
        </div>
    </div>
  )
}