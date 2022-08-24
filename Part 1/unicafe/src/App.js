import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.action}> {props.text}</button >
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  let all = props.good + props.neutral + props.bad;
  let average = (props.good - props.bad) / all;
  let positive = props.good / all * 100;
  if (all > 0) return (
    <div>
      <h1>statistics</h1>
      <table>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive + '%'} />
      </table>
    </div>
  )
  else return (
    <div>
      <h1>statistics</h1>
      <p>No feedback given</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text={"good"} action={() => setGood(good + 1)} />
      <Button text={"neutral"} action={() => setNeutral(neutral + 1)} />
      <Button text={"bad"} action={() => setBad(bad + 1)} />
      <Statistics {...{ good, neutral, bad }} />
    </div>
  )
}

export default App