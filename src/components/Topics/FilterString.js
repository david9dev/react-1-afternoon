import React, { Component } from 'react'

class FilterString extends Component
{
    constructor()
    {
        super();

        this.state = {
            unfilterdStringArray: ["Mom", "Dad","Joseph", "Jonathan", "Ann-Marie",
        "Tommy", "Karen", "Elizabeth", "Richard", "Rebekah", "David", "Crystal",
        "Melissa", "Charles"],
            filteredStringArray: [],
            userInput:  ""
        }
        this.displayArray = this.displayArray.bind(this);
    }

    displayArray(array, tag)
    {
        let arrayContent = `${tag}: [ `;
        array.forEach((curVal, index) => 
        {
            if(index !== array.length -1)
            arrayContent += `"${curVal}", `
            else
            arrayContent += `"${curVal}" `
        })
        arrayContent += " ]"
        return arrayContent
    }

    filterArray()
    {
        let filteredArray = [];
        this.state.unfilterdStringArray.slice().forEach((curVal,index) =>
        {
            if(curVal.includes(this.state.userInput))
            {
                filteredArray.push(curVal);
            }
        })

        this.setState({
            filteredStringArray: filteredArray
        })

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
            <div className="puzzleBox filterObjectPB">
            
            <h4>
                Filter String
            </h4>

            <span className="puzzleText">
            {this.displayArray(this.state.unfilterdStringArray, "Names")}
            </span>

            <input className="inputLine"
            onChange={(event) => this.updateUserInput(event.target.value)}/>

            <button className="confirmationButton"
            onClick={() => this.filterArray()}>
            button
            </button>

            <span className="resultsBox filterObjectRB">
            {this.displayArray(this.state.filteredStringArray, "Filtered Names")}
            </span>
            
        </div>
        );
    }
}

export default FilterString;