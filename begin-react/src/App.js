import React, { useRef, useState } from 'react'
import UserList from './UserList'
import CreateUser from './CreateUser'

function App() {
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
    })
    const { username, email } = inputs
    const onChange = (e) => {
        const { name, value } = e.target
        setInputs({
            ...inputs,
            [name]: value,
        })
    }
    const [users, setUsers] = useState([
        {
            id: 1,
            username: '짱구',
            email: '짱구@example.com',
        },
        {
            id: 2,
            username: '곰돌이푸',
            email: '곰돌이푸@example.com',
        },
        {
            id: 3,
            username: '잔망루피',
            email: '잔망루피@example.com',
        },
    ])

    const nextId = useRef(4)
    const onCreate = () => {
        const user = {
            id: nextId.current,
            username,
            email,
        }
        // spread 연산자 사용
        // setUsers([...users, user])
        // concat 함수 사용
        setUsers(users.concat(user))

        setInputs({
            username: '',
            email: '',
        })
        nextId.current += 1
    }

    return (
        <>
            <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
            <UserList users={users} />
        </>
    )
}

export default App
