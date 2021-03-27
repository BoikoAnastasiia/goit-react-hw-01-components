import React from 'react';

import user from './components/otherSources/user.json';
import Profile from './components/Profile/Profile';
import Container from './components/Container/Container';
import Statistic from './components/statistic/Statistic';
import data from './components/statistic/data.json';

const App = () => {
  return (
    <Container>
      <Profile user={user} />
      <Statistic title="Upload stats" stats={data} />
    </Container>
  );
};

export default App;
