import user from './otherSources/user.json'
import Profile from './components/Profile'

const App = () => {
  return (
    <div>
      <Profile user = {user} />
    </div>
  );
}

export default App;
