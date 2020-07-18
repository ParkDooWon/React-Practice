import React, {useState} from 'react';

function EventPractice() {
    const [v, setMe] = useState({name: '', message: ''});

    const handleChange = e => {
        setMe({
            ...v,
            [e.target.name]: e.target.value     //[어떤 변수] -> 괄호 안에 넣은 레퍼런스(어떤 변) 안에 들어있는 실제 값이 key가 된다.
        });                                     //만약 a='hi' 라면 hi: e.target.value가 된다. input의 name에 따라 name 혹은 message가 바뀐다.
        console.log(v.name + ' ' + v.message)
    }

    return (
        <div>
            <h1>이벤트 !</h1>
            <input
                type="text"
                name="name"    //input에 name을 'name'으로 설정하여 이곳에 값을 입력하면 handleChange 함수에서 v의 name이 바뀐다.
                placeholder="사용자 이름"
                value={v.name}
                onChange={handleChange}
            />
            <input
                type="text"
                name="message"     //input에 name을 'message'로 설정하여 이곳에 값을 입력하면 handleChange 함수에서 v의 message가 바뀐다.
                placeholder="아무거나 입력"
                value={v.message}
                onChange={handleChange}
            />
            <button onClick={
                () => {
                    console.log(v.name)
                    alert(v.message + ' ' + v.name);
                    setMe({name:'', message: ''});
                }
            }>확인</button>
        </div>
    )
}

export default EventPractice;