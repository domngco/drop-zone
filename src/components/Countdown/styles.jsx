import styled from 'styled-components'
import 'typeface-roboto'

export const CounterContainer = styled.div`
    display: grid;
    @media screen and (min-width: 600px) {
        grid-template: 1fr 1fr 1fr / 1fr 1fr 155px
        gap: 10px;
    }
    @media screen and (max-width: 599px) {
        grid-template-rows: 1fr 1fr
    }
`
export const TitleContainer = styled.div`
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    display: grid;
    align-self: end;
    justify-self: center;
    font-family: Roboto;
    @media screen and (min-width: 600px) {
        font-size: 48px;
    }
    @media screen and (max-width: 599px) {
        font-size: 24px;
    }
    font-weight: 900;
    color: black;
    letter-spacing: 0.15rem;
    text-transform: uppercase;
`

export const UntilContainer = styled.div`
    grid-row: 3 / 4;
    grid-column: 2 / 3;
    display: grid;
    align-self: top;
    justify-self: center;
    font-family: Roboto;
    font-size: 18px;
    color: black;
    letter-spacing: 0.15rem;
    text-transform: uppercase;
`

export const ExpiredContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    letter-spacing: 0;
    align-items: center;
    justify-items: center;
`

export const TimeContainer = styled.div`
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    display: grid;
    align-self: center;
    justify-self: center;
`

export const TimeInnerContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
    align-self: center;
    justify-self: center;
`

export const TimeInfoContainer = styled.div`
    display: grid;
    grid-template-rows: 2fr 1fr;
    gap: 1rem;
    align-items: center;
    justify-content: center;
`

export const TimeDigitContainer = styled.div`
    font-family: Rozha One;
    font-weight: 400;
    color: #ffffff;
    text-transform: uppercase;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    align-items: center;
    justify-content: center;
`
export const TimeDigitItem = styled.div`
    @media screen and (min-width: 600px) {
        font-size: 48px;
        width: 3.5rem;
    }
    @media screen and (max-width: 599px) {
        font-size: 24px;
        height: 2.5rem;
        width: 2rem;
    }
    background-color: black;
    display: grid;
    align-items: center;
    justify-content: center;
`

export const TimeTypeContainer = styled.div`
    font-family: Roboto;
    @media screen and (min-width: 600px) {
        font-size: 24px;
    }
    @media screen and (max-width: 599px) {
        font-size: 14px;
    }
    font-weight: 900;
    text-transform: uppercase;
    display: grid;
    align-items: center;
    justify-content: center;
`
