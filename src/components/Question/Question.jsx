import { useContext } from "react"
import { QuizContext } from "../../contexts/quiz"
import styles from "./styles.module.css"

function Question() {

    const [quizState, dispatch] = useContext(QuizContext)
    const currentQuestion = quizState.questions[quizState.currentQuestion]

    console.log(quizState)

    return (
        <div className={styles.question}>
            <p>Question {quizState.currentQuestion + 1} of {quizState.questions.length}</p>
            <h2>{currentQuestion.question}</h2>
            <div className={styles.optionsContainer}>
                <p>Options</p>
            </div>
            <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>Continue</button>
        </div>
    )
}

export default Question