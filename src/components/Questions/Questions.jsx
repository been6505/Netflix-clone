import React, { useState } from "react";

import Question from "./Question";

import { QuestionsCon } from "./QuestionsStyle";

import data from "../../data";

function Questions() {
  const [questions, setQuestions] = useState(data);

  //   const [showInfo, setShowInfo] = useState(false);

  return (
    <QuestionsCon>
      <h3
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "3rem",
          marginBottom: "2rem",
        }}
      >
        Frequently Asked Questions
      </h3>
      <div>
        {questions.map((question) => {
          return <Question key={question.id} {...question} />;
        })}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#fff",
              fontWeight: "normal",
              marginTop: "1.5rem",
            }}
          >
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div style={{ marginTop: "1rem" }}>
            <input
              style={{ padding: "1.3rem", width: "500px" }}
              type="email"
              placeholder="Email address"
            />
            <button
              type="submit"
              style={{
                backgroundColor: "#e50914",
                color: "#fff",
                width: "200px",
                border: "none",
                fontSize: "1.5rem",
                position: "relative",
                top: "2px",
                padding: "1rem",
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </QuestionsCon>
  );
}

export default Questions;
