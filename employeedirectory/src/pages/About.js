import React, { useState } from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import SearchForm from "../components/SearchForm";
import CardBody from "../components/CardBody";
import employees from "../employeedata/employees.json"


function About() {
  const[searchTerm, setSearchTerm] = useState("");
  const[sorted, setSorted] = useState(false);
  const[data, setEmployees] = useState(employees);

  function handleSearchTerm(event) {
    setSearchTerm(event.target.value)
  }

  function handleSortByName() {
    if (!sorted) {
      setEmployees(data.sort((a, b) => (a.name > b.name) ? 1 :-1));
      setSorted(true);
    } else {
      setEmployees(data.sort((a, b) => (a.name > b.name) ? -1 : 1));
      setSorted(false);
    }
  }

  const filteredEmployees = data.filter(employee => employee.name.toLowerCase().startsWith(searchTerm.toLowerCase()));

  return (
    <div>
      <Hero backgroundImage="https://www.scottsdirectories.com/wp-content/uploads/2017/10/BusinessDirectory.jpg">
        <h1>Employee Directory</h1>
        <h2>Find Your Workers</h2>
        <Container style={{ minHeight: "80%" }}>
        <SearchForm
         onSearch={handleSearchTerm}
         searchTerm={searchTerm}
         handleSortByName={handleSortByName}
        />
        </Container>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Employees</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <CardBody data={filteredEmployees}
          />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
