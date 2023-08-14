// class Quiz {
//     render() {
//         let htmlData = ''
//
//
//         htmlData += `
//             <div class="quiz-box">
//                 <h2 id="question">SAVOL</h2>
//                 <div id="answer-buttons" class="">
//                 </div>
//                 <button id="next-btn">Next</button>
//             </div>
//         `
//
//         const htmltop = `
//             <div class="container">
//                 ${htmlData}
//             </div>
//             `;
//
//         ROOT_QUIZ.innerHTML = htmltop;
//     }
// }
//
// const quizPage = new Quiz();
// quizPage.render();
//
//
// const questions = [
//     {
//         title: 'How old are you ?',
//         variants: ['10-15', '15-20', '20-25', '25-30', '35-40', '40-80']
//     },
//     {
//         title: 'What game genre do you like the most ?',
//         variants: ['RPG', 'Shooter', 'Strategy', 'Stimulant', 'Arcade', 'Fighting', 'Race', 'Action', 'Adventure', 'Quests', 'Brain teaser', 'Another variant']
//     },
//     {
//         title: 'What type of games (online or offline) do you prefer?',
//         variants: ['Online', 'Offline']
//     },
//     {
//         title: 'How much time do you spend in the game ?',
//         variants: ['~1 hour', 'From 1-3 hours', 'From 3-5 hours', 'More than 5 hours']
//     },
// ];
//
//
// const questionElement = document.getElementById('question')
// const answerBtn = document.getElementById('answer-buttons')
// const nextBtn = document.getElementById('next-btn')
// const quizPages = document.getElementById('quiz')
//
// let currentQuestionIndex = 0;
// let score = 0;
//
// function showQuestion() {
//     const topPage = document.querySelector('#top')
//     topPage.classList.add('hide')
//     const menu = document.querySelector('.menu')
//     menu.classList.add('hide')
//     resetState();
//     let currentQuestion = questions[currentQuestionIndex];
//     let questionNo = currentQuestionIndex + 1
//     questionElement.innerHTML = questionNo + '. ' + currentQuestion.title;
//
//     currentQuestion.variants.forEach(variants => {
//         const button = document.createElement('button')
//         button.innerHTML = variants
//         button.classList.add('btn-quiz')
//         answerBtn.appendChild(button)
//         button.addEventListener('click', e => {
//             const selectedBtn = e.target;
//             // selectedBtn === button && selectedBtn.classList.toggle('btn-quiz-active')
//             if (selectedBtn === button) {
//                 score++
//                 selectedBtn.classList.toggle('btn-quiz-active')
//                 nextBtn.style.display = 'block'
//             }
//
//             // selectedBtn.classList.toggle('btn-quiz-active') ? nextBtn.style.display = 'block': 'dsd'
//         });
//     });
// }
//
//
// // function selectAnswer(e) {
// //     const selectedBtn = e.target()
// //     console.log(selectedBtn)
// // }
//
// function startQuiz() {
//     currentQuestionIndex = 0
//     score = 0
//     showQuestion();
// }
//
// function resetState() {
//     nextBtn.style.display = 'none';
//     while (answerBtn.firstChild) {
//         answerBtn.removeChild(answerBtn.firstChild);
//     }
// }
//
// function showScore() {
//     quizPages.style.display = 'none'
//     const topPage = document.querySelector('#top')
//     topPage.classList.remove('hide')
//     const menu = document.querySelector('.menu')
//     menu.classList.remove('hide')
//     resetState()
// }
//
// function handleNextButton() {
//     currentQuestionIndex++
//     if (currentQuestionIndex < questions.length) {
//         showQuestion()
//     } else {
//         showScore();
//     }
// }
//
// nextBtn.addEventListener('click', () => {
//     if (currentQuestionIndex < questions.length) {
//         handleNextButton();
//     } else {
//         startQuiz();
//     }
// })
//
// showQuestion()
//
// console.log(questions.length)