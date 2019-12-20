import React from "react";
import useForm from "react-hook-form";
import { getDefaultValues } from "./utils/getDefaultValues";

// components
import { InputError } from "./input/InputError";
import { InputContainer } from "./input/InputContainer";

import { StepControl } from "../StepControl";

export const TitleAndAccessForm = ({ formKey, formData, prev, next }) => {
  const { register, errors, formState, getValues } = useForm({
    mode: "onBlur",
    defaultValues: getDefaultValues(formKey, formData)
  });

  return (
    <form name="titleAndAccessForm">
      <InputContainer>
        <input
          name="jobTitle"
          type="text"
          placeholder="Job Title"
          ref={register({ required: "Job title is required" })}
        />
        <InputError error={errors.jobTitle} />
      </InputContainer>
      <InputContainer>
        <select name="access" ref={register({ required: "Access is required" })}>
          <option value="Administrator">Administrator</option>
          <option value="Employee">Employee</option>
        </select>
        <InputError error={errors.access} />
      </InputContainer>
      <StepControl
        valid={formState.isValid}
        onNext={() => next({ [formKey]: getValues() })}
        onPrev={() => prev({ [formKey]: getValues() })}
      />
    </form>
  );
};
