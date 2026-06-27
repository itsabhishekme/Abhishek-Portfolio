"use client";

import { useState, ChangeEvent, FormEvent } from "react";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  Briefcase,
  CheckCircle,
  MessageCircle,
  ArrowRight,
  Sparkles,
  Globe,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
type ContactForm = {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    company: "",
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
      await new Promise((resolve) => setTimeout(resolve, 1800));

      console.log(formData);

      setSuccess(
        "Thank you! Your message has been sent successfully. I'll get back to you as soon as possible."
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
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

      <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white py-28">

        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">

          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20 mb-8">
            <Sparkles size={18} />
            Let's Build Something Amazing
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-8">
            Contact Me
          </h1>

          <p className="text-xl max-w-3xl mx-auto text-blue-100 leading-9">
            Whether you have a project, job opportunity, freelance work,
            collaboration idea, or simply want to say hello,
            I'd love to connect with you.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4">
              <h4 className="font-semibold">
                24 Hours
              </h4>
              <p className="text-sm text-blue-100">
                Average Response Time
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4">
              <h4 className="font-semibold">
                Remote Friendly
              </h4>
              <p className="text-sm text-blue-100">
                Available Worldwide
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4">
              <h4 className="font-semibold">
                Open to Work
              </h4>
              <p className="text-sm text-blue-100">
                DevOps & QA Roles
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Contact */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16">

            {/* Left */}

            <div>

              <h2 className="text-4xl font-bold mb-6">
                Get In Touch
              </h2>

              <p className="text-gray-600 leading-8 mb-10">
                I'm actively looking for full-time opportunities,
                freelance projects, DevOps engineering roles,
                automation testing positions, and cloud-based
                application development work.
              </p>

              {/* Contact Cards */}

              <div className="space-y-6">

                <div className="flex items-center gap-5 bg-white shadow rounded-2xl p-6">

                  <div className="bg-blue-100 p-4 rounded-xl">
                    <Mail className="text-blue-600" size={28} />
                  </div>

                  <div>

                    <h4 className="font-semibold text-lg">
                      Email Address
                    </h4>

                    <a
                      href="mailto:abhishekkumardipu@gmail.com"
                      className="text-gray-600 hover:text-blue-600 transition"
                    >
                      abhishekkumardipu@gmail.com
                    </a>

                  </div>

                </div>

                <div className="flex items-center gap-5 bg-white shadow rounded-2xl p-6">

                  <div className="bg-green-100 p-4 rounded-xl">
                    <Phone className="text-green-600" size={28} />
                  </div>

                  <div>

                    <h4 className="font-semibold text-lg">
                      Phone Number
                    </h4>

                    <a
                      href="tel:+919142628227"
                      className="text-gray-600 hover:text-green-600 transition"
                    >
                      +91 9142628227
                    </a>

                  </div>

                </div>

                <div className="flex items-center gap-5 bg-white shadow rounded-2xl p-6">

                  <div className="bg-red-100 p-4 rounded-xl">
                    <MapPin className="text-red-500" size={28} />
                  </div>

                  <div>

                    <h4 className="font-semibold text-lg">
                      Location
                    </h4>

                    <p className="text-gray-600">
                      Bengaluru, Karnataka, India
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-5 bg-white shadow rounded-2xl p-6">

                  <div className="bg-purple-100 p-4 rounded-xl">
                    <Clock className="text-purple-600" size={28} />
                  </div>

                  <div>

                    <h4 className="font-semibold text-lg">
                      Working Hours
                    </h4>

                    <p className="text-gray-600">
                      Monday - Saturday
                    </p>

                    <p className="text-gray-600">
                      9:00 AM - 7:00 PM IST
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-5 bg-white shadow rounded-2xl p-6">

                  <div className="bg-orange-100 p-4 rounded-xl">
                    <Briefcase className="text-orange-600" size={28} />
                  </div>

                  <div>

                    <h4 className="font-semibold text-lg">
                      Available For
                    </h4>

                    <p className="text-gray-600">
                      Full Time • Internship • Freelance • Remote
                    </p>

                  </div>

                </div>

              </div>

              {/* Why Hire */}

              <div className="mt-14">

                <h3 className="text-2xl font-bold mb-6">
                  Why Work With Me?
                </h3>

                <div className="space-y-5">

                  <div className="flex gap-4">

                    <CheckCircle className="text-green-600 mt-1" />

                    <div>

                      <h4 className="font-semibold">
                        DevOps Engineer
                      </h4>

                      <p className="text-gray-600">
                        CI/CD, Docker, Kubernetes, Jenkins,
                        AWS, Linux and Automation.
                      </p>

                    </div>

                  </div>

                  <div className="flex gap-4">

                    <CheckCircle className="text-green-600 mt-1" />

                    <div>

                      <h4 className="font-semibold">
                        Automation Testing
                      </h4>

                      <p className="text-gray-600">
                        Selenium, Playwright,
                        Java, API Testing and TestNG.
                      </p>

                    </div>

                  </div>

                  <div className="flex gap-4">

                    <CheckCircle className="text-green-600 mt-1" />

                    <div>

                      <h4 className="font-semibold">
                        Full Stack Projects
                      </h4>

                      <p className="text-gray-600">
                        Next.js, React, TypeScript,
                        Tailwind CSS and Node.js.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

              {/* Social */}

              <div className="mt-14">
                <h3 className="text-2xl font-bold mb-6">
                  Connect With Me
                </h3>

                <div className="flex flex-wrap gap-4">

                  {[
                    { Icon: Globe, href: "#" },
                    { Icon: FaLinkedin, href: "#" },
                    { Icon: FaGithub, href: "#" },
                    { Icon: FaInstagram, href: "#" },
                    { Icon: FaFacebook, href: "#" },
                    { Icon: FaTwitter, href: "#" },
                  ].map(({ Icon, href }, index) => (
                    <a
                      key={index}
                      href={href}
                      className="p-4 rounded-full bg-white shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
                    >
                      <Icon size={22} />
                    </a>
                  ))}

                </div>
              </div>
              </div>

              {/* Form */}

              <div className="bg-white rounded-3xl shadow-2xl p-10">

                <div className="flex items-center gap-3 mb-8">

                  <MessageCircle
                    className="text-blue-600"
                    size={34}
                  />

                  <h2 className="text-3xl font-bold">
                    Send Message
                  </h2>

                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >

                  <div className="grid md:grid-cols-2 gap-5">

                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                    />

                  </div>

                  <div className="grid md:grid-cols-2 gap-5">

                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                    />

                  </div>

                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  <textarea
                    rows={7}
                    name="message"
                    placeholder="Write your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-xl px-5 py-4 outline-none resize-none focus:ring-2 focus:ring-blue-500"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl flex justify-center items-center gap-3 hover:opacity-90 transition"
                  >
                    {loading ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>

                  {success && (
                    <div className="bg-green-100 border border-green-300 text-green-700 rounded-xl p-5 flex items-center gap-3">
                      <CheckCircle size={22} />
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