import React from "react";
import "./DateDisplay.css"

class DateDisplay extends React.Component{

    render(){
        return(
            <div className="DateDisplay">
                <span className="date">
                {this.props.captureDate
                .toLocaleString('default', 
                {
                    weekday: "long",
                    day: "numeric",
                    month: "long"
                })}
                </span>
                <span className="time"> 
                {this.props.captureDate
                .toLocaleString('default', 
                {
                    hour: "numeric",
                    minute: "2-digit",
                    second: "numeric" 
                })}
                </span>
            </div>
        )
    }
}

export default DateDisplay;