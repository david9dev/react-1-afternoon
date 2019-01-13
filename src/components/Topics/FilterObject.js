import React, { Component } from 'react'

class FilterObject extends Component
{
    constructor()
    {
        super();

        this.state ={
            arrayToFilter: [
                {
                    name: "joe",
                    age: "30",
                    dog: true
                },
                {
                    name: "sperry",
                    age: "40",
                    cat: false,
                },
                {
                    name: "nick",
                    age: "18",
                    elephant: true,
                },
                {
                    name: "david",
                    age: "25",
                    kangaroo: true
                },
            ],
            filteredArray: [],
            userInput: ""
        }
        this.displayArrayText = this.displayArrayText.bind(this);

    }

    displayArrayText(array,tag)
    {
        let objContents = `${tag}: [ `;
        array.forEach((curVal, index) => {
            objContents += "{";
            for (let key in curVal)
            {
                objContents += `${key}: "${curVal[key]}", `;
            }
            if(index !== array.length -1)
            objContents += "}, ";
            else
            objContents += "} ";
        });
        objContents += "]";
        return objContents;
    }

    updateUserInputHandler(event)
    {
        this.setState({
            userInput: event
        })
    }

    filter()
    {
        let array = [];
        this.state.arrayToFilter.slice().forEach((curVal) =>
        {
            for (let key in curVal)
            {
                if(key === this.state.userInput)
                {
                    array.push(curVal);
                }
            }
        })

        this.setState({
            filteredArray: array,
            userInput: ""
        });


    }

    render()
    {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>
                    Filter Object
                </h4>

                <span className="puzzleText">
                    {this.displayArrayText(this.state.arrayToFilter.slice(), "Original")}
                </span>

                <input className="inputLine"
                onChange={(event) => this.updateUserInputHandler(event.target.value) }/>

                <button className="confirmationButton"
                onClick={() => this.filter()}
                >
                    Filter
                </button>
                
                <span className="resultsBox filterObjectRB">
                {this.displayArrayText(this.state.filteredArray.slice(), "Filtered")}
                </span>
                
            </div>
        );
    }
}

export default FilterObject;