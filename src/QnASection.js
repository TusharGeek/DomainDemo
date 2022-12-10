import { Title } from "@mui/icons-material";
import { useState } from "react";
import "./QnA.css";
import Questions from "./QuestionBar";
const UserQuestions = [
    {
        Title : "What is Netflix?",
        Content :"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
    },
    {
        Title : "How much does Netflix cost?",
        Content :"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts."
    },
    {
        Title : "Where can i watch?",
        Content: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
    },
    {
        Title : "How do I cancel?",
        Content: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
        Title : "what can I watch on Netflix?",
        Content: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    },
    {
        Title : "Is Netflix good for kids?",
        Content: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
    },
]
function QnA(){
    let userInput;
    const [Question, setQuestion] = useState(UserQuestions);
    function handleChange(event){
        userInput = event.target.value;
    }
    function handleClick(event){
        event.preventDefault();
        setQuestion((prev) => {
          return  [
              ...prev,
              {
                Title : userInput,
                Content: "Your question wll be answered shortly."
            }]
        })
    }
    return (
        <div className="QnASection">
         <hr></hr>
        <div className="QnASectionContent">
        <h1>Frequently Asked Questions</h1>
        {Question.map(Ques =>{
            return (
                <Questions
            Title = {Ques.Title}
            Content = {Ques.Content}
        />
            )
        })}
        <form >
        <input placeholder="Question" type="text" className="QuestionInput" onChange={handleChange} ></input>
        <button className="Button3" type="Submit" onClick={handleClick}>Submit</button>
        </form>
        </div>
        <hr></hr> 
        </div>
    )
}

export default QnA;