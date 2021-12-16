import './App.css';
import userInfo from './components/Social-profile/user.json';
import SocialProfile from './components/Social-profile/Social-profile';

import data from './components/Statistics/data.json';
import Statistics from './components/Statistics/Statistics';

import FriendList from './components/FriendList/FriendList';
import friends from 'components/FriendList/friends.json';

import TransactionHistory from 'components/Transaction/TransactionHistory';
import items from 'components/Transaction/transactions.json';

function App() {
  return (
    <div className="Container">
      <div className="App">
        <SocialProfile 
          avatar = {userInfo.avatar}
          username = {userInfo.username}
          tag = {userInfo.tag}
          location = {userInfo.location}
          followers = {userInfo.stats.followers}
          views = {userInfo.stats.views} 
          likes = {userInfo.stats.likes}
        />
      </div>
      
      <div className="App app2">
        <Statistics 
          stats = {data} 
          title = " "
        />
      </div>

      <div className="App app3">
        <FriendList friends = {friends}/>
      </div>

      <div className='App app4'>
        <TransactionHistory items = {items}/>
      </div>
  
    </div>
  );
}

export default App;
