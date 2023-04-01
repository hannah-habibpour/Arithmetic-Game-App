import { createContext, useState } from "react"

const GameContext = createContext()

export const GameProvider = ({ children }) => {

    //From Main page (GameDuration component)
    const [duration, setDuration] = useState(0)

    return (
        <GameContext.Provider
            value={{
                duration,
                setDuration,
            }}
        >
            {children}    
        </GameContext.Provider>
    )
}

export default GameContext