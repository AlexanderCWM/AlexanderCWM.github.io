
const quizData = [
    {
        question: 'Who won the first FIFA World Cup? ',
        a:'Uruguay',
        b:'Brazil',
        c: 'Argentina',
        d:'Germany',
        rightAnswer: 'a'
    },
    {
        question: 'What is the weight of the lightest football boot?',
        a:'80gr',
        b:'99gr',
        c: '120gr',
        d:'150gr',
        rightAnswer: 'b'
    },
    {
        question: ' Which team won the Champions League 3 years in a row?',
        a:'Barcelona',
        b:'Real Madrid',
        c: 'Liverpool',
        d:'Chelsea',
        rightAnswer: 'b'
    },
    
    {
        question:' If a footballer scored 4 goals in a match, did he score?',
        a: 'Hat-trick',
        b:'Poker',
        c:'Penta-trick',
        d:'Bochinesq',
        rightAnswer: 'b'
    },
    {
        question:'What is the name of the award given to the top scorer at the end of the calendar year?',
        a: 'Golden ball',
        b:'Golden boot',
        c:'Golden jersey',
        d:'Golden statuette',
        rightAnswer: 'b'
    },
    {
        question:'Which country has the fastest goal in a match? ',
        a: 'England',
        b:'Brazil',
        c:'Spain',
        d:'Russia',
        rightAnswer: 'd'
    },
    {
        question:'Who is the most decorated soccer player in the world?        ',
        a: 'Dani Alves',
        b:'Pele',
        c:'Lionel Messi ',
        d:'Cristiano Ronaldo',
        rightAnswer: 'a'
    },
    {
        question:'Which of the footballers was called "nibbler" (Зубастик)? ',
        a: 'Ronaldo',
        b:'Ronaldinho',
        c:'Kaka',
        d:'Rivaldo',
        rightAnswer: 'a'
    },

    {
        question: 'The national team of which country was nicknamed "the red fury"?',
        a:'Spain',
        b:'Portugal',
        c: 'England',
        d:'Belgium',
        rightAnswer: 'b'
    },
    {
        question: 'What is Lionel Messi`s playing number in Barcelona?',
        a:'5',
        b:'7',
        c: '10',
        d:'21',
        rightAnswer: 'c'
    },
    {
        question: 'How many Soviet footballers have won the Golden Ball award?',
        a:'1',
        b:'2',
        c: '3',
        d:'4',
        rightAnswer: 'c'
    },
    {
        question: 'Which footballer has spent his entire career in one football club? ',
        a:' Gianluigi Buffon ',
        b:'Iker Casillas ',
        c: 'Francesco Totti ',
        d:'Wayne Rooney',
        rightAnswer: 'c'
    },
    {
        question: 'Which football team plays at Anfield Stadium?',
        a:'Chelsea',
        b:'Arsenal',
        c: 'Man UTD',
        d:'Liverpool',
        rightAnswer: 'd'
    },
    {
        question: 'What is the name of the most prestigious tournament for European football clubs? ',
        a:'Europa League',
        b:'Champions League',
        c: 'Nations League',
        d:'UEFA Cup',
        rightAnswer: 'b'
    },
    {
        question: 'Who has scored the most goals in football? ',
        a:'Maradonna',
        b:'Pele',
        c:'Lionel Messi ',
        d:'Cristiano Ronaldo',
        rightAnswer: 'b'
    },
]
const questionText = document.getElementById('question-text'),
a_text = document.getElementById('a_text'),
b_text = document.getElementById('b_text'),
c_text =document.getElementById('c_text'),
d_text = document.getElementById('d_text');

let currentQuestion = 0;
let rightAnswersCounter = 0;


const btnAccept = document.getElementById('btn_accept');
loadQuiz();
function loadQuiz() {
    questionText.innerText = quizData[currentQuestion].question;
    a_text.innerText = quizData[currentQuestion].a;
    b_text.innerText = quizData[currentQuestion].b;
    c_text.innerText = quizData[currentQuestion].c;
    d_text.innerText = quizData[currentQuestion].d;


}

function checkAnswear () {
    const answerEls = document.querySelectorAll('.variant');
    let answerVariant = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answerVariant = answerEl.id;
        }
    })

    return answerVariant;
}

btnAccept.addEventListener('click', ()=> {

    const answer = checkAnswear();

    if(answer) {
        if(answer === quizData[currentQuestion].rightAnswer) {
            rightAnswersCounter++;
            console.log(rightAnswersCounter);
        }
        currentQuestion++;
        if(currentQuestion < quizData.length) {
            loadQuiz();
        }
        else {
            alert(`You earned ${rightAnswersCounter} from  ${quizData.length}`)
        }
    }
   
})
