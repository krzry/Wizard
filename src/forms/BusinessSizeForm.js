import React from "react";
import useForm from "react-hook-form";
import { getDefaultValues } from "./utils/getDefaultValues";

// components
import { InputError } from "./input/InputError";
import { InputContainer } from "./input/InputContainer";

import { StepControl } from "../StepControl";

export const BusinessSizeForm = ({ formKey, formData, prev, next }) => {
  const { register, errors, formState, getValues } = useForm({
    mode: "onBlur",
    defaultValues: getDefaultValues(formKey, formData)
  });

  return (
    <form name="businessSizeForm">
      <fieldset>
        <legend>Number of Employees</legend>
        <InputContainer>
          <select
            name="numEmployees"
            ref={register({ required: "Employees Required" })}
          >
            <option value="1-50">1-50</option>
            <option value="51-100">51-100</option>
            <option value="101-500">101-500</option>
            <option value="501-1000">501-1000</option>
            <option value=">1000">>1000</option>
          </select>
          <InputError error={errors.industry} />
        </InputContainer>
      </fieldset>
      <fieldset>
        <legend>Typical Deal Size</legend>
        <InputContainer>
          <select
            name="dealSize"
            ref={register({ required: "Employees Required" })}
          >
            <option value="$1-$20">$1-$20</option>
            <option value="$21-$50">$21-$50</option>
            <option value="$51-$100">$51-$100</option>
            <option value="$101-$500">$101-$500</option>
            <option value="$501-$1,000">$501-$1,000</option>
            <option value="$1,001-$10,000">$1,001-$10,000</option>
            <option value=">$10,000">>$10,000</option>
          </select>
          <InputError error={errors.industry} />
        </InputContainer>
      </fieldset>
      <fieldset>
        <legend>Publicly Traded</legend>
        <InputContainer>
        <label>
          <input value="yes" type="radio" name="publiclyTraded" ref={register({ required: "Trade Required" })}/>
          Yes
        </label>
        </InputContainer>
        <InputContainer>
        <label>
          <input value="no" type="radio" name="publiclyTraded" ref={register({ required: "Trade Required" })}/>
          No
        </label>
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
