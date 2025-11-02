"use client";

import { useState } from "react";

const sidebarItemsMain = [
  { label: "Dashboard", 
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
 active: true },

{ label: "Transactions", 
  icon: (
    <svg className="w-5 h-5" fill="none" stroke="#00cade" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ), active: false },

{ label: "Facturation", icon: (
    <svg className="w-5 h-5" fill="none" stroke="#00cade" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ), active: false },

{ label: "RTL", icon: (
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
 active: false },

];

const sidebarItemsAccount = [
  { label: "Profile", icon: (
   <svg className="w-5 h-5" fill="none" stroke="#00cade" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7" r="4" />
      <path d="M5.5 21a6.5 6.5 0 0113 0" />
    </svg>
  )},
  { label: "Se connecter", icon: (
    <svg className="w-5 h-5" fill="none" stroke="#00cade" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 00-8 0v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )},
  { label: "Inscrivez-vous",
     icon: (
      <svg className="w-5 h-5" fill="none" stroke="#00cade" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 00-8 0v2" />
        <circle cx="12" cy="7" r="4" />
        <line x1="12" y1="11" x2="12" y2="17" />
        <line x1="9" y1="14" x2="15" y2="14" />
      </svg>
    
  )},
];

const statCards = [
  {
    title: "Today's Money",
    value: "$53,000",
    percent: "+55%",
    percentColor: "text-green-500",

      icon: (
  <svg
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="6" width="20" height="12" rx="2" ry="2" />
    <line x1="2" y1="10" x2="22" y2="10" />
  </svg>
)



  },
  {
    title: "Today's Users",
    value: "2,300",
    percent: "+5%",
    percentColor: "text-green-500",

   icon: (
  <svg
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 00-3-3.87" />
    <path d="M9 21v-2a4 4 0 013-3.87" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)


  },
  {
    title: "New Clients",
    value: "+3,052",
    percent: "-14%",
    percentColor: "text-red-500",

  
      icon: (
  <svg
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
)

  },

  {
    title: "Total Sales",
    value: "$173,000",
    percent: "+8%",
    percentColor: "text-green-500",
    
      icon: (
  <svg
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
  </svg>
)

  }
];

/*---------------------------------- Fin code Logo cadre -------------------------------------*/


const projects = [
  {
    logo: "https://cdn.worldvectorlogo.com/logos/adobe-xd.svg",
    name: "Chakra Soft UI Version",
    members: 5,
    budget: "$14,000",
    completion: 60,
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/atlassian.svg",
    name: "Add Progress Track",
    members: 4,
    budget: "$3,000",
    completion: 10,
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/slack-logo.svg",
    name: "Fix Platform Errors",
    members: 2,
    budget: "Not set",
    completion: 100,
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/spotify-1.svg",
    name: "Launch our Mobile App",
    members: 3,
    budget: "$32,000",
    completion: 100,
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/jira.svg",
    name: "Add the New Pricing Page",
    members: 1,
    budget: "$400",
    completion: 25,
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg",
    name: "Redesign New Online Shop",
    members: 3,
    budget: "$7,600",
    completion: 40,
  },
];

const memberAvatars = [
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/women/65.jpg",
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/men/45.jpg",
  "https://randomuser.me/api/portraits/men/29.jpg",
];

const orders = [
  { color: "text-green-500", icon: "$", title: "$2400, Design changes", date: "22 DEC 7:20 PM" },
  { color: "text-purple-400", icon: "#", title: "New order #4219423", date: "21 DEC 11:21 PM" },
  { color: "text-blue-400", icon: "$", title: "Server Payments for April", date: "21 DEC 9:28 PM" },
  { color: "text-green-500", icon: "#", title: "New card added for order #3210145", date: "20 DEC 3:52 PM" },
  { color: "text-yellow-400", icon: "#", title: "Unlock packages for Development", date: "19 DEC 11:35 PM" },
  { color: "text-pink-600", icon: "#", title: "New order #9851258", date: "18 DEC 4:41 PM", logo: "https://cdn.worldvectorlogo.com/logos/adobe-xd.svg" },
];

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans text-gray-700">

      {/* --------------------------Code de la Barre latérale ---------------( Sidebar )*/}
      <aside className={`fixed inset-y-0 left-0 bg-white shadow-md p-6 flex flex-col justify-between w-64 z-30
         transform transition-transform duration-300 ease-in-out
         md:static md:translate-x-0
         ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
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
                      {icon}
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
                      {icon}
                      <span>{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
        <div className="bg-teal-400 text-white rounded-lg px-4 py-5 mt-6 select-none flex items-center gap-3">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 11-10 10A10 10 0 0112 2z" />
            <path d="M12 14a2 2 0 10-2-2 2 2 0 002 2z" />
            <path d="M12 6v4" />
          </svg>
          <div>
            <p className="font-bold text-xs uppercase mb-1">Besoin d'aide ?</p>
            <p className="text-xs mb-3">Veuillez consulter notre documentation.</p>
            <button className="bg-white text-teal-500 rounded px-3 py-1 font-semibold text-xs shadow-sm hover:bg-gray-100 transition">
              DOCUMENTATION
            </button>
          </div>
        </div>
        {/* -----------------------------Bouton Fermer la barre latérale pour mobile---------------------------- */}
        <button
          className="absolute top-4 right-4 md:hidden text-gray-900 hover:text-teal-400"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close sidebar"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </aside>

      {/* ------------------Code de Superposition pour la barre latérale sur mobile------------------- */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* MEUN */}
      <main className="flex-grow p-6 md:p-10 lg:p-12 overflow-auto max-w-full relative">

        {/* ------------------ code Bouton mobile pour basculer la barre latérale------------------- */}
        <button
          className="mb-6 md:hidden inline-flex items-center px-3 py-2 text-teal-500 border border-teal-500 rounded-md hover:bg-teal-50 transition"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open sidebar"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          <span className="ml-2">Menu</span>
        </button>
        <div className="text-xs text-gray-500 mb-6 select-none font-semibold">


          
         <div className="w-full flex justify-end">
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
</div>
          Pages / <span className="text-gray-700">Dashboard</span>
        </div>



   {/* ------------------------- Code qui affiche les Fiches statistiques pour les permiers Cadre ----------------------------- */}

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10 select-none">
  {statCards.map(({ title, value, percent, percentColor, icon }, i) => (
    <div
      key={i}
      className="flex items-center gap-4 bg-white rounded-lg p-5 shadow-md 
                 transition-transform duration-300 ease-in-out 
                 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="bg-teal-100 text-teal-500 p-4 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold text-gray-500 mb-1">{title}</p>
        <div className="flex items-center gap-2">
          <p className="font-extrabold text-2xl text-gray-900">{value}</p>
          <p className={`text-sm font-semibold ${percentColor} ml-1`}>{percent}</p>
        </div>
      </div>
    </div>
  ))}
</div>


   {/* ----------------- Code Section Cartes sous les statistiques pour les 2eme Cadre  ------------------------- */}
 
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-10 select-none">
          <div className="md:col-span-2 bg-white rounded-lg shadow-sm p-6 flex flex-col justify-center">
            <p className="text-xs text-gray-500 mb-1">Lorem Ipsum</p>
            <h2 className="font-bold text-2xl mb-2">Dashboard</h2>
            <p className="text-sm text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="text-teal-500 font-semibold inline-flex items-center gap-1 hover:underline">
              Voir plus <span>→</span>
            </button>
          </div>

      <div className="md:col-span-2 bg-teal-400 rounded-lg flex items-center justify-center p-4">
          {/* Icône cadrée */}
         <div className="flex items-center justify-center w-14 h-14 bg-white rounded-full mr-4">
         <svg 
         className="w-8 h-8 text-teal-400" 
         fill="none" 
         stroke="currentColor" 
         strokeWidth={2} 
         viewBox="0 0 24 24" 
         strokeLinecap="round" 
          strokeLinejoin="round"
         >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
  </div>
  <span className="text-white font-bold text-3xl select-none">
    Chakra
  </span>
</div>
{/* ---------------------------------------- dernier cadre -----------------------" */}
          <div className="md:col-span-2 bg-white rounded-lg shadow-sm p-5 flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h3 className="font-bold text-lg mb-2 select-none">Lorem Ipsum</h3>
              <p className="text-sm text-gray-400 select-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              </p>
              <button className="text-teal-500 font-semibold mt-2 hover:underline inline-flex items-center gap-1">
                Voir plus <span>→</span>
              </button>
            </div>
    
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80"
              alt="people"
              className="w-full md:w-1/2 h-24 rounded-lg object-cover"
            />
          </div>
        </div>

{/* --------------------code Projets + Orders overview conteneur ----------------------*/}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6 select-none">
          {/* --------------Projet------------------*/}
          <section className="bg-white rounded-lg shadow-sm p-6 lg:col-span-2 overflow-auto max-w-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg text-gray-900">Projets</h3>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="h-3 w-3 rounded-full bg-teal-400"></div>30 réalisés ce mois-ci
              </div>
            </div>
            <table className="w-full min-w-[600px] table-fixed text-sm text-gray-700 border-collapse">
              <thead>
                <tr className="text-xs font-semibold text-gray-400 border-b border-gray-200">
                  <th className="py-3 px-4 text-left w-1/2">COMPANIES</th>
                  <th className="py-3 px-4 text-left w-1/6">MEMBERS</th>
                  <th className="py-3 px-4 text-left w-1/6">BUDGET</th>
                  <th className="py-3 px-4 text-left w-1/6">COMPLETION</th>
                </tr>
              </thead>
              <tbody>
                {projects.map(({ logo, name, members, budget, completion }, i) => (
                  <tr key={i} className={`${i % 2 === 0 ? "bg-gray-50" : "bg-white"} border-b border-gray-100`}>
                    <td className="flex items-center gap-3 py-3 px-4">
                      <img src={logo} alt={name + " logo"} className="h-5 w-5 object-contain flex-shrink-0" />
                      <span>{name}</span>
                    </td>
                    <td className="flex items-center gap-[-8px] py-3 px-4 -space-x-2">
                      {[...Array(members).keys()].map(idx => (
                        <img
                          key={idx}
                          src={memberAvatars[idx % memberAvatars.length]}
                          alt="member avatar"
                          className="w-6 h-6 rounded-full border-2 border-white"
                        />
                      ))}
                    </td>
                    <td className="py-3 px-4">{budget}</td>
                    <td className="py-3 px-4">
                      <a href="#" className="text-teal-400 font-semibold hover:underline">{completion}%</a>
                      <progress className="w-full h-1 rounded-full mt-1" value={completion} max={100} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* --------------------Aperçu des commandes ----------------------------*/}

          <section className="bg-white rounded-lg shadow-sm p-6 overflow-auto max-w-full">
            <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <span role="img" aria-label="box">📦</span> Aperçu des commandes
            </h3>
            <p className="text-xs text-gray-400 mb-4">30 % ce mois-ci</p>

            <ul className="space-y-4">
              {orders.map(({ color, icon, title, date, logo }, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  {logo ? (
                    <img src={logo} alt="order logo" className="w-6 h-6" />
                  ) : (
                    <span className={`${color} font-bold text-lg select-none`}>{icon}</span>
                  )}
                  <div>
                    <p className="text-sm text-gray-900 font-semibold">{title}</p>
                    <p className="text-xs text-gray-400">{date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}

