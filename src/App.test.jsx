import { render } from '@testing-library/react'
import App from './App'
import Counter from './components/Countdown/Counter'

describe('App Test', () => {
    test('rendering App does not crash', () => {
        const { getByText } = render(<App />)
        getByText('Drop')
        getByText('Zone')
        getByText('Leezy Boost 103')
    })
})

describe('Counter Test', () => {
    test('rendering Counter', () => {
        let time = { days: 10, hours: 10, mins: 10, secs: 10 }
        const { getByText } = render(<Counter time={time} />)
        getByText('days')
        getByText('hours')
        getByText('mins')
        getByText('secs')
    })
})
