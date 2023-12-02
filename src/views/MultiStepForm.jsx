/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import StepWizard from 'react-step-wizard';
import SolidButton from '../components/solid-button.js';
import OutlineButton from '../components/outline-button.js';
import PPB1 from '../components/ppb1';
import PPB2 from '../components/ppb2';
import PPB3 from '../components/ppb3';
import PPB4 from '../components/ppb4.js';
import PPBFinal from '../components/ppb-final.js';
import LoginForm from '../components/login-form.js';

const Stats = ({ nextStep, previousStep, totalSteps, step }) => (

  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'space-between',
    }}
  >
    <hr />
    {step > 1 && <OutlineButton onClick={previousStep} button1="Go Back" />}
    {step < totalSteps ? (
      step === 1 ? (
        <SolidButton onClick={nextStep} button="Start" />
      ) : (
        <SolidButton onClick={nextStep} button="Continue" />
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

const ThirdStep = (props) => {
  return (
    <>
      <PPB3
        setSelectedTags={props.setSelectedTags}
        selectedTags={props.selectedTags}
        setSelectedDestinations={props.setSelectedDestinations}
        selectedDestinations={props.selectedDestinations}
      />
      <Stats
        step={3}
        {...props}
      />
    </>
  );
};

const FourthStep = (props) => {
  return (
    <>
      <PPB4
        setSelectedGuides={props.setSelectedGuides}
        sguideelectedGuides={props.selectedGuides}
        setSelectedDestinations={props.setSelectedDestinations}
        selectedDestinations={props.selectedDestinations}
      />
      <Stats
        step={4}
        {...props}
      />
    </>
  );
};

const FifthStep = (props) => {
  return (
    <>
      <LoginForm formName="User Login" />
      <Stats
        step={5}
        {...props}
      />
    </>
  );
};

const FinalStep = (props) => {
  return (
    <>
      <PPBFinal 
      setSelectedGuides={props.setSelectedGuides}
        sguideelectedGuides={props.selectedGuides}
        setSelectedDestinations={props.setSelectedDestinations}
        selectedDestinations={props.selectedDestinations}
        setSelectedTags={props.setSelectedTags}
        selectedTags={props.selectedTags}
        />
      <Stats
        step={6}
        {...props}
        nextStep={
          () => {
            alert(JSON.stringify(props.selectedGuides+props.selectedDestinations+props.selectedTags));
            
          }}
      />
    </>
  );
};

const MultiStepForm = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedDestinations, setSelectedDestinations] = useState([]);
  const [selectedGuides, setSelectedGuides] = useState([]);

  console.log(selectedTags);
  console.log(selectedDestinations);
  return (
    <StepWizard>
      <FirstStep />
      <SecondStep
        setSelectedTags={setSelectedTags}
        selectedTags={selectedTags}
      />
      <ThirdStep
        setSelectedTags={setSelectedTags}
        selectedTags={selectedTags}
        setSelectedDestinations={setSelectedDestinations}
        selectedDestinations={selectedDestinations}
      />
      <FourthStep
        setSelectedGuides={setSelectedGuides}
        selectedGuides={selectedGuides}
        setSelectedDestinations={setSelectedDestinations}
        selectedDestinations={selectedDestinations}
      />
      <FifthStep />
      <FinalStep />
    </StepWizard>
  );
};

export default MultiStepForm;
