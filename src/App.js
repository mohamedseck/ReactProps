import './App.css';
import Profile from './Profile/Profile';


function App() {
  const user={fullName:'Mohamed Seck'  ,
              bio:'I am a Full stack software development, I have experience in Finance and Program Manager. ',
              profession:'Senior Program Manager'};
  const handleName=(user)=>{alert(`Your Name's : ${user.fullName}`)};


  return (
          <div className='App'>
            <h1>Profile User</h1>
            <Profile user={user} handleName={handleName}>
            <img src='/assets/images.png' alt='Images' className='avatar'/>
              
            </Profile>
          </div>
  );
}


export default App;
