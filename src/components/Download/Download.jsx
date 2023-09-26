import React from "react";

import mobileImg from "../../assets/mobile.jpg";

import boxshot from "../../assets/boxshot.png";

import downloadIcon from "../../assets/download-icon.gif";

import { DownloadCon, DownloadLeft, DownloadRight } from "./DownloadStyle";

const Download = () => {
  return (
    <DownloadCon>
      <DownloadLeft style={{ position: "relative", width: "100%" }}>
        <img className="mobile" src={mobileImg} alt="" />
        <div className="box">
          <img className="boxshot" src={boxshot} alt="" />
          <div className="boxtext">
            <p>
              Stranger Things
              <br />
              <span>Downloading...</span>
            </p>
          </div>
          <img src={downloadIcon} />
        </div>
      </DownloadLeft>

      <DownloadRight>
        <div>
          <h3>Download your shows to watch offline.</h3>
          <p>
            Save your favorites easily and always have <br /> somthing to watch.
          </p>
        </div>
      </DownloadRight>
    </DownloadCon>
  );
};

export default Download;
