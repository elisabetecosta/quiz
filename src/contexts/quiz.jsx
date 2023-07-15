import { createContext, useReducer } from "react"
import PropTypes from "prop-types"
import questions from "../data/questions"

const STAGES = ["Start", "Playing", "End"]

const initialState = {
    gameStage: STAGES[0],
    questions
}

const quizReducer = (state, action) => {

    console.log(state, action)

    switch(action.type) {
        
        case "CHANGE_STATE":
            return {
                ...state,
                gameStage: STAGES[1]
            }

        default:
            return state
    }
}

const QuizContext = createContext()

function QuizContextProvider({ children }) {
    
    const value = useReducer(quizReducer, initialState)

    return (
        <QuizContext.Provider value={value}>
            {children}
        </QuizContext.Provider>
    )
}

QuizContextProvider.propTypes = {
    children: PropTypes.node
}

export { QuizContext, QuizContextProvider }