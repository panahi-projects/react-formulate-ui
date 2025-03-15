import FieldWrapper from "components/FieldWrapper";
import { DateField } from "interfaces";
import { useForm } from "providers/FormProvider";
import React from "react";

const DatePickerField: React.FC<DateField> = ({ id, label, required }) => {
  const { values, setValue, errors, validateField } = useForm();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(id, e.target.value);
    validateField(id, e.target.value);
  };

  return (
    <FieldWrapper id={id} label={label} required={required} error={errors[id]}>
      <input
        id={id}
        type="date"
        value={values[id] || ""}
        onChange={handleChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
      />
    </FieldWrapper>
  );
};

export default DatePickerField;
