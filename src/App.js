import React, {useState} from 'react';
import './App.css';
import Start from './components/Start';
import Question from './components/Question';
import Sending from "./components/Sending";
import questions from './data/questions.json'
import Slider from "./components/Slider";
import End from "./components/End";
import Header from "./layouts/Header";


const App = () => {

    const [step, setStep] = useState(1);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [sliderValue, setSliderValue] = useState(6000000)


    const quizStartHandler = () => {
        setStep(2);
    }

    const quizStartAgainHandler = () => {
        setStep(1);
        setActiveQuestion(0);
    }

    return (
        <>
            <Header/>
            <div className='App'>
                {step === 1 && <Start onQuizStart={quizStartHandler}/>}
                {step === 2 && <Question
                    data={questions.data[activeQuestion]}
                    onAnswerUpdate={setAnswers}
                    numberOfQuestion={questions.data.length}
                    activeQuestion={activeQuestion}
                    onSetActiveQuestion={setActiveQuestion}
                    onSetStep={setStep}
                />}
                {step === 3 && <Slider
                    setSliderValue={setSliderValue}
                    onSetStep={setStep}
                />}
                {step === 4 && <Sending
                    results={answers}
                    onSetStep={setStep}
                />}
                {step === 5 && <End
                    quizStartAgain={quizStartAgainHandler}
                />}
            </div>
        </>
    );
}

export default App;
