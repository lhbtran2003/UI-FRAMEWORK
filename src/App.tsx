import { useState } from "react";
import { Col, Container, Row, ListGroup, Form, InputGroup } from "react-bootstrap";
import "./App.css";
import "react-bootstrap-icons"
import { Apple, Backpack3, BagCheck, Bell, Calendar2Check, ChatRightQuote, Download, Gear, GridFill, QuestionCircle, SearchHeart, Wallet } from "react-bootstrap-icons";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-0 m-0 outfit-uniquifier " style={{ height: "100vh" }}>
      <Row style={{ height: "100vh" }}>
        <Col md={2} className="pt-9 pe-0 d-flex flex-column">
          <h1 className="fs-4 ps-4 text-cyan-600">Sale.</h1>
          <ListGroup className="pt-4">
            <ListGroup.Item className="border-none rounded-none  mb-2 pe-0 ps-10 d-flex gap-2 align-items-center  actived ">
              <GridFill />
              Dashboard
            </ListGroup.Item>
            <ListGroup.Item className="border-none mb-2 pe-0 ps-10 d-flex gap-2 align-items-center title-hover unactive">
              <Backpack3 />
              Lab Test
            </ListGroup.Item>
            <ListGroup.Item className="border-none mb-2 pe-0 ps-10 d-flex gap-2 align-items-center title-hover unactive">
              <Calendar2Check />
              Appointment
            </ListGroup.Item>
            <ListGroup.Item className="border-none mb-2 pe-0 ps-10 d-flex gap-2 align-items-center title-hover unactive">
              <BagCheck />
              Medicine Order
            </ListGroup.Item>
            <ListGroup.Item className="border-none mb-2 pe-0 ps-10 d-flex gap-2 align-items-center title-hover unactive">
              <ChatRightQuote />
              Message
            </ListGroup.Item>
            <ListGroup.Item className="border-none mb-2 pe-0 ps-10 d-flex gap-2 align-items-center title-hover unactive">
              <Wallet />
              Payment
            </ListGroup.Item>
            <ListGroup.Item className="border-none mb-2 pe-0 ps-10 d-flex gap-2 align-items-center title-hover unactive">
              <Gear />
              Settings
            </ListGroup.Item>
          </ListGroup>
          <ListGroup className="mt-auto ">
            <ListGroup.Item className="border-0  mb-2 pe-0 ps-4 d-flex gap-2 align-items-center title-hover text-center">
              <QuestionCircle />
              Help
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={10} className="bg-slate-100 pt-9 ps-5 pe-5">
          <Row>
            <Col md={7}>
              <InputGroup className="border border-1">
                <InputGroup.Text className="border-none bg-white">
                  <SearchHeart className="text-secondary" />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className="rounded-none h-8 border-none no-focus-outline"
                />
              </InputGroup>
            </Col>
            <Col md={3}></Col>
            <Col className="d-flex justify-end">
              <Bell className="bg-white fs-5 h-8 w-8 p-2 me-3 text-secondary"></Bell>
              <img
                className="h-8 w-8 rounded-lg"
                src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/419589282_1792314451191960_3650239086196055711_n.jpg?stp=dst-jpg_s200x200&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeGrRfjKju_UZHhxTSWpDfFBO5BT8EwMtfk7kFPwTAy1-ajJiq1kxpsFCCIx6jipAiM3LLwrTWjD7uf1HFTiO3eT&_nc_ohc=hCPJKOFyD9kQ7kNvgHQLugz&_nc_ht=scontent.fsgn2-5.fna&oh=00_AYDvIXg7PWQkx2bT8Xneb3Oba7imV_IhIGs_oF3NUX4CEA&oe=6680564A"
              ></img>
            </Col>
          </Row>
          <Row>
            <div className="fs-4 mt-4">Sales Information</div>
          </Row>
          <Row className="mt-3">
            <Col>
              <Form.Label htmlFor="inputPassword5" className="children-font">
                Customer Information
              </Form.Label>
              <Form.Control
                aria-describedby="passwordHelpBlock"
                className="rounded-none h-8 no-focus-outline"
                placeholder="Enter Customer Name"
                style={{ fontSize: "13px", color: "#6c757d" }}
              />
            </Col>
            <Col>
              <Form.Label htmlFor="inputPassword5" className="children-font">
                Invoice ID
              </Form.Label>
              <Form.Control
                aria-describedby="passwordHelpBlock"
                className="rounded-none h-8 no-focus-outline"
                placeholder="Enter Invoice ID"
                style={{ fontSize: "13px", color: "#6c757d" }}
              />
            </Col>
            <Col>
              <Form.Label htmlFor="inputPassword5" className="children-font">
                Start Date
              </Form.Label>
              <Form.Control
                aria-describedby="passwordHelpBlock"
                className="rounded-none h-8  no-focus-outline"
                placeholder="Start Date"
                style={{ fontSize: "13px", color: "#6c757d" }}
              />
            </Col>
            <Col>
              <Form.Label htmlFor="inputPassword5" className="children-font">
                End Date
              </Form.Label>
              <Form.Control
                aria-describedby="passwordHelpBlock"
                className="rounded-none h-8 no-focus-outline"
                placeholder="End Date"
                style={{ fontSize: "13px", color: "#6c757d" }}
              />
            </Col>
          </Row>

          <div className="bg-white p-0 ps-2 pe-2 mt-4 children-font">
            {/* Tiêu đề */}
            <Row className="border-bottom ps-0 pe-0 pt-3 pb-3 text-center title-font">
              <Col>
                <Form.Check type="checkbox" label="Invoice ID" />
              </Col>
              <Col>Date</Col>
              <Col>Customer</Col>
              <Col>Payable Amount</Col>
              <Col>Paid Amount</Col>
              <Col>Due</Col>
            </Row>

            {/* Nội dung */}
            <Row className="border-bottom ps-0 pe-0 pt-3 pb-3 text-center">
              <Col>
                <Form.Check
                  type="checkbox"
                  label="#AHGA68"
                  className="children-font-1"
                />
              </Col>
              <Col>23/09/2022</Col>
              <Col>Bảo Trân</Col>
              <Col>$100</Col>
              <Col>$000</Col>
              <Col>$000</Col>
            </Row>
            <Row className="border-bottom ps-0 pe-0 pt-3 pb-3 text-center">
              <Col>
                <Form.Check
                  type="checkbox"
                  label="#AHGA68"
                  className="children-font-1"
                />
              </Col>
              <Col>23/09/2022</Col>
              <Col>Bảo Trân</Col>
              <Col>$100</Col>
              <Col>$000</Col>
              <Col>$000</Col>
            </Row>
            <Row className="border-bottom ps-0 pe-0 pt-3 pb-3 text-center">
              <Col>
                <Form.Check
                  type="checkbox"
                  label="#AHGA68"
                  className="children-font-1"
                />
              </Col>
              <Col>23/09/2022</Col>
              <Col>Bảo Trân</Col>
              <Col>$100</Col>
              <Col>$000</Col>
              <Col>$000</Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
