import React from 'react'
import Hello from './Hello'
import Wrapper from './Wrapper'
import Counter from './Counter'
import InputSample from './InputSample'
import UserList from './UserList'
import './App.css'

function App() {
    return (
        <div>
            <Wrapper>
                <Hello name="react" color="red" isSpecial />
                {/* isSpecial={true} === isSpecial */}
                <Hello color="pink" />
            </Wrapper>
            <Counter /> <br />
            <InputSample /> <br />
            <UserList />
        </div>
    )
}

export default App
