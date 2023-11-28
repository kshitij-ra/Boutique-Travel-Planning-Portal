import StepWizard from "react-step-wizard";
import { useState } from "react";
import SolidButton from "../components/solid-button.js";
import OutlineButton from "../components/outline-button.js";
import PPB1 from "../components/ppb1";
import PPB2 from "../components/ppb2";

const Stats = ({ nextStep, previousStep, totalSteps, step }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "space-between",
    }}
  >
    <hr />
    {step > 1 && <OutlineButton onClick={previousStep} button1="Go Back" />}
    {step < totalSteps ? (
      step === 1 ? (
        <SolidButton onClick={nextStep} button="Start" />
      ) : (
        <OutlineButton onClick={nextStep} button1="Continue" />
      )
    ) : (
      <SolidButton onClick={nextStep} button="Finish" />
    )}
  </div>
);

const FirstStep = (props) => {
  return (
    <>
      <PPB1 />
      <Stats step={1} {...props} />
    </>
  );
};

const SecondStep = (props) => {
  return (
    <>
      <PPB2
        setSelectedTags={props.setSelectedTags}
        selectedTags={props.selectedTags}
      />
      <Stats step={2} {...props} />
    </>
  );
};

const FinalStep = (props) => {
  return (
    <>
      <h1>Fetch Data</h1>
      <Stats
        step={3}
        {...props}
        nextStep={() => alert(JSON.stringify(props.selectedTags))}
      />
    </>
  );
};

const MultiStepForm = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  console.log(selectedTags);
  return (
    <StepWizard>
      <FirstStep />
      <SecondStep
        setSelectedTags={setSelectedTags}
        selectedTags={selectedTags}
      />
      <FinalStep selectedTags={selectedTags} />
    </StepWizard>
  );
};

export default MultiStepForm;
