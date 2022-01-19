import './works.scss';
import { useState } from "react";

export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: 1,
            icons: [
                {
                    image: process.env.PUBLIC_URL + "/images/mongoDB.png"
                },
                {
                    image: process.env.PUBLIC_URL + "/images/express.png"
                },
                {
                    image: process.env.PUBLIC_URL + "/images/react.png"
                },
                {
                    image: process.env.PUBLIC_URL + "/images/nodejs.png"
                }
            ],
            title: "E-commerce",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, aperiam.",
            img: process.env.PUBLIC_URL + "/images/rsz_binoo.png",
        },
        {
            id: 2,
            icons: [
                {
                    image: process.env.PUBLIC_URL + "/images/react.png"
                },
                {
                    image: process.env.PUBLIC_URL + "/images/sass.png"
                },
            ],
            title: "My website",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, exercitationem?",
            img: process.env.PUBLIC_URL + "/images/myWeb.jpg",
        },
        {
            id: 3,
             icons: [
                {
                    image: process.env.PUBLIC_URL + "/images/html5.png"
                },
                {
                    image: process.env.PUBLIC_URL + "/images/css3.png"
                },
                {
                    image: process.env.PUBLIC_URL + "/images/js.png"
                }
            ],
            title: "50 Projects",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, magni!",
            img: process.env.PUBLIC_URL + "/images/rsz_binoo.png",
        },
    ];

    const handleClick = (way) => {
        way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    };


    return (
        <div className="works" id="works">
            <h1>Projects</h1>
            <div
                className="slider"
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
                {data.map(d =>(
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgs-container">
                                        {d.icons.map(icon =>(
                                            <div className="logContainer">
                                                <img src={icon.image} alt="binoo" />
                                            </div>
                                        ))}
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
                    </div>
                ))}
            </div>
            <img src={process.env.PUBLIC_URL + "/images/arrow.png"} className="arrow left" alt="leftArrow" onClick={()=> handleClick("left")} />
            <img src={process.env.PUBLIC_URL + "/images/arrow.png"} className="arrow right" alt="rightArrow" onClick={()=> handleClick()}/>
        </div>
    )
}
