import { useState } from 'react'

const Button = ({text, onClick}) => {
  return(
    <button onClick={onClick}>{text}</button>
  )
}
const StatisticLine = (props) => {
  return(
    <p>{props.text}{props.value}</p>
  )
}
const Statistics = (props) => {
  const good = props.arg[0];
  const neutral = props.arg[1];
  const bad = props.arg[2];

  if (good+neutral+bad) {
    return (
      <>
      <h2>Statistics</h2>
      <StatisticLine text="Good: " value={good}/>
      <StatisticLine text="Neutral: " value={neutral}/>
      <StatisticLine text="Bad: " value={bad}/>
      <StatisticLine text="Total Feedbacks: " value={good+neutral+bad}/>
      <StatisticLine text="Average score: " value={((good * 1) + (neutral * 0) + (bad * -1))/(good+neutral+bad)}/>
      <StatisticLine text="Positive score: " value={(good/(good+neutral+bad)*100) + " %"}/>
      </>
    );
  } else {
    return <p>No Feedback given yet.</p>;
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Please give your honest feedback.</h1>
      <Button text="Good" onClick={()=>setGood(good+1)}/>   
      <Button text="Neutral" onClick={()=>setNeutral(neutral+1)}/>
      <Button text="Bad" onClick={()=>setBad(bad+1)}/>
      <Statistics arg={[good, neutral, bad]}/>
    </div>
  )
}

export default App
