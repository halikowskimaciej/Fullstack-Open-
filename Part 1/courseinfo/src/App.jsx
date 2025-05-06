const App = () => {
  const course = {

    name: 'Half Stack application development',
  
  parts: [

    {
      name: 'Fundamentals of React',
      exercises: 10
    },
  
    {
      name: 'Using props to pass data',
      exercises: 7
    },
  
    {
      name: 'State of a component',
      exercises: 14
    },
  
  ]
}

  return (
    <div>
      <Header course = {course.name}/>
      <Content parts = {course.parts}/>
       <Total parts = {course.parts}/>
      
    </div>
  )
}

export const Header = (props) => {

  return (
    <div>
      <h1>{props.course}</h1>
      </div>
  )
}

export const Content = (props) => {

  return (
    <div>
      <Part part1={props.parts[0].name} exercises1 = {props.parts[0].exercises}/>
      <Part part2={props.parts[1].name} exercises2 = {props.parts[1].exercises}/>
      <Part part3={props.parts[2].name} exercises3 = {props.parts[2].exercises}/>
      </div>
  )
}

export const Part = (props) => {
  return (

    <div>
      <h3>{props.part1}</h3> 
      <p>{props.exercises1}</p>
      <h3>{props.part2}</h3> 
      <p>{props.exercises2}</p>
      <h3>{props.part3}</h3> 
      <p>{props.exercises3}</p>
    </div>
  )
}

export const Total = (props) => {
  return (
    <div>
      <h2>Excercises in total: {props.parts[0].exercises + 
      props.parts[1].exercises + 
      props.parts[2].exercises}</h2>
      </div>
  )
}

export default App
