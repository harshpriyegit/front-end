"use client"

import { Linkedin, Mail } from "lucide-react"

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Ayush Jha",
      role: "Founder & CEO",
      avatarUrl: "/avatar/avatar1.jpg",
      linkedin: "linkedin.com/in/ayushjha557/?lipi=urn%3Ali%3Apage%3Ad_flagship3_people%3BDb2rsT%2BRRnGPrOxtm2Hw1g%3D%3D",
    },
    {
      name: "Devansh Raj",
      role: "Marketing Head",
      avatarUrl: "/avatar/avatar2.jpg",
      linkedin: "https://www.linkedin.com/in/devansh-raj-a1540a23b/",
    },
     {
      name: "Harsh Nayan",
      role: "Mangaging Director",
      avatarUrl: "/avatar/avatar3.jpg",
      linkedin: "https://www.linkedin.com/in/nayanharsh/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "david@company.com"
    },
    {
      name: "Ankush Jha",
      role: "Development Head",
      avatarUrl: "/avatar/avatar4.jpg",
      linkedin: "#",
      email: "emma@company.com"
    },
    {
      name: "Akshat Kumar",
      role: "Designing Head",
      avatarUrl: "/avatar/avatar3.jpg",
      linkedin: "https://www.linkedin.com/in/ayushjha557?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "david@company.com"
    },
    {
      name: "Aadarsh Mishra",
      role: "Operations Head",
      avatarUrl: "/avatar/avatar3.jpg",
      linkedin: "https://www.linkedin.com/in/aadarsh-mishra-35433426a/",
      email: "david@company.com"
    },
   
  ]

  return (
    <div className="min-h-screen bg-muted/50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
            Our Team
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Talented professionals dedicated to your success.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Avatar */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-blue-100 group-hover:ring-blue-300 transition-all duration-300">
                  <img
                    src={member.avatarUrl}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-slate-600 mb-4">{member.role}</p>

                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  {/*<a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-blue-500 hover:text-white transition-all duration-300"
                    aria-label="Email"
                  >
                    <Mail size={18} />
                  </a>*/}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}