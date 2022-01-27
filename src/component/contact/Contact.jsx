import "./contact.scss";
import { useState } from "react";

export default function Contact() {

    const [message, setMessage] = useState();


    function handleSubmit(e) {
        e.preventDefault();
        setMessage(true);
    }

    return (
        <div className="contact" id="contact">
            {/* <div className="container"> */}
                <div className="left">
                    <img src={process.env.PUBLIC_URL + "/images/contact.png"} alt="" />
                </div>
                    <div className="right">
                        <h2>Contact</h2>
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder="Email" />
                            <textarea placeholder="Under construction..."></textarea>
                            <button type="sumit" disabled>send</button>
                            {message && <span>Thanks, I'll reply ASAP :)</span>}
                        </form>
                </div>
            {/* </div> */}
        </div>
    )
}
