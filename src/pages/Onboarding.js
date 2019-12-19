import React from "react";
import { Switch, Route, useRouteMatch, useHistory, useLocation } from "react-router-dom";
const styles = {
  backgroundColor: "#cce0cc",
  padding: "8px"
};

const stepStyles = {
  backgroundColor: "#f19485",
  padding: "9px",
  margin: "8px"
};

const Step = ({ step, nextStep, prevStep }) => {
  return (
    <div style={stepStyles}>
      <h1>Step {step}</h1>
      {!!prevStep && <button onClick={() => prevStep(step)}>Previous</button>}
      {!!nextStep && <button onClick={() => nextStep(step)}>Next</button>}
    </div>
  );
};

const hasStep = (path) =>{
  console.log(path)
  const result = /step-[1-5]$/.test(path)
  console.log(result)
}

export const Onboarding = () => {
  const { path } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  React.useEffect(() => {
    //if not on valid step, update
    if(!hasStep(location.pathname)){
      history.push(`${path}/step-1`)
    }
  },[])

  const nextStep = step => {
    history.push(`${path}/step-${step + 1}`);
  };

  const prevStep = step => {
    history.push(`${path}/step-${step - 1}`);
  };

  return (
    <div style={styles}>
      <h1>Onboarding</h1>
      <Switch>
        <Route path={`${path}/Step-1`}>
          <Step step={1} nextStep={nextStep} />
        </Route>
        <Route path={`${path}/Step-2`}>
          <Step step={2} prevStep={prevStep} nextStep={nextStep} />
        </Route>
        <Route path={`${path}/Step-3`}>
          <Step step={3} prevStep={prevStep} nextStep={nextStep} />
        </Route>
        <Route path={`${path}/Step-4`}>
          <Step step={4} prevStep={prevStep} nextStep={nextStep} />
        </Route>
        <Route path={`${path}/Step-5`}>
          <Step step={5} prevStep={prevStep} />
        </Route>
      </Switch>
    </div>
  );
};
