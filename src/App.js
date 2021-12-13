import './App.css';
import userInfo from './components/social-profile/user.json';
import SocialProfile from './components/social-profile/social-profile';

function App() {
  return (
    <div className="App">
      <SocialProfile 
      // {...userInfo}
        avatar = {userInfo.avatar}
        username = {userInfo.username}
        tag = {userInfo.tag}
        location = {userInfo.location}
        followers = {userInfo.stats.followers}
        views = {userInfo.stats.views}
        likes = {userInfo.stats.likes}
      />
    </div>
  );
}

export default App;
