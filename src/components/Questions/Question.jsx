import React, { useState } from "react";

import { QuestionCon } from "./QuestionStyle";

function Questions({ title, info }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div>
      <QuestionCon>
        <div>
          <div className="unclick">
            <h3>{title}</h3>
            <button onClick={() => setShowInfo(!showInfo)}>
              {showInfo ? "-" : "+"}
            </button>
          </div>
        </div>

        <div className="click">
          {showInfo && (
            <p
              style={{
                background: "#303030",
                fontSize: "1.5rem",
                width: "750px",
                padding: "1rem 2rem",
                marginBottom: "0.5rem",
              }}
            >
              {info}
            </p>
          )}
        </div>
      </QuestionCon>
    </div>
  );
}

export default Questions;
