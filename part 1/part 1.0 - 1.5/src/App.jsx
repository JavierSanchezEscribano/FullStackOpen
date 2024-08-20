const Header = (props) => {
  console.log(props);
  const name = props.course.name
  return (
    <header>
      <h1>{name}</h1>
    </header>
  )
}

const Part = (props) => {
  console.log(props);
  const name = props.part.name
  const exercises = props.part.exercises

  return (
    <div>
      <p>
        {name} {exercises}
      </p>
    </div>
  )
}

const Content = (props) => {
  console.log(props);
  const part1 = props.course.parts[0]
  const part2 = props.course.parts[1]
  const part3 = props.course.parts[2]
  return (
    <div>
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
    </div>
  )
}

const Total = (props) => {
  console.log(props);
  const exercise1 = props.course.parts[0].exercises
  const exercise2 = props.course.parts[1].exercises
  const exercise3 = props.course.parts[2].exercises

  return (
    <div>
      <p>Number of exercises {exercise1 + exercise2 + exercise3}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App;
