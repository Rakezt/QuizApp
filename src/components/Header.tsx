import { Button } from "@mui/material";
import React from "react";
import { useTheme } from "../context/ThemeContext";

type HeaderProps = { title: string };
const Header: React.FC<HeaderProps> = ({ title }) => {
  // const greet = (name: string) => {
  //   console.log(`Hello ${name}`);
  // };
  // //   greet("tiger");

  // const addTwoNumber = (a: number, b: number) => {
  //   console.log(`the sum is ${a + b}`);
  // };
  // //   addTwoNumber(2, 3);

  // type info = string | number;
  // const printInfo = (info: info) => {
  //   console.log(info);
  // };
  // //   printInfo("Hello Worlds");

  // type circle = {
  //   kind: "circle";
  //   radius: number;
  // };
  // type rectangle = { kind: "rectangle"; length: number; width: number };

  // type Shape = circle | rectangle;

  // const getArea = (shape: Shape): number => {
  //   if (shape.kind === "circle") {
  //     return Math.PI * shape.radius * 2;
  //   } else {
  //     return shape.length * shape.width;
  //   }
  // };
  // interface Car {
  //   make: string;
  //   model: string;
  //   year: number;
  //   isElectric: boolean;
  //   features: string[];
  // }
  // const car: Car = {
  //   make: "Ford",
  //   model: "Mustang",
  //   year: 2004,
  //   isElectric: false,
  //   features: ["autoDriver", "650CC"],
  // };
  // //   console.log(car);

  // const outputArea = getArea({ kind: "rectangle", length: 20, width: 5 });
  // //   console.log(outputArea);

  // function identity<R>(value: R): R {
  //   return value;
  // }

  // const output = identity<number>(300);
  // //   console.log(output);

  // function findItem<T>(array: T[], item: T): T | undefined {
  //   const index = array.indexOf(item);
  //   return index !== -1 ? array[index] : undefined;
  // }
  // // const findItem = <T>(array: T[], item: T): T | undefined => {
  // //     const index = array.indexOf(item);
  // //     return index !== -1 ? array[index] : undefined;
  // // }

  // const Output = findItem([1, 2, 3, 4, 5, 6], 4);
  // //   console.log(Output);s

  // type QuizQuestion = {
  //   question: string;
  //   option: string[];
  //   correctAnswer: number;
  // };
  // const quizQuestion: QuizQuestion[] = [
  //   {
  //     question: "What is the winner of ballon'dor 2023/24?",
  //     option: ["Messi", "Ronaldo", "Mbappe", "Mo Salah"],
  //     correctAnswer: 0,
  //   },
  //   {
  //     question: "What is the winner of EPL 2023/24?",
  //     option: ["Manchester United", "Manchester City", "Arsenal", "Liverpool"],
  //     correctAnswer: 1,
  //   },
  // ];

  // type QuizChecker = (
  //   quizQuestion: QuizQuestion,
  //   userAnswer: number
  // ) => boolean;
  // const checkQuizAnswer: QuizChecker = (quizQuestion, userAnswer) => {
  //   return userAnswer === quizQuestion.correctAnswer;
  // };

  // //   console.log(checkQuizAnswer(quizQuestion[0], 1));

  // type filterFunction<T> = (
  //   array: T[],
  //   predicate: (value: T) => boolean
  // ) => T[];

  // const filterArray: filterFunction<number> = (array, predicate) => {
  //   return array.filter(predicate);
  // };

  // const isEven = (num: number) => num % 2 === 0;
  // const numbers = [1, 2, 3, 4, 5, 6];
  // //   console.log(filterArray(numbers, isEven)); // Output: [2, 4, 6]

  // type mapFunction<T, R> = (array: T[], mapper: (value: T) => R) => R[];

  // const mapArray: mapFunction<number, string> = (array, mapper) => {
  //   return array.map(mapper);
  // };

  // const doubleTostring = (num: number) => (num * 2).toString();
  // const arrayOfNumber = [1, 2, 3, 4, 5];
  // //   console.log("map", mapArray(arrayOfNumber, doubleTostring));

  // const arrayNum: number[] = [1, 2, 3, 4, 5];
  // const newMapNumber: number[] = arrayNum.map(
  //   (item: number): number => item * 2
  // );
  // //   console.log(newMapNumber, "2nd Map");

  const { theme, toggleTheme } = useTheme();
  return (
    <div
      className={theme === "light" ? "light-mode" : "dark-mode"}
      style={{ paddingBottom: "1rem" }}
    >
      <h1>{title}</h1>
      <Button variant="contained" onClick={toggleTheme}>
        Toggle Theme
      </Button>
    </div>
  );
};

export default Header;
