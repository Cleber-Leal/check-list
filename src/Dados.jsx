import { createContext } from "react";
import { useState } from "react";

const perguntas = [
    {
        categoria: "Equipamentos de Refrigeração",
        id: "gel_temp",
        equipamento: "Geladeira",
        opcoes: [
            {
                id: "gel_temp1",
                pergunta: "Temperatura da geladeira dentro do padrão (2°C a 8°C)?",
                respostaEsperada: "sim",
                acao: "Acionar manutenção para testes e ajustes necessários."
            },
            {
                id: "gel_temp2",
                pergunta: "Condensadora limpa e sem obstruções? Localizada na parte de cima do equipamento (não tentar acessar sem escada adequada)",
                respostaEsperada: "sim",
                acao: "Solicitar manutenção para limpeza"
            },
            {
                id: "gel_temp3",
                pergunta: "Borrachas de vedação íntegras?",
                respostaEsperada: "sim",
                acao: "Substituir as borrachas de vedação. Acionar manutenção."
            },
            {
                id: "gel_temp4",
                pergunta: "Microventilador funcionando?",
                respostaEsperada: "nao",
                acao: "Abrir chamado para manutenção."
            },

        ]
    },

    {
        categoria: "Equipamentos de Refrigeração",
        id: "freezer_temp",
        equipamento: "Freezer",
        opcoes: [
            {
                id: "freezer_temp1",
                pergunta: "Temperatura do freezer adequada (≤ -18°C)?",
                respostaEsperada: "sim",
                acao: "Verificar equipamento e acionar manutenção."
            },
            {
                id: "freezer_temp2",
                pergunta: "Há formação excessiva de gelo?",
                respostaEsperada: "nao",
                acao: "Solicitar manutenção para limpeza"
            },
            {
                id: "freezer_temp3",
                pergunta: "Borrachas de vedação íntegras?",
                respostaEsperada: "sim",
                acao: "Substituir as borrachas de vedação. Acionar manutenção."
            }

        ]
    },

    {
        categoria: "Equipamentos de Cocção",
        id: "coccao",
        equipamento: "Forno - Fritadeira - Chapa",
        opcoes: [
            {
                id: "coccao_termostato",
                pergunta: "Termostato funcionando corretamente? (Barulho de clique ao ligar o equipamento)",
                respostaEsperada: "sim",
                acao: "Acionar manutenção, equipamento sem controle de temperatura"
            },
            {
                id: "coccao_resistencia",
                pergunta: "Resistências/queimadores em bom estado?",
                respostaEsperada: "sim",
                acao: "Solicitar manutenção."
            },
            {
                id: "coccao_gordura",
                pergunta: "Há formação excessiva de gordura?",
                respostaEsperada: "nao",
                acao: "Realizar limpeza imediatamente. Acionar manutenção em caso extremo"
            }

        ]
    },

    {
        categoria: "Equipamentos de Cocção",
        id: "fogao",
        equipamento: "Fogão",
        opcoes: [
            {
                id: "fogao_chamas",
                pergunta: "Chamas uniformes?",
                respostaEsperada: "sim",
                acao: "Acionar manutenção para regular queimadores."
            },
            {
                id: "fogao_queimadores",
                pergunta: "Queimadores em bom estado?",
                respostaEsperada: "sim",
                acao: "Solicitar manutenção."
            }

        ]
    },

    {
        categoria: "Equipamentos de Distribuição",
        id: "buffet",
        equipamento: "Buffet",
        opcoes: [
            {
                id: "buffet_temperatura",
                pergunta: "Temperatura de aquecimento adequada?",
                respostaEsperada: "sim",
                acao: "Acionar manutenção para verificar resistência e termostato."
            },
            {
                id: "balcao_termostato",
                pergunta: "Termostato ou controlador de temperatura funcionando?",
                respostaEsperada: "sim",
                acao: "Solicitar manutenção, equipamento sem controle de temperatura"
            }

        ]
    },
    {
        categoria: "Exaustão e Ventilação",
        id: "exaustor",
        equipamento: "Coifa/Exaustor",
        opcoes: [
            {
                id: "exaustor_funcionando",
                pergunta: "Exaustor funcionando corretamente?",
                respostaEsperada: "sim",
                acao: "Abrir chamado para manutenção."
            },
            {
                id: "exaustor_ruidos",
                pergunta: "Existem ruídos anormais?",
                respostaEsperada: "nao",
                acao: "Inspecionar motor e rolamentos."
            },
            {
                id: "exaustor_filtros",
                pergunta: "Limpeza dos filtros realizada?",
                respostaEsperada: "sim",
                acao: "Realizar limpeza imediatamente."
            }
        ]
    }

]


