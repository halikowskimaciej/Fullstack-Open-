import { useState } from 'react'

function App() {

  const [goodCount, setgoodCount] = useState(0);
  const [neutralCount, setneutralCount] = useState(0);
  const [badCount, setbadCount] = useState(0);
  const allCount = goodCount + neutralCount + badCount;
  const allPoints= (goodCount * 1) + (neutralCount * 0) + (badCount * (-1));
  const averageValue = (allPoints / allCount);
  const percentagePositive = ((goodCount / allCount) * 100) + "%";

  const elements = {
    title: "Give feedback",
    stats: "Statistics",
  }

  const buttons = {
    good: "Good",
    neutral: "Neutral",
    bad: "Bad",
  }
  
  return (
    <div>
    <Title title = {elements.title}/>
    <Buttons buttons = {buttons} goodCount = {goodCount} 
    neutralCount = {neutralCount} 
    badCount = {badCount} 
    setgoodCount = {setgoodCount}
    setneutralCount = {setneutralCount}
    setbadCount = {setbadCount}/>
    <TitleStats title = {elements.stats}/>
    <Stats goodCount = {goodCount} neutralCount = {neutralCount} 
    badCount = {badCount} 
    allCount = {allCount} 
    averageValue = {averageValue}
    percentagePositive = {percentagePositive}
    />
    </div>
  )
}

export const Title = (props) => {
  return (
    <h1>{props.title}</h1>
  )
};

export const TitleStats = (props) => {
  return (
    <h3>{props.title}</h3>
  )
};

export const Buttons = (props) => {

  // console.log(goodCount, neutralCount, badCount);

  return (
    <div>
      <Button buttonText={props.buttons.good} buttonValue={props.goodCount} setFunction={props.setgoodCount} />
      <Button buttonText={props.buttons.neutral} buttonValue={props.neutralCount} setFunction={props.setneutralCount} />
      <Button buttonText={props.buttons.bad} buttonValue={props.badCount} setFunction={props.setbadCount} />
    </div>
      )  
}

export const Stats = (props) => {
  if (props.allCount == 0) {
    return <p>No feedback given.</p>
  }
  return(
    <div>
    <table><tbody>
    <StatisticLine text="Good Count" value={props.goodCount}/>
    <StatisticLine text="Neutral Count" value={props.neutralCount}/>
    <StatisticLine text="Bad Count" value={props.badCount}/>
    <StatisticLine text="Average" value={props.averageValue}/>
    <StatisticLine text="Positive" value={props.percentagePositive}/>
    </tbody></table>
    </div>
  )
}


export const StatisticLine = (props) => {
  return(
    <tr>
      <th>{props.text}</th>
      <td>{props.value}</td>
    </tr>

  )
}

export const Button = (props) => {
  return(
    <button onClick= {() => {
      props.setFunction(props.buttonValue + 1);
      }
    }>{props.buttonText}</button>
  )
}


export default App
