import AdditionOperation from "./AdditionOperation"
import MultiplicationOperation from "./MultiplicationOperation"
import GameDuration from "./GameDuration"
import Button from "../../shared/Button"
function GameSettingForm() {
  return (
    <div>
      <AdditionOperation />
      <MultiplicationOperation />
      <GameDuration />
      <Button>Start</Button>

    </div>
  )
}

export default GameSettingForm