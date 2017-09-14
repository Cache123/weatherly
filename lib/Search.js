import React from 'react';

export default class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      inputLocation: '',
      clicked: false,
    };

    this.inputChange = this.inputChange.bind(this);
    this.buttonChange = this.buttonChange.bind(this);
  }


  inputChange(e) {
    this.setState({
      inputLocation: e.target.value,
    });
  }

  buttonChange() {
    this.props.retrieveData();
    this.props.handleButtonClick();
    this.setState({ clicked: true });
  }



  render() {
    return (
      <div>
        <input
          type = 'text'
          placeholder = 'Search'
          value = {this.state.inputLocation}
          onChange = {this.inputChange} />

        <button
          onClick = {this.buttonChange}
          >
          Press Start
        </button>
      </div>
    );
  }

}