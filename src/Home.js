import React from "react"
import "./style.css"

class Home extends React.Component{
    constructor() {
        super();
    }

    render(){
        const dates=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]

        let date = new Date()
        let component= dates.map(day => {

            const topPos = Math.floor(Math.random() * (0.95*window.innerHeight - 30 + 1) + 30)
            const leftPos = Math.floor(Math.random() * (0.95*window.innerWidth - 30 + 1) + 30)
            return(
                <button disabled={date.getDate()!==day} style={{position: 'absolute', top:topPos, left:leftPos, backgroundColor: 'transparent', borderTop: 'none',borderLeft: 'none', borderRight: 'none', borderBottom: 'none'}}
                        className="button-Home"
                        onClick={() => window.open("/door")} >
                    {day}
                </button>)
        })
        //500 top; left 1050
        return(<div style={{height:"100vh", width:"99vw"}}>
            <header className="header-home">
                <h1><b>Lillis Adventskalender</b></h1>
            </header>
            <body style={{height:"80vh"}}>
            <b style={{}}>Dieser Adventskalender soll dir jeden Tag bis Weihnachten versüßen!
                <br/>
                Das ist dein eigenes Winter-Wonderland!
                <br/>
                Viel Spaß beim Suchen und Entdecken!</b>
                <br/>
            {component}
            </body>

        </div>
        )
    }
}

export default Home