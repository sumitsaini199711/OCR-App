import React, { Component } from "react";
import FileBase64 from "react-file-base64";
import { Button, Form, FormGroup, Label, FormText, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
export class Upload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      confirmation: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    this.setState({ confirmation: "Uploading..." });
  }

  getFiles() {}

  render() {
    const processing = "Processing document...";
    return (
      <div className="row">
        <div className="col-6 offset-3">
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <h3 className="text-danger">{processing}</h3>
              <h6>Upload Invoice</h6>
              <FormText color="muted">PNG,JPG</FormText>

              <div className="form-group files color">
                <FileBase64
                  multiple={true}
                  onDone={this.getFiles.bind(this)}
                ></FileBase64>
              </div>
            </FormGroup>

            <FormGroup>
              <Label>
                <h6>Invoice</h6>
              </Label>
              <Input
                type="text"
                name="Invoice"
                id="Invoice"
                required
                value={this.state.Invoice}
                onChange={this.handleChane}
              />
            </FormGroup>

            <FormGroup>
              <Label>
                <h6>Amount ($)</h6>
              </Label>
              <Input
                type="text"
                name="Amount"
                id="Amount"
                required
                value={this.state.Amount}
                onChange={this.handleChane}
              />
            </FormGroup>

            <FormGroup>
              <Label>
                <h6>Date</h6>
              </Label>
              <Input
                type="text"
                name="InvoiceDate"
                id="InvoiceDate"
                required
                value={this.state.InvoiceDate}
                onChange={this.handleChane}
              />
            </FormGroup>

            <FormGroup>
              <Label>
                <h6>Vendor</h6>
              </Label>
              <Input
                type="text"
                name="Vendor"
                id="Vendor"
                required
                value={this.state.Vendor}
                onChange={this.handleChane}
              />
            </FormGroup>

            <FormGroup>
              <Label>
                <h6>Description</h6>
              </Label>
              <Input
                type="text"
                name="Description"
                id="Description"
                required
                value={this.state.Description}
                onChange={this.handleChane}
              />
            </FormGroup>
            <Button className="btn btn-lg btn-block  btn-success">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Upload;
