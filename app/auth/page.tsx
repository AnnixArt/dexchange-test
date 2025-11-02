"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Register attempt with:\nName: ${name}\nEmail: ${email}\nPassword: ${password}\nRemember: ${remember}`);
  };

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col items-center">
      {/* --------------------------- HEADER ----------------------------- */}
      <nav className="w-full bg-teal-400 rounded-b-xl relative overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-full h-40 sm:h-48 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path fill="#22d3ee" fillOpacity="0.15" d="M0,192L60,186.7C120,181,240,171,360,176C480,181,600,203,720,213.3C840,224,960,224,1080,197.3C1200,171,1320,117,1380,90.7L1440,64L1440,0L0,0Z" />
          <path fill="#22d3ee" fillOpacity="0.2" d="M0,256L60,261.3C120,267,240,277,360,261.3C480,245,600,203,720,181.3C840,160,960,160,1080,170.7C1200,181,1320,203,1380,213.3L1440,224L1440,0L0,0Z" />
          <path fill="#22d3ee" fillOpacity="0.3" d="M0,288L60,277.3C120,267,240,245,360,232C480,219,600,213,720,208C840,203,960,203,1080,186.7C1200,171,1320,139,1380,122.7L1440,107L1440,0L0,0Z" />
        </svg>

        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 relative z-10">

          {/* ----------------------------------- Logo---------------------*/}
          <div className="flex items-center space-x-2 text-white font-bold text-lg select-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent select-text">
              DEXCHANGE SAAS
            </span>
          </div>

          {/* -------------------------------- code Hamburger mobile --------------------- */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* ----------------------- Menu desktop ----------------------------- */}

          <div className="hidden sm:flex sm:space-x-8 text-xs uppercase font-semibold select-none mt-2 sm:mt-0">
            <a href="#" className="flex items-center space-x-1 hover:underline text-white">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6" />
              </svg>
              <span>Tableau de bord</span>
            </a>
            <a href="#" className="flex items-center space-x-1 hover:underline text-white">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="7" r="4" />
                <path d="M5.5 21a8.38 8.38 0 0113 0" />
              </svg>
              <span>Profil</span>
            </a>
            <a href="#" className="flex items-center space-x-1 hover:underline text-white">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 4v16m8-8H4" />
              </svg>
              <span>Inscription</span>
            </a>
            <a href="#" className="flex items-center space-x-1 hover:underline text-white">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 12H3m12 0l-4-4m4 4l-4 4" />
              </svg>
              <span>Connexion</span>
            </a>
          </div>

          {/* CTA */}
          <button className="hidden sm:inline-block bg-white text-teal-600 px-6 py-2 rounded-full text-sm hover:bg-teal-100 transition select-none">
            Appel à l'action
          </button>
        </div>

        {/* ------------------------------- MENU MOBILE -------------------------- */}
        {menuOpen && (
          <div className="sm:hidden fixed top-0 left-0 w-64 h-full bg-teal-400 z-50 flex flex-col py-4 px-4 space-y-4 shadow-lg animate-slide-in">
            {/*------------------- Bouton  quitter menu mobile X -------------------------*/}
            <div className="flex justify-end mb-4">
              <button onClick={() => setMenuOpen(false)} className="text-white hover:text-teal-100 transition focus:outline-none">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <a href="#" className="flex items-center space-x-2 text-white hover:underline">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6" />
              </svg>
              <span>Tableau de bord</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-white hover:underline">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="7" r="4" />
                <path d="M5.5 21a8.38 8.38 0 0113 0" />
              </svg>
              <span>Profil</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-white hover:underline">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 4v16m8-8H4" />
              </svg>
              <span>Inscription</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-white hover:underline">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 12H3m12 0l-4-4m4 4l-4 4" />
              </svg>
              <span>Connexion</span>
            </a>
          </div>
        )}

        {/*-------------------------Text de bienvenue---------------------- */}
        <h1 className="text-white text-center font-semibold text-2xl sm:text-3xl mb-20 select-none relative z-10">
          Bienvenue !
        </h1>
      </nav>

      {/* --------------------------FORMULAIRE */}
      <div className="bg-white max-w-sm w-full rounded-xl shadow-xl p-8 mx-4 sm:mx-auto -mt-10 mb-20 relative z-20">
        <div className="text-center font-semibold mb-5 text-gray-700 select-none">Inscrivez-vous avec</div>

        {/* ------------------Buttons reseaux social */}
        <div className="flex justify-center space-x-5 mb-5">
          {/* Facebook */}
          <button aria-label="Register with Facebook" className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#1877F2" viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.81v-9.295H9.692v-3.622h3.119V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.466.099 2.798.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.59l-.467 3.622h-3.123V24h6.116c.726 0 1.326-.6 1.326-1.326V1.326C24 .6 23.4 0 22.675 0z"/>
            </svg>
          </button>
          {/* Apple */}
          <button aria-label="Register with Apple" className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M16.365 1.43c.46-.55.77-1.32.69-2.07-1.326.059-2.93.887-3.873 1.946-.426.522-.8 1.32-.7 2.07 1.424.06 2.997-.91 3.883-1.947zM20.23 11.48c-.046-3.192 2.602-4.73 2.72-4.8-1.49-2.17-3.797-2.16-4.604-2.19-1.95-.197-3.82 1.143-4.812 1.143-1 .002-2.58-1.107-4.25-1.077-2.18.03-4.18 1.28-5.308 3.25-2.27 3.93-.573 9.68 1.603 12.847 1.06 1.566 2.315 3.312 3.963 3.25 1.56-.05 2.15-1.01 4.055-1.01 1.9 0 2.452 1.01 4.254.97 1.533-.04 2.503-1.59 3.436-3.16 1.077-1.796 1.528-3.535 1.565-3.63-.04-.017-3.022-1.16-3.07-4.603z"/>
            </svg>
          </button>
          {/* Google */}
          <button aria-label="Register with Google" className="w-12 h-12 border border-pink-500 text-pink-600 font-bold rounded-lg flex items-center justify-center hover:bg-pink-100 transition">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-6 h-6">
              <path fill="#EA4335" d="M24 9.5c3.4 0 6.1 1.2 7.5 2.2l5.5-5.5C34.7 3.2 29.8 1 24 1 14.6 1 6.5 7.1 3.1 15.9l6.3 4.9C11.5 14.2 17.4 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.5 24c0-1.7-.1-3.4-.5-5H24v9.5h12.7c-.5 3-2.6 5.5-5.7 7l.1-.1 7.2 5.6C43.6 37 46.5 31.3 46.5 24z"/>
              <path fill="#FBBC05" d="M9.4 29.5l-6.3-4.9C2.7 26.1 2 24 2 24s0 0 0 0l7.4 5.5 2-1.3z"/>
              <path fill="#34A853" d="M24 46c6.5 0 11.9-2.2 15.9-5.9l-7.3-5.6c-2 1.4-4.6 2.2-8.6 2.2-6.5 0-12-4.7-13.9-11.2l-6.3 4.9C6.5 40.9 14.6 47 24 47z"/>
              <path fill="none" d="M0 0h48v48H0z"/>
            </svg>
          </button>
        </div>

        <div className="text-center text-gray-400 font-semibold mb-6 select-none">Ou</div>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="text-gray-700 font-semibold text-sm mb-2 block">Nom</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Votre nom"
              required
            />
          </div>
          <div>
            <label className="text-gray-700 font-semibold text-sm mb-2 block">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Votre email"
              required
            />
          </div>
          <div>
            <label className="text-gray-700 font-semibold text-sm mb-2 block">Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Mot de passe"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-3 select-none cursor-pointer">

  {/*---------------------- code Toggle bouton------------------------------- */}
  <div
    onClick={() => setRemember(!remember)}
    className={`w-10 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
      remember ? "bg-teal-400" : "bg-gray-300"
    }`}
  >
    <div
      className={`bg-white w-4 h-4 rounded-full shadow transform transition-transform duration-300 ${
        remember ? "translate-x-4" : "translate-x-0"
      }`}
    />
  </div>

  {/*--------------------------------- Texte Bouton se souvenire de moi ---------- */}
  <span className="text-gray-700 text-sm select-none">
    {remember ? "Se souvenir activé" : "Se souvenir désactivé"}
  </span>
</label>

          
          </div>
          <button type="submit" className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600 transition">
            S'inscrire
          </button>
        </form>

        <p className="mt-6 text-center text-gray-400 text-sm select-none">
          Vous avez déjà un compte ? <a href="#" className="text-teal-500 hover:underline">Se connecter</a>
        </p>
      </div>
    </div>
  );
}
