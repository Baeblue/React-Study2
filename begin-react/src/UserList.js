import React from 'react'

function User({ user }) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    )
}

function UserList({ users }) {
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
