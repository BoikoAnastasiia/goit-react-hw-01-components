import React from 'react';

import user from './components/otherSources/user.json';
import Profile from './components/Profile/Profile';
import Container from './components/Container/Container';
import Statistic from './components/statistic/Statistic';
import data from './components/statistic/data.json';
import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';
import TransactionHistory from './components/Transaction/Transactions';
import transactions from './components/Transaction/Transaction.json';

const App = () => {
  return (
    <Container>
      <Profile user={user} />
      <Statistic title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory data={transactions} />
    </Container>
  );
};

export default App;
