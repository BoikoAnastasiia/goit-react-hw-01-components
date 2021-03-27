import React from 'react';

import user from './components/otherSources/user.json';
import Profile from './components/Profile/Profile';
import Container from './components/Container/Container';

const App = () => {
  return (
    <Container>
      <Profile user={user} />
    </Container>
  );
};

export default App;
