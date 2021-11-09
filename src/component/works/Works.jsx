import './works.scss';
import { useState } from "react";

export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: 1,
            icon: process.env.PUBLIC_URL + "/images/web.png",
            title: "Web Application",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, aperiam.",
            img: process.env.PUBLIC_URL + "/images/rsz_binoo.png",
        },
        {
            id: 2,
            icon: process.env.PUBLIC_URL + "/images/mobile.svg",
            title: "Mobile Application",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, exercitationem?",
            img: process.env.PUBLIC_URL + "/images/rsz_binoo.png",
        },
        {
            id: 3,
            icon: process.env.PUBLIC_URL + "/images/instar.svg",
            title: "Branding",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, magni!",
            img: process.env.PUBLIC_URL + "/images/rsz_binoo.png",
        },
    ];

    const handleClick = (way) => {
        way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    };


    return (
        <div className="works" id="works">
            <div
                className="slider"
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
                
                {data.map(d =>(
                    <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="binoo" />
                                </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                <span>Projects</span>
                        </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt="" />
                        </div>
                    </div>
                    </div> ))}
            </div>
            <img src={process.env.PUBLIC_URL + "/images/arrow.png"} className="arrow left" alt="leftArrow" onClick={()=> handleClick("left")} />
            <img src={process.env.PUBLIC_URL + "/images/arrow.png"} className="arrow right" alt="rightArrow" onClick={()=> handleClick()}/>
        </div>
    )
}
