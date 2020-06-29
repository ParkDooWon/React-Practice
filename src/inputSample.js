import React, {useState} from 'react';

function InputSample() {
    const [text, setText] = useState('');

    const onChange = e => {
        setText(e.target.value);
    }

    const onReset = () => {
        setText('');
        // document.querySelector('input').value = '';   -> 아래처럼 하지않고 input의 value를 직접 조작할 수도 있다.
    }

    return (
        <div>
            <input onChange={onChange} value={text}/>  {/*input의 value도 업데이트 해준다.*/}
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: {text}</b>
            </div>
        </div>
    )
}

export default InputSample;