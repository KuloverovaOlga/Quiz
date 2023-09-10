import createElement from '../helper/createElement.js';

const createQuiz = (parent) => {
    const quizSection = createElement('section', {
        className: 'quiz',
    });
    const container = createElement('div', {
        className: 'container quiz__container',
    });
    const quizInner = createElement('div', {
        className: 'quiz__inner',
    });
    const quizTitle = createElement('h3', {
        className: 'quiz__title title',
    });
    const quizRrogressWrapp = createElement('div', {
        className: 'quiz__progress-wrapp',
    });
    const quizRrogressBar = createElement('div', {
        className: 'quiz__progress-bar',
    });
    const quizRrogress = createElement('div', {
        className: 'quiz__progress',
    });
    const quizRrogressQuestion = createElement('div', {
        className: 'quiz__progress-question',
    });
    const quizCurrentQuestion = createElement('span', {
        className: 'quiz__current-question',
    });
    const quizSlash = createElement('span', {
        className: 'quiz__slash',
        textContent: 'из',
    });
    const quizTotalQuestion = createElement('span', {
        className: 'quiz__total-question',
    });
    const quizQuestionsWrapp = createElement('div', {
        className: 'quiz__questions',
    });
    const quizQuestion = createElement('span', {
        className: 'quiz__question',
    });
    const quizQuestionList = createElement('ul', {
        className: 'quiz__answers',
    });
    const quizBtnBox = createElement('div', {
        className: 'quiz__btn-box',
    });
    const quizBtnNext = createElement('button', {
        className: 'quiz__btn-box',
        innerHTML: ` <button class="quiz__button quiz__button--next">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="25" viewBox="0 0 35 35" fill="none">
                            <path
                                d="M33.888 19.2336L33.6089 19.5591L33.6167 19.5682L21.3951 33.8204C20.618 34.7265 19.392 34.7265 18.6149 33.8204C17.7989 32.8688 17.7989 31.2956 18.6149 30.344L18.6151 30.3438L26.8421 20.7408L27.5492 19.9155H26.4624H2.50014C1.46273 19.9155 0.5 18.9114 0.5 17.5C0.5 16.0886 1.46273 15.0845 2.50014 15.0845H26.4702H27.5583L26.8496 14.2588L18.6071 4.65597C18.6071 4.65594 18.6071 4.65591 18.6071 4.65588C18.607 4.65585 18.607 4.65582 18.607 4.65579C17.7911 3.70417 17.7912 2.13118 18.6071 1.17964C19.3842 0.273454 20.6102 0.273454 21.3873 1.17964L33.888 15.7573C34.704 16.7089 34.704 18.282 33.888 19.2336Z"
                                fill="#94D30E"
                                stroke="black"
                            /></svg>
                    </button>`,
    });
    const quizBtnPrev = createElement('button', {
        className: 'quiz__btn-box',
        innerHTML: `<button class="quiz__button quiz__button--prev">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="25" viewBox="0 0 35 35" fill="none">
                            <path
                                d="M1.11202 19.2336L1.39112 19.5591L1.38331 19.5682L13.6049 33.8204C14.382 34.7265 15.608 34.7265 16.3851 33.8204C17.2011 32.8688 17.2011 31.2956 16.3851 30.344L16.3849 30.3438L8.15788 20.7408L7.45083 19.9155H8.53759H32.4999C33.5373 19.9155 34.5 18.9114 34.5 17.5C34.5 16.0886 33.5373 15.0845 32.4999 15.0845H8.52977H7.44168L8.15037 14.2588L16.3929 4.65597C16.3929 4.65594 16.3929 4.65591 16.3929 4.65588C16.393 4.65585 16.393 4.65582 16.393 4.65579C17.2089 3.70417 17.2088 2.13118 16.3929 1.17964C15.6158 0.273454 14.3898 0.273454 13.6127 1.17964L1.11202 15.7573C0.295994 16.7089 0.295994 18.282 1.11202 19.2336Z"
                                fill="#94D30E"
                                stroke="black"
                            />
                        </svg>
                    </button>`,
    });
    const cardControler = (data) => {
        let questionsCount = data.questions.length;
        let count = 0; // Шаг


        quizTitle.textContent = data.title;

        function renderProgress(total, step) {
            let prog = (step * 100) / total;
            quizRrogress.style.width = `${prog}%`;
            quizCurrentQuestion.textContent = step < total ? step + 1 : step;
            quizTotalQuestion.textContent = total;
            console.log(total, step);
            return;
        }

        function renderQuestion(total, step) {
            quizQuestion.textContent = step < total ? `${data.questions[step].question}` : `${data.questions[step - 1].question}`;
        }

        function buildAnswers(answers) {
            const arr = [];
            answers.forEach((answer, i) => {
                const el = `<li class="quiz__answer" data-id="${i + 1}">${answer}</li>`;
                arr.push(el);
            });
            quizQuestionList.innerHTML = arr.join('');
        }

        function renderanswers(total, step) {
            step < total ? buildAnswers(data.questions[step].answers) : buildAnswers(data.questions[step - 1].answers);
        }

        function getAnswers() {
            let id = 0;
            let answers = [];
            let currentAnswers = [];
            let answer = '';
            // Нажатие на ответы
            quizQuestionList.addEventListener('click', (e) => {
                let target = e.target;
                if (target.classList.contains('quiz__answer') && !target.classList.contains('active')) {
                    id = target.dataset.id;
                    console.log(id);
                    document.querySelectorAll('.quiz__answer').forEach((item) => {
                        item.classList.remove('active');
                    });
                    target.classList.add('active');
                    answer = target.textContent;
                }
            });

            // Нажатие на кнопку
            quizBtnNext.addEventListener('click', () => {
                if (id != 0) {
                    count++;
                    id = 0;
                    renderProgress(questionsCount, count);
                    renderQuestion(questionsCount, count);
                    renderanswers(questionsCount, count);
                    currentAnswers.push(data.questions[count - 1].correct);
                    answers.push(answer);

                    console.log(currentAnswers);
                    console.log(answers);
                }

                if (count === questionsCount) {
                    endQuiz();
                    answers = [];
                    currentAnswers = [];
                    answer = '';
                }
            });
            quizBtnPrev.addEventListener('click', () => {
                if (count === 0) {
                    count = count;
                }
                if (count > 0) {
                    count--;
                    answers.pop();
                    currentAnswers.pop();
                }
                renderProgress(questionsCount, count);
                renderQuestion(questionsCount, count);
                renderanswers(questionsCount, count);
            });

            document.querySelector('.header__btn').addEventListener('click', () => {
                count = 0;
                answers = [];
                currentAnswers = [];
                answer = '';
            });

            const endQuiz = () => {
                count = 0;
                let intersection = answers.filter((item) => currentAnswers.includes(item)).length;

                quizCurrentQuestion.textContent = questionsCount;
                quizRrogress.style.width = `100%`;

                quizQuestion.textContent = 'Опрос окончен';
                quizQuestion.style.margin = '0 auto';

                quizQuestionList.textContent = ` Правильных ответов ${intersection} из ${questionsCount}`;
                quizQuestionList.style.textAlign = 'center';
                quizQuestionList.style.color = 'black';
            };
        }

        getAnswers();
        renderProgress(questionsCount, count);
        renderQuestion(questionsCount, count);
        renderanswers(questionsCount, count);
        //
    };
    const mount = (data) => {
        parent.append(quizSection);
        cardControler(data);
  
    };
    const unMount = () => {
        quizSection.remove();
        return;
    };

    parent.append(quizSection);
    quizSection.append(container);
    container.append(quizInner);
    quizInner.append(quizTitle, quizRrogressWrapp, quizQuestionsWrapp, quizBtnBox);
    quizRrogressWrapp.append(quizRrogressBar, quizRrogressQuestion);
    quizRrogressBar.append(quizRrogress);
    quizRrogressQuestion.append(quizCurrentQuestion, quizSlash, quizTotalQuestion);
    quizQuestionsWrapp.append(quizQuestion, quizQuestionList);
    quizBtnBox.append(quizBtnPrev, quizBtnNext);

    return { mount, unMount };
};

export default createQuiz;
