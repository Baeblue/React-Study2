import React from 'react'
import Hello from './Hello'
import Wrapper from './Wrapper'
import Counter from './Counter'
import InputSample from './InputSample'
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
            <InputSample />
        </div>
    )
}

export default App
