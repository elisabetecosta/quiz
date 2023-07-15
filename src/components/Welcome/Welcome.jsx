import { useContext } from "react"
import { QuizContext } from "../../contexts/quiz"
import Quiz from "../../img/quiz.svg"
import styles from "./styles.module.css"

function Welcome() {

    const [quizState, dispatch] = useContext(QuizContext)

    console.log(quizState)

    return (
        <div className={styles.container}>
            <h2>Welcome!</h2>
            <p>Click the button below to start.</p>
            <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>Start</button>
            <img src={Quiz} alt="Beginning of the Quiz" />
        </div>
    )
}

export default Welcome