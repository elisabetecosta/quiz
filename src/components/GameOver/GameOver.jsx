import { useContext } from "react"
import { QuizContext } from "../../contexts/quiz"
import WellDone from "../../img/welldone.svg"
import styles from "./styles.module.css"

function GameOver() {

    return (
        <div className={styles.gameOver}>
            <h2>Game Over</h2>
            <p>Score: x</p>
            <p>You got y out of z questions right.</p>
            <img src={WellDone} alt="End of the Quiz" />
            <button>Play Again</button>
        </div>
    )
}

export default GameOver