import './App.css';
import UserInfoContext from './context/UserInfoContext';

function App() {
  const userInfo = { username: 'Admin', isAdmin: true };

  return (
    <div>
      <UserInfoContext.Provider value={userInfo}></UserInfoContext.Provider>
    </div>
  );
}

export default App;
