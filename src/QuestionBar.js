import "./QnA.css";
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from "react";
const defaultStyle = {
    display: "none",
}
const AfterClickStyle = {
    display: "block",
}

function Questions(props){
    const [Icon, setIcon] = useState(false);
    const [DropDown, setDropDown] = useState(false);
    let tag;
    Icon? tag = <ClearIcon className="Icon" />:tag = <AddIcon className="Icon"/>;
    function handleClick(){
      Icon? setIcon(false):setIcon(true);
      DropDown?setDropDown(false):setDropDown(true)
    }
    return (
        <div>
        <div className="QuestionBar" onClick={handleClick}>
        <h3>{props.Title}</h3>
        {tag}
        </div>
        <div className="dropDown"  style={DropDown? AfterClickStyle:defaultStyle}>
        <p>{props.Content}</p>
        </div>
        </div>
    )
}
export default Questions; 