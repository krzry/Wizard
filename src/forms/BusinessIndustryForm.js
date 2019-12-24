import React from "react";
import useForm from "react-hook-form";
import { getDefaultValues } from "./utils/getDefaultValues";

// components
import { InputError } from "./input/InputError";
import { InputContainer } from "./input/InputContainer";

import { StepControl } from "../StepControl";

export const BusinessIndustryForm = ({ formKey, formData, prev, next }) => {
  const { register, errors, formState, getValues } = useForm({
    mode: "onBlur",
    defaultValues: getDefaultValues(formKey, formData)
  });

  return (
    <form name="businessIndustryForm">
      <fieldset>
        <legend>Industry</legend>
        <InputContainer>
          <select
            name="industry"
            ref={register({ required: "Industry is required" })}
          >
            <option>Enterprise Software</option>
            <option>Sales</option>
            <option>Marketing</option>
            <option>Ecommerce</option>
            <option>Construction</option>
            <option>Logistics</option>
            <option>SAAS</option>
            <option>Telephony</option>
            <option>Consumer Electronics</option>
            <option>Transportation</option>
          </select>
          <InputError error={errors.industry} />
        </InputContainer>
      </fieldset>
      <fieldset>
        <legend>Customer Segment</legend>
        <InputContainer>
          <select
            name="customerSegment"
            ref={register({ required: "Industry is required" })}
          >
            <option>Consumer</option>
            <option>Enterprise</option>
            <option>Both</option>
          </select>
          <InputError error={errors.industry} />
        </InputContainer>
      </fieldset>
      <StepControl
        valid={formState.isValid}
        onNext={() => next({ [formKey]: getValues() })}
        onPrev={() => prev({ [formKey]: getValues() })}
      />
    </form>
  );
};
