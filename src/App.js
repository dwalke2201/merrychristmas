import React from "react"
import './App.css';
import doorData from "./DoorData"
import Door from "./Door"
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom"
import Home from "./Home"
import { BrowserRouter as Router, Link } from 'react-router-dom';
import "./style.css"


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "/0",
            text: "Das ist ein Text"
        }
    }
    changeState = (stateName, value) => {
        this.setState({[stateName]: value})
    };
    render()
    {
        //const doorComponents = doorData.map(door => <Door key={door.id} doorData={door}/>)

            //<Door key={door.id} doorData={door}/>

        return (
            <div className="App" style={{
                    overflow:"hidden", height:"100vh", width:"100vw",wordWrap: "breakWord", mixBlendMode: "overlay",
                backgroundImage:
                    `url(${"https://images.reisereporter.de/bakYtJKyJji6iLiCI8PWO8b2pOgURiTKnJuM7ZHe6fc/g:no:269:0/cb:1991e5dfc0446611d366bc2b7eb7bbdc/c:1239:698/rs:fill:940:529/OTNlZTRmZGUtY2I/yNy00Mjk0LWE2ZG/QtYjM0MGMzNDM1N/mE5LmpwZw"})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                backgroundBlendMode: "difference",
            opacity:0.9}}>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/door"  component={Door}/>
                    </Switch>
                </Router>

                <footer style={{position: "absolute", bottom: 0}} className="footer-Home">
                    Bei Risiken oder Nebenwirkungen fragen Sie Ihren Freund
                </footer>
            </div>
        );
    }

}

export default App;
//onClick={() => window.open("https://www.denbi.de/", "_blank")}