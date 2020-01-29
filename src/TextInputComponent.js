<<<<<<< HEAD
import React from "react";
import { render } from "react-dom";
import { TransitionMotion, spring } from "react-motion";
=======
import React from 'react';
import { render } from 'react-dom';
import { TransitionMotion, spring } from 'react-motion';
>>>>>>> reconnecting to repo
import './text-input-style.css';

class TextInputComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: (props.locked && props.active) || false,
<<<<<<< HEAD
      value: props.value || "",
      error: props.error || "",
      label: props.label || "Enter a Name For Your Player"
=======
      value: props.value || '',
      error: props.error || '',
      label: props.label || 'Enter a Name For Your Player',
>>>>>>> reconnecting to repo
    };
  }

  changeValue(event) {
<<<<<<< HEAD
    const value = event.target.value;
    this.setState({ value, error: "" });
=======
    const { value } = event.target;
    this.setState({ value, error: '' });
>>>>>>> reconnecting to repo
  }

  handleKeyPress(event) {
    if (event.which === 13) {
      this.setState({ value: this.props.predicted });
    }
  }

  render() {
<<<<<<< HEAD
    const { active, value, error, label } = this.state;
    const { predicted, locked } = this.props;
    const fieldClassName = `field ${(locked ? active : active || value) &&
      "active"} ${locked && !active && "locked"}`;

    return (
      <div className={fieldClassName}>
        {active &&
          value &&
          predicted &&
          predicted.includes(value) && <p className="predicted">{predicted}</p>}
=======
    const {
      active, value, error, label,
    } = this.state;
    const { predicted, locked } = this.props;
    const fieldClassName = `field ${(locked ? active : active || value)
      && 'active'} ${locked && !active && 'locked'}`;

    return (
      <div className={fieldClassName}>
        {active
          && value
          && predicted
          && predicted.includes(value) && <p className="predicted">{predicted}</p>}
>>>>>>> reconnecting to repo
        <input
          id={1}
          type="text"
          value={value}
          placeholder={label}
          onChange={this.changeValue.bind(this)}
          onKeyPress={this.handleKeyPress.bind(this)}
          onFocus={() => !locked && this.setState({ active: true })}
          onBlur={() => !locked && this.setState({ active: false })}
        />
<<<<<<< HEAD
        <label htmlFor={1} className={error && "error"}>
=======
        <label htmlFor={1} className={error && 'error'}>
>>>>>>> reconnecting to repo
          {error || label}
        </label>
      </div>
    );
  }
}

render(
  <TextInputComponent
    id={1}
    label="Field label"
    predicted="California"
    locked={false}
    active={false}
  />,
<<<<<<< HEAD
  document.getElementById("root")
=======
  document.getElementById('root'),
>>>>>>> reconnecting to repo
);

export default TextInputComponent;
