import React, { useState } from 'react'

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    })

    const { name, nickname } = inputs

    const onChange = (e) => {
        const { value, name } = e.target
        setInputs({
            ...inputs, // 이 부분의 이해가 어렵다. inputs 안에 있는 name과 nickname을 일단 가져와서
            [name]: value, // 바꿀 부분만 바꿔주는 건가? 위에서 가져온 두 값 중 하나는 무조건 갱신되는건가?
        })
    }

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        })
    }

    return (
        <div>
            <input placeholder="이름" name="name" onChange={onChange} value={name} />
            <input placeholder="닉네임" name="nickname" onChange={onChange} value={nickname} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    )
}

export default InputSample
