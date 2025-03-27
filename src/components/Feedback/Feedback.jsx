import css from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css.feedback}>
      <h2>Statistics</h2>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
