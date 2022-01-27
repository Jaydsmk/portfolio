import './works.scss';
import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [

        {
            id: 1,
            icons: [
                {
                    image: process.env.PUBLIC_URL + "/images/react.png"
                },
                {
                    image: process.env.PUBLIC_URL + "/images/sass.png"
                },
            ],
            title: "My website",
            desc: "My portfolio website with React and Scss",
            img: process.env.PUBLIC_URL + "/images/myWeb.jpg",
            links: [
                {
                    address: "https://jaydsmk.github.io/portfolio/",
                    linkIcon: process.env.PUBLIC_URL + "/images/link.svg"
                },
                {
                    address: "https://github.com/Jaydsmk/portfolio",
                    linkIcon: process.env.PUBLIC_URL + "/images/github.svg"
                }
            ]
        },
                {
            id: 2,
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
            desc: "A typical shopping website with basic functions made of MERN(MongoDB,Express,React and NodeJS) stacks.",
                    img: process.env.PUBLIC_URL + "/images/rsz_binoo.png",
            links: [
                {
                    address: "http://binooandbuffalo.herokuapp.com",
                    linkIcon: process.env.PUBLIC_URL + "/images/link.svg"
                },
            ]
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
            desc: "This is 50 mini projects in HTML, CSS & JavaScript that relate to the DOM (Document Object Model).",
            img: process.env.PUBLIC_URL + "/images/50Projects.jpg",
            links: [
                {
                    address: "https://jaydsmk.github.io/50-Projects/",
                    linkIcon: process.env.PUBLIC_URL + "/images/link.svg"
                },
                {
                    address: "https://github.com/Jaydsmk/50-Projects",
                    linkIcon: process.env.PUBLIC_URL + "/images/github.svg"
                }
            ]
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

                                    <div className="btnContainer">
                                        {d.links.map(link => (
                                            <button className="linkBtn">
                                                <a href={link.address} target="_blank" rel="noopener noreferrer">
                                                    <img src={link.linkIcon} alt="myWebsite" />
                                                </a>
                                            </button>
                                        ))}       
                                    </div>

                                    {/* <div className="btnContainer">
                                        <button className="linkBtn">
                                            <a href="http://binooandbuffalo.herokuapp.com" target="_blank" rel="noopener noreferrer">
                                                <img src={process.env.PUBLIC_URL + "/images/link.svg"} alt="myWebsite" />
                                            </a>
                                        </button>
                                        <button className="linkBtn">
                                            <a href="http://binooandbuffalo.herokuapp.com" target="_blank" rel="noopener noreferrer">
                                                <img src={process.env.PUBLIC_URL + "/images/github.svg"} alt="Ecommerce" />
                                            </a>
                                        </button>
                                    </div> */}

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
