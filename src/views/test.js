import React, { useState } from 'react';

const Step1 = ({ onNext }) => (
  <div>
    <h2>Step 1</h2>
    {/* Add components for Step 1 */}
    <button onClick={onNext}>Next</button>
  </div>
);

const Step2 = ({ onBack, onNext }) => (
  <div>
    <h2>Step 2</h2>
    {/* Add components for Step 2 */}
    <button onClick={onBack}>Back</button>
    <button onClick={onNext}>Next</button>
  </div>
);

const Step3 = ({ onBack, onSubmit }) => (
  <div>
    <h2>Step 3</h2>
    {/* Add components for Step 3 */}
    <button onClick={onBack}>Back</button>
    <button onClick={onSubmit}>Submit</button>
  </div>
);

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    // Handle form submission logic
    // You can submit data or perform any necessary actions here
    alert('Form submitted!');
  };

  return (
    <div>
      {step === 1 && <Step1 onNext={handleNext} />}
      {step === 2 && <Step2 onBack={handleBack} onNext={handleNext} />}
      {step === 3 && <Step3 onBack={handleBack} onSubmit={handleSubmit} />}
    </div>
  );
};

export default MultiStepForm;
