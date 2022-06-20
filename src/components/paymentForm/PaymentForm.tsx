import React from "react";
import Cards from "react-credit-cards";
import styles from "./PaymentForm.module.css";
import "react-credit-cards/es/styles-compiled.css";

import { useState } from "react";
import { Input, Row, Col } from "antd";

export const PaymentForm: React.FC = () => {
  const [cvc, setCvc] = useState(" ");
  const [expiry, setexpiry] = useState(" ");
  const [focus, setFocus] = useState(" ");
  const [name, setName] = useState(" ");
  const [number, setNumber] = useState(" ");

  const handleInputFocus = (e: {
    target: { name: React.SetStateAction<string> };
  }) => {
    setFocus(e.target.name);
  };

  const handleInputChange = (e: {
    target: { name: React.SetStateAction<string>; value: string };
  }) => {
    const { name, value } = e.target;
    switch (name) {
      case "cvc":
        setCvc(value);
        break;
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      case "expiry":
        setexpiry(value);
        break;
      default:
        break;
    }
  };

  return (
    <div id="PaymentForm" style={{ marginTop: 50 }}>
      <Cards
        cvc={cvc}
        expiry={expiry}
        focused={focus}
        name={name}
        number={number}
      />
      <form className={styles["payment-form"]}>
        <Input.Group>
          <Row gutter={[0, 16]}>
            <Input
              type="tel"
              name="number"
              placeholder="Card Number"
              required
              pattern="[\d| ]{16,22}"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </Row>
          <Row gutter={[0, 16]}>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </Row>
          <Row gutter={[0, 16]}>
            <Col span={13}>
              <Input
                type="tel"
                name="expiry"
                placeholder="Valid Thru"
                required
                pattern="\d\d/\d\d"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </Col>
            <Col span={4} />
            <Col span={7}>
              <Input
                type="tel"
                name="cvc"
                placeholder="CVC"
                required
                pattern="\d{3,4}"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </Col>
          </Row>
        </Input.Group>
      </form>
    </div>
  );
};
