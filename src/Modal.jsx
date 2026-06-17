import { useState, useContext } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    Typography,
    List,
    ListItem,
    ListItemText,
    Box,
    Chip
} from "@mui/material";

import { IoIosCloseCircle } from "react-icons/io";

import { DadosContext } from "./Dados";

function Modal({ equipamento }) {
    const [open, setOpen] = useState(false);

    if (!equipamento) return null;

    return (
        <>

            <Typography
                className="menu-modal"
                variant="body1"
                sx={{
                    cursor: "pointer",
                    fontWeight: 600,
                    mb: 1,
                    "&:hover": {
                        textDecoration: "underline"
                    }
                }}
                onClick={() => setOpen(true)}
            >

                {equipamento.nomeEquipamento}
            </Typography>

            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                maxWidth="md"
                fullWidth
            >

                <DialogTitle style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
                    {equipamento.nomeEquipamento} <IoIosCloseCircle size={30} style={{ justifySelf: "center" }} onClick={() => setOpen(!open)} />
                </DialogTitle>

                <DialogContent dividers>

                    <Box mb={3}>
                        <Chip
                            label="Recomendações de Limpeza"
                            color="success"
                            sx={{ mb: 1 }}
                        />

                        <List dense>
                            {(equipamento.recomendacoesLimpeza || []).map((item, index) => (
                                <ListItem key={index}>
                                    <ListItemText primary={item} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>

                    <Box mb={3}>
                        <Chip
                            label="O que NÃO fazer"
                            color="warning"
                            sx={{ mb: 1 }}
                        />

                        <List dense>
                            {(equipamento.oQueNaoFazer || []).map((item, index) => (
                                <ListItem key={index}>
                                    <ListItemText primary={item} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>

                    <Box>
                        <Chip
                            label="Riscos se não seguir"
                            color="error"
                            sx={{ mb: 1 }}
                        />

                        <List dense>
                            {(equipamento.riscosSeNaoSeguir || []).map((item, index) => (
                                <ListItem key={index}>
                                    <ListItemText primary={item} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>

                </DialogContent>
            </Dialog>
        </>
    );
}

export default function ModalCompleto() {
    const { equipamentos } = useContext(DadosContext);

    return (
        <>
            {equipamentos?.map((equipamento) => (
                <Modal
                    key={equipamento.nomeEquipamento}
                    equipamento={equipamento}
                />
            ))}
        </>
    );
}

