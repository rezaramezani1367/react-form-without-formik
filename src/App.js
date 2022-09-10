import "./App.css";
import { Button, Nav, Card, Container, Form, Row, Col } from "react-bootstrap";
import Order from "./components/Order";
import Summary from "./components/Summary";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function App() {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  const [errors, setErrors] = useState({});
  const vlaidate = (values) => {
    let errors1 = {};
    if (!values.size) {
      errors1.size = "Required Size";
    }
    if (!values.crust) {
      errors1.crust = "Required crust";
    }
    if (values.cheese.includes && !values.cheese.values) {
      errors1.cheese = "Required cheese";
    }
    if (values.sauce.includes && !values.sauce.values) {
      errors1.sauce = "Required sauce";
    }
    setErrors(errors1);
  };

  const [formData, setFormData] = useState({
    size: "",
    crust: "",
    cheese: {
      includes: false,
      values: "",
    },
    sauce: {
      includes: false,
      values: "",
    },
    toppingMeat: [],
    toppingNonMeat: [],
    specialInstruction: "",
  });
  useEffect(() => {
    vlaidate(formData);
  }, [formData]);
  return (
    <div>
      <Nav activeKey="/home" className="bg-dark ">
        <Nav.Item>
          <Nav.Link href="/home" className="text-white">
            <h4>Pizza Builder Form</h4>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Container className="my-4">
        <Card className="shadow-lg p-4">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              // vlaidate(formData);
              if (!Object.keys(errors).length) {
                alert(JSON.stringify(formData, null, 2));
              } else {
                Toast.fire({
                  icon: 'error',
                  title: Object.values(errors).map((item)=>item).join('\n')
                })
              }
            }}
          >
            <Row>
              <Col md={8}>
                <Order
                  errors={errors}
                  setErrors={setErrors}
                  setFormData={setFormData}
                  formData={formData}
                  vlaidate={vlaidate}
                />
              </Col>
              <Col md={4}>
                <Summary formData={formData} errors={errors} />
              </Col>
            </Row>
          </Form>
        </Card>
      </Container>
    </div>
  );
}

export default App;
