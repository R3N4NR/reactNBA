import { Routes, Route } from "react-router-dom";
import MenuSuperior from "./components/MenuSuperior";
import InclusaoTimes from "./components/InclusaoTimes";
import Manutencaotimes from "./components/Manutencaotimes";
import Resumotimes from "./components/Resumotimes";
import { Fragment } from "react";

const App = () => {
  return (
    <Fragment>
      <MenuSuperior />
      <Routes>
        <Route path="/" element={<InclusaoTimes />} />
        <Route path="manut" element={<Manutencaotimes />} />
        <Route path="resumo" element={<Resumotimes />} />
      </Routes>      
    </Fragment>
  );
}

export default App;
