import './index.css';
import { useState } from 'react';

const toatlNumberofsteps = 5;
const StepperParent = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const handlePrev = () => {
    setCurrentStep((prev) => prev - 1);
  };
  const handlenext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  return (
    <>
      <Stepper
        currentStep={currentStep}
        toatlNumberofsteps={toatlNumberofsteps}
        handlePrev={handlePrev}
        handlenext={handlenext}
      />
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handlenext}>Next</button>
    </>
  );
};
export default StepperParent;

const Stepper = ({ toatlNumberofsteps, currentStep }) => {
  return (
    <div className="stepperWrapper">
      <div className="steppers">
        {new Array(toatlNumberofsteps).fill(0).map((ele, index) => {
          return (
            <div
              className={`circles ${
                index > currentStep && 'incompleteButton '
              } ${index == currentStep && 'currentButton '} ${
                index < currentStep && 'completeButton'
              }`}
            >
              {index}
            </div>
          );
        })}
        <div className="placeholderLine"></div>
        <div className="coleoredLine"></div>
      </div>
    </div>
  );
};
