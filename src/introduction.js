import React from "react";
import eve from "./assets/evelyn.png";
import'./App.css';
import { FloatingLettersTextBuilder } from 'react-animated-text-builders'
import fileSaver from 'file-saver';
export default function Introduction(){

    const saveFile = () => {
        fileSaver.saveAs(
            process.env.REACT_APP_CLIENT_URL + "../public/cv.docx",
            "MyCV.pdf"
        );
    }

    return <div><div id = {'intro'} style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 5 }}>

        <div><img id={'evelyn'}
                  src={eve}>
        </img></div>
        <div ><h1 style={{color: 'floralwhite'}}>Hi👋, this is</h1>
        <div>< b id = {'name'} style={{color: 'floralwhite', fontSize: 65}}>
                <FloatingLettersTextBuilder
                    floatingSpeed={550}
                    lettersAppearanceDelay={350}
                    animationMaxMargin={"500px"}
                    animationMinMargin={"0px"}
                > Evelyn Wang</FloatingLettersTextBuilder></b>


        </div>
            <div ><h1 style={{color: 'floralwhite', margin: 40}}>Welcome to my website:)</h1>
            </div>

        </div>
    </div>

    </div>


}