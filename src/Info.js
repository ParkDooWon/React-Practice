import React, {useState, useEffect} from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    useEffect(() => {
        console.log('Effect');
        console.log(name);
        return () => {
            console.log('clean up');
            console.log(name);
        };
    },[name]);

    const onChangeName = e => {
        setName(e.target.value);
    }

    const onChangeNickname = e => {
        setNickname(e.target.value);
    }

    return (
        <div>
            <div>
                <input  onChange={onChangeName}/>
                <input onChange={onChangeNickname}/>
            </div>
            <div>
                <h2>이름 : {name}</h2>
                <h2>닉네임 : {nickname}</h2>
            </div>
        </div>
    )
}

export default Info;