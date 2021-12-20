import React, {useState} from "react";
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {

    const[showLinks, setShowLinks] = useState(false);

    return (
        <div className='Navbar'>
            <div className="leftSide">
                <img src="/images/companyLogo.jpeg"/>
            </div>
            <div className='rightSide'>
                <div className="links" id={showLinks ? "hidden" : ""}>
                <a href='/home'>ABOUT</a>
                <a href='/home'>SERVICES</a>
                <a href='/home'>PORTFOLIO</a>
                <a href='/home'>CONTACT</a>
                </div>
                <button onClick={() => setShowLinks(!showLinks)}>
                    {" "}
                    <MenuIcon />
                </button>
            </div>
        </div>
    );
}

export default Navbar