import './App.css';
import { useState } from 'react'
import ColourButton from './components/ColourButton';
import ModeButton from './components/ColourButton';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPosts from "./components/AllPosts";
import OnePost from "./components/OnePost";

function App() {

  const [background, setBackground] = useState(`#FFFFFF`)
  const [colourOptions, setColourOptions] = useState(["red", "green", "yellow", "blue", "orange", `#FFFFFF`])

  const [backgroundtoggle, setBackgroundToggle] = useState(false)
  const toggleClass = () => {
    setBackgroundToggle(!backgroundtoggle);
  };

  return (
    <div className="App">
      <header style={{ backgroundColor: background }}
      className="App-header">
        <h1 style={{ backgroundColor: backgroundtoggle ? "transparent" : "darkgrey" }}>hey wrld ~~~**~*<br/>
        Welcome to my portfolio!
        </h1>
        <div className="buttons-top">{
          colourOptions.map((colour) => {
            return(
              <ColourButton key={colour} action={setBackground} col={colour}/>
            )
          })
        }
        <div className="header-toggle"><ModeButton col={"darkgrey"} action={toggleClass}/></div>
        </div>
        <BrowserRouter>
          <div className="full-height">
          <Routes>
            <Route component={AllPosts} path="/" exact element={<AllPosts />}/>
            <Route component={OnePost} path="/:slug" element={<OnePost />}/>
          </Routes>
          </div>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
