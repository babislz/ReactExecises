import { useEffect, useState } from "react";
import { LettersContainer } from "../exercise4/styles";
import { PageContainer } from "./styles";


const Exerc2 = () => {
    const [horario, setHorario] = useState("");
    useEffect(() => {
        setInterval(() => {
            setHorario(new Date().toLocaleTimeString())
        }, 100);
    }, [])

    return(
        <>
            <PageContainer>
                <LettersContainer>
                    <h1>{horario}</h1>
                </LettersContainer>
            </PageContainer>
        </>
    )
}

export default Exerc2;

//Exiba o horário atual, atualizado de segundo em segundo.