import "./testimonials.scss";

export default function Testimonials() {

    const user = [
        {
            id: 1,
            name: 'Sean Kim',
            title: 'Junior Software Developer',
            img: process.env.PUBLIC_URL + "/images/laptop.jpg",
            icon: process.env.PUBLIC_URL + "/images/youtube.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quo.",
        },
        {
            id: 2,
            name: 'Chloe Lee',
            title: 'Software Developer',
            img: process.env.PUBLIC_URL + "/images/laptop.jpg",
            icon: process.env.PUBLIC_URL + "/images/youtube.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere veritatis officiis blanditiis.Repellendus praesentium sapiente ",
            featured: true,
        },
        {
            id: 3,
            name: 'Seolhee Lee',
            title: 'Front-End Developer',
            img: process.env.PUBLIC_URL + "/images/laptop.jpg",
            icon: process.env.PUBLIC_URL + "/images/youtube.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ad, quidem temporibus modi amet obcaecati!",
        },


    ]

    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {user.map(u => (

                    <div className={u.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img src={process.env.PUBLIC_URL + "/images/rightArrow.png"} className="left" alt="" />
                        <img src={u.img} className="user" alt="" />
                        <img src={u.icon} className="right" alt="" />
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
