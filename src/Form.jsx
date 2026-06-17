import React, { useState } from "react";
import Return from "./return";
import { useContext } from "react";
import Dados, { DadosContext } from "./Dados";
import { useNavigate } from "react-router-dom";




// const perguntas = [
//     {
//         categoria: "Equipamentos de Refrigeração",
//         itens: [
//             {
//                 id: "gel_temp",
//                 equipamento: "Geladeira",
//                 pergunta: "Temperatura da geladeira dentro do padrão (5°C a 8°C)?",
//                 respostaEsperada: "sim",
//                 acao: "Verificar equipamento e acionar manutenção."
//             },
//             {
//                 id: "gel_condensadora",
//                 equipamento: "Geladeira",
//                 pergunta: "Condensadora limpa e sem obstruções? Localizada na parte de cima do equipamento",
//                 respostaEsperada: "sim",
//                 acao: "Solicitar manutenção para limpeza"
//             },
//             {
//                 id: "gel_borracha",
//                 equipamento: "Geladeira",
//                 pergunta: "Borrachas de vedação íntegras?",
//                 respostaEsperada: "sim",
//                 acao: "Substituir as borrachas de vedação. Acionar manutenção."
//             },
//             {
//                 id: "gel_limpeza",
//                 equipamento: "Geladeira",
//                 pergunta: "Limpeza interna adequada?",
//                 respostaEsperada: "sim",
//                 acao: "Realizar limpeza imediata."
//             },
//             {
//                 id: "gel_vazamento",
//                 equipamento: "Geladeira",
//                 pergunta: "Há vazamentos na geladeira?",
//                 respostaEsperada: "nao",
//                 acao: "Abrir chamado para manutenção."
//             },
//             {
//                 id: "freezer_temp",
//                 equipamento: "Freezer",
//                 pergunta: "Temperatura do freezer adequada (≤ -18°C)?",
//                 respostaEsperada: "sim",
//                 acao: "Verificar sistema de refrigeração. Acionar manutenção."
//             },
//             {
//                 id: "freezer_gelo",
//                 equipamento: "Freezer",
//                 pergunta: "Há formação excessiva de gelo?",
//                 respostaEsperada: "nao",
//                 acao: "Programar degelo do equipamento."
//             },
//             {
//                 id: "freezer_vent",
//                 equipamento: "Freezer",
//                 pergunta: "Ventiladores funcionando corretamente?",
//                 respostaEsperada: "sim",
//                 acao: "Verificar ventiladores e motor. Acionar manutenção."
//             }
//         ]
//     },
//     {
//         categoria: "Equipamentos de Cocção",
//         itens: [
//             {
//                 id: "forno_termostato",
//                 equipamento: "Chapa/Forno/Fritadeira",
//                 pergunta: "Termostato funcionando corretamente?",
//                 respostaEsperada: "sim",
//                 acao: "Interditar equipamento e abrir chamado."
//             },
//             {
//                 id: "forno_resistencia",
//                 equipamento: "Chapa/Forno/Fritadeira",
//                 pergunta: "Resistências/queimadores em bom estado?",
//                 respostaEsperada: "sim",
//                 acao: "Solicitar manutenção."
//             },
//             {
//                 id: "forno_vedacao",
//                 equipamento: "Forno",
//                 pergunta: "Vedação da porta adequada?",
//                 respostaEsperada: "sim",
//                 acao: "Trocar vedação, acionar manutenção"
//             },
//             {
//                 id: "fogao_chamas",
//                 equipamento: "Fogão",
//                 pergunta: "Chamas uniformes?",
//                 respostaEsperada: "sim",
//                 acao: "Regular queimadores."
//             },
//             {
//                 id: "fogao_gas",
//                 equipamento: "Fogão",
//                 pergunta: "Há vazamento de gás?",
//                 respostaEsperada: "nao",
//                 acao: "Interditar imediatamente e acionar manutenção."
//             },
//             {
//                 id: "fogao_acendimento",
//                 equipamento: "Fogão",
//                 pergunta: "Acendimento funcionando?",
//                 respostaEsperada: "sim",
//                 acao: "Solicitar reparo."
//             }
//         ]
//     },
//     {
//         categoria: "Equipamentos de Distribuição",
//         itens: [
//             {
//                 id: "balcao_temp",
//                 equipamento: "Balcão Aquecido",
//                 pergunta: "Temperatura de aquecimento adequada?",
//                 respostaEsperada: "sim",
//                 acao: "Verificar resistência e termostato. Acionar manutenção."
//             },
//             {
//                 id: "balcao_termostato",
//                 equipamento: "Balcão Aquecido",
//                 pergunta: "Termostato funcionando?",
//                 respostaEsperada: "sim",
//                 acao: "Solicitar manutenção."
//             },
//             {
//                 id: "balcao_cuba",
//                 equipamento: "Balcão",
//                 pergunta: "Cubas sem avarias?",
//                 respostaEsperada: "sim",
//                 acao: "Substituir cuba danificada."
//             }
//         ]
//     },

//     {
//         categoria: "Exaustão e Ventilação",
//         itens: [
//             {
//                 id: "exaustor",
//                 equipamento: "Coifa/Exaustor",
//                 pergunta: "Exaustor funcionando corretamente?",
//                 respostaEsperada: "sim",
//                 acao: "Abrir chamado para manutenção."
//             },
//             {
//                 id: "ruidos",
//                 equipamento: "Coifa/Exaustor",
//                 pergunta: "Existem ruídos anormais?",
//                 respostaEsperada: "nao",
//                 acao: "Inspecionar motor e rolamentos."
//             },
//             {
//                 id: "filtros",
//                 equipamento: "Coifa/Exaustor",
//                 pergunta: "Limpeza dos filtros realizada?",
//                 respostaEsperada: "sim",
//                 acao: "Realizar limpeza imediatamente."
//             }
//         ]
//     },

