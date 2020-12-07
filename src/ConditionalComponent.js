import React from "react"
import Button from '@material-ui/core/Button';

import Bild1 from "./private project/IMG-20190522-WA0014.jpg"
import Bild2 from "./private project/IMG_20190616_181534 (1).jpg"
import Bild3 from "./private project/IMG_20191031_143556.jpg"
import Bild4 from "./private project/IMG_20191110_131206.jpg"
import Bild5 from "./private project/IMG_20191215_095107.jpg"
import Bild6 from "./private project/IMG_20200403_152134_787.jpg"
import Bild7 from "./private project/IMG_20200729_165205.jpg"
import Bild8 from "./private project/IMG_20200901_155043.jpg"
import Bild9 from "./private project/IMG_20200903_142637_960.jpg"
import Bild10 from "./private project/IMG_20201107_113823.jpg"
import Bild11 from "./private project/IMG-20190613-WA0020.jpg" //occupied
import Bild12 from "./private project/IMG-20191101-WA0009.jpg"
import Bild13 from "./private project/IMG-20191219-WA0007.jpg"
import Bild14 from "./private project/IMG-20191224-WA0012.jpg"
import Bild15 from "./private project/IMG-20200209-WA0019.jpg"
import Bild16 from "./private project/Bild16.jpg"
import Bild17 from "./private project/IMG-20200323-WA0006.jpg"
import Bild18 from "./private project/Screenshot_20190626_175447_com.snapchat.android.jpg"
import Bild19 from "./private project/IMG-20200723-WA0010.jpg"
import Bild20 from "./private project/IMG-20200827-WA0009.jpg"
import Bild21 from "./private project/IMG-20201009-WA0001.jpg"
import Bild22 from "./private project/IMG-20200919-WA0000.jpg"
import Bild23 from "./private project/IMG_20201010_151703.jpg"
import Bild24 from "./private project/IMG_20200610_234841.jpg"

import Audio1 from "./private project/ava-max-christmas-without-you-lyrics.mp3"
import Audio2 from "./private project/bryan-adams-christmas-time.mp3"
import Audio3 from "./private project/dean-martin-let-it-snow.mp3"
import Audio4 from "./private project/drei-haselnusse-fur-aschenbrodel-soundtrack.mp3"
import Audio5 from "./private project/eartha-kitt-santa-baby-official-audio.mp3"
import Audio6 from "./private project/feliz-navidad.mp3"
import Audio7 from "./private project/glee-jingle-bell-rock-lyrics.mp3"
import Audio8 from "./private project/happy-xmas-war-is-over.mp3"
import Audio9 from "./private project/holidays-are-coming-coca-cola-christmas-campaign-feat-camelia-jordana-namika.mp3"
import Audio10 from "./private project/ingrid-michaelson-rockin-around-the-christmas-tree-feat-grace-vanderwaal-official-music-video.mp3"
import Audio11 from "./private project/jonas-brothers-like-its-christmas-official-audio.mp3"
import Audio12 from "./private project/kelly-clarkson-underneath-the-tree-audio.mp3"
import Audio13 from "./private project/lyrics-merry-christmas-everyone-shakin-stevens.mp3"
import Audio14 from "./private project/mariah-carey-all-i-want-for-christmas-is-you-official-video.mp3"
import Audio15 from "./private project/michael-buble-its-beginning-to-look-a-lot-like-christmas-official-hd-audio.mp3"
import Audio16 from "./private project/michael-buble-white-christmas-ft-shania-twain-official-hd.mp3"
import Audio17 from "./private project/paul-mccartney-simply-having-a-wonderful-christmas-time-lyrics-hd.mp3"
import Audio18 from "./private project/queen-thank-god-its-christmas-official-lyric-video.mp3"
import Audio19 from "./private project/Wham - Last Christmas.mp3"
import Audio20 from "./private project/michael-buble-all-i-want-for-christmas-is-you-official-hd.mp3"
import Audio21 from "./private project/sarah-connor-the-best-side-of-life-official-video.mp3"
import Audio22 from "./private project/wonderful-dream.mp3"
import Audio23 from "./private project/michael-buble-winter-wonderland-official-hd.mp3"
import Audio24 from "./private project/official-video-hallelujah-pentatonix.mp3"

