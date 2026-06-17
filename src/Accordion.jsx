import { useState } from "react";


const menu = [
    {
        title: "Chapa",
        children: [
            {
                title: "Principais causas de problemas",
                children: [
                    {
                        problema: "Acúmulo de gordura",
                        causa: "Falta de limpeza periódica",
                    },
                    {
                        problema: "Aquecimento irregular",
                        causa: "Resistência ou queimadores danificados",
                    },
                    {
                        problema: "Corrosão da superfície",
                        causa: "Uso inadequado de produtos químicos",
                    },
                    {
                        problema: "Baixa temperatura",
                        causa: "Falha no termostato",
                    },
                    {
                        problema: "Desgaste excessivo",
                        causa: "Falta de manutenção preventiva",
                    },
                ],
            },
        ],
    },

    {
        title: "Forno",
        children: [
            {
                title: "Principais causas de problemas",
                children: [
                    {
                        problema: "Não aquece",
                        causa: "Resistência ou queimador defeituoso",
                    },
                    {
                        problema: "Temperatura instável",
                        causa: "Termostato desregulado",
                    },
                    {
                        problema: "Vazamento de calor",
                        causa: "Vedação da porta desgastada",
                    },
                    {
                        problema: "Tempo excessivo de cocção",
                        causa: "Baixa eficiência térmica",
                    },
                    {
                        problema: "Acúmulo de resíduos",
                        causa: "Falta de limpeza interna",
                    },
                ],
            },
        ],
    },

    {
        title: "Fritadeira",
        children: [
            {
                title: "Principais causas de problemas",
                children: [
                    {
                        problema: "Óleo não aquece",
                        causa: "Resistência queimada",
                    },
                    {
                        problema: "Superaquecimento",
                        causa: "Falha no termostato",
                    },
                    {
                        problema: "Óleo contaminado",
                        causa: "Troca inadequada do óleo",
                    },
                    {
                        problema: "Entupimento do dreno",
                        causa: "Acúmulo de resíduos",
                    },
                    {
                        problema: "Consumo excessivo de energia",
                        causa: "Equipamento desregulado",
                    },
                ],
            },
        ],
    },

    {
        title: "Geladeira",
        children: [
            {
                title: "Principais causas de problemas",
                children: [
                    {
                        problema: "Não refrigera",
                        causa: "Falha no compressor",
                    },
                    {
                        problema: "Temperatura elevada",
                        causa: "Condensador sujo",
                    },
                    {
                        problema: "Formação excessiva de gelo",
                        causa: "Problema no sistema de degelo",
                    },
                    {
                        problema: "Vazamento de água",
                        causa: "Dreno obstruído",
                    },
                    {
                        problema: "Porta não veda",
                        causa: "Borracha desgastada ou danificada",
                    },
                ],
            },
        ],
    },

    {
        title: "Fogão",
        children: [
            {
                title: "Principais causas de problemas",
                children: [
                    {
                        problema: "Queimador não acende",
                        causa: "Injetor entupido",
                    },
                    {
                        problema: "Chama irregular",
                        causa: "Acúmulo de sujeira nos queimadores",
                    },
                    {
                        problema: "Vazamento de gás",
                        causa: "Conexões ou mangueiras danificadas",
                    },
                    {
                        problema: "Baixo rendimento térmico",
                        causa: "Regulagem inadequada dos queimadores",
                    },
                    {
                        problema: "Oxidação dos queimadores",
                        causa: "Falta de manutenção preventiva",
                    },
                ],
            },
        ],
    },

    {
        title: "Pass Through",
        children: [
            {
                title: "Principais causas de problemas",
                children: [
                    {
                        problema: "Não mantém temperatura",
                        causa: "Resistência defeituosa",
                    },
                    {
                        problema: "Perda de calor",
                        causa: "Vedação comprometida",
                    },
                    {
                        problema: "Temperatura irregular",
                        causa: "Termostato desregulado",
                    },
                    {
                        problema: "Portas desalinhadas",
                        causa: "Desgaste das dobradiças",
                    },
                    {
                        problema: "Acúmulo de resíduos",
                        causa: "Falta de higienização",
                    },
                ],
            },
        ],
    },
];


function AccordionItem({ item, level = 0 }) {
    const [open, setOpen] = useState(false);

    return (
        <div style={{ marginLeft: `${level * 20}px` }}>
            <div
                onClick={() => setOpen(!open)}
                style={open ? {
                    cursor: "pointer",
                    padding: "10px",
                    border: "1px solid #ddd",
                    marginTop: "4px",
                    backgroundColor:"#E3062C",
                    color:"#fff"
                } : {
                    cursor: "pointer",
                    padding: "10px",
                    border: "1px solid #ddd",
                    marginTop: "4px",
                    
                }}
            >
                {item.children && (open ? "▼" : "▶")} {item.title}
            </div>

            {open &&
                item.children?.map((child, index) => (
                    <AccordionItem
                        key={index}
                        item={child}
                        level={level + 1}
                    />
                ))}
        </div>
    );
}
export default function SideAccordion() {
    return (
        <section className="equipamentos">
            <h2>Equipamentos</h2>
            {menu.map((item, index) => (
                <AccordionItem key={index} item={item} />
            ))}
        </section>
    );
}