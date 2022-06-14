import React, { useRef, useState, useMemo } from 'react'
import UserList from './UserList'
import CreateUser from './CreateUser'

function countActiveUsers(users) {
    console.log('활성 사용자 수를 세는 중...')
    return users.filter((user) => user.active).length
}

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
            active: true,
        },
        {
            id: 2,
            username: '곰돌이푸',
            email: '곰돌이푸@example.com',
            active: false,
        },
        {
            id: 3,
            username: '잔망루피',
            email: '잔망루피@example.com',
            active: false,
        },
    ])

    const nextId = useRef(4)
    const onCreate = () => {
        const user = {
            id: nextId.current,
            username,
            email,
        }
        // 배열에 항목을 추가하는 방법 2가지
        // 1. spread 연산자 사용
        // setUsers([...users, user])
        // 2. concat 함수 사용
        setUsers(users.concat(user))

        setInputs({
            username: '',
            email: '',
        })
        nextId.current += 1
    }

    const onRemove = (id) => {
        setUsers(users.filter((user) => user.id !== id))
    }

    const onToggle = (id) => {
        setUsers(users.map((user) => (user.id === id ? { ...user, active: !user.active } : user)))
    }

    const count = useMemo(() => countActiveUsers(users), [users])

    return (
        <>
            <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
            <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
            <div>활성사용자 수: {count}</div>
        </>
    )
}

export default App
