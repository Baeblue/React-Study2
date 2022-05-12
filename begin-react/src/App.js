import React from 'react'
import Hello from './Hello'
import Wrapper from './Wrapper'
import Counter from './Counter'
import './App.css'

function App() {
    return (
        <div>
            <Wrapper>
                <Hello name="react" color="red" isSpecial />
                {/* isSpecial={true} === isSpecial */}
                <Hello color="pink" />
            </Wrapper>
            <Counter />
        </div>
    )
}

export default App
