"use client";
import { useState } from "react";

const authors = [
  {
    name: "Esthera Jackson",
    email: "esthera@simmmple.com",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    functionTitle: "Manager",
    functionDesc: "Organization",
    status: "Online",
    employed: "14/06/21",
  },
  {
    name: "Alexa Liras",
    email: "alexa@simmmple.com",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    functionTitle: "Programmer",
    functionDesc: "Developer",
    status: "Offline",
    employed: "14/06/21",
  },
  {
    name: "Laurent Michael",
    email: "laurent@simmmple.com",
    avatar: "https://randomuser.me/api/portraits/men/42.jpg",
    functionTitle: "Executive",
    functionDesc: "Projects",
    status: "Online",
    employed: "14/06/21",
  },
  {
    name: "Freduardo Hill",
    email: "freduardo@simmmple.com",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    functionTitle: "Manager",
    functionDesc: "Organization",
    status: "Online",
    employed: "14/06/21",
  },
  {
    name: "Daniel Thomas",
    email: "daniel@simmmple.com",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    functionTitle: "Programmer",
    functionDesc: "Developer",
    status: "Offline",
    employed: "14/06/21",
  },
  {
    name: "Mark Wilson",
    email: "mark@simmmple.com",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    functionTitle: "Designer",
    functionDesc: "UI/UX Design",
    status: "Offline",
    employed: "14/06/21",
  },
];

const projects = [
  {
    company: "Chakra Soft UI Version",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    budget: "$14,000",
    status: "Working",
    completion: 60,
  },
  {
    company: "Add Progress Track",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
    budget: "$3,000",
    status: "Canceled",
    completion: 10,
  },
  {
    company: "Fix Platform Errors",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968764.png",
    budget: "Not set",
    status: "Done",
    completion: 100,
  },
  {
    company: "Launch our Mobile App",
    icon: "https://cdn-icons-png.flaticon.com/512/174/174872.png",
    budget: "$32,000",
    status: "Done",
    completion: 100,
  },
  {
    company: "Add the New Pricing Page",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
    budget: "$400",
    status: "Working",
    completion: 25,
  },
];

const sidebarItemsMain = [
  { 
    label: "Dashboard", 
   icon: (
  <div className="p-2 rounded-xl border border-[#00cade] flex items-center justify-center">
    <svg 
      className="w-5 h-5" 
      fill="none" 
      stroke="#00cade" 
      strokeWidth={2} 
      viewBox="0 0 24 24" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1V9.5z" />
    </svg>
  </div>

),

    active: false 
  },
  { 
    label: "Tables", 
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="#00cade" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ), 
    active: true 
  },
  { 
    label: "Facturation", 
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="#00cade" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ), 
    active: false 
  },
  { 
    label: "RTL", 
   icon: (
  <svg 
    className="w-5 h-5" 
    fill="none" 
    stroke="#00cade" 
    strokeWidth={2} 
    viewBox="0 0 24 24" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M14.7 3.3a1 1 0 011.4 0l4.6 4.6a1 1 0 010 1.4l-1.4 1.4-6-6 1.4-1.4z" />
    <path d="M12 8l-8 8v3h3l8-8-3-3z" />
  </svg>
),

    
    active: false 
  },
];

const sidebarItemsAccount = [
  { 
    label: "Profile", 
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="#00cade" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="7" r="4" />
        <path d="M5.5 21a6.5 6.5 0 0113 0" />
      </svg>
    ) 
  },
  { 
    label: "Se connecter", icon: (
      <svg className="w-5 h-5" fill="none" stroke="#00cade" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 00-8 0v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ) 
  },
  { 
    label: "Inscrivez-vous", 
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="#00cade" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 00-8 0v2" />
        <circle cx="12" cy="7" r="4" />
        <line x1="12" y1="11" x2="12" y2="17" />
        <line x1="9" y1="14" x2="15" y2="14" />
      </svg>
    ) 
  },
];