const equipamentos = [
    {
        "nomeEquipamento": "Chapa Bifeteira Elétrica",
        "recomendacoesLimpeza": [
            "Desligar da tomada ou disjuntor antes da limpeza.",
            "Aguardar o resfriamento total das resistências.",
            "Utilizar pano macio, água e detergente neutro.",
            "Aplicar fina camada de óleo após a limpeza para proteção da superfície."
        ],
        "oQueNaoFazer": [
            "Não utilizar produtos abrasivos.",
            "Não utilizar palha de aço.",
            "Não utilizar escovas metálicas.",
            "Não jogar água diretamente sobre as resistências.",
            "Não utilizar mangueiras ou jatos de água.",
            "Não limpar com o equipamento energizado."
        ],
        "riscosSeNaoSeguir": [
            "Choque elétrico.",
            "Danos às resistências.",
            "Corrosão do aço inox.",
            "Redução da vida útil do equipamento.",
            "Perda da garantia do fabricante."
        ]
    },
    {
        "nomeEquipamento": "Descascador de Batatas DB-10",
        "recomendacoesLimpeza": [
            "Desligar da tomada antes da limpeza.",
            "Remover e higienizar o disco abrasivo.",
            "Lavar as partes removíveis com água e sabão neutro.",
            "Limpar externamente com pano úmido."
        ],
        "oQueNaoFazer": [
            "Não limpar com o equipamento ligado.",
            "Não tocar no disco abrasivo em movimento.",
            "Não utilizar jatos de água diretamente no equipamento.",
            "Não utilizar produtos corrosivos."
        ],
        "riscosSeNaoSeguir": [
            "Acidentes com partes móveis.",
            "Contaminação dos alimentos.",
            "Desgaste prematuro do disco abrasivo.",
            "Danos ao motor."
        ]
    },
    {
        "nomeEquipamento": "Fogão Industrial",
        "recomendacoesLimpeza": [
            "Limpar somente após resfriamento completo.",
            "Utilizar água quente, sabão neutro e pano macio.",
            "Secar completamente os queimadores antes do uso."
        ],
        "oQueNaoFazer": [
            "Não jogar água fria sobre queimadores quentes.",
            "Não utilizar palha de aço.",
            "Não utilizar álcool gel para limpeza.",
            "Não limpar com o equipamento quente."
        ],
        "riscosSeNaoSeguir": [
            "Empenamento dos queimadores.",
            "Oxidação prematura.",
            "Entupimento dos queimadores.",
            "Risco de queimaduras.",
            "Perda de eficiência na combustão."
        ]
    },
    {
        "nomeEquipamento": "Fritadeira Elétrica",
        "recomendacoesLimpeza": [
            "Desligar da tomada ou disjuntor.",
            "Aguardar resfriamento total do óleo e das resistências.",
            "Utilizar pano macio e detergente neutro.",
            "Secar completamente após a limpeza."
        ],
        "oQueNaoFazer": [
            "Não limpar com óleo quente.",
            "Não utilizar produtos abrasivos.",
            "Não utilizar escovas metálicas.",
            "Não utilizar mangueiras próximas às partes elétricas.",
            "Não movimentar as resistências energizadas."
        ],
        "riscosSeNaoSeguir": [
            "Queimaduras graves.",
            "Choque elétrico.",
            "Incêndio devido a óleo inflamável.",
            "Danos às resistências.",
            "Contaminação do óleo."
        ]
    },
    {
        "nomeEquipamento": "Forno Elétrico",
        "recomendacoesLimpeza": [
            "Desligar da rede elétrica.",
            "Aguardar resfriamento total.",
            "Utilizar pano macio, detergente neutro e água."
        ],
        "oQueNaoFazer": [
            "Não jogar água diretamente no equipamento.",
            "Não utilizar jatos de água.",
            "Não utilizar lã de aço.",
            "Não utilizar produtos abrasivos.",
            "Não tocar nas resistências ainda quentes."
        ],
        "riscosSeNaoSeguir": [
            "Choque elétrico.",
            "Queimaduras.",
            "Danos às resistências.",
            "Corrosão do inox.",
            "Redução da eficiência térmica."
        ]
    },
    {
        "nomeEquipamento": "Liquidificador Comercial Inox",
        "recomendacoesLimpeza": [
            "Desconectar da tomada antes da limpeza.",
            "Lavar copo, tampa e componentes removíveis com água e sabão neutro.",
            "Limpar a base com pano úmido."
        ],
        "oQueNaoFazer": [
            "Não sobrecarregar o equipamento",
            "Não deixar ligado por mais de 3min direto",
            "Não utilizar jatos de água diretamente no equipamento.",
            "Não limpar conectado à energia.",
            "Não retirar o copo antes da parada total do equipamento."
        ],
        "riscosSeNaoSeguir": [
            "Luir acoplamento do copo",
            "Choque elétrico.",
            "Queima do motor.",
            "Oxidação de componentes elétricos.",
            "Acidentes com as lâminas."
        ]
    },
    {
        "nomeEquipamento": "Refrigerador Vertical",
        "recomendacoesLimpeza": [
            "Desligar da tomada antes da limpeza.",
            "Utilizar pano macio, água e detergente neutro.",
            "Limpar cuidadosamente as borrachas de vedação.",
            "Manter higienização periódica durante períodos de desuso."
        ],
        "oQueNaoFazer": [
            "Não utilizar produtos abrasivos.",
            "Não utilizar lã de aço.",
            "Não utilizar mangueiras ou jatos de água.",
            "Não remover as gaxetas para limpeza.",
            "Não molhar componentes elétricos."
        ],
        "riscosSeNaoSeguir": [
            "Perda de vedação das portas.",
            "Aumento do consumo de energia.",
            "Falhas no sistema de refrigeração.",
            "Choque elétrico.",
            "Contaminação dos alimentos armazenados."
        ]
    },

    {
        "nomeEquipamento": "Processador de Alimentos",
        "recomendacoesLimpeza": [
            "Desligar da tomada antes de iniciar a limpeza.",
            "Desmontar discos, lâminas e acessórios removíveis.",
            "Lavar as peças removíveis com água morna e detergente neutro.",
            "Secar completamente todas as peças antes da montagem.",
            "Limpar a base do motor apenas com pano úmido."
        ],
        "oQueNaoFazer": [
            "Não limpar o equipamento ligado à energia.",
            "Não sobrecarregar o equipamento",
            "Não utilizar jatos de água diretamente no equipamento.",
            "Não manusear as lâminas sem cuidado.",
            "Não operar o equipamento sem a tampa de proteção."
        ],
        "riscosSeNaoSeguir": [
            "Choque elétrico.",
            "Queima do motor.",
            "Oxidação dos componentes.",
            "Acidentes com cortes nas lâminas.",
            "Contaminação cruzada dos alimentos."
        ]
    },
    {
        "nomeEquipamento": "Freezer Horizontal",
        "recomendacoesLimpeza": [
            "Desligar da tomada antes da limpeza.",
            "Remover todos os produtos armazenados.",
            "Realizar degelo quando houver excesso de gelo.",
            "Limpar com pano macio, água e detergente neutro.",
            "Secar completamente antes de religar o equipamento.",
            "Limpar regularmente as borrachas de vedação."
        ],
        "oQueNaoFazer": [
            "Não utilizar objetos pontiagudos para remover gelo.",
            "Não utilizar produtos abrasivos.",
            "Não utilizar jatos de água ou mangueiras.",
            "Não armazenar produtos quentes diretamente no freezer.",
            "Não bloquear a circulação interna de ar.",
            "Não ligar o equipamento antes da secagem completa."
        ],
        "riscosSeNaoSeguir": [
            "Perfuração do evaporador.",
            "Perda de eficiência de congelamento.",
            "Aumento do consumo de energia.",
            "Choque elétrico.",
            "Perda de alimentos por falha de refrigeração.",
            "Danos permanentes ao sistema de refrigeração."
        ]
    }
]





