import React from "react";
import { infos } from "../../App";
import './QuickMenu.css'

class QuickMenu extends React.Component{
    render(){
        return (
            <div className="QuickMenu">
                <button onClick={this.props.clickLive}>Live</button>
                <button onClick={this.props.clickStats}>Statistics</button>
            </div>
        )
    }
}

export default QuickMenu;