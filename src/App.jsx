import Student from './Student/Student.jsx'

function App() {
  return(
    <>
      <Student name="Donald Duck" age={30} isStudent={true}/>
      <Student name="Ole Duck" age={5} isStudent={false}/>
      <Student name="Doffen Duck" age={2} isStudent={false}/>
      <Student/>
    </>
  );
}

export default App
