function App() {
  const course = {
    name: "Half Stack application development",
    parts: [
      { name: "Fundamentals of React", exercises: 10 },
      { name: "Using props to pass data", exercises: 7 },
      { name: "State of a component", exercises: 14 },
    ],
  };
  return (
    <>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total
        totalExercises={
          course.parts[0].exercises +
          course.parts[1].exercises +
          course.parts[2].exercises
        }
      />
    </>
  );
}

function Header({ courseName }) {
  return <h1>{courseName}</h1>;
}

function Content({ parts }) {
  return (
    <>
      <Part part={parts[0].name} exercises={parts[0].exercises} />
      <Part part={parts[1].name} exercises={parts[1].exercises} />
      <Part part={parts[2].name} exercises={parts[2].exercises} />
    </>
  );
}

function Part({ part, exercises }) {
  return (
    <p>
      {part}: {exercises} exercises
    </p>
  );
}

function Total({ totalExercises }) {
  return (
    <p>
      Total number of exercises are:
      {totalExercises}
    </p>
  );
}
export default App;
