import { useState } from 'react'

const Statistics = (props) => {
  if (props.total === 0){
    return(
      <div>
        <h4>There are no statistics yet.</h4>
      </div>
    )
  }else{
  return(
  <div>
    <table>
      <tbody>
        <tr>
          <td>Good: {props.good}</td>
        </tr>
        <tr>
          <td>Neutral: {props.neutral}</td>
        </tr>
        <tr>
          <td>Bad: {props.bad}</td>
        </tr>
        <tr>
          <td>Total: {props.total}</td>
        </tr>  
        <tr>
          <td>Average: {props.average}</td>
        </tr>  
        <tr>
          <td>Positive: {props.positive}</td>
        </tr>
      </tbody>
    </table>  
   </div>
  )
}
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h3>Give feedback</h3>
      <Button handleClick={() => setGood(good+1)} text="good"/>
      <Button handleClick={() => setNeutral(neutral+1)} text="neutral"/>
      <Button handleClick={() => setBad(bad+1)} text="bad"/>
      <h3>Statistics</h3>
      <Statistics 
        good={good} 
        neutral={neutral}
        bad={bad}
        total={good+neutral+bad}
        average= {(good - bad)/(good + neutral + bad)} 
				positive= {(good + neutral)/(good + neutral + bad)}
      />
    </div>
  )
  
}

export default App