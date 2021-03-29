import styled from 'styled-components'
import landingPage from './assets/landing.jpg'
import Logo from './components/Logo'
import Countdown from './components/Countdown'

const AppContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: url(${landingPage});
    background-position: left;
    background-repeat: no-repeat;
    background-size: cover;
    display: grid;
    @media screen and (min-width: 600px) {
        grid-template-rows: 1fr 3fr 1fr;
        gap: 10px;
    }
    @media screen and (max-width: 599px) {
        grid-template-rows: 1fr 3fr 0.5fr;
        justify-content: center;
    }
`

function App() {
    return (
        <AppContainer>
            <Logo />
            <Countdown />
        </AppContainer>
    )
}

export default App
