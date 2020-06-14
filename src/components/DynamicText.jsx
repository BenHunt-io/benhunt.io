import React from 'react';

// Rotates displayed text round-robin style 
class DynamicText extends React.Component {
    constructor(props) {
        super(props);
        this.textList = this.props.textList
        this.index = 0;
        this.state = {
            activeText: this.textList[this.index],
        };
        this.rotateText = this.rotateText.bind(this);
    }

    rotateText() {
        this.index++;
        if (this.textList.length - this.index == 0) {
            this.index = 0;
        }

        this.setState({
            activeText: this.textList[this.index]
        })
    }

    render() {
        return (
            <p onClick={this.rotateText}>{this.state.activeText}</p>
        )
    }
}

// Using NodeJS for exports/imports
// module.exports = {class} or exports.{name} = {class/function} works too
export default DynamicText;