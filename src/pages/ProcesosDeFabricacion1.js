import React from "react";
import Header from "../components/header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import styled from "styled-components";
import procesosDeFabricacion1 from "../assets/images/procesos-de-fabricacion-1.png";

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

const ProcesosDeFabricacion1 = () => {
  return (
    <>
      <Header title="Procesos de Fabricación 1" />
      <NavBar />
      <Container>
        <CourseImage
          src={procesosDeFabricacion1}
          alt="Procesos de Fabricación 1"
        />
        <h2>Course Description</h2>
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
      </Container>
      <Footer />
    </>
  );
};

export default ProcesosDeFabricacion1;
