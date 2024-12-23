import './App.css';
import BlogPage from './components/BlogPage';
import UserInfoContext from './context/UserInfoContext';

function App() {
  const userInfo = {username: 'Admin', isAdmin: true};

  return (
    <div>
      <UserInfoContext.Provider value={userInfo}>
        <BlogPage />
      </UserInfoContext.Provider>
    </div>
  );
}

export default App;
