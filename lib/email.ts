import emailjs from "@emailjs/browser";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
}

const SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";

const TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";

const PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

export async function sendEmail(
  formData: ContactFormData
): Promise<EmailResponse> {
  try {
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      throw new Error("EmailJS environment variables are missing.");
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,

      to_name: "Abhishek Kumar",

      reply_to: formData.email,

      sent_at: new Date().toLocaleString(),

      website: "Portfolio Website",
    };

    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    return {
      success: true,
      message: "Email sent successfully.",
    };
  } catch (error) {
    console.error("Email Error:", error);

    return {
      success: false,
      message:
        "Unable to send email. Please try again later.",
    };
  }
}

export function validateEmail(
  email: string
): boolean {
  const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email);
}

export function validateForm(
  data: ContactFormData
) {
  const errors: Partial<ContactFormData> = {};

  if (!data.name.trim()) {
    errors.name = "Name is required";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!validateEmail(data.email)) {
    errors.email = "Invalid email address";
  }

  if (!data.subject.trim()) {
    errors.subject = "Subject is required";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required";
  }

  if (data.message.length < 10) {
    errors.message =
      "Message must be at least 10 characters";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function resetForm(): ContactFormData {
  return {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
}