import {
  FaAws,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaPython,
} from "react-icons/fa";

import {
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiCypress,
  SiPostman,
  SiJavascript,
  SiTypescript,
  SiMysql,
} from "react-icons/si";

export default function AboutPage() {
  const skills = [
    {
      name: "AWS",
      icon: <FaAws className="text-orange-500 text-3xl" />,
    },
    {
      name: "Docker",
      icon: <FaDocker className="text-blue-500 text-3xl" />,
    },
    {
      name: "Kubernetes",
      icon: <SiKubernetes className="text-blue-600 text-3xl" />,
    },
    {
      name: "Terraform",
      icon: <SiTerraform className="text-purple-600 text-3xl" />,
    },
    {
      name: "Jenkins",
      icon: <SiJenkins className="text-red-600 text-3xl" />,
    },
    {
      name: "Linux",
      icon: <FaLinux className="text-yellow-500 text-3xl" />,
    },
    {
      name: "Git",
      icon: <FaGitAlt className="text-orange-600 text-3xl" />,
    },
    {
      name: "Python",
      icon: <FaPython className="text-blue-500 text-3xl" />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400 text-3xl" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-600 text-3xl" />,
    },
    {
      name: "Cypress",
      icon: <SiCypress className="text-green-500 text-3xl" />,
    },
    {
      name: "Postman",
      icon: <SiPostman className="text-orange-500 text-3xl" />,
    },
    {
      name: "SQL",
      icon: <SiMysql className="text-blue-500 text-3xl" />,
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}

      <section className="py-24 bg-gradient-to-r from-blue-900 via-slate-900 to-black">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold">

            About Me

          </h1>

          <p className="mt-6 text-lg text-gray-300 leading-8">

            Hello, I'm <span className="text-blue-400 font-semibold">Abhishek Kumar</span>,
            a passionate QA Automation Engineer transitioning into
            DevOps Engineering.

            I have nearly three years of experience building automation
            frameworks using Cypress, Playwright, SQL, Postman,
            JMeter and AWS CI/CD pipelines.

            Currently I'm focused on mastering Docker,
            Kubernetes, Terraform, Jenkins, Linux,
            Git, Shell Scripting and Cloud Engineering.

          </p>

        </div>

      </section>

      {/* Career */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-12">

            Career Journey

          </h2>

          <div className="space-y-10">

            <div className="bg-slate-900 rounded-xl p-8">

              <h3 className="text-2xl font-semibold text-blue-400">

                QA Automation Engineer

              </h3>

              <p className="mt-4 text-gray-300">

                Worked on enterprise automation projects using
                Cypress, Playwright, JavaScript,
                SQL, API Automation,
                JMeter Performance Testing,
                AWS CI/CD and Agile methodologies.

              </p>

            </div>

            <div className="bg-slate-900 rounded-xl p-8">

              <h3 className="text-2xl font-semibold text-green-400">

                DevOps Learning Journey

              </h3>

              <p className="mt-4 text-gray-300">

                After working in Automation Testing,
                I decided to pursue DevOps because
                I enjoy automation, cloud technologies,
                infrastructure as code and CI/CD.

                I'm currently building projects using
                Docker, Kubernetes,
                Terraform, Jenkins,
                AWS and Linux.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Education */}

      <section className="py-20 bg-slate-900">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10">

            Education

          </h2>

          <div className="space-y-8">

            <div className="border-l-4 border-blue-500 pl-6">

              <h3 className="text-xl font-semibold">

                B.Tech

              </h3>

              <p className="text-gray-400">

                Chaudhary Charan Singh University

              </p>

            </div>

            <div className="border-l-4 border-blue-500 pl-6">

              <h3 className="text-xl font-semibold">

                DevOps Training

              </h3>

              <p className="text-gray-400">

                Besant Technologies

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Skills */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">

            Technical Skills

          </h2>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

            {skills.map((skill) => (

              <div
                key={skill.name}
                className="bg-slate-900 rounded-xl p-8 text-center hover:scale-105 transition"
              >

                <div className="flex justify-center">

                  {skill.icon}

                </div>

                <h3 className="mt-5 text-xl font-semibold">

                  {skill.name}

                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Mission */}

      <section className="py-24 bg-gradient-to-r from-blue-950 to-black">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10">

            My Goal

          </h2>

          <p className="text-lg leading-9 text-gray-300">

            My mission is to become a highly skilled DevOps Engineer
            capable of building scalable cloud infrastructure,
            automating deployments,
            implementing CI/CD pipelines,
            container orchestration,
            monitoring,
            Infrastructure as Code
            and secure cloud-native applications.

            I believe in continuous learning,
            automation-first thinking
            and delivering reliable software at scale.

          </p>

        </div>

      </section>

    </main>
  );
}