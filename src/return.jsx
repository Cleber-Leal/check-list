import { useContext } from "react";
import { DadosContext } from "./Dados";
import { useEffect, useRef } from "react";



export default function Return() {

    const {alertaExibido, setAlertaExibido, perguntas, respostas, setRespostas, observacoes, setObservacoes, submitted, setSubmitted, naoConformidades, setNaoConformidades } = useContext(DadosContext);
    const ultimoTamanho = useRef(0);

    useEffect(() => {
        if (
            naoConformidades.length > 0 &&
            !alertaExibido
        ) {
            alert(
                "Você possui não conformidades, por favor verificar na aba Não Conformidades"
            );

            setAlertaExibido(true);
        }
    }, [
        naoConformidades,
        alertaExibido,
        setAlertaExibido
    ]);

    return (
        < div
            style={{
                maxWidth: "1000px",
                margin: "0 auto",
                padding: "20px"
            }
            }
        >
            <h1 style={{ lineHeight: '1.1' }}>Checklist Semanal Sugestões</h1>


            {
                submitted && naoConformidades.length === 0 && (
                    <div
                        style={{
                            marginTop: "20px",
                            padding: "20px",
                            backgroundColor: "#e8f5e9",
                            border: "1px solid #4caf50",
                            borderRadius: "8px"
                        }}
                    >
                        ✅ Checklist concluído sem não conformidades.
                    </div>
                )
            }

            {
                submitted && naoConformidades.length > 0 && (

                    <div
                        style={{
                            marginTop: "20px",
                            padding: "20px",
                            backgroundColor: "#fff3cd",
                            border: "1px solid #ffc107",
                            borderRadius: "8px"
                        }}
                    >

                        <h2>Não Conformidades Encontradas</h2>

                        {naoConformidades.map((item, index) => (


                            <div
                                key={index}
                                style={{
                                    marginBottom: "15px",
                                    paddingBottom: "15px",
                                    borderBottom: "1px solid #ddd"
                                }}
                            >
                                <strong>Categoria:</strong> {item.categoria}
                                <br />
                                <strong>Equipamento:</strong> {item.Equipamento}
                                <br />
                                <strong>Problema:</strong> {item.pergunta}
                                <br />
                                <strong>Ação recomendada:</strong> {item.acao}
                            </div>
                        ))}
                    </div>
                )
            }
        </div >
    )
}