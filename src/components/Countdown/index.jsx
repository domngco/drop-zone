import React, { useState, useEffect, useRef, useCallback } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Counter from './Counter'
import {
    CounterContainer,
    TitleContainer,
    TimeContainer,
    UntilContainer,
    ExpiredContainer,
} from './styles'

const dayMath = 1000 * 60 * 60 * 24
const hourMath = 1000 * 60 * 60
const minuteMath = 1000 * 60

function Countdown() {
    const [expired, setExpired] = useState(false)
    const [time, setTime] = useState({ days: 0, hours: 0, mins: 0, secs: 0 })
    const [endDate, setEndTimeState] = useState(new Date())
    let intervalRef = useRef()

    const updateCountdown = useCallback(() => {
        const endTime = new Date(endDate).setHours(0, 0, 0, 0)
        const currentTime = new Date().getTime()
        const diffDate = endTime - currentTime

        if (diffDate <= 0) {
            setExpired(true)
            setTime({ days: 0, hours: 0, mins: 0, secs: 0 })
            return
        }

        if (endTime) {
            let days = Math.floor(diffDate / dayMath)
            let hours = Math.floor((diffDate % dayMath) / hourMath)
            let mins = Math.floor((diffDate % hourMath) / minuteMath)
            let secs = Math.floor((diffDate % minuteMath) / 1000)
            setTime({ days: days, hours: hours, mins: mins, secs: secs })
        }
    }, [endDate])

    useEffect(() => {
        if (!expired) {
            intervalRef.current = setInterval(() => updateCountdown(), 1000)
        }
        return () => clearInterval(intervalRef.current)
    }, [expired, updateCountdown])

    const handleOnChange = (date) => {
        setEndTimeState(date)
        setExpired(!expired)
    }

    const ExpiredSection = () => {
        return (
            <ExpiredContainer>
                <div>Select Drop Date</div>
                <DatePicker
                    selected={endDate}
                    onChange={(date) => handleOnChange(date)}
                    dateFormat="MM/dd/yyyy"
                />
            </ExpiredContainer>
        )
    }
    return (
        <CounterContainer>
            <TitleContainer>Leezy Boost 103</TitleContainer>
            <TimeContainer>
                <Counter time={time} />
            </TimeContainer>
            <UntilContainer>
                {expired ? <ExpiredSection /> : 'Until Drop'}
            </UntilContainer>
        </CounterContainer>
    )
}

export default Countdown
