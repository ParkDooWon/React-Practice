import React, {useState} from "react";

function Counter() {
    const [number, setNumber] = useState(0);  // useState 파라미터로 0을 전달 -> 초기값 0으로 설정
    // useState는 2가지 원소를 담은 배열을 반환하는데
    // 첫번째 원소(현재 상태)는 number로 가고, 두번째 원소(Setter 함수)는 setNumber로 간다.

    const onIncrease = () => {
        setNumber(preNumber => preNumber + 1);
    }

    const onDecrease = () => {
        setNumber(preNumber => preNumber - 1);
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;