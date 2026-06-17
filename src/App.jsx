import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ChecklistSemanal from './Form'
import Return from './return'
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Link
} from "react-router-dom";
import Dados, { DadosContext } from './Dados'
import SideAccordion from './Accordion'
import Menu from './Menu'
import EquipamentoModal from './Modal'
import ModalCompleto from './Modal'



// function App() {

//   const navigate = useNavigate();


//   return (
//     <>
//       <BrowserRouter>
//         <Dados>

//           <Routes>
//             <Route path="/" element={<ChecklistSemanal />} />
//             <Route path="/return" element={<Return />} />
//           </Routes>

//           {/* 
//         <ChecklistSemanal /> */}
//         </Dados>
//       </BrowserRouter>

//     </>
//   )
// }



function App() {
  return (
    <BrowserRouter>
      <Dados>
        <Menu />
        <Routes>
          <Route path="/" element={<ChecklistSemanal />} />
          <Route path="/return" element={<Return />} />
          <Route path="/equipamentos" element={<ModalCompleto />} />
        </Routes>
      </Dados>
    </BrowserRouter>
  )
}

export default App

