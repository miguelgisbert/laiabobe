"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function QuiSocPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-coral-50 to-little-prince-sky/20">
        <Navigation />
        <main className="max-w-4xl mx-auto px-4 py-12">
          <section className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-coral-600 mb-2">
                Em dic Laia Bobé
              </h2>
              <p className="text-lg text-gray-700">
                Soc una persona entusiasta, aventurera, apassionada de la
                muntanya i amant de la lectura i la música.
                <br />
                Tot allò que em mou i em fa vibrar té un punt en comú: la meva
                set d’aprendre, de descobrir i de créixer — a través dels
                llibres, de les experiències i, sobretot, de les persones que
                m’envolten.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                🎓 Formació acadèmica i especialitzacions
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>Llicenciada en Traducció i Interpretació (UPF, 2007)</li>
                <li>Màster en Formació del Professorat (UPF i UOC, 2011)</li>
                <li>Postgrau en Educació Emocional i Benestar (UB, 2019)</li>
                <li>Curs en Mediació (UOC, 2022)</li>
                <li>Curs en Comunicació No Violenta (RIEEB, 2022)</li>
                <li>Curs en Pràctiques Restauratives (RIEEB, 2023)</li>
                <li>
                  Postgrau en Coaching i Lideratge Emocional (RIEEB, 2025)
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-coral-50 rounded-lg p-6 flex flex-col items-center shadow">
                <span className="text-3xl mb-2">📖</span>
                <div className="text-center">
                  <div className="font-semibold">Un llibre?</div>
                  <div>El Petit Príncep</div>
                </div>
              </div>
              <div className="bg-coral-50 rounded-lg p-6 flex flex-col items-center shadow">
                <span className="text-3xl mb-2">🎵</span>
                <div className="text-center">
                  <div className="font-semibold">Una cançó?</div>
                  <div>“La gent que estimo”, d’Oques Grasses</div>
                </div>
              </div>
              <div className="bg-coral-50 rounded-lg p-6 flex flex-col items-center shadow">
                <span className="text-3xl mb-2">🏔️</span>
                <div className="text-center">
                  <div className="font-semibold">Un somni?</div>
                  <div>Pujar l’Aconcagua (6.962 m), a l’Argentina</div>
                </div>
              </div>
              <div className="bg-coral-50 rounded-lg p-6 flex flex-col items-center shadow">
                <span className="text-3xl mb-2">😊</span>
                <div className="text-center">
                  <div className="font-semibold">Filosofia de vida?</div>
                  <div>“Cada pas del camí és una nova oportunitat.”</div>
                </div>
              </div>
            </div>
            <div className="mt-10 text-center">
              <div className="font-bold text-lg mb-4">
                Tens ganes de preguntar-me alguna cosa més?
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-block bg-coral-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-coral-600 transition-colors"
              >
                Anima't
              </button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
