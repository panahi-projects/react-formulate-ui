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
