const Header = (props) => {
  return <h1> Course name: {props.course} </h1>
}

const Content = (props) => {
  return (
  <> 
    <Part1 part1={props.part1}/>
    <Part2 part2={props.part2}/>
    <Part3 part3={props.part3}/>
  </>)
}

const Part1 = (props) => {
  return (
  <h3> 
    Part 1: {props.part1.name} <br/>
    Number of Exercises: {props.part1.exercises}
  </h3>)
}

const Part2 = (props) => {
  return (
  <h3> 
    Part 2: {props.part2.name} <br/>
    Number of Exercises: {props.part2.exercises}
  </h3>)
}

const Part3 = (props) => {
  return (
  <h3> 
    Part 3: {props.part3.name} <br/>
    Number of Exercises: {props.part3.exercises}
  </h3>)
}

const Total = (props) => {
  let sum = 0;
  props.total.forEach(function(element) {
  sum += element;
  })
  return (
  <p> 
    Total Number of Exercises: {sum}
  </p>)
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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
    }
  ]

  return (
    <>
      <Header course={course} />
      <Content part1={parts[0]} part2={parts[1]} part3={parts[2]}/>
      <Total total ={[parts[0].exercises, parts[1].exercises, parts[2].exercises]} />
    </>
  )
}

export default App