import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [secretNum, setSecretNum] = useState(null);
  const [term, setTerm] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [result, setResult] = useState("Let's start the game");

  useEffect(() => {
    if (term !== "") {
      const termAsNumber = Number(term);
      if (termAsNumber > 0) {
        if (termAsNumber > secretNum) {
          setResult("It's too high 😓");
        } else if (termAsNumber < secretNum) {
          setResult("It's too low 😢");
        } else {
          setResult("Hurrey..!! You won 😍");
          setDisabled(true);
        }
      }
      else {
        setResult("Please enter a number 🤦‍♂️");
      }
    }
  }, [term, secretNum]);

<<<<<<< HEAD
  function handleSecretNum() {
    setSecretNum(Math.floor(Math.random() * 10) + 1);
  }
=======
    return(
      <>
        <div className="container">
                <marquee className="head">
                    Guess the number between 1 to 10
                </marquee>
>>>>>>> 6a2396876b337f66d6493fd1b98bddf17951a93c

  const handleStart = () => {
    setDisabled(false);
    handleSecretNum();
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const handleRestart = () => {
    setTerm("");
    setResult("Let's start the game");
    handleSecretNum();
  };

  return (
    <>
      <marquee className="head">Guess the number between 1 to 10</marquee>
      <div className="container">
        <div className="content">
          <img src="./tom_2.png" alt="Tom" className="Tom" />
          <input
            type="number"
            value={term}
            id="term"
            name="term"
            onChange={handleChange}
            maxLength={2}
            disabled={disabled}
          />
          <img src="./jerry.png" alt="Jerry" className="Jerry" />
        </div>
      </div>
      <aside>
        <h3 id="result">{result}</h3>
        {disabled && term === "" ? (
          <button type="submit" onClick={handleStart}>
            Start
          </button>
        ) : (
          <button type="submit" onClick={handleRestart}>
            Restart
          </button>
        )}
      </aside>
    </>
  );
}

export default App;
