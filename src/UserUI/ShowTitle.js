import "./ShowTitle.css";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
function ShowTitle(){
    return (
        <div className="ShowTitle">
        <h1 className="Title">
        MONEY<br/>HEIST
        </h1>
        <div className="button">
        <button className="User-Header-Button"> Play</button>
        <button className="User-Header-Button"> My List</button>
        </div>
        <h3 className="SubTitle">Watch Part 3 Now</h3>
        <p className="SubTitle2">With millions of euros and their lives on the line, nine robbers attempts to pull off the greatest heist of all time</p>
        </div>
    )
}
export default ShowTitle;