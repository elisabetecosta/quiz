import { useContext } from "react"
import { QuizContext } from "../../contexts/quiz"
import WellDone from "../../img/welldone.svg"
import styles from "./styles.module.css"

function GameOver() {

    const [quizState, dispatch] = useContext(QuizContext)

    return (
        <div className={styles.gameOver}>
            <h2>You reached the end of this quiz!</h2>
            <p>Score: {quizState.score}</p>
            <p>You got {quizState.score} out of {quizState.questions.length} questions right.</p>
            <img src={WellDone} alt="End of the Quiz" />
            <button onClick={() => dispatch({ type: "NEW_GAME" })}>Play Again</button>
        </div>
    )
}

export default GameOver