import React from "react";
import eve from "./assets/evelyn.png";
import'./navbar.css';
export default function Main(){
    return <div id = {'intro'} style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 0 }}>

        <div><img id={'evelyn'}
                  src={eve}>
        </img></div>
        <div ><h1 style={{color: 'floralwhite'}}>Hi👋, my name is</h1>
            <p ><i><b id = {'name'}>Evelyn Wang</b></i><br /><br />I'm a U2 Computer Science student at Mcgill University</p>
            </div>

    </div>


}