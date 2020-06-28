import React from 'react';

function Hello({color, name, canShow}) {
    return (
        <div style={{color}}>
            {canShow ? <b>**</b> : null}
            {canShow && <b>&&</b>}
            안녕하세요 {name}
        </div>
    )
}

Hello.defaultProps = {
    name: '이름 없음',
    color: 'purple'
}

export default Hello;