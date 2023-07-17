import { useContext } from "react"
import { QuizContext } from "../../contexts/quiz"
import styles from "./styles.module.css"

function Option({ option }) {

    const [quizState, dispatch] = useContext(QuizContext)
    return (
        <div className={styles.option}>
            <p>{option}</p>
        </div>
    )
}

export default Option