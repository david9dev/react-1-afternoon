import React, { Component } from 'react'

class Sum extends Component
{
    constructor()
    {
        super();
        this.state = {
            num1: 0,
            num2: 0,
            sum: null
        }
    }

    updateNum(event, tag)
    {
        if(tag === 1)
        {
            this.setState({
                num1: event
            })
        }
        else{
            this.setState({
                num2: event
            })
        }
    }
    add()
    {
        let copyNum1 = parseInt(this.state.num1, 10);
        let copyNum2 = parseInt(this.state.num2, 10);
        let copySum = copyNum1 + copyNum2;

        this.setState({
            sum: copySum
        })
    }
    render()
    {
        return (
            <div className="puzzleBox sumPB">
            <h4>
                Sum
            </h4>
            <input className="inputLine"
            onChange={(event) => this.updateNum(event.target.value , 1)}/>
            <input className="inputLine"
            onChange={(event) => this.updateNum(event.target.value , 2)}/>
            <button className="confirmationButton"
            onClick={() => this.add()}>
                Add
            </button>
            <span className="resultsBox">
                {this.state.sum}
            </span>
            </div>
        );
    }
}

export default Sum;