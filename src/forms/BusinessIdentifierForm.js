import React from "react";
import useForm from "react-hook-form";
import { getDefaultValues } from "./utils/getDefaultValues";

// components
import { InputError } from "./input/InputError";
import { InputContainer } from "./input/InputContainer";

import { StepControl } from "../StepControl";

export const BusinessIdentifierForm = ({ formKey, formData, prev, next }) => {
  const { register, errors, formState, getValues } = useForm({
    mode: "onBlur",
    defaultValues: getDefaultValues(formKey, formData)
  });

  return (
    <form name="businessIdentifierForm">
      <InputContainer>
        <input
          name="businessName"
          type="text"
          placeholder="Business Name"
          ref={register({ required: "Business name is required" })}
        />
        <InputError error={errors.businessName} />
      </InputContainer>
      <InputContainer>
        <input
          name="websiteURL"
          type="url"
          placeholder="Website URL"
          ref={register({ required: "Website URL is required" })}
        />
        <InputError error={errors.websiteURL} />
      </InputContainer>
      <InputContainer>
        <input
          name="busPhone"
          type="text"
          placeholder="Phone Number"
          ref={register({ required: "Phone Number is required" })}
        />
        <InputError error={errors.busPhone} />
      </InputContainer>
      <StepControl
        valid={formState.isValid}
        onNext={() => next({ [formKey]: getValues() })}
        onPrev={() => prev({ [formKey]: getValues() })}
      />
    </form>
  );
};
