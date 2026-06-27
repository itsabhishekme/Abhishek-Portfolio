export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export interface ContactFormState {
  data: ContactFormData;
  errors: ContactFormErrors;
  loading: boolean;
  success: boolean;
  submitted: boolean;
}

export interface ContactInfo {
  title: string;
  value: string;
  href?: string;
  icon?: React.ReactNode;
}

export interface SocialLink {
  name: string;
  url: string;
  icon?: React.ReactNode;
}

export interface EmailResponse {
  success: boolean;
  message: string;
}

export interface ContactApiResponse {
  success: boolean;
  message: string;
  data?: unknown;
}

export interface ContactSectionProps {
  title?: string;
  subtitle?: string;
}

export interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
  loading?: boolean;
}

export interface ContactInfoProps {
  contacts: ContactInfo[];
}

export interface SocialLinksProps {
  links: SocialLink[];
}

export type ContactField =
  | "name"
  | "email"
  | "subject"
  | "message";

export interface ContactValidationResult {
  isValid: boolean;
  errors: ContactFormErrors;
}

export const defaultContactForm: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export const defaultContactState: ContactFormState = {
  data: defaultContactForm,
  errors: {},
  loading: false,
  success: false,
  submitted: false,
};