import { useState } from 'react'
import './App.css'
import Result from './Result';

const secretNum = Math.floor(Math.random()*10)+1

function App() {
    const [term, setTerm] = useState();

    function handleChange (e){
        
        // let inputVal = e.target.value
        // if(inputVal > 0 && inputVal < 9){
        //     inputVal = inputVal.padStart(2,'0')
        // }
        setTerm(e.target.value)
    }

    return(
      <>
        <div className="container">
                <marquee className="head">
                    Guss the number between 1 to 10
                </marquee>

                <div className='content'>
                    <img 
                        src="./tom_2.png" 
                        alt="Tom" 
                        className='Tom'
                    />

                    <input 
                        type="number"
                        value={term}
                        id='term' 
                        name="term"
                        onChange={handleChange}
                        maxLength={2}
                    />

                    <img 
                        src="./jerry.png" 
                        alt="Jerry" 
                        className='Jerry'
                    />
                </div>
            <Result term={term} secretNum={secretNum}/>
        </div>
      </>
    )
};
export default App;
