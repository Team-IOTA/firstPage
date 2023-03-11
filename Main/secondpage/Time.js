import React from 'react';
 
class Time extends React.Component {
  state={
    curTime : new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit', hour12: false}),
  }
  render(){
    return (
      <div className="time-container">
        <p>Time: {this.state.curTime}</p>
      </div>
    );
  }
}
 
export default Time;