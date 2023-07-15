import { useContext } from "react"
import { QuizContext } from "../../contexts/quiz"

function Question() {

    const [quizState, dispatch] = useContext(QuizContext)

    console.log(quizState)

    return (
        <div>
            <h1>Question</h1>
        </div>
    )
}

export default Question