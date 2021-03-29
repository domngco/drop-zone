import React from 'react'
import ReactDatePicker from 'react-datepicker'
import { ExpiredContainer } from './styles'

function EndDatePicker({ handleOnChange, endDate }) {
    return (
        <ExpiredContainer>
            <div>Select Drop Date</div>
            <ReactDatePicker
                selected={endDate}
                onChange={(date) => handleOnChange(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={30}
                timeCaption="time"
                dateFormat="MM/dd/yyyy h:mm aa"
            />
        </ExpiredContainer>
    )
}

export default EndDatePicker
