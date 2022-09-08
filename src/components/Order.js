import React, { useState } from "react";
import {
  Button,
  Nav,
  Card,
  Container,
  Form,
  Row,
  Col,
  FloatingLabel,
  Alert,
} from "react-bootstrap";

function Order({ setFormData, formData, errors, vlaidate }) {
  const size = [
    {
      label: "Small",
      description: "10''",
      value: "small",
    },
    {
      label: "Medium",
      description: "12''",
      value: "medium",
    },
    {
      label: "Large",
      description: "14''",
      value: "large",
    },
    {
      label: "X-Large",
      description: "16''",
      value: "xlarge",
    },
  ];

  const crust = [
    {
      label: "BROOKLYN STYLE",
      description: "Hand stretched to be big, thin and perfectly foldable.",
      value: "brooklynstyle",
    },
    {
      label: "HAND TOSSED",
      description: "Garlic-seasoned crust with a rich, buttery taste.",
      value: "handtossed",
    },
    {
      label: "CRUNCHY THIN CRUST",
      description:
        "Thin enough for the optimum crispy to crunchy ratio and square cut to be perfectly sharable.",
      value: "crunchythincrust",
    },
  ];
  const meat = [
    {
      label: "Beef",
      value: "beef",
    },
    {
      label: "Salami",
      value: "salami",
    },
    {
      label: "Pepperoni",
      value: "pepperoni",
    },
    {
      label: "Italian Sausage",
      value: "Italiansausage",
    },
    {
      label: "Premium Chicken",
      value: "Premiumchicken",
    },
  ];
  const nonmeat = [
    {
      label: "Hot Buffalo Sauce",
      value: "hotbuffalosauce",
    },
    {
      label: "Jalapeno Peppers",
      value: "jalapenopeppers",
    },
    {
      label: "Onions",
      value: "onions",
    },
    {
      label: "Banana Peppers",
      value: "bananapeppers",
    },
    {
      label: "Diced Tomatoes",
      value: "dicedtomatoes",
    },
  ];
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>Size & Crust </Card.Title>
          <Card.Text>
            <Form.Group className="my-3">
              <Row className="gy-3">
                {/* size */}

                {size.map((item, index) => (
                  <Col md={3} key={item.label + index}>
                    <Form.Check
                      type="radio"
                      label={item.label}
                      value={item.value}
                      id={item.label}
                      name="size"
                      onChange={() => {
                        setFormData((last) => {
                          return { ...last, size: item.value };
                        });
                      }}
                    />
                  </Col>
                ))}

                {errors.size && <Alert variant="danger">{errors.size}</Alert>}
              </Row>
              <hr />
              <Row className="gy-3">
                {crust.map((item, index) => (
                  <Col md={4} key={item.label + index}>
                    <Form.Check
                      type="radio"
                      label={item.label}
                      value={item.value}
                      id={item.label}
                      name="crust"
                      onChange={() => {
                        setFormData((last) => {
                          return { ...last, crust: item.value };
                        });
                      }}
                    />
                  </Col>
                ))}

                {errors.crust && <Alert variant="danger">{errors.crust}</Alert>}
              </Row>
            </Form.Group>
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
      {/* cheese && sauce */}
      <Card className="my-3">
        <Card.Body>
          <Row>
            <Col md={6}>
              <Card.Title className="d-flex">
                cheese
                <Form.Check
                  type="checkbox"
                  id={`cheese`}
                  className="ms-2"
                  onClick={(e) => {
                    setFormData((last) => {
                      return {
                        ...last,
                        cheese: {
                          values:'',
                          includes: !last.cheese.includes,
                        },
                      };
                    });
                  }}
                />
              </Card.Title>

              {formData.cheese.includes && (
                <>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => {
                      setFormData((last) => {
                        return {
                          ...last,
                          cheese: { ...last.cheese, values: e.target.value },
                        };
                      });
                    }}
                  >
                    <option value="" disabled selected>
                      Select one cheese
                    </option>
                    <option value="Normal">Normal</option>
                    <option value="Light">Light</option>
                    <option value="Extra">Extra</option>
                  </Form.Select>
                  {errors.cheese && (
                    <Alert variant="danger" className="mt-3">
                      {errors.cheese}
                    </Alert>
                  )}
                </>
              )}
            </Col>
            <Col md={6}>
              <Card.Title className="d-flex">
                sauce
                <Form.Check
                  type="checkbox"
                  className="ms-2"
                  onClick={(e) => {
                    setFormData((last) => {
                      return {
                        ...last,
                        sauce: {
                          values:'',
                          includes: !last.sauce.includes,
                        },
                      };
                    });
                  }}
                />
              </Card.Title>
              {formData.sauce.includes && (
                <>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => {
                      setFormData((last) => {
                        return {
                          ...last,
                          sauce: { ...last.sauce, values: e.target.value },
                        };
                      });
                    }}
                  >
                    <option value="" disabled selected>
                      Select one Sauce
                    </option>
                    <option value="tomato">tomato sauce</option>
                    <option value="france">france sauce</option>
                  </Form.Select>

                  {errors.sauce && (
                    <Alert variant="danger" className="mt-3">
                      {errors.sauce}
                    </Alert>
                  )}
                </>
              )}
            </Col>
          </Row>
        </Card.Body>
      </Card>
      {/* Topping */}
      <Card className="my-3">
        <Card.Body>
          <Card.Title>Topping - Meat</Card.Title>
          <Row className="gy-2 mt-3">
            {meat.map((item, index) => (
              <Col>
                <Form.Check
                  type="checkbox"
                  id={item.label}
                  label={item.label}
                  name={item.label}
                  onChange={(e) => {
                    let statusCheck = e.target.checked;
                    if (statusCheck) {
                      setFormData((last) => {
                        return {
                          ...last,
                          toppingMeat: [...last.toppingMeat, item.label],
                        };
                      });
                    } else {
                      setFormData((last) => {
                        let toppingMeat = last.toppingMeat.filter(
                          (item1) => item1 != item.label
                        );

                        return {
                          ...last,
                          toppingMeat: [...toppingMeat],
                        };
                      });
                    }
                  }}
                ></Form.Check>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
      {/* Non Topping */}
      <Card className="my-3">
        <Card.Body>
          <Card.Title>Non Topping - Meat</Card.Title>
          <Row className="gy-2 mt-3">
            {nonmeat.map((item, index) => (
              <Col>
                <Form.Check
                  type="checkbox"
                  id={item.label}
                  label={item.label}
                  onChange={(e) => {
                    let statusCheck = e.target.checked;
                    if (statusCheck) {
                      setFormData((last) => {
                        return {
                          ...last,
                          toppingNonMeat: [...last.toppingNonMeat, item.label],
                        };
                      });
                    } else {
                      setFormData((last) => {
                        let toppingNonMeat = last.toppingNonMeat.filter(
                          (item1) => item1 != item.label
                        );

                        return {
                          ...last,
                          toppingNonMeat: [...toppingNonMeat],
                        };
                      });
                    }
                  }}
                ></Form.Check>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
      {/* special instrution */}
      <Card className="my-3">
        <Card.Body>
          <Card.Title className="mb-3">Special Instruction </Card.Title>
          <Form.Control
            value={formData.specialInstruction}
            as="textarea"
            style={{ height: "100px" }}
            onChange={(e) => {
              setFormData((last) => {
                return { ...last, specialInstruction: e.target.value };
              });
            }}
          />
        </Card.Body>
      </Card>
    </>
  );
}

export default Order;
