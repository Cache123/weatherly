import React from 'react';
import denverData from './denverData';
import Card from './Card';

export default class Hourly extends React.Component {
  constructor() {
    super();
  }

  returnNewArray() {
    return this.props.hourlyData.splice(0, 6);
  }

  render() {
    return(
      <div className="hourly-container">
        {this.props.hourlyData &&
          this.returnNewArray().map((hour) => {
            return (<Card hours={hour.temp.english}/>)
          })
        }
      </div>
    )
  }
}