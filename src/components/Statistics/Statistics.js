import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
      <div className={styles.statFlexContainer}>
        <div className={styles.statBlockContainer}>
          <h2 className={styles.secondHeader}>Statistics</h2>
          <ul className={styles.statList}>
            <li>Good: { good }</li>
            <li>Neutral: { neutral }</li>
            <li>Bad: { bad }</li>
            <li>Total: { total }</li>
          </ul>
        </div>  
        <div className={styles.statBlockContainer}>
          <p className={styles.positivePercentNumb}>{ positivePercentage }<span className={styles.positivePercent}>%</span></p>
          <p className={styles.positivePercentLabel}>Positive feedback</p>
        </div>
      </div>
  )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}


export default Statistics;

