import React from "react";
import useForm from "react-hook-form";
import { getDefaultValues } from "./utils/getDefaultValues";

// components
import { InputError } from "./input/InputError";
import { InputContainer } from "./input/InputContainer";

import { StepControl } from "../StepControl";

export const BusinessAddressForm = ({ formKey, formData, prev, next }) => {
  const { register, errors, formState, getValues } = useForm({
    mode: "onBlur",
    defaultValues: getDefaultValues(formKey, formData)
  });

  return (
    <form name="businessAddressForm">
      <InputContainer>
        <input
          name="street"
          type="text"
          placeholder="Street"
          ref={register({ required: "Street is required" })}
        />
        <InputError error={errors.street} />
      </InputContainer>
      <InputContainer>
        <input
          name="city"
          type="url"
          placeholder="City"
          ref={register({ required: "City is required" })}
        />
        <InputError error={errors.city} />
      </InputContainer>
      <InputContainer>
        <select
          name="province"
          ref={register({ required: "Province is required" })}
        >
          <option value="Utah">Utah</option>
          <option value="Albay">Albay</option>
        </select>
        <InputError error={errors.province} />
      </InputContainer>
      <InputContainer>
        <select
          name="country"
          ref={register({ required: "Country is required" })}
        >
          <option value="U.S.A">U.S.A</option>
          <option value="Philippines">Philippines</option>
        </select>
        <InputError error={errors.country} />
      </InputContainer>
      <InputContainer>
        <input
          name="postalCode"
          type="text"
          placeholder="Postal Code"
          ref={register({ required: "Postal Code is required" })}
        />
        <InputError error={errors.postalCode} />
      </InputContainer>
      <StepControl
        valid={formState.isValid}
        onNext={() => next({ [formKey]: getValues() })}
        onPrev={() => prev({ [formKey]: getValues() })}
      />
    </form>
  );
};
