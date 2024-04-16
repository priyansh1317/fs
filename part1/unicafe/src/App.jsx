import { useState } from 'react'

const Button = ({text, onClick}) => {
  return(
    <button onClick={onClick}>{text}</button>
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
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total Feedbacks: {good+neutral+bad}</p>
      <p>Average score: {(good-bad)/3}</p>
      <p>Positive score: {good/(good+neutral+bad)*100}%</p>
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