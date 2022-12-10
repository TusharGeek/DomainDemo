import "./Section.css";
function Section(props){
    return (
        <div className="Section">
        <hr></hr>
        <div className="SectionContent">
        <h1>{props.Heading}</h1>
         <h4>{props.SubHeading} </h4>
        </div>
        <div className="Img">
        <img src={props.ImgUrl}></img>
        </div>
        
        </div>
    )
}

export default Section;