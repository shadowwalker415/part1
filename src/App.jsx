import { useState } from "react";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [buttonId, setButtonId] = useState("");
  const [allVotes, setAllVotes] = useState(0);
  const [total, setTotal] = useState(0);

  function handleFeedback(buttonId) {
    setButtonId(buttonId);
    setTotal((total) => total + 1);
    if (buttonId === "good") {
      setGood((good) => good + 1);
      setAllVotes((votes) => votes + 1);
    }
    if (buttonId === "bad") {
      setBad((bad) => bad + 1);
      setAllVotes((votes) => votes - 1);
    }
    if (buttonId === "neutral") {
      setNeutral((neutral) => neutral + 1);
    }
  }

  const calAverageScore = function (allVotes, total) {
    if (total === 0) return 0;
    return allVotes / total;
  };

  const calcPositiveFeedback = function (goodVotes, total) {
    if (total === 0) return 0;
    return (goodVotes / total) * 100;
  };

  let averageScore = +calAverageScore(allVotes, total).toFixed(1);
  let positiveFeedback = +calcPositiveFeedback(good, total).toFixed(1);

  return (
    <>
      <FeedBack handleFeedback={handleFeedback} />
      <Statistic
        good={good}
        neutral={neutral}
        bad={bad}
        averageScore={averageScore}
        positiveFeedback={positiveFeedback}
        total={total}
      />
    </>
  );
}

function FeedBack({ handleFeedback }) {
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleFeedback={handleFeedback} text="good" />
      <Button handleFeedback={handleFeedback} text="neutral" />
      <Button handleFeedback={handleFeedback} text="bad" />
    </div>
  );
}

function Button({ handleFeedback, text }) {
  const handleClick = (e) => {
    const buttonId = e.target.name;
    handleFeedback(buttonId);
  };

  return (
    <button name={text} onClick={handleClick}>
      {text}
    </button>
  );
}

function Statistic({
  good,
  neutral,
  bad,
  averageScore,
  positiveFeedback,
  total,
}) {
  if (total === 0) {
    return (
      <>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </>
    );
  }
  return (
    <>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={total} />
          <StatisticLine text="average" value={averageScore} />
          <StatisticLine text="positive" value={positiveFeedback} />
        </tbody>
      </table>
    </>
  );
}

function StatisticLine({ text, value }) {
  if (text === "positive") {
    return (
      <>
        <tr>
          <th>{text}</th>
          <td>{value}%</td>
        </tr>
      </>
    );
  }
  return (
    <>
      <tr>
        <th>{text}</th>
        <td>{value}</td>
      </tr>
    </>
  );
}

export default App;
