export interface FormContextType {
  values: Record<string, any>;
  errors: Record<string, string>;
  dynamicOptions: Record<string, any[]>; // Store dynamic options for fields
  setValue: (field: string, value: any) => void;
  validateField: (field: string, value: any) => void;
  validateForm: (formFields: any[]) => boolean;
  shouldShowField: (field: any) => boolean;
  fetchDynamicOptions: (fieldId: string, value: string) => void; // Function to fetch dynamic options
}

export interface BaseField {
  id: string;
  label: string;
  required?: boolean;
  type: string;
  visibility?: {
    dependsOn: string;
    condition: string;
    value: string;
  };
}

export interface TextField extends BaseField {
  type: "text" | "number" | "email";
  validation?: {
    min?: number;
    max?: number;
  };
}

export interface DateField extends BaseField {
  type: "date";
}

export interface SelectField extends BaseField {
  type: "select";
  options: string[];
  dynamicOptions?: {
    dependsOn: string;
    endpoint: string;
    method: string;
  };
}

export interface RadioField extends BaseField {
  type: "radio";
  options: string[];
}

export interface CheckboxField extends BaseField {
  type: "checkbox";
  options: string[];
}

export interface GroupField extends BaseField {
  type: "group";
  fields: FormField[];
}

export interface VisibilityCondition {
  dependsOn: string;
  condition: "equals";
  value: string;
}

export interface ConditionalField extends BaseField {
  visibility?: VisibilityCondition;
}

export type FormField =
  | TextField
  | DateField
  | SelectField
  | RadioField
  | CheckboxField
  | GroupField
  | ConditionalField;
