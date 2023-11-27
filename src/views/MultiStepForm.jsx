import StepWizard from "react-step-wizard";
import { useState } from "react";
import SolidButton from '../components/solid-button.js'
import OutlineButton from '../components/outline-button.js'
import PPB1 from '../components/ppb1'
import PPB2 from '../components/ppb2'


const Nav = (props) => {
  const dots = [];
  for (let i = 1; i <= props.totalSteps; i += 1) {
    const isActive = props.currentStep === i;
    isActive
      ? dots.push(
          <span
            key={`step-${i}`}
            onClick={() => props.goToStep(i)}
            style={{ color: "blue", fontSize: "35px", cursor: "pointer" }}
          >
            &bull;
          </span>
        )
      : dots.push(
          <span
            key={`step-${i}`}
            onClick={() => props.goToStep(i)}
            style={{ color: "gray", fontSize: "35px", cursor: "pointer" }}
          >
            &bull;
          </span>
        );
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>{dots}</div>
  );
};

const Stats = ({ nextStep, previousStep, totalSteps, step }) => (
  <div style={{ display: "flex",flexDirection: "row", alignItems: "space-between"}}>
    <hr />
    {step > 1 && (
  <OutlineButton
    onClick={previousStep}
    button1="Go Back"
  />
)}
{step < totalSteps ? (
  step === 1 ? (
    <SolidButton
      onClick={nextStep}
      button="Start"
    />
  ) : (
    <OutlineButton
      onClick={nextStep}
      button1="Continue"
    />
  )
) : (
  <SolidButton
    onClick={nextStep}
    button="Finish"
  />
)}


  </div>
);

const formStyle = {
  fontFamily: "Arial, sans-serif",
  backgroundColor: "#f5f5f5",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  width: "350px",
  textAlign: "left",
  margin: "auto",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  boxSizing: "border-box",
  marginBottom: "15px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const checkboxStyle = {
  marginRight: "8px",
};

const FirstStep = (props) => {
  function handleChange(event) {
    props.setFormState((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <>
      {/* <form style={formStyle}>
        <label
          style={{
            display: "block",
            marginBottom: "10px",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Personal Information
        </label>

        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Enter your first name"
          style={inputStyle}
          onChange={handleChange}
        />
      </form> */}
      <PPB1 />
      <Stats step={1} {...props} />
    </>
  );
};

const SecondStep = (props) => {
  function handleChange(event) {
    props.setFormState((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <>
      {/* <form style={formStyle}>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          onChange={handleChange}
          placeholder="Enter your last name"
          style={inputStyle}
        />
      </form> */}
      <PPB2/>
      <Stats step={2} {...props} nextStep={()=>alert(JSON.stringify(props.formState))} />
    </>
  );
};

const MultiStepForm = () => {
  const [formState, setFormState] = useState({});
  console.log(formState);
  return (
    <div style={{ margin: "10px 0" }}>
      <StepWizard >
        <FirstStep setFormState={setFormState} />
        <SecondStep setFormState={setFormState} formState={formState}/>
      </StepWizard>
    </div>
  );
};

export default MultiStepForm;
