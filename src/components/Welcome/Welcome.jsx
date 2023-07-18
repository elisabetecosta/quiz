import { useContext } from "react"
import { QuizContext } from "../../context/quiz"
import Quiz from "../../img/quiz.svg"
import "./Welcome.css"

function Welcome() {

    const [quizState, dispatch] = useContext(QuizContext)

    console.log(quizState)

    return (
        <div className="welcome">
            <h2>Welcome!</h2>
            <p>Click the button below to start.</p>
            <button onClick={() => dispatch({ type: "CHANGE_STAGE" })}>Start</button>
            <img src={Quiz} alt="Beginning of the Quiz" />
        </div>
    )
}

export default Welcome