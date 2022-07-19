import React from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="Nereden" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="Nereye" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Yolculuk Tarihi" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            
            type="time"
            placeholder="Yolculuk Saati"
            required
          />
        </FormGroup>
        <FormGroup className="select__group">
          <select>
            <option value="ac">Spor Araba</option>
            <option value="non-ac">Sedan</option>
            <option value="non-ac">SUV & Offroader</option>

          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Araba Bul</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
