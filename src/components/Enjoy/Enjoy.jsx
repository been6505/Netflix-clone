import React from "react";
import tv from "../../assets/tv.png";
import { EnjoyCon, EnjoyLeft, EnjoyRight } from "./EnjoyStyle";

function Enjoy() {
  return (
    <EnjoyCon>
      <EnjoyLeft>
        <div>
          <h3>Enjoy on your TV.</h3>
          <p>
            Watch on Smart TVs, Playstation, Xbox, <br />
            Chromecast, Apple TV, Blu-ray players, and <br />
            more.
          </p>
        </div>
      </EnjoyLeft>

      <EnjoyRight>
        <img src={tv} alt="" />
        <video autoPlay playsInline muted loop>
          <source
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
            type="video/mp4"
          />
        </video>
      </EnjoyRight>
    </EnjoyCon>
  );
}

export default Enjoy;
