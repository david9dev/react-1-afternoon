import React, { Component } from 'react'

class EvenAndOdd extends Component
{
    constructor()
    {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        };
    }
userInputHandler(event)
{
    console.log(this.state.userInput);
    this.setState({
        userInput: event
    });
}

buttonHandler()
{
    let tempArray = [];
    let {userInput} = this.state;
    // let evenCopy = evenArray.slice();
    // let oddCopy = oddArray.slice();
    let evenCopy = [];
    let oddCopy = [];
    tempArray = userInput.split(",");
    tempArray.forEach((curVal) => {
        if(parseInt(curVal, 10) % 2 === 0)
        {
            evenCopy.push(curVal);
        }
        else
        {
            oddCopy.push(curVal);
        }
    });
    this.setState({
        evenArray: evenCopy,
        oddArray: oddCopy,
        userInput: ""
    });
}

    render()
    {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens And Odds</h4>
                <input 
                className="inputLine"
                onChange={(event) => this.userInputHandler(event.target.value)}
                value={this.state.userInput}
                />
                <button  
                className="confirmationButton"
                onClick={() => this.buttonHandler()}> 
                    click me
                </button>
                <span className="resultsBox">
                    Evens: [{this.state.evenArray}]
                </span>
                <span className="resultsBox">
                    Odds: [{this.state.oddArray}]
                </span>
            </div>
        );
    }
}

export default EvenAndOdd;