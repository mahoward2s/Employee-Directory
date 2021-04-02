import React from "react";
import Card from "../Card";

function CardBody({data}) {
  return (
    data.map(employee => (
      <Card
      key={employee.id}
      image={employee.image}  
      name={employee.name}
      dept={employee.department}
      email={employee.email}
      phone={employee.phone}
      />
    ))
  );
}

export default CardBody;