// ];



export default function ChecklistSemanal() {
    // const [respostas, setRespostas] = useState({});
    // const [observacoes, setObservacoes] = useState("");
    // const [submitted, setSubmitted] = useState(false);
    // const [naoConformidades, setNaoConformidades] = useState([]);



    const {setAlertaExibido, perguntas, respostas, setRespostas, observacoes, setObservacoes, submitted, setSubmitted, naoConformidades, setNaoConformidades } = useContext(DadosContext);


    const handleResposta = (id, valor) => {
        setRespostas((prev) => ({
            ...prev,
            [id]: valor
        }));
    };

    const navigate = useNavigate();


    const verificarNaoConformidades = () => {
        const problemas = [];
        perguntas.forEach((grupo) => {
            grupo.opcoes.forEach((item) => {
                const resposta = respostas[item.id];

                if (
                    resposta &&
                    resposta !== item.respostaEsperada
                ) {
                    problemas.push({
                        categoria: grupo.categoria,
                        Equipamento: grupo.equipamento || "N/A",
                        pergunta: item.pergunta,
                        acao: item.acao
                    });
                }
            });
        });

        return problemas;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const problemas = verificarNaoConformidades();
        setAlertaExibido(false)
        setNaoConformidades(problemas);
        setSubmitted(true);
        navigate("/return");
        // Exemplo para futura integração com backend
        /*
        await fetch("/api/checklist", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            respostas,
            observacoes,
            problemas
          })
        });
        */
    };

    const renderEquipamento = (equipamento) => {
        switch (equipamento) {
            case "Geladeira":
                return (
                    <>
                        <img className="img-mt512" src="/mt512.png" alt="Controladora"  />
                        <img src="/microventilador.png" alt="Microventilador" style={{ width: "25%", height: "45%", position: "absolute", bottom: "10px", right: "10px" }} />

                    </>
                );

            case "Fogão":
                return (
                    <>
                        <img src="/queimador.png" alt="Queimador" style={{ width: "35%", height: "75%", position: "absolute", top: "10px", left: "10px",  transform: "rotate(-45deg)" }} />

                    </>
                );

            case "Forno - Fritadeira - Chapa":
                return (
                    <>
                        <img  className="termostato-forno" src="/termostato.png" alt="Termostato"  />
                    </>
                );

            case "Buffet":
                return (
                    <>
                        <img className="img-mt512-buffet" src="/mt512.png"   />
                        <img className="termostato-buffet" src="/termostato.png" alt="Termostato"  />
                    </>
                );

            default:
                return null;
        }
    };


    return (
        <div
            style={{
                maxWidth: "1000px",
                margin: "0 auto",
                padding: "20px",
                backgroundColor: "#E3062C",
                borderRadius: "6px",
                display: "flex",
                flexDirection: "column"

            }}
        >
            <div>
                <h1 className="cabecalho">Checklist Semanal de Equipamentos</h1>
                <img className="logo" src="/logo-branco-300x150.png" alt="logo Apetit" />
            </div>
            <form className="formulario" onSubmit={handleSubmit}>
                {perguntas.map((grupo, i) =>

                (
                    <div style={{ backgroundColor: "white", borderRadius: "6px" }} key={grupo.categoria}>
                        <h2>{grupo.categoria}</h2>
                        <div
                            key={grupo.categoria.id}
                            style={i % 2 === 0 ? {
                                padding: "12px",
                                marginBottom: "10px",
                                border: "1px solid #ddd",
                                borderRadius: "6px",
                                position: "relative",
                                fontWeight: "bold",


                            } :
                                {
                                    padding: "12px",
                                    marginBottom: "10px",
                                    border: "1px solid #ddd",
                                    borderRadius: "6px",
                                    position: "relative",
                                    fontWeight: "bold",

                                }
                            }
                        >

                            <h3 style={{ color: "#E3062C" }}>{grupo.equipamento}</h3>
                            {/* {grupo.itens.map((item) => ( */}
                            {

                                renderEquipamento(grupo.equipamento)}

                            {grupo.opcoes.map((opcao) => (
                                <div>
                                    <p>{opcao.pergunta}</p>

                                    <label>
                                        <input
                                            type="radio"
                                            name={opcao.id}
                                            value="sim"
                                            checked={respostas[opcao.id] === "sim"}
                                            onChange={() =>
                                                handleResposta(opcao.id, "sim")
                                            }
                                        />
                                        Sim
                                    </label>

                                    <label style={{ marginLeft: "20px" }}>
                                        <input
                                            type="radio"
                                            name={opcao.id}
                                            value="nao"
                                            checked={respostas[opcao.id] === "nao"}
                                            onChange={() =>
                                                handleResposta(opcao.id, "nao")
                                            }
                                        />
                                        Não
                                    </label>
                                </div>

                            ))}
                            {/* ))} */}
                        </div>
                    </div>
                ))}

                <h2>Observações</h2>

                <textarea
                    rows={5}
                    style={{
                        width: "100%",
                        padding: "10px"
                    }}
                    value={observacoes}
                    onChange={(e) =>
                        setObservacoes(e.target.value)
                    }
                />

                <br />
                <br />

                <button
                    type="submit"
                    style={{
                        background: "#fff",
                        color: "black",
                        border: "none",
                        padding: "12px 24px",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontWeight: "bold",
                        fontSize: "16px"
                    }}
                >
                    Enviar Checklist
                </button>
            </form>


            {/* <Return submitted={submitted} naoConformidades={naoConformidades} /> */}
        </div>

    );


}

