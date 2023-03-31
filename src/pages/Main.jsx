import GameSettingForm from "../components/mainPage/GameSettingForm"
function Main() {
  return (
    <div id="main-page">
        <h1>Arithmetic Game</h1>
        <p>The Arithmetic Game is a fast-paced speed drill where you are given two minutes to solve as many arithmetic problems as you can.</p>
        <GameSettingForm />
    </div>
  )
}

export default Main