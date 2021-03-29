import styled from 'styled-components'

export const LogoContainer = styled.div`
    display: grid;
    @media screen and (min-width: 600px) {
        grid-template-columns: 1fr 150px 30px;
    }
    @media screen and (max-width: 599px) {
        grid-template-columns: 1fr 150px;
    }
    grid-template-rows: 30px 1fr 1fr;
    gap: 10px;
    font-family: Rozha One;
    font-size: 36px;
    color: white;
    letter-spacing: 0.15rem;
    text-transform: uppercase;
`
export const LogoItems = styled.div`
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    display: grid;
    gap: 10px;
    grid-template-rows: 1fr 1fr;
`
export const Item1 = styled.div`
    height: 45px;
    width: 130px;
    background-color: black;
    display: grid;
    justify-self: start;
    justify-items: center;
    align-content: center;
`
export const Item2 = styled.div`
    height: 45px;
    width: 130px;
    background-color: black;
    display: grid;
    justify-self: end;
    justify-items: center;
    align-content: center;
`
