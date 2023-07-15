import { useContext } from "react"
import { QuizContext } from "./contexts/quiz"
import Welcome from "./components/Welcome/Welcome"
import Question from "./components/Question/Question"
import "./App.css"

function App() {

  const [quizState, dispatch] = useContext(QuizContext)

  return (
      <div className="App">
        <h1>Programming Quiz</h1>

        {/* Renders the Welcome component if gameStage is "Start" */}
        {quizState.gameStage === "Start" && <Welcome />}

        {/* Renders the Question component if gameStage is "Playing" */}
        {quizState.gameStage === "Playing" && <Question />}
      </div>

  )
}

export default App