import React from "react";
import { useState } from "react";

class StatisticsSquare extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            stats: this.fetchStatistics()
        }
    }

    formatDate(date){
        return date.getFullYear()+ "-10" + "-" +date.getDay()
    }

    fetchStatistics(){
        const startDate = new Date(Date.now());
        const endDate = new Date(startDate)
        endDate.setDate(endDate.getDate() + 1)
        const url = `http://localhost:8080/avg/${this.props.dataType}?start=${this.formatDate(startDate)}&end=${this.formatDate(endDate)}`
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            this.setState({stats:data})
        })
        .catch((err) => {
           console.log(err.message);
        });
    }

    render(){
        return (
            <div>
                {this.state.stats && this.state.stats.avg}
            </div>
        )
    }
}

export default StatisticsSquare;