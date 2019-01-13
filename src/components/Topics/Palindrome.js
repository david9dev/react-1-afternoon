import React, { Component } from 'react'

class Palindrome extends Component
{
    constructor()
    {
        super();

        this.state = {
            palindrome: undefined,
            firstRun: false,
            userInput: ""
        }

        this.displayStuff = this.displayStuff.bind(this);
    }

    displayStuff()
    {
        if(this.state.firstRun)
        {
        return `Palindrome: ${this.state.palindrome}`;
        }
        else
        {
        return `Palindrome: `;
        }
    }

    checkPalindrome()
    {
        let charArray = this.state.userInput.split("")
        let reveresed = charArray.reverse();
        let outCome;

        if(this.state.userInput === reveresed.join(""))
        {
            outCome = true;
            //console.log(outCome)
        }
        else
        {
            outCome = false;
            //console.log(outCome)
        }

        this.setState({
            palindrome: outCome,
            firstRun: true
        })
        //console.log(this.state.Palindrome)

        
    }

    updateUserInput(event)
    {   
        this.setState({
            userInput: event
        })
    }
    render()
    {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>
                    Palindrome
                </h4>

                <input className="inputLine"
                onChange={(event) => this.updateUserInput(event.target.value)}/>

                <button className="confirmationButton"
                onClick={() => this.checkPalindrome()}>
                    Check
                </button>

                <span className="resultsBox">
                    {this.displayStuff()}
                </span>
            </div>
        );
    }
}

export default Palindrome;