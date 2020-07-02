import React, { useRef, useState, useMemo, useCallback } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('start counting!')
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = useCallback(
      e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  },[inputs]);
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'a',
      email: 'email1',
      active: true
    },
    {
      id: 2,
      username: 'b',
      email: 'email2',
      active: true
    },
    {
      id: 3,
      username: 'c',
      email: 'email3',
      active: false
    }
  ]);

  const nextId = useRef(4);
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers(users.concat(user));

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  }, [users, username, email]);
  const onRemove = useCallback(id => {
    setUsers(users.filter(user => user.id !== id))
  }, [users]);
  const onToggle = useCallback(id => {  // 완전 탐색으로 모든 users를 확인하여 id를 맞춰본다.
    setUsers(
        users.map(user =>   //배열의 불변성을 유지하면서 배열을 업데이트할 때 map을 사용할 수 있다.
        user.id === id? {...user, active: !user.active} : user)
    )
  }, [users]);
  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
      <>
        <CreateUser
            username={username}
            email={email}
            onChange={onChange}
            onCreate={onCreate}
        />
        <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
        <div>활성 사용자 수: {count}</div>
      </>
  );
}

export default App;