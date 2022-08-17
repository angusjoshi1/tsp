import React from 'react'
import Button from './Button'
import Slider from './Slider';
import Stats from './Stats'
import './MenuBar.css'
import Dropdown from './Dropdown';

function MenuBar(props) {
    return (
        <div className="menu-bar">
            <Button className="clear-button" onClick={props.clear} text={"clear"} disable={props.pathFinding} />
            <Button className="find-path-button" onClick={props.findPath} text={"find path"} disable={props.pathFinding} />
            <Slider className="slider" handleChange={props.handleSliderChange} />
            <Stats />
            <Dropdown className="dropdown" algorithms={props.algorithms} selectedAlgo={props.selectedAlgo} handleDropdownClick={props.handleDropdownClick} disable={props.pathFinding}/>
        </div>
        
    );
}

export default MenuBar;