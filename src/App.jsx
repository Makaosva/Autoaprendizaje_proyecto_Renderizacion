import { useState } from "react";
import "./App.css";
import { BaseColaboradores } from "./assets/BaseColaboradores";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Listado from "./components/Listado";
import Buscador from "./components/Buscador";

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [buscar, setBuscar] = useState("");
  
  return (
    <>
      <h1>Lista de colaboradores</h1>
      <Container>
        <Row>
          <Col>
            <p>Buscador</p>
            {/*} <Buscador buscar={buscar} setBuscar={setBuscar} />*/}
          </Col>
        </Row>
        <Row>
          <Col>
            <Listado colaboradores={colaboradores} />
          </Col>
          <Col>
            <p>Formulario</p>
            {/*  <Formulario agregarTarea={agregarTarea} />*/}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
