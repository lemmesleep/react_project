import React from "react";
import mailLogo from "./assets/mail1.png";
import gitLogo from "./assets/git1.png";
import instaLogo from "./assets/insta1.png";

import mailLogo1 from "./assets/mail2.png";
import gitLogo1 from "./assets/git2.png";
import instaLogo1 from "./assets/insta2.png";
import "./navbar.css";
export default function Navbar(){
    return <div><div className={'social'}>
        <a href="mailto:yan.y.wang@mail.mcgill.ca"><img id={'logo'} src= {mailLogo} /></a>
            <a href="https://github.com/lemmesleep"><img id={'logo'} src= {gitLogo} /></a>
                <a href="https://www.instagram.com/_onlyevelyn/"><img id={'logo'} src= {instaLogo}  /></a>
 </div>
        </div>

}

function changeBackground(e) {
    e.target.src = {gitLogo}
}
