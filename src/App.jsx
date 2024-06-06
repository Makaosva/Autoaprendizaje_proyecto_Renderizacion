import { useState } from "react";
import "./App.css";
import { BaseColaboradores } from "./assets/BaseColaboradores.js";
import { Container, Row, Col } from "react-bootstrap";
import Listado from "./components/Listado";

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);

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
          <Col md={6} sm={12}>
            <Listado colaboradores={colaboradores} />
          </Col>
          <Col md={6}>
            <p>Formulario</p>
            {/*  <Formulario agregarTarea={agregarTarea} />*/}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
