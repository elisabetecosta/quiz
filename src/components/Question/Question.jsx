import { useContext } from "react"
import { QuizContext } from "../../context/quiz"
import Option from "../Option/Option"
import "./Question.css"

function Question() {

    const [quizState, dispatch] = useContext(QuizContext)
    const currentQuestion = quizState.questions[quizState.currentQuestion]

    const onSelectOption = (option) => {

        dispatch({
            type: "CHECK_ANSWER",
            payload: { answer: currentQuestion.answer, option }
        })
    }

    return (
        <div className="question">
            <p>Question {quizState.currentQuestion + 1} of {quizState.questions.length}</p>
            <h2>{currentQuestion.question}</h2>
            <div className="options-container">
                {currentQuestion.options.map((option) => (
                    <Option
                        key={option}
                        option={option}
                        answer={currentQuestion.answer}
                        selectOption={() => onSelectOption(option)}
                    />
                ))}
            </div>
            {quizState.answerSelected && (
                <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>Continue</button>
            )}
        </div>
    )
}

export default Question