function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    Online: "bg-green-500 text-white",
    Offline: "bg-gray-300 text-gray-600",
    Working: "text-green-600 bg-green-100",
    Canceled: "text-red-600 bg-red-100",
    Done: "text-gray-600 bg-gray-100",
  };
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold capitalize ${colors[status] || "bg-gray-300 text-gray-600"}`}>
      {status}
    </span>
  );
}

export default function TablesPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      
      {/* ------------------------------Sidebar ------------------------------*/}
      <aside
        className={`fixed inset-y-0 left-0 bg-white shadow-md p-6 flex flex-col justify-between w-64 z-30
        transform transition-transform duration-300 ease-in-out
        md:static md:translate-x-0
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div>
          <h1 className="text-xl font-bold mb-10 select-none">DEXCHANGE SAAS</h1>
          <nav className="space-y-8 text-sm text-gray-600 font-semibold select-none">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-4">Menu</p>
              <ul className="space-y-4">
                {sidebarItemsMain.map(({ label, icon, active }) => (
                  <li key={label}>
                    <a
                      href="#"
                      className={`flex items-center gap-3 px-3 py-2 rounded-md select-none transition-colors ${
                        active ? "bg-teal-50 text-teal-500" : "hover:text-teal-400 text-gray-600"
                      }`}
                    >
                      <span>{icon}</span>
                      <span>{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-4">PAGES DE COMPTE</p>
              <ul className="space-y-4">
                {sidebarItemsAccount.map(({ label, icon }) => (
                  <li key={label}>
                    <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md select-none hover:text-teal-400 transition-colors text-gray-600">
                      <span>{icon}</span>
                      <span>{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
        <div className="bg-teal-400 text-white rounded-lg px-4 py-5 mt-6 select-none flex items-center gap-3">
          <div>
            <p className="font-bold text-xs uppercase mb-1">Besoin d'aide ?</p>
            <p className="text-xs mb-3">Veuillez consulter notre documentation.</p>
            <button className="bg-white text-teal-500 rounded px-3 py-1 font-semibold text-xs shadow-sm hover:bg-gray-100 transition">
              DOCUMENTATION
            </button>
          </div>
        </div>
        {/*---------------------- Code Bouton pour Fermer la barre latérale pour mobile--------------------*/}
        <button
          className="absolute top-4 right-4 md:hidden text-gray-900 hover:text-teal-400"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close sidebar"
        >
          ✕
        </button>
      </aside>

      {sidebarOpen && (
        <div className="fixed inset-0 bg-black opacity-30 z-20 md:hidden" onClick={() => setSidebarOpen(false)} aria-hidden="true" />
      )}

      {/* Main */}
      <main className="flex-grow overflow-auto max-w-full">
        {/* Header */}
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between px-4 py-4 border-b bg-white gap-2 md:gap-0 sticky top-0 z-10">
          <div className="flex items-center gap-4 w-full">
            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-600 hover:text-gray-900 text-xl"
              onClick={() => setSidebarOpen(true)}
            >
              ☰
            </button>
            <div className="text-sm text-gray-600">
              Pages / <span className="font-semibold text-gray-900">Tables</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4 text-gray-600 flex-wrap">
            <input
              type="search"
              placeholder="Type here..."
              className="rounded-full border border-gray-300 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 flex-grow md:flex-grow-0"
            />
            <button className="text-gray-600 hover:text-gray-900 text-sm">Se connecter</button>
            <button title="Notifications" className="text-gray-600 hover:text-gray-900">
              🔔
            </button>
            <button title="Settings" className="text-gray-600 hover:text-gray-900">
              ⚙️
            </button>
          </div>
        </header>

        {/* Authors Table */}
        <section className="bg-white rounded-lg shadow-sm p-6 mt-6 overflow-auto">
          <h3 className="font-semibold text-lg text-gray-900 mb-4">Table des auteurs</h3>
          <table className="w-full min-w-[600px] md:min-w-full table-auto text-sm text-gray-700">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Photos</th>
                <th className="px-4 py-2 text-left">Function</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Employes</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {authors.map((author, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="px-4 py-2 flex items-center gap-2">
                    <img src={author.avatar} alt={author.name} className="w-8 h-8 rounded-full" />
                    <div>
                      <p className="font-semibold">{author.name}</p>
                      <p className="text-xs text-gray-400">{author.email}</p>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <p className="font-semibold">{author.functionTitle}</p>
                    <p className="text-xs text-gray-400">{author.functionDesc}</p>
                  </td>
                  <td className="px-4 py-2"><StatusBadge status={author.status} /></td>
                  <td className="px-4 py-2">{author.employed}</td>
                  <td className="px-4 py-2 text-teal-500 font-semibold hover:underline cursor-pointer">Modifier</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Projects Table */}
        <section className="bg-white rounded-lg shadow-sm p-6 mt-6 overflow-auto">
          <h3 className="font-semibold text-lg text-gray-900 mb-4">Projets</h3>
          <table className="w-full min-w-[600px] md:min-w-full table-auto text-sm text-gray-700">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Company</th>
                <th className="px-4 py-2 text-left">Budget</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Completion</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="px-4 py-2 flex items-center gap-2">
                    <img src={project.icon} alt={project.company} className="w-6 h-6" />
                    <span>{project.company}</span>
                  </td>
                  <td className="px-4 py-2">{project.budget}</td>
                  <td className="px-4 py-2"><StatusBadge status={project.status} /></td>
                  <td className="px-4 py-2">
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div className="bg-teal-500 h-2 rounded-full" style={{ width: `${project.completion}%` }}></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
