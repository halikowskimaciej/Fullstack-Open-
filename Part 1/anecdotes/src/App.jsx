import { useState } from 'react'

const App = () => {
  const anecdotes = {
    'If it hurts, do it more often.': 0,
    'Adding manpower to a late software project makes it later!': 0,
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.': 0,
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.': 0,
    'Premature optimization is the root of all evil.': 0,
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.': 0,
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.': 0 ,
    'The only way to go fast, is to go well.': 0
  }
  
  const limit = Math.floor(Object.keys(anecdotes).length)
  const randomIndex = () => Math.floor(Math.random() * limit);
  const [selected, setSelected] = useState(randomIndex());
  const [Votes, setVotes] = useState(anecdotes);
  const maxVotes = Math.max(...Object.values(Votes))
  const maxIndex = Object.keys(Votes).find(key => Votes[key] === maxVotes)

  const newVote = (Votes, selected) => {
    const copy = {...Votes}
    const key = Object.keys(Votes)[selected]
    copy[key] += 1
    setVotes(copy)
  }

  console.log("Limit is: ", limit)
  console.log("Selected index is: ", selected)

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {Object.keys(anecdotes)[selected]}<br/><br/>
      <RandomButton randomIndex = {randomIndex} setSelected = {setSelected}/>
      <VoteButton selected = {selected} Votes = {Votes} setVotes = {setVotes} newVote={newVote}/>
      <h2>Anecdote with the most votes</h2>
      {maxIndex}
      

    </div>
  )
}

export const RandomButton = ({randomIndex, setSelected}) => {
  return(
    <button onClick = {() => setSelected(randomIndex)}> 
      
      Next Anecdote</button>

  )
}

export const VoteButton = ({selected, Votes, setVotes, newVote}) => {
  console.log("Added 1 vote to", Object.keys(Votes)[selected]);
  console.log(Votes);
  return(
    <button onClick={() => newVote(Votes, selected)}> 
      Vote</button>

  )
}

export default App