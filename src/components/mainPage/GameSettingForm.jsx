import AdditionOperation from "./AdditionOperation"
import MultiplicationOperation from "./MultiplicationOperation"
import SetDuration from "./SetDuration"
import Button from "../../shared/Button"
function GameSettingForm() {
  return (
    <div>
      <AdditionOperation />
      <MultiplicationOperation />
      <SetDuration />
      <Button>Start</Button>

    </div>
  )
}

export default GameSettingForm