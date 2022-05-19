import React from 'react'

function User({ user }) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    )
}

function UserList() {
    const users = [
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
    ]

    return (
        <div>
            {users.map(
                (
                    user, // (user, index) index를 key로 사용해도 무방
                ) => (
                    <User user={user} key={user.id} />
                ),
            )}
        </div>
    )
}

export default UserList
