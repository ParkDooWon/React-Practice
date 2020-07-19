import React, {useState} from 'react';

function EventPractice() {
    const [v, setMe] = useState({name: '', message: ''});

    const handleChange = e => {
        const next = {      // 객체를 하나 만들어서
            ...v,           // v의 값을 그대로 복사한 후,
            [e.target.name]: e.target.value //원하는 부분의 값을 덮어쓴다.
        }
        setMe(next);
    }

    const handleClick = () => {
        alert(v.name + ' ' + v.message);
        setMe({
            name: '',
            message: ''
        })
    }

    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            handleClick();
        }
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
                onKeyPress={handleKeyPress}
            />
            <button onClick={handleClick}>확인</button>
        </div>
    )
}

export default EventPractice;