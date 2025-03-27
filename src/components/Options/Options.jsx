import css from "./Options.module.css";

const Options = ({ onLeaveFeedback, total, onReset }) => {
  return (
    <div className={css.options}>
      <h2>
        Please leave your feedback about our service by selecting one of the
        options below.
      </h2>
      <div className={css.buttons}>
        <button onClick={() => onLeaveFeedback("good")}>Good</button>
        <button onClick={() => onLeaveFeedback("neutral")}>Neutral</button>
        <button onClick={() => onLeaveFeedback("bad")}>Bad</button>
      </div>
      {total > 0 && (
        <button className={css.reset} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
