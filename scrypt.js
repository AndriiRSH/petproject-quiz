const option1 = document.querySelector(".option1"),
  option2 = document.querySelector(".option2"),
  option3 = document.querySelector(".option3"),
  option4 = document.querySelector(".option4");

const optionElement = document.querySelectorAll(".option");

const question = document.getElementById("question"),
  numberOfQuestion = document.getElementById("number-of-question"),
  numberOfAllQuestion = document.getElementById("number-of-all-questions");

let IndexOfQuestion, //Індекс теперішнього запитання
  indexOfPages = 0; //Індекс сторінок

const answearIndicator = document.getElementById("answear-tracker");
const btnNext = document.getElementById("btn-next");

let score = 0; // Last Result

const corectAnswear = document.getElementById("correct-answear"),
  NumberOfAllQuestion = document.getElementById("number - of - all - question"),
  btnTryAgain = document.getElementById("btn-try-again");

const questions = [
  {
    question: "Найкраща мова програмування?",
    options: ["JavaScript", "C#", "C++", "Python"],
    rightAnswer: 0,
  },
  {
    question: "Результат: "13" + 7 ?",
    options: ["137", "20", "undefined" "NaN"],
    rightAnswer: 0,
  },
  {
    question: "Результат: "13" + 7 ?",
    options: ["137", "20", "undefined" "NaN"],
    rightAnswer: 0,
  },

];
