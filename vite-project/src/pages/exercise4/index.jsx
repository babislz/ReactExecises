import { useState } from 'react';
import { Button, PageContainer, LettersContainer } from "./styles";

const Exerc4 = () => {
    const [num, setNum] = useState(0);
    const [color, setColor] = useState('#03e8fc');
    const [contador, setContador] = useState(0);

    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const generateRandomColor = () => {
        const r = randomNumberInRange(0, 255).toString(16).padStart(2, '0');
        const g = randomNumberInRange(0, 255).toString(16).padStart(2, '0');
        const b = randomNumberInRange(0, 255).toString(16).padStart(2, '0');
        return `#${r}${g}${b}`;
    };

    const handleClick = () => {
        setNum(randomNumberInRange(0, 9));
        setColor(generateRandomColor());
        setContador(contador + 1);
    };

    return (
        <>
            <PageContainer style={{
                backgroundColor: color
            }}>
                <LettersContainer>
                    <h1 style={{
                        color: color
                    }}>{contador}</h1>
                </LettersContainer>
                <Button onClick={handleClick}>Click here</Button>
            </PageContainer>
        </>
    );
}

export default Exerc4;


// Faça um botão que altere a cor de fundo de uma div.