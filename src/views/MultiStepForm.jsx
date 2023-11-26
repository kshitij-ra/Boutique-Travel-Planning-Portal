import StepWizard from "react-step-wizard";
import { useState } from "react";

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
  <div>
    <hr />
    {step > 1 && (
      <button
        style={{
          padding: "5px 8px",
          backgroundColor: "#333333",
          borderRadius: 3,
          color: "white",
        }}
        onClick={previousStep}
      >
        Go Back
      </button>
    )}
    {step < totalSteps ? (
      <button
        onClick={nextStep}
        style={{
          padding: "5px 8px",
          backgroundColor: "#333333",
          borderRadius: 3,
          color: "white",
        }}
      >
        Continue
      </button>
    ) : (
      <button
        onClick={nextStep}
        style={{
          padding: "5px 8px",
          backgroundColor: "green",
          borderRadius: 3,
          color: "white",
          marginLeft: 5,
        }}
      >
        Finish
      </button>
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
      <form style={formStyle}>
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
      </form>
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
      <form style={formStyle}>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          onChange={handleChange}
          placeholder="Enter your last name"
          style={inputStyle}
        />
      </form>
      <Stats step={2} {...props} nextStep={()=>alert(JSON.stringify(props.formState))} />
    </>
  );
};

const MultiStepForm = () => {
  const [formState, setFormState] = useState({});
  console.log(formState);
  return (
    <div style={{ margin: "10px 0" }}>
      <StepWizard nav={<Nav />}>
        <FirstStep setFormState={setFormState} />
        <SecondStep setFormState={setFormState} formState={formState}/>
      </StepWizard>
    </div>
  );
};

export default MultiStepForm;
