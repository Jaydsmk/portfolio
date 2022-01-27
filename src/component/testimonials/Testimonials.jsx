import "./testimonials.scss";

export default function Testimonials() {

    const user = [
        {
            id: 1,
            name: 'Sean Kim',
            title: 'Junior Full Stack Developer',
            img: process.env.PUBLIC_URL + "/images/seanKim.jpg",
            icon: process.env.PUBLIC_URL + "/images/linkedIn.png",
            desc: "Jayden is one of the best team players I have ever seen. He has great interpersonal skills to get along with anyone on the team. He is the one who suggests the most creative ideas to solve a problem.",
            links: [
                {
                    linkAdrr: "",
                    linkIcon: process.env.PUBLIC_URL + "/images/link.svg",
                    linkedInAddr: "https://www.linkedin.com/in/devseank/",
                    linkedInicon: process.env.PUBLIC_URL + "/images/linkedIn.png"
                }
            ],
        },
        {
            id: 2,
            name: 'Chloe Lee',
            title: 'Software Developer',
            img: process.env.PUBLIC_URL + "/images/chloeLee.jpg",
            icon: process.env.PUBLIC_URL + "/images/linkedIn.png",
            linkedInAddr: "https://www.linkedin.com/in/eunsuk-lee/",
            desc: "He was an amazing colleague who was talented in many areas, and he is a great person who can keep up with the deadlines of projects or assignments with a sense of responsibility. His positive side, brilliant ideas, and his skills are the reasons why he is bound to succeed in doing what he wants.",
            featured: true,
            links: [
                {
                    linkAdrr: "",
                    linkIcon: process.env.PUBLIC_URL + "/images/link.svg",
                    linkedInAddr: "https://www.linkedin.com/in/eunsuk-lee/",
                    linkedInicon: process.env.PUBLIC_URL + "/images/linkedIn.png"
                }
            ],
        },
        {
            id: 3,
            name: 'Seolhi Kim',
            title: 'Front-End Developer',
            img: process.env.PUBLIC_URL + "/images/seolhiKim.jpg",
            linkedInAddr: "https://www.linkedin.com/in/eunsuk-lee/",
            links: [
                {
                    linkAdrr: "",
                    linkIcon: process.env.PUBLIC_URL + "/images/link.svg",
                    linkedInAddr: "https://www.linkedin.com/in/seolhikim/",
                    linkedInicon: process.env.PUBLIC_URL + "/images/linkedIn.png"
                }
            ],
            desc: "I was impressed by Jayden's capability of adapting to new working environment. He learns fast and implements the new knowledges to his projects. He has very positive attitude and great humor.",
        },


    ]

    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {user.map(u => (
                    <div className={u.featured ? "card featured" : "card"}>
                        <div className="top">
                            {u.links.map(icon => (
                                <a href={icon.linkedInAddr} target="_blank" rel="noopener noreferrer">
                                    <img src={icon.linkedInicon} className="left" alt="" />
                                </a>
                            ))}
                            <img src={u.img} className="user" alt="" />
                            {/* {u.links.map(icon => (
                                <a href={icon.linkAdrr} target="_blank" rel="noopener noreferrer" disabled>
                                    <img src={icon.linkIcon} className="right" alt="" />
                                </a>
                            ))} */}
                        
                    </div>
                    <div className="center">
                     {u.desc}
                    </div>
                    <div className="bottom">
                            <h3>{u.name}</h3>
                            <h4>{u.title}</h4>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
