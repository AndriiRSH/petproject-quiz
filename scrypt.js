const option1 = document.querySelector(".option1"),
  option2 = document.querySelector(".option2"),
  option3 = document.querySelector(".option3"),
  option4 = document.querySelector(".option4");

const optionElements = document.querySelectorAll(".option");

const question = document.getElementById("question"),
  numberOfQuestion = document.getElementById("number-of-question"),
  numberOfAllQuestion = document.getElementById("number-of-all-question"),
  numberOfAllQuestions2 = document.getElementById("number-of-all-questions-2");

let IndexOfQuestion, //Індекс теперішнього запитання
  indexOfPages = 0; //Індекс сторінок

const answearIndicator = document.getElementById("answear-tracker");
const btnNext = document.getElementById("btn-next");

let score = 0; // Last Result

const corectAnswear = document.getElementById("correct-answear"),
  btnTryAgain = document.getElementById("btn-try-again");

const questions = [
  {
    question: "Найкраща мова програмування?",
    options: ["JavaScript", "C#", "C++", "Python"],
    rightAnswer: 0,
  },
  {
    question: "Результат: '13' + 7 ?",
    options: ["137", "20", "undefined", "NaN"],
    rightAnswer: 0,
  },
  {
    question: "Як вам дане опитування є?",
    options: ["Краще б я цього не бачив", "Погано", "Так Собі", "Круто"],
    rightAnswer: 3,
  },
];

numberOfAllQuestion.innerHTML = questions.length; // кількість всіх запитань

const load = () => {
  question.innerHTML = questions[IndexOfQuestion].question; // саме запитання

  option1.innerHTML = questions[IndexOfQuestion].options[0];
  option2.innerHTML = questions[IndexOfQuestion].options[1];
  option3.innerHTML = questions[IndexOfQuestion].options[2];
  option4.innerHTML = questions[IndexOfQuestion].options[3];

  numberOfQuestion.innerHTML = indexOfPages + 1; // номер теперішньої сторінки
  indexOfPages++; // збільшення номера
};

let completedAnswers = [];

const randomQuestion = () => {
  let randomNumber = Math.floor(Math.random() * questions.length);
  let hitDublicate = false;

  if (indexOfPages == questions.length) {
    quizOver();
  } else {
    if (completedAnswers.length > 0) {
      completedAnswers.forEach((item) => {
        if (item == randomNumber) {
          hitDublicate = true;
        }
      });
      if (hitDublicate) {
        randomQuestion();
      } else {
        IndexOfQuestion = randomNumber;
        load();
      }
    }
    if (completedAnswers == 0) {
      IndexOfQuestion = randomNumber;
      load();
    }
  }
  completedAnswers.push(IndexOfQuestion);
};

const checkAnswer = (el) => {
  if (el.target.dataset.id == questions[IndexOfQuestion].rightAnswer) {
    el.target.classList.add("correct");
    updateAnswearTracker("correct");
    score++;
  } else {
    el.target.classList.add("wrong");
    updateAnswearTracker("wrong");
  }
  disabledOptions();
};

const disabledOptions = () => {
  optionElements.forEach((item) => {
    item.classList.add("disabled");
    if (item.dataset.id == questions[IndexOfQuestion].rightAnswer) {
      item.classList.add("correct");
    }
  });
};

const enableOptions = () => {
  optionElements.forEach((item) => {
    item.classList.remove("disabled", "correct", "wrong");
  });
};

const answearTracker = () => {
  questions.forEach(() => {
    const div = document.createElement("div");
    answearIndicator.appendChild(div);
  });
};

const updateAnswearTracker = (status) => {
  answearIndicator.children[indexOfPages - 1].classList.add(`${status}`);
};

const validate = () => {
  if (!optionElements[0].classList.contains("disabled")) {
    alert("Виберіть варіант відповіді!");
  } else {
    randomQuestion();
    enableOptions();
  }
};

btnNext.addEventListener("click", validate);

for (option of optionElements) {
  option.addEventListener("click", (e) => checkAnswer(e));
}

const quizOver = () => {
  alert("Опитування завершено! Успіхів");
  // document.querySelector(".quiz-over-modal").classList.add(".active");
  // corectAnswear.innerHTML = score;
  // numberOfAllQuestions2.innerHTML = questions.length;
};

const tryAgain = () => {
  window.location.reload();
};

btnTryAgain.addEventListener("click", tryAgain);

window.addEventListener("load", () => {
  randomQuestion();
  answearTracker();
});
