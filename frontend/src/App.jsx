import { useState } from "react";

import "./App.css";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    //If the user does not exist, render the authenticate page.
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    //If the user does exist, render the chat page and pass the date in. 
    return <ChatsPage user={user} />;
  }
}

export default App;