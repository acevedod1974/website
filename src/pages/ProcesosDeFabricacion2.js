import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import styled from "styled-components";
import procesosDeFabricacion2 from "../assets/images/procesos-de-fabricacion-2.png";

const Container = styled.div`
  width: 80%;
  margin: auto;
  overflow: hidden;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const CourseImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const ProcesosDeFabricacion2 = () => {
  return (
    <>
      <Header title="Procesos de Fabricación 2" />
      <NavBar />
      <Container>
        <CourseImage
          src={procesosDeFabricacion2}
          alt="Procesos de Fabricación 2"
        />
        <h2>Course Description</h2>
        <ul>
          <li>Clasificar las Máquinas Herramientas con arranque de virutas.</li>
          <li>
            Describir los movimientos característicos de las Máquinas
            Herramientas.
          </li>
          <li>
            Describir los procesos de fabricación mediante arranque de virutas.
          </li>
          <li>
            Analizar las variables que intervienen en los procesos de corte.
          </li>
          <li>
            Seleccionar los métodos de fijación y posicionamiento de las piezas
            en las Máquinas Herramientas.
          </li>
          <li>
            Conceptos generales sobre las Máquinas-herramientas con arranques de
            virutas.
          </li>
          <li>Transmisiones y mecanismos en las Máquinas-Herramientas.</li>
        </ul>
      </Container>
      <Footer />
    </>
  );
};

export default ProcesosDeFabricacion2;
