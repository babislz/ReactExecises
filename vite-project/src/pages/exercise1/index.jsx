import { useState } from 'react'
import { Button, PageContainer, LettersContainer } from "./styles"

const Exerc1 = () => {
    const [isVisible, setIsVisible] = useState(true)

    return(
        <>
            <PageContainer>
                <LettersContainer>
                    {isVisible && <h2>Hello!</h2>}
                </LettersContainer>
                <Button onClick={() => setIsVisible(!isVisible)}>Click here</Button>
            </PageContainer>
        </>
    )
}

export default Exerc1

// Faça um botão que altere a visibilidade de um texto dentro da página. visível ou escondido.