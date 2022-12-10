import HomePage from "./Homepage";
import UserHeader from "./UserUI/UserHeader";
import { useState } from "react";
function App() {
 let page;
 const [UserAccount, SetUserAccount]= useState(false);
//  function handleClick(){
//    SetUserAccount(true);
//  }
 
  UserAccount?page = <UserHeader/>:page=<HomePage/>;
  return (
    <div className="App"  >
      {page}
    </div>
  );
}

export default App;
