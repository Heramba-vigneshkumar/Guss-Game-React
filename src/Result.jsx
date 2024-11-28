import React from "react";

function Result ({term,secretNum}) {
    let result;

    if(term > 0) {
        
        if (term > secretNum) {
            result = "It's too higher 😓";
        }

        else if (term < secretNum) {
            result = "It's too lower 😢";      
        }

        else if (term == secretNum) {
            result = "Hurrey..!! you won 😍";
        }

        else {
            result = "Please enter any number 🤦‍♂️";    
        }
    };

    return(
        <h3 id="result">{result}</h3>
    )
};
export default Result;