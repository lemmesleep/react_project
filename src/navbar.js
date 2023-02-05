
import React from "react";
import mailLogo from "./assets/mail1.png";
import gitLogo from "./assets/git1.png";
import instaLogo from "./assets/insta1.png";
import "./App.css";



export default function Navbar() {


    function scroll(){
        //amount to scroll is negative to scroll up
        window.scrollBy({
            top: 900,
            left: 0,
            behavior: 'smooth'
        });
    }
        return <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 0 }}>
            <div className={'social'}>
                <a href="mailto:yan.y.wang@mail.mcgill.ca"><img id={'logo'} src={mailLogo}/></a>
                <a href="https://github.com/lemmesleep"><img id={'logo'} src={gitLogo}/></a>
                <a href="https://www.instagram.com/_onlyevelyn/"><img id={'logo'} src={instaLogo}/></a>
            </div>

            <div className={'options'}>
                <h1><b id = {'about-me'} onClick={scroll}>ABOUT ME</b>
                    <b id={'music'}>MY MUSIC</b >
                    <b id={'resume'}>RESUME</b></h1>
            </div>

        </div>



}