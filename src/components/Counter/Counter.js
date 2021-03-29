import React from 'react';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Notification from '../Notification';
import styles from './Counter.module.css';

class Counter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (e) => {

    if (e.target.id === "good") {
      this.setState((prevState) => {
        return {
          good: prevState.good + 1
        }
      });
    };

    if (e.target.id === "neutral") {
      this.setState((prevState) => {
        return {
          neutral: prevState.neutral + 1
        }
      });
    };

    if (e.target.id === "bad") {
      this.setState((prevState) => {
        return {
          bad: prevState.bad + 1
        }
      });
    };
  };

  countTotalFeedback = () => {
    return (this.state.good + this.state.neutral + this.state.bad);
  };

  countPositiveFeedbackPercentage = () => {
    let num = (this.state.good / this.countTotalFeedback()) * 100;
    return Math.round(num);
  }

  render() {
    return (
      <>
        <div className={styles.container}>
          <h1 className={styles.mainHeader}>Please leave feedback</h1>
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
          />

          {(this.state.good !== 0) || (this.state.neutral !== 0) || (this.state.bad !== 0) ? <Statistics
            good={ this.state.good }
            neutral={ this.state.neutral }
            bad={ this.state.bad }
            total={ this.countTotalFeedback() }
            positivePercentage={ this.countPositiveFeedbackPercentage() }
          /> : <Notification message={"No feedback given..."} />}
        </div>
        
      </>  
    );
  }
}

export default Counter;


