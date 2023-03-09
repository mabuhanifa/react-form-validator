import { Step, StepLabel, Stepper } from "@mui/material";
import React from "react";
export default function StepperBox() {
  return (
    <div>
      <Stepper activeStep={0}>
        <Step>
          <StepLabel>Step 1</StepLabel>
        </Step>
        <Step>
          <StepLabel>Step 2</StepLabel>
        </Step>
        <Step>
          <StepLabel>Step 3</StepLabel>
        </Step>
        <Step>
          <StepLabel>Step 4</StepLabel>
        </Step>
      </Stepper>
    </div>
  );
}
