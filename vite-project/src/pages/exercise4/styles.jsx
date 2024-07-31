import styled from 'styled-components';

const Button = styled.button`
    padding: 10px;
    width: 8%;
    height: 5%;
`

const PageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: aqua;
    flex-direction: column;
    gap: 30px;
`

const LettersContainer = styled.div`
    width: 40vw;
    height: 30vh;
    background-color: white;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export { Button, PageContainer, LettersContainer };