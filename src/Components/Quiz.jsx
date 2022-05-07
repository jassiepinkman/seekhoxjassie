import { useState } from "react";

import ReviewAnswers from "./ReviewAnswers";
import Results from "./Results";

import { questions } from "../questions";


const Quiz = () => {
    const [questionNum, setQuestionNum] = useState(0);
    const [selectedAns, setSelectedAns] = useState("");
    const [isAllAnswered, setIsAllAnswered] = useState(false);
    const [answered, setAnswered] = useState({});
    const [correct, setCorrect] = useState(0);

    let question = questions;
    
    const selectedAnswer = (e) => {
        setSelectedAns(e.target.value);
        let prevAnswers = localStorage.getItem("answers") ? JSON.parse(localStorage.getItem("answers")) : {};
        prevAnswers[questionNum] = e.target.value;
        setAnswered(prevAnswers);
    };

    const onClickPreviousNext = (val) => {   
        if(val === "prev"){
            setQuestionNum(prev => prev - 1);
        } else { 
            setQuestionNum(next => next + 1);
            if(questionNum + 1 == question.length){
                let count = 0;
                question.forEach((item, index) => {
                    if(item.correct_answer === answered[index]){
                        count++;
                    };
                });
                setCorrect(count);
                setIsAllAnswered(prevState => !prevState)
            } else {
                let prevAnswers = localStorage.getItem("answers") ? JSON.parse(localStorage.getItem("answers")) : {};
                prevAnswers[questionNum] = answered[questionNum];
                localStorage.setItem("answers", JSON.stringify(prevAnswers));
            } 
        };
    };

    return (
        <>
        {isAllAnswered ? <Results correct={correct} /> :
        <div className="seekho__quiz">  
            <ReviewAnswers answered={answered}/>
            <div className="seekho__quiz-box seekho__border seekho__mr-20">
                <center>
                    <h3>SEEKHO</h3>
                    <div className="seekho__answer seekho__pd-20-5">
                        <button className="seekho__pointer" disabled={questionNum === 0} onClick={() => onClickPreviousNext("prev")}>Previous</button>
                        <h4>Attempt Questions here</h4>
                        <button className="seekho__pointer" onClick={() => onClickPreviousNext("next")}>Next</button>
                    </div>
                    {questions?.length && questions.slice(questionNum, questionNum + 1).map((ques, index) => {
                        return (<div key={index}>
                            <div className="seekho__pd-20-5">
                                <h3>Question # {questionNum + 1}: {ques.question}</h3>
                            </div>
                            <div className="seekho__flex seekho__answers-btn" onChange={selectedAnswer}>
                                <div className="seekho__flex seekho__min-w-100 seekho__pd-10-5"> 
                                    <label htmlFor="answer_1">
                                        <input id="answer_1" type="radio" name="answers" value={ques.answer_1} checked={selectedAns === ques.answer_1} className="seekho__pointer"/>
                                        {ques.answer_1}
                                    </label>
                                </div>
                                <div className="seekho__flex seekho__min-w-100 seekho__pd-10-5">
                                    <label htmlFor="answer_2">
                                        <input id="answer_2" type="radio" name="answers" value={ques.answer_2} checked={selectedAns === ques.answer_2} className="seekho__pointer"/>
                                        {ques.answer_2}
                                    </label>
                                </div>
                                <div className="seekho__flex seekho__min-w-100 seekho__pd-10-5">
                                    <label htmlFor="answer_3">
                                        <input id="answer_3" type="radio" name="answers" value={ques.answer_3} checked={selectedAns === ques.answer_3} className="seekho__pointer"/>
                                        {ques.answer_3}
                                    </label>
                                </div>
                                <div className="seekho__flex seekho__min-w-100 seekho__pd-10-5">
                                    <label htmlFor="answer_4">
                                        <input id="answer_4" type="radio" name="answers" value={ques.answer_4} checked={selectedAns === ques.answer_4} className="seekho__pointer"/>
                                        {ques.answer_4}
                                    </label>
                                </div>
                            </div>
                        </div>);
                    })}
                </center>    
            </div>
        </div>};
    </>);
};

export default Quiz