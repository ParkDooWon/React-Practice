import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
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
  const onCreate = () => {
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
  };
  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id))
  }
  const onToggle = id => {  // 완전 탐색으로 모든 users를 확인하여 id를 맞춰본다.
    setUsers(
        users.map(user =>   //배열의 불변성을 유지하면서 배열을 업데이트할 때 map을 사용할 수 있다.
        user.id === id? {...user, active: !user.active} : user)
    )
  }
  return (
      <>
        <CreateUser
            username={username}
            email={email}
            onChange={onChange}
            onCreate={onCreate}
        />
        <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      </>
  );
}

export default App;