import React from 'react'
import { Card } from "../components/Card/Card";
import { FormInputs } from "../components/FormInputs/FormInputs";
import {
    Grid,
    Row,
    Col,
    FormGroup,
    ControlLabel,
    FormControl
  } from "react-bootstrap";

class AddSkill extends React.Component {
    render(){
        return(
            <div  align="center">
                <h2>Add Skill</h2>
                <form>
                    <FormInputs
                      ncols={["col-md-5 col-md-offset-3" ]}
                      proprieties={[
                        {
                          label: "Programing Language",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Ex:C,C++,etc",
                        
                     
                        }
                      ]}
                      />
                      <FormInputs
                      ncols={["col-md-5 col-md-offset-3"]}
                      proprieties={[
                        {
                          label: "Name of the skills",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Enter skills here",
                        
                        }
                      ]}
                      />
                      <FormInputs
                      ncols={["col-md-5 col-md-offset-3"]}
                      proprieties={[
                        {
                          label: "Profiency",
                          type: "number",
                          bsClass: "form-control",
                          placeholder: "Profiency"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-5 col-md-offset-3"]}
                      proprieties={[
                        {
                          label: "Experiency(in Years)",
                          type: "number",
                          bsClass: "form-control",
                          placeholder: "Select",
                         
                        }
                      ]}
                      />
                  
                  
             

                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>Description</ControlLabel>
                          <FormControl
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Here can be your description"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <button bsStyle="info" pullRight fill type="submit" className="btn btn-success">
                      Add Skills 
                    </button>
                    <div className="clearfix" />
                  </form>
            </div>
        )
    }
}
export default AddSkill