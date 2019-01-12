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
userInputHandler(evt)
{
    console.log(this.state.userInput);
    this.setState({
        userInput: evt
    });
}

buttonHandler()
{

}

    render()
    {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens And Odds</h4>
                <input 
                className="inputLine"
                onChange={(evt) => this.userInputHandler(evt.target.value)}
                />
                <button  
                className="confirmationButton"
                onClick={() => this.buttonHandler()}> 
                click me</button>
                <span className="resultsBox"></span>
                <span className="resultsBox"></span>
            </div>
        );
    }
}

export default EvenAndOdd;