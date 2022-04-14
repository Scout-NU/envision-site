import React from "react";
import { useState } from "react";
import { QuestionAnswer, QuestionText, Answer } from "../styles/Apply.styles";
import Arrow from "../images/arrow.png";

export default function Question({ question }) {
  const [showQuestion, setShowQuestion] = useState(false);

  return (
    <QuestionAnswer onClick={() => setShowQuestion(!showQuestion)}>
      <QuestionText>
        {question.question} <img alt="FAQ dropdown arrow icon" src={Arrow} />
      </QuestionText>
      <Answer className={showQuestion ? "shown" : ""}>{question.answer}</Answer>
    </QuestionAnswer>
  );
}
