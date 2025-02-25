"use client";
import { useEffect, useState } from "react";

import Button from "@components/Button";
import CardQuestion from "@components/CardQuestion";
import Dropdown from "@components/Dropdown";
import { dataCategory, dataLevel } from "./constant";
import { DataQuestion, Question, SelectedCategory, SelectedLevel } from "./types";
import "./styles.scss";

const Page = () => {
  const [dataQuestion, setDataQuestion] = useState<DataQuestion | null>(null); // Initialize as null
  const [questionSelected, setQuestion] = useState<Question | null>(null); // Initialize as null
  const [isAnimating, setIsAnimating] = useState(false); // State to track animation
  const [selectedCategory, setSelectedCategory] = useState<SelectedCategory>({
    label: 'General',
    value: 'general',
    disabled: false
  });
  const [selectedLevel, setSelectedLevel] = useState<SelectedLevel>({
    label: 'Beginner',
    value: 'beginner',
    disabled: false
  });

  useEffect(() => {
    selectQuestionData(selectedCategory.value, selectedLevel.value)
  }, [selectedCategory.value, selectedLevel.value]);

  const selectQuestionData = (category: string, level: string) => {
    const path = `/data/${category}-${level}.json`;

    fetch(path)
      .then(response => response.json())
      .then(data => {
        // console.log("Fetched data:", data);
        setDataQuestion(data);
      })
      .catch(error => console.error("Error:", error));
  }

  const pickQuestion = () => {
    if (!dataQuestion || !dataQuestion.questions.length) return;

    setIsAnimating(true); // Start the animation

    const totalQuestion = dataQuestion.questions.length;
    const animationDuration = 3000; // Animation duration in ms
    const intervalSpeed = 100; // Speed of random question switching
    let elapsedTime = 0;

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * totalQuestion);
      setQuestion(dataQuestion.questions[randomIndex]); // Show random questions during animation

      elapsedTime += intervalSpeed;
      if (elapsedTime >= animationDuration) {
        clearInterval(interval);

        // Set the final selected question
        const finalIndex = Math.floor(Math.random() * totalQuestion);
        const selectedQuestion = dataQuestion.questions[finalIndex];
        setQuestion(selectedQuestion);

        // Remove the selected question from the array
        const remainingQuestions = dataQuestion.questions.filter(
          (_, index) => index !== finalIndex
        );
        setDataQuestion({
          ...dataQuestion,
          questions: remainingQuestions, // Update state with remaining questions
        });

        setIsAnimating(false); // Stop the animation
      }
    }, intervalSpeed);
  };

  return (
    <div className="page-container">
      <div className="content-container">
        <h1 className="text-5xl mb-10 text-center">Welcome to the Question Page!</h1>

        <div className="">
          <div className="mb-2 grid grid-cols-5 gap-4">
            <span>Category:</span>
            <span className="col-span-4">{selectedCategory?.label}</span>
          </div>
          <div className="mb-2 grid grid-cols-5 gap-4">
            <span>Level:</span>
            <span className="col-span-4">{selectedLevel?.label}</span>
          </div>
          <div className="mb-2 grid grid-cols-5 gap-4">
            <span>Description:</span>
            <span className="col-span-4">{dataQuestion?.description}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row mb-5">
        <div className="mr-3">
          <Dropdown
            options={dataCategory}
            onSelect={(data) => setSelectedCategory(data)}
            placeholder={selectedCategory.label}
          />
        </div>
        <div className="ml-3">
          <Dropdown
            options={dataLevel}
            onSelect={(data) => setSelectedLevel(data)}
            placeholder={selectedLevel.label}
          />
        </div>
      </div>

      <div className="question-container">
        <CardQuestion>
          {isAnimating ? (
            <div className="animate-blink">{questionSelected?.question || "Loading..."}</div>
          ) : (
            <div>{questionSelected?.question || "No question selected"}</div>
          )}
        </CardQuestion>

        <div className="button-container">
          <Button
            disabled={isAnimating}
            text={isAnimating ? "Picking..." : "Pick Question"}
            onClick={!isAnimating ? pickQuestion : undefined} // Disable click during animation
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
