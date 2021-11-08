
import './topbar.scss';
// import PersonIcon from '@mui/icons-material';

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">J.dev</a>
                    <div className="itemContainer">
                        {/* <PersonIcon className="icon"/> */}
                        <span>+1 (403) 926 - 2853 </span>
                    </div>
                    <div className="itemContainer">
                        {/* <EmailIcon className="icon"/> */}
                        <span>jaydsmk@gmail.com </span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                   </div>
                </div>
            </div>
        </div>
    )
}
