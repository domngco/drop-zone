import React from 'react'
import {
    TimeInnerContainer,
    TimeDigitContainer,
    TimeTypeContainer,
    TimeInfoContainer,
    TimeDigitItem,
} from './styles'

function Counter({ time }) {
    const formatNumber = (t) => {
        return String(t)
            .padStart(2, '0')
            .split('')
            .map((n) => Number(n))
    }
    return (
        <TimeInnerContainer>
            {Object.keys(time).map((item, index) => (
                <TimeInfoContainer key={index}>
                    <TimeDigitContainer>
                        {formatNumber(time[item]).map((n, index) => (
                            <TimeDigitItem key={index}> {n} </TimeDigitItem>
                        ))}
                    </TimeDigitContainer>
                    <TimeTypeContainer>{item}</TimeTypeContainer>
                </TimeInfoContainer>
            ))}
        </TimeInnerContainer>
    )
}

export default Counter
