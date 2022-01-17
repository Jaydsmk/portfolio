import "./intro.scss";
import { init } from 'ityped'
import { useEffect, useRef } from "react";

export default function Intro() {


    //  ----- if use class ? extends Component -----
    // componentDidMount(){
    //   const myElement = document.querySelector('#myElement')
    //   init(myElement, { showCursor: false, strings: ['Use with React.js!', 'Yeah!' ] })
    // }
    // render(){
    //   return <div id="myElement"></div>
    // }

    // const myElement = document.querySelector('#myElement')
    const textRef = useRef(); //take all resources

    useEffect(() => {
        // console.log(textRef);
        init(textRef.current, {
            showCursor: true,
            backDelay: 1000,
            backSpeed: 50,
            strings: ['Fast Learner!', 'Problems Solver!', 'Great Team Player!']
        })
    },[])

    return (
        <div className="intro" id="intro">
            {/* <div className="right">
                <div className="imgContainer">
                    <img src={process.env.PUBLIC_URL + "/images/doggy.png"} alt="doggy" />
                </div>
            </div> */}
            <div className="textIntro">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Jayden Kim</h1>
                    <h3>&nbsp; <span ref={textRef}></span></h3>
                </div>

                <a href="#portfolio">
                    <img src={process.env.PUBLIC_URL + "/images/arrow.png"} alt="downArrow" />
                </a>
            </div>
        </div>
    )
}
