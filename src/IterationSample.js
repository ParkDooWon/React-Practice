import React, {useState} from 'react';

const IterationSample = () => {
    const [names, setNames] = useState([
        {id:1, text:'안녕'},
        {id:2, text:'눈'},
        {id:3, text:'사람'},
        {id:4, text:'눈사람'},
    ]);

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onChange = e => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }

    const onClick = () => {
        console.log('clicked')
        const nextNames = names.concat({id:nextId, text: inputText});   //nextNames라는 새로운 객체를 만들어서 붙여줘야 한다.
        setNames(nextNames);                                            //그냥 names.concat()으로 했을 때 동작하지 않았다.
        setNextId(nextId + 1);
        setInputText('');
    }

    const onDoubleClick = (id) => {
        const updatedNames = names.filter(name => name.id !== id);
        setNames(updatedNames);
    }

    const nameList = names.map(name => <li key={name.id} onDoubleClick={() => onDoubleClick(name.id)}>{name.text + ' ' + name.id}</li>);
    //onDoubleClick에서 onDoubleClick={handleDoubleClick} 이 아닌, onDoubleClick={() => handleDoubleClick} 인지 공부해야 한다.

    return (
        <>
            <input value={inputText} onChange={onChange}/>
            <button onClick={onClick}>입력</button>
            <ul>{nameList}</ul>
        </>
    );
}
export default IterationSample;