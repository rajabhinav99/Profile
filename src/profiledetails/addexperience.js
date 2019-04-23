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

class AddExperience extends React.Component {
    render(){
        return(
            <div align="center">
                <h2>Add Experience</h2>
                <form>
                    <FormInputs
                      ncols={["col-md-5 col-md-offset-3" ]}
                      proprieties={[
                        {
                          label: "Previous Company ",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Company",
                          defaultValue: "",
                          disabled: true
                        }
                      ]}
                      />
                      <FormInputs
                      ncols={["col-md-5 col-md-offset-3"]}
                      proprieties={[
                        {
                          label: "Job Duration",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Duration",
                          defaultValue: ""
                        }
                      ]}
                      />
                      <FormInputs
                      ncols={["col-md-5 col-md-offset-3"]}
                      proprieties={[
                        {
                          label: "Technology",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "technology"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-5 col-md-offset-3"]}
                      proprieties={[
                        {
                          label: "No of Project",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "no of project",
                          defaultValue: ""
                        }
                      ]}
                      />
                      <FormInputs
                      ncols={["col-md-5 col-md-offset-3"]}
                      proprieties={[
                        {
                          label: "Years of experience",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "experience ",
                          defaultValue: ""
                        }
                      ]}
                    />
                    
                    <button bsStyle="info" pullRight fill type="submit" className="btn btn-success">
                      Update Experience
                    </button>
                    <div className="clearfix" />
                  </form>
            </div>
        )
    }
}
export default AddExperience