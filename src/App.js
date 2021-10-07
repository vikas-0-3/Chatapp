import './App.css';
import Chatbox from './components/Chatbox';
import Usersbox from './components/Usersbox';
import my from './UserImages/my.jpeg'
function App() {
  return (
    <>
  
    <div className="row m-0">

      <Usersbox NoOfUsers="1" name="Username" userimage={my} isOnline={false} LastSeen="2021-10-05 11:32" />
      <Chatbox name="Username" userimage={my} isOnline={false} LastSeen="2021-10-05 11:32" />

    </div>

    </>    
  );
}

export default App;
