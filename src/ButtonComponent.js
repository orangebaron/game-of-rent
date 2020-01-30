
import React from 'react';
import Button from '@material-ui/core/Button';

class ButtonComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    return (
      <Button
        variant="outlined"
        style={{ backgroundColor: 'white' }}
        onClick={() => this.setState({
          clicked: !this.state.clicked,
        })}
      >
        {' '}
Next Player

      </Button>
    );
  }
}

export default ButtonComponent;
