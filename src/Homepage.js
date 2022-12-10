import Header from "./Header";
import Section from "./Section";
import QnA from "./QnASection";
import Footer from "./Footer";
function HomePage(props){
    return (
        <div>
    <Header onButton={props.onButtonClick}/>
      <Section
        Heading = "Enjoy on your TV."
        SubHeading = "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
        ImgUrl = "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
      />
      <Section
        Heading = "Download your shows to watch offline."
        SubHeading = "Save your favourites easily and always have something to watch."
        ImgUrl = "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
      />
       <Section
        Heading = "Watch everywhere."
        SubHeading = "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        ImgUrl = "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
      />
       <Section
        Heading = "Create profiles for children."
        SubHeading = "Send children on adventures with their favourite characters in a space made just for them—free with your membership."
        ImgUrl = "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/kidsValueProp.png"
      />
      <QnA/>
      <Footer/>
        </div>
    )
}
export default HomePage;