import { questions } from "../questions"

const Results = ({correct}) => {
  
  const restartGame = () => {
    localStorage.clear("answers");
    window.location.reload()
  };

  return (
    <div className="seekho__quiz seekho__mr-20">
        <div className="seekho__border seekho__results">
            <center>
              <h2>You have successfully submitted the test</h2>
              <h3>- Question asked : {questions.length}</h3>
              <h3>- Question Correct : {correct}</h3>
              <h3>- Your Score : {Math.round((correct / questions.length) * 100)}</h3>
              <button className="seekho__pointer" onClick={restartGame}>Restart</button>
            </center>
        </div>
    </div>
  )
}

export default Results