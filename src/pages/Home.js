import React from "react";
import Header from "../components/header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  margin: auto;
  overflow: hidden;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Home = () => {
  return (
    <>
      <Header title="Daniel Acevedo Lopez - UNEXPO" />
      <NavBar />
      <Container>
        <p>
          Hi, my name is Daniel Acevedo Lopez, currently I teach the courses
          "Procesos de Fabricación 1" and "Procesos de Fabricación 2" at UNEXPO
          (Universidad Nacional Experimental Politécnica Antonio José de Sucre)
          ViceRectorado Puerto Ordaz.
        </p>
        <h2>Courses</h2>
        <h3>Procesos de Fabricación 1</h3>
        <ul>
          <li>
            Describir los procesos de fabricación mediante deformación plástica
            en frío y en caliente.
          </li>
          <li>Identificar equipos y parámetros de operación.</li>
          <li>Analizar las variables que intervienen en los procesos.</li>
          <li>
            Familiarizar a los estudiantes con los equipos, instalaciones y
            procesos de las industrias metalúrgicas de la zona.
          </li>
        </ul>
        <h3>Procesos de Fabricación 2</h3>
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
        <h2>Contact</h2>
        <p>
          Feel free to reach out to me via email at{" "}
          <a href="mailto:dacevedo@unexpo.edu.ve">dacevedo@unexpo.edu.ve</a> or
          connect with me on{" "}
          <a
            href="https://www.linkedin.com/in/acevedod1974/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          .
        </p>
        <p>Thank you for visiting my GitHub page!</p>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
