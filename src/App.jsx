import { useContext, useEffect } from "react"
import { QuizContext } from "./context/quiz"
import Welcome from "./components/Welcome/Welcome"
import Question from "./components/Question/Question"
import GameOver from "./components/GameOver/GameOver"
import PickCategory from "./components/PickCategory/PickCategory"
import "./App.css"

function App() {

  const [quizState, dispatch] = useContext(QuizContext)

  useEffect(() => {

    // Reorders the questions
    dispatch({ type: "REORDER_QUESTIONS" })

  }, [])

  return (
    <div className="App">
      <h1>Programming Quiz</h1>

      {/* Renders the Welcome component if gameStage is "Start" */}
      {quizState.gameStage === "Start" && <Welcome />}

      {/* Renders the PickCategory component if gameStage is "Category" */}
      {quizState.gameStage === "Category" && <PickCategory />}

      {/* Renders the Question component if gameStage is "Playing" */}
      {quizState.gameStage === "Playing" && <Question />}

      {/* Renders the GameOver component if gameStage is "End" */}
      {quizState.gameStage === "End" && <GameOver />}
    </div>

  )
}

export default App