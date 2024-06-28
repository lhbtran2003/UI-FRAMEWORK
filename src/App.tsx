import React, { useState } from "react";
import { data as initData } from "./data";
import {
  Col,
  Row,
  ListGroup,
  Form,
  InputGroup,
  Button,
  Modal,
} from "react-bootstrap";
import "./App.css";
import "react-bootstrap-icons";
import {
  Apple,
  Backpack3,
  BagCheck,
  Bell,
  Calendar2Check,
  ChatRightQuote,
  Gear,
  GridFill,
  QuestionCircle,
  SearchHeart,
  Wallet,
} from "react-bootstrap-icons";

type Action = "DELETE" | "ADD" | "EDIT" | "COMPLETE" | "SEARCH" | "";

type Order = {
  id: number;
  name: string;
  customer: string;
  amount: number;
  price: number;
  status: boolean;
};

const initOrder = {
  id: 0,
  name: "",
  customer: "",
  amount: 0,
  price: 0,
  status: false,
};

function App() {
  const [data, setData] = useState(initData);
  const [isOpen, setIsOpen] = useState(false);
  const [action, setAction] = useState<Action>("ADD");
  const [selected, setSelected] = useState(initOrder);
  // const [search, setSearch] = useState<Order>(initOrder);

  const handleOpenModal = (action: Action) => {
    setAction(action);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setAction("");
  };

  const handleDelete = () => {
    const newData = data.filter((ord) => ord.id != selected.id);
    setData(newData);
    setIsOpen(false);
    setAction("");
  };

  const handleChangeStatus = () => {
    const newData = data.map((ord) => {
      if (ord.id == selected.id) {
        ord.status = !ord.status;
      }
      return ord;
    });
    setData(newData);
    setIsOpen(false);
    setAction("");
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let key = e.target.name; // lấy thuôc tính
    let value = e.target.value;
    setSelected({ ...selected, [key]: value });
  };

  const handleFormSubmit = () => {
    if (action == "ADD") {
      const newOrd: Order = {
        ...selected,
        id: data.length ? data[data.length - 1].id + 1 : 1,
        status: false,
      };
      setData([...data, newOrd]);
    } else if (action == "EDIT") {
      const newData = data.map((ord) => {
        if (ord.id == selected.id) {
          ord = selected;
        }
        return ord;
      });
      setData(newData);
    } 
    else if (action === "SEARCH") {
      const searched = data.filter((ord) =>
        ord.customer.toLowerCase() == selected.customer
      )
      setData(searched);
    }

    console.log(selected);
    setSelected(initOrder);
    setIsOpen(false);
    setAction("");
    console.log(selected);
  };

  const handleChangeInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSelected(initOrder);
    setSelected({...selected, customer: value});
   
  };

  return (
    <div className="p-0 m-0 outfit-uniquifier " style={{ height: "100vh" }}>
      <Row style={{ height: "100vh" }}>
        <Col md={2} className="pt-9 pe-0 d-flex flex-column fixed-sidebar">
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

        <Col md={10} className="bg-slate-100 pt-9 ps-4 pe-4 main-content">
          <Row>
            <Col md={7}>
              <InputGroup className="border border-1">
                <InputGroup.Text className="border-none bg-white">
                  <SearchHeart
                    className="text-secondary"
                   
                  />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Search  by  customer  name"
                  className="rounded-none h-8 border-none no-focus-outline"
                  name="customerSearch"
                  onChange={handleChangeInputSearch}
                />
              </InputGroup>
              <Button onClick={() => {handleFormSubmit(); setAction("SEARCH")}}>search </Button>
            </Col>
            <Col md={3}></Col>
            <Col className="d-flex justify-end">
              <Bell className="bg-white fs-5 h-8 w-8 p-2 me-3 text-secondary"></Bell>
              <img
                className="h-8 w-8 rounded-lg"
                src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/448730813_865238072308042_4365309928805015054_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHQRM-y8sCTG2cZ46ZafrVJ34wW8r4O0fnfjBbyvg7R-VLWymjURQ9F2ZraF7JUInWATlm6fSpR5usOt2f7Ddmq&_nc_ohc=UbDEo8YmoxMQ7kNvgFfOL7I&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYA_YD_gFnlWjJM7rSAXLC5xCavK9DADfNqne1vM--luzg&oe=668298CF"
              ></img>
            </Col>
          </Row>
          <Row>
            <div className="fs-4 mt-4">New Sales Information</div>
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
                name="customer"
                value={selected.customer}
                style={{ fontSize: "13px", color: "#6c757d" }}
                onChange={handleChangeInput}
              />
            </Col>
            <Col>
              <Form.Label htmlFor="inputPassword5" className="children-font">
                Oder Name
              </Form.Label>
              <Form.Control
                aria-describedby="passwordHelpBlock"
                className="rounded-none h-8 no-focus-outline"
                placeholder="Enter Oder Information"
                name="name"
                value={selected.name}
                style={{ fontSize: "13px", color: "#6c757d" }}
                onChange={handleChangeInput}
              />
            </Col>
            <Col>
              <Form.Label htmlFor="inputPassword5" className="children-font">
                Amount
              </Form.Label>
              <Form.Control
                aria-describedby="passwordHelpBlock"
                className="rounded-none h-8  no-focus-outline"
                placeholder="Enter Amount"
                name="amount"
                value={selected.amount}
                style={{ fontSize: "13px", color: "#6c757d" }}
                onChange={handleChangeInput}
              />
            </Col>
            <Col>
              <Form.Label htmlFor="inputPassword5" className="children-font">
                Price
              </Form.Label>
              <Form.Control
                aria-describedby="passwordHelpBlock"
                className="rounded-none h-8 no-focus-outline"
                placeholder="Enter Price"
                name="price"
                value={selected.price}
                style={{ fontSize: "13px", color: "#6c757d" }}
                onChange={handleChangeInput}
              />
            </Col>
          </Row>
          <Row className="d-flex justify-content-center mt-3">
            <Col className="d-flex justify-content-center">
              <Button
                className="rounded-none bg-gray-800 text-fuchsia-50"
                onClick={() => {
                  handleFormSubmit();
                  setAction("ADD");
                }}
              >
                ADD
              </Button>
            </Col>
          </Row>

          <div className="bg-white p-0 ps-2 pe-2 mt-4 children-font">
            {/* Tiêu đề */}
            <Row className="border-bottom ps-0 pe-0 pt-3 pb-3 text-center title-font">
              <Col>OrderID</Col>
              <Col>OrderName</Col>
              <Col>Customer</Col>
              <Col>Amount</Col>
              <Col>TotalPrice</Col>
              <Col>Status</Col>
            </Row>

            {/* Nội dung */}
            {data.map((order) => (
              <Row className="border-bottom ps-0 pe-0 pt-3 pb-3 text-center">
                <Col>{order.id}</Col>
                <Col>{order.name}</Col>
                <Col>{order.customer}</Col>
                <Col>{order.amount}</Col>
                <Col>
                  {(order.price * order.amount).toLocaleString("vi", {
                    style: "currency",
                    currency: "VND",
                  })}
                </Col>
                <Col className="d-flex gap-3 justify-center">
                  <Button
                    className={`rounded-none  btn-outline-${
                      order.status ? "success" : "warning"
                    } bg-transparent`}
                    onClick={() => {
                      handleOpenModal("COMPLETE");
                      setSelected(order);
                    }}
                  >
                    {order.status ? "V" : "X"}
                  </Button>
                  <Button
                    className="rounded-none btn-outline-info bg-transparent"
                    onClick={() => {
                      setSelected(order);
                      handleOpenModal("EDIT");
                    }}
                  >
                    E
                  </Button>
                  <Button
                    className="rounded-none btn-outline-danger bg-transparent"
                    onClick={() => {
                      setSelected(order);
                      handleOpenModal("DELETE");
                    }}
                  >
                    D
                  </Button>
                </Col>
              </Row>
            ))}
          </div>
        </Col>
      </Row>

      <div>
        {/* Modal xác nhận xóa*/}
        <Modal show={isOpen && action == "DELETE"} backdrop="static">
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>Bạn có chắc chắn muốn xóa đơn hàng này không?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="primary" onClick={handleDelete}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Modal xác nhận đổi trạng thái*/}
        <Modal show={isOpen && action == "COMPLETE"} backdrop="static">
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Bạn có chắc chắn muốn thay đổi trạng thái đơn hàng này không?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="primary" onClick={handleChangeStatus}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Modal chỉnh sửa hoặc thêm */}
        <Modal show={(isOpen && action == "ADD") || action == "EDIT"}>
          <Modal.Header>
            <Modal.Title>Chỉnh sửa đơn hàng</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Label>Order Name</Form.Label>
              <Form.Control type="text" placeholder={selected.name} autoFocus />
              <Form.Label>Customer Name</Form.Label>
              <Form.Control
                type="text"
                placeholder={selected.customer}
                autoFocus
              />
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="text"
                placeholder={selected.amount.toString()}
                autoFocus
              />
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="primary">Save Changes</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default App;
