import './App.css';
import UserProfile from './UserProfile';

function App() {

  const details = {
    name : "Neha ",
    age : 20,
    location : "Surat",
    bio : "Future Coder"
  }

  return(
    <UserProfile  name={details.name} age={details.age} loc={details.location} bio={details.bio}/>
  )
}

export default App;