import GameScore from "../components/shared/GameScore"
import PlayGame from "../components/playPage/PlayGame"
import SecondLeft from "../components/shared/SecondLeft"

function Play() {
  return (
    <div>
      <SecondLeft />
      <PlayGame />
      <GameScore />
    </div>
  )
}

export default Play