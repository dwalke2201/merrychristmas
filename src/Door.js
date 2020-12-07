import React from "react"
import doorData from "./DoorData";
import ConditionalComponent from "./ConditionalComponent"
import "./private project/styleDoor.css"
//conditional rendering with date
class Door extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            day : "1",
            data:[]
        }
    }
    componentDidMount() {
        this.setState({data: doorData})
    }


    render() {
        const date = new Date()
        return (
            <div className={"doorSite"} style={{overflow: "hidden"}}>
                <body>
                    <ConditionalComponent date={date.getDate()} data={this.state.data}/>
                </body>
            </div>
        )
    }
}

export default Door

//  <button
//                     onClick={() => window.open("https://www.youtube.com/watch?v=E8gmARGvPlI&ab_channel=WhamVEVO1")}>{this.props.doorData.id + 1}</button>
//                 {this.props.doorData.text}