import { useContext } from "react"
import GameContext from "../../context/GameContext"
import CalculateTimeLeft from "../../utilities/Utils"


function SecondLeft() {
  const { duration } = useContext(GameContext)



  return (
    <div>
      <p>Second Left: </p>
      <CalculateTimeLeft duration={duration} />
    </div>
   
  )
}

export default SecondLeft