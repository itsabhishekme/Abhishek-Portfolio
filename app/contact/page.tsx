"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Globe,
} from "lucide-react";

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log(formData);

      setSuccess("Your message has been sent successfully.");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero */}

      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-6">
            Contact Me
          </h1>

          <p className="text-xl max-w-2xl mx-auto">
            Interested in working together or have any questions?
            Feel free to reach out.
          </p>

        </div>
      </section>

      {/* Contact */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16">

            {/* Left */}

            <div>

              <h2 className="text-3xl font-bold mb-8">
                Get In Touch
              </h2>

              <p className="text-gray-600 mb-10 leading-8">
                I'm currently looking for opportunities as a
                DevOps Engineer and Automation Test Engineer.
                If you have an exciting opportunity or project,
                I'd love to hear from you.
              </p>

              <div className="space-y-8">

                <div className="flex items-center gap-5">

                  <Mail className="text-blue-600" size={30} />

                  <div>

                    <h4 className="font-semibold">
                      Email
                    </h4>

                    <a
                      href="mailto:abhishekkumardipu@gmail.com"
                      className="text-gray-600 hover:text-blue-600"
                    >
                      abhishekkumardipu@gmail.com
                    </a>

                  </div>

                </div>

                <div className="flex items-center gap-5">

                  <Phone className="text-green-600" size={30} />

                  <div>

                    <h4 className="font-semibold">
                      Phone
                    </h4>

                    <a
                      href="tel:+919142628227"
                      className="text-gray-600 hover:text-green-600"
                    >
                      +91 9142628227
                    </a>

                  </div>

                </div>

                <div className="flex items-center gap-5">

                  <MapPin
                    className="text-red-500"
                    size={30}
                  />

                  <div>

                    <h4 className="font-semibold">
                      Location
                    </h4>

                    <p className="text-gray-600">
                      Bengaluru, Karnataka, India
                    </p>

                  </div>

                </div>

              </div>

              {/* Social */}

              <div className="mt-12">

                <h3 className="text-xl font-semibold mb-5">
                  Connect With Me
                </h3>

                <div className="flex gap-5">

                  <a
                    href="#"
                    className="p-4 rounded-full bg-white shadow hover:bg-blue-600 hover:text-white transition"
                  >
                    <Github />
                  </a>

                  <a
                    href="#"
                    className="p-4 rounded-full bg-white shadow hover:bg-blue-700 hover:text-white transition"
                  >
                    <Linkedin />
                  </a>

                  <a
                    href="#"
                    className="p-4 rounded-full bg-white shadow hover:bg-indigo-700 hover:text-white transition"
                  >
                    <Globe />
                  </a>

                </div>

              </div>

            </div>

            {/* Right */}

            <div className="bg-white shadow-xl rounded-2xl p-10">

              <h2 className="text-3xl font-bold mb-8">
                Send Message
              </h2>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />

                <textarea
                  rows={7}
                  name="message"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition flex justify-center items-center gap-3"
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>

                {success && (
                  <div className="bg-green-100 text-green-700 rounded-lg p-4 mt-5">
                    {success}
                  </div>
                )}

              </form>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}