// {
//     categoria: "Exaustão e Ventilação",
//     itens: [
//         {
//             id: "exaustor",
//             equipamento: "Coifa/Exaustor",
//             pergunta: "Exaustor funcionando corretamente?",
//             respostaEsperada: "sim",
//             acao: "Abrir chamado para manutenção."
//         },
//         {
//             id: "ruidos",
//             equipamento: "Coifa/Exaustor",
//             pergunta: "Existem ruídos anormais?",
//             respostaEsperada: "nao",
//             acao: "Inspecionar motor e rolamentos."
//         },
//         {
//             id: "filtros",
//             equipamento: "Coifa/Exaustor",
//             pergunta: "Limpeza dos filtros realizada?",
//             respostaEsperada: "sim",
//             acao: "Realizar limpeza imediatamente."
//         }
//     ]





export const DadosContext = createContext()

export default function Dados({ children }) {
    const [alertaExibido, setAlertaExibido] = useState(false);
    const [respostas, setRespostas] = useState({});
    const [observacoes, setObservacoes] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [naoConformidades, setNaoConformidades] = useState([]);


    return (
        <DadosContext.Provider value={{ alertaExibido, setAlertaExibido, equipamentos, perguntas, respostas, setRespostas, observacoes, setObservacoes, submitted, setSubmitted, naoConformidades, setNaoConformidades }}>
            {children}
        </DadosContext.Provider>
    )
};