import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className={styles.container}>
      <button type="button" id="good" className={styles.greenBtn} onClick={onLeaveFeedback}>Good</button>
      <button type="button" id="neutral" className={styles.orangeBtn} onClick={onLeaveFeedback}>Neutral</button>
      <button type="button" id="bad" className={styles.redBtn} onClick={onLeaveFeedback}>Bad</button>
    </div>
  )
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;