const Course = ({course}) =>{
    return(
      <div>
      <Header course={course.name}/>
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
      </div>
  
    )
  }

  const Header = ({ course }) => <h1>{course}</h1>

  const Total = ({ parts }) => {
    return <p><b>Total of {parts.reduce((sum, part) => sum + part.exercises,0)} exercises</b></p>
    
  }
  
  const Content = ({ parts }) => {
    return(
      <div>
        {
          parts.map((part)=>{
            return(
            <Part key={part.id} part={part} />
          )}
        )}
      </div>
    )
  }

  const Part = ({ part }) => 
    <p>
      {part.name} {part.exercises}
    </p>

export default Course
