import React from "react";
import AddArticle from "./components/AddArticle";
import AllArticles from "./components/AllArticles";
//import SignUp to hook upthe signUp form
import SignUp from "./components/auth/SignUp";

function App() {
  return (
    <div className="App">
      <div>
        <SignUp />
      </div>
      <div>
        <AddArticle />
      </div>
      <div>
        <AllArticles />
      </div>
    </div>
  );
}

export default App;
