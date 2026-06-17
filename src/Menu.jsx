import { Link } from "react-router-dom";

export default function Menu() {

    return (
        <nav className="menu" style={{ display: "flex", justifyContent: "center", paddingTop: "20px", gap: "20px", backgroundColor: "#E3062C", borderRadius: "0 0 10px 10px", marginBottom: "10px" }}>
            <ul>
                <li>
                    <Link className='link checklist-link' to="/" style={{ marginBottom: "20px" }}>
                        Retornar para Checklist
                    </Link>
                </li>
                <li>
                    <Link className="link return-link" to="/return" style={{ marginBottom: "20px" }}>
                        Ver Não Conformidades
                    </Link>
                </li>

                <li>
                    <Link className='link equipamentos-link' to="/equipamentos" style={{ marginBottom: "20px" }}>
                        Ver Equipamentos
                    </Link>
                </li>
            </ul>
        </nav>
    )
}