import React from "react";
import useForm from "react-hook-form";
import { getDefaultValues } from "./utils/getDefaultValues";

// components
import { InputError } from "./input/InputError";
import { InputContainer } from "./input/InputContainer";

import { StepControl } from "../StepControl";

export const EmailForm = ({ formKey, formData, prev, next }) => {
  const { register, errors, formState, getValues } = useForm({
    mode: "onBlur",
    defaultValues: getDefaultValues(formKey, formData)
  });

  return (
    <form name="emailForm">
      <InputContainer>
        <input
          name="email"
          type="email"
          placeholder="Email"
          ref={register({
            required: "Email address is required"
          })}
        />
      </InputContainer>
      <InputError error={errors.email} />
      <StepControl
        valid={formState.isValid}
        onNext={() => next({ [formKey]: getValues() })}
        onPrev={() => prev({ [formKey]: getValues() })}
      />
    </form>
  );
};
