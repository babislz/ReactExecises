import { useState } from "react";
import { LettersContainer, PageContainer } from "../exercise4/styles";


const Exerc5 = () => {
    const [name, setName] = useState("")

    return(
        <>
            <PageContainer>
                <LettersContainer style={{
                    height: "fit-content",
                    textWrap: "wrap",
                }}>
                    <div>
                        {name === "" && (
                            <h3>Digite seu nome:</h3>
                        )}
                        {name !== "" && (
                            <h2>Olá, seja bem vindx {name}!</h2>
                        )}
                    </div>
                </LettersContainer>
                <LettersContainer>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        textAlign: 'center',
                        width: '50%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <label htmlFor="inputArea">Insira o seu Nome</label>
                        <input style={{
                            padding: '8px',
                            width: '80%',
                            border: '1px solid gray',
                            borderRadius: '10px'
                        }} id="inputArea" type="text" onChange={(e) => setName(e.target.value)} autoFocus></input>
                    </div>
                </LettersContainer>
            </PageContainer>
        </>
    )
}

export default Exerc5;

//Faça um campo de texto que exiba uma mensagem de bem-vindo com o nome inserido, alterando o estado.