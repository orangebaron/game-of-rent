import React from 'react';

const instructions = ["Instructions page 1", "Instructions page 2", "..."];

class InstructionBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			instructionsLocation: 0
		};
	}
	nextStep() {
		this.setState({
			instructionsLocation: this.state.instructionsLocation + 1
			// I think this should work; if "this" refers to the new state rather
			// than the InstructionBox, it'll cause problems
		});
	}
	render() {
		return (
			<div class="InstructionBox"
			style={{backgroundColor: "gray"}}>
				<h1>Instructions</h1>
				<p>{instructions[this.state.instructionsLocation]}</p>
			</div>
		);
	}
}

export default InstructionBox;
