import React from 'react';
import styled from 'styled-components';
import {useTodoState} from "../TodoContext";

const TodoHeadBlock = styled.div`  //CSS 컴포넌트를 만들지 않고, CSS Selector를 사용함
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;
    h1 {
        margin: 0;
        font-size: 36px;
        color: #343a40;
    }
    .day {
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
    }
    .tasks-left {
        color: #20c997;
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
    }
`;

function TodoHead() {
    const todos = useTodoState();
    console.log(todos);
    return (
        <TodoHeadBlock>
            <h1>2020.07.04</h1>
            <div className="day">Saturday</div>
            <div className="tasks-left">할일 5개 남음</div>
        </TodoHeadBlock>
    )
}

export default TodoHead;