import React from "react";
import "./DataSquare.css"

class DataSquare extends React.Component {
    render(){
        return (
            <div style={{backgroundColor: this.props.color}} className="dataSquare">
                <h2>{this.props.title}</h2>
                <span className="data">{this.props.measurement.value}</span>
                <span className="unit">{this.props.measurement.unit}</span>
            </div>
        )
    }
}

export default DataSquare;