import "./index.css"
import {onHidden} from "web-vitals/dist/lib/onHidden";
//TODO import all pictures

class ConditionalComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            data: [],
            play: false,
            pause: true,

        }

        //audios
        this.mapAudio= new Map()
        this.mapAudio.set(1, new Audio(Audio1))
        this.mapAudio.set(2, new Audio(Audio2))
        this.mapAudio.set(3, new Audio(Audio3))
        this.mapAudio.set(4, new Audio(Audio4))
        this.mapAudio.set(5, new Audio(Audio5))
        this.mapAudio.set(6, new Audio(Audio6))
        this.mapAudio.set(7, new Audio(Audio7))
        this.mapAudio.set(8, new Audio(Audio8))
        this.mapAudio.set(9, new Audio(Audio9))
        this.mapAudio.set(10, new Audio(Audio10))
        this.mapAudio.set(11, new Audio(Audio11))
        this.mapAudio.set(12, new Audio(Audio12))
        this.mapAudio.set(13, new Audio(Audio13))
        this.mapAudio.set(14, new Audio(Audio14))
        this.mapAudio.set(15, new Audio(Audio15))
        this.mapAudio.set(16, new Audio(Audio16))
        this.mapAudio.set(16, new Audio(Audio16))
        this.mapAudio.set(17, new Audio(Audio17))
        this.mapAudio.set(18, new Audio(Audio18))
        this.mapAudio.set(19, new Audio(Audio19))
        this.mapAudio.set(20, new Audio(Audio20))
        this.mapAudio.set(21, new Audio(Audio21))
        this.mapAudio.set(22, new Audio(Audio22))
        this.mapAudio.set(23, new Audio(Audio23))
        this.mapAudio.set(24, new Audio(Audio24))

        //images
        this.mapImages=new Map();
        this.mapImages.set(1, Bild1)
        this.mapImages.set(2, Bild2)
        this.mapImages.set(3, Bild3)
        this.mapImages.set(4, Bild4)
        this.mapImages.set(5, Bild5)
        this.mapImages.set(6, Bild6)
        this.mapImages.set(7, Bild7)
        this.mapImages.set(8, Bild8)
        this.mapImages.set(9, Bild9)
        this.mapImages.set(10, Bild10)
        this.mapImages.set(11, Bild11)
        this.mapImages.set(12, Bild12)
        this.mapImages.set(13, Bild13)
        this.mapImages.set(14, Bild14)
        this.mapImages.set(15, Bild15)
        this.mapImages.set(16, Bild16)
        this.mapImages.set(17, Bild17)
        this.mapImages.set(18, Bild18)
        this.mapImages.set(19, Bild19)
        this.mapImages.set(20, Bild20)
        this.mapImages.set(21, Bild21)
        this.mapImages.set(22, Bild22)
        this.mapImages.set(23, Bild23)
        this.mapImages.set(24, Bild24)

    }

    // componentDidMount() {
    //     console.log("componentDidMount Conditional")
    //     this.setState({data: this.props.data})
    // }
    play = () => {
        const date = new Date()
        this.setState({ play: true, pause: false })
        this.mapAudio.get(date.getDate()).play();
        // this.audio.play();
    }

    pause = () => {
        const date = new Date()
        this.setState({ play: false, pause: true })
        this.mapAudio.get(date.getDate()).pause();
    }

    render(){
        const date = new Date()
        let text
        typeof this.props.data[0] === "undefined" ? console.log("undefined")
            : text= this.props.data[1].text
        //<h1>{text}</h1>
        let paragraph
        switch (date.getDate().toString()){
            case "1":
                paragraph = "Ich habe mich von der ersten Minute an in deine grünen Augen verliebt!"
                break;
            case "2":
                paragraph = "Weißt du noch als ich dir begeistert meine VR- Brille gezeigt habe, um dann mit dir ein Foto zu machen? Du warst begeistert oder?"
                break;
            case "3":
                paragraph = "Ich liebe unsere gemeinsamen Spaziergänge und hoffe wir können auch ein paar schöne Winterspaziergänge machen!"
                break;
            case "4":
                paragraph = "An dem Tag waren wir zusammen im Tierpark. Freue mich schon, wenn wir das wir das bald wiederholen! Du warst so süß bei dem Pferd."
                break;
            case "5":
                paragraph = "Endlich ein Bild auf dem du trotz meiner Morgenfotos gelacht hast!"
                break;
            case "6":
                paragraph = "Wenn du meine Wange küsst, bin ich der glücklichste Mann der Welt!"
                break;
            case "7":
                paragraph = "Unser Jahrestag war so schön, besonders aber deine Ohrringe!"
                break;
            case "8":
                paragraph = "Auch wenn wir nicht ins Musical gehen konnten, fand ich unseren ersten gemeinsamen Urlaub wundervoll! Ich freue mich auf unseren nächsten!"
                break;
            case "9":
                paragraph = "Ich liebe es riesige Pizzen mit dir zu essen! Der größte Beweis für meine Liebe ist immernoch, dass ich dir sogar Pizza abgebe!"
                break;
            case "10":
                paragraph = "Einer unserer ersten Herbstspaziergänge in Magdeburg und wir haben es direkt geschafft romantische Bilder zu machen und zu tanzen!"
                break;
            case "11":
                paragraph = "Das schönste an dir ist definitiv dein Lächeln, egal wie kitschig und klischeehaft das klingen mag!"
                break;
            case "12":
                paragraph = "Ich hoffe du weißt mit dem Kuss auf die Stirn, dass ich immer für dich da sein werde egal was gerade ist!"
                break;
            case "13":
                paragraph = "War echt schön, dass ich so schnell deine Familie kennengelernt habe, aber ich habe keine Ahnung, was wir da gerade gemacht haben!"
                break;
            case "14":
                paragraph = "Das schönste Weihnachtsgeschenk dieses Jahr bist immernoch du!"
                break;
            case "15":
                paragraph = "Ich hoffe du magst deinen Hai trotzdem noch genauso und es war schön zu sehen wie glücklich du warst!"
                break;
            case "16":
                paragraph = "Auch wenn wir dieses Jahr sehr oft eine Maske tragen mussten, war jeder Einkauf, jede Fahrt und jedes Erlebnis toll mit dir!"
                break;
            case "17":
                paragraph = "Ich fand es süß, dass dich immer so so darüber gefreut hast, wenn du mein T-Shirt oder meinen Pullover hattest!"
                break;
            case "18":
                paragraph = "Ja, ich mag dein Gesicht immernoch! Egal wie fertig du bist, du bist immernoch die hübscheste Frau in meinen Augen!"
                break;
            case "19":
                paragraph = "Du bist die tollste Taufpatin, die man sich wünschen kann!";
                break;
            case "20":
                paragraph = "Das war ein toller Ausflug und ich bin froh, dass du mit gekommen bist und wir den Tag genießen konnten!"
                break;
            case "21":
                paragraph = "Die Jungs können glücklich sein dich als Babysitterin zu haben, wenn du sogar ihren Geburtstag mit ihnen feierst!"
                break;
            case "22":
                paragraph = "Etwas eifersüchtig bin ich schon,dass du dich mit einem anderen Kuschelpartner in meine Jacke eingekuschelt hast!"
                break;
            case "23":
                paragraph = "Es ist immer wieder total süß zu sehen wie du dich über etwas freust!"
                break;
            case "24":
                paragraph = "Zusammen mit dir feiern hat echt Spaß gemacht auch wenn wir im Bierpong verloren haben und dann ist auch noch ein schönes Kussbild von uns entstanden!"
                break;
        }
        return(
            <div >
                <div style={{height:"100vh", width: "50vw", position: "absolute", left: 0,  maxWidth : "600px",wordWrap: "breakWord"}}>
                    <h1>{24-date.getDate()} Tage bis Heiligabend!</h1>
                    <p style={{fontWeight: "bold", height:"20vh", width: "45vw", fontSize:"1.2em",position: "absolute", left:0, bottom: "30%"}}>{paragraph}</p>

                <Button style={{left:"5%", width: 30}}  variant='contained' onClick={this.play}>Play</Button>
                <Button style={{left:"10%", width: 30}} variant='contained' onClick={this.pause}>Pause</Button>
                </div>
                <div style={{position:"absolute", right:0}}>
                    <img style={{width:"53vw"}} src={this.mapImages.get(date.getDate())} alt="picture" />
                </div>
            </div>
        )
    }
}

export default ConditionalComponent

//                <h1> {this.props.data[0]}</h1>