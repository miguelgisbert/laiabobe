"use client";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

const tabs = [
  { label: "Coaching personal", id: "personal" },
  { label: "Coaching d'equips", id: "equips" },
];

export default function TabsCoaching() {
  const [active, setActive] = useState("personal");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div>
        <div className="flex border-b mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 font-semibold transition-colors border-b-2 -mb-px focus:outline-none ${
                active === tab.id
                  ? "border-coral-500 text-coral-600"
                  : "border-transparent text-gray-500 hover:text-coral-500"
              }`}
              onClick={() => setActive(tab.id)}
              aria-selected={active === tab.id}
              aria-controls={`tab-panel-${tab.id}`}
              role="tab"
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="mt-6" role="tabpanel" id={`tab-panel-${active}`}>
          {active === "personal" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-coral-600 mb-2">
                🧭 Coaching personal
              </h2>
              <p className="text-lg text-gray-700">
                Un espai per connectar amb els teus propòsits i avançar amb
                claredat.
                <br />
                🌱 T’agradaria aconseguir un objectiu però no saps per on
                començar?
              </p>
              <p className="text-gray-700">
                El coaching personal t’ajuda a guanyar claredat, confiança i
                direcció per avançar cap allò que realment vols. Treballem des
                del present i mirant cap al futur, per convertir els reptes en
                oportunitats de creixement.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-2">
                💬 Com treballem?
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>
                  Explorar on ets i on vols arribar, amb preguntes que t’ajudin
                  a veure-hi clar.
                </li>
                <li>Dissenyar un pla d’acció personalitzat i realista.</li>
                <li>
                  Avançar amb seguretat i compromís, en un espai de confiança i
                  sense judicis.
                </li>
              </ul>
              <h3 className="text-xl font-semibold mt-6 mb-2">
                🎯 Què pots treballar?
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>Gestió del temps i de l’estrès</li>
                <li>Confiança i autoestima</li>
                <li>Presa de decisions</li>
                <li>Orientació i reenfocament professional</li>
                <li>Canvi d’hàbits i organització personal</li>
                <li>Comunicació assertiva i relacions</li>
                <li>Creativitat i desbloqueig en projectes</li>
              </ul>
              <h3 className="text-xl font-semibold mt-6 mb-2">
                ✨ Els resultats
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>Superar bloquejos i prendre decisions amb confiança.</li>
                <li>Impulsar canvis professionals i personals.</li>
                <li>
                  Passar de la intenció a l’acció amb coherència i seguretat.
                </li>
              </ul>
              <h3 className="text-xl font-semibold mt-6 mb-2">
                💡 És per a tu si...
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>Et trobes en un moment de canvi o transició.</li>
                <li>Vols fer un pas endavant, personal o professional.</li>
                <li>
                  Necessites ordenar idees, definir objectius o recuperar la
                  motivació.
                </li>
              </ul>
              <div className="mt-8 text-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-block bg-coral-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-coral-600 transition-colors"
                >
                  Vull fer el primer pas
                </button>
              </div>
            </div>
          )}
          {active === "equips" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-coral-600 mb-2">
                🧭 Coaching d’equips per a centres educatius
              </h2>
              <p className="text-lg text-gray-700">
                Un procés per créixer junts, enfortir la comunicació i avançar
                amb coherència.
                <br />
                🌱 Vols millorar el funcionament del teu centre i reforçar la
                comunitat que el fa possible?
              </p>
              <p className="text-gray-700">
                El coaching d’equips és una eina pràctica i vivencial que ajuda
                els docents a créixer professionalment, cohesionar-se com a grup
                i orientar-se cap a objectius compartits. A diferència d’una
                formació tradicional, ofereix un espai actiu i dinàmic per
                guanyar consciència, definir objectius i traduir-los en accions
                concretes.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-2">
                💬 Com treballem
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>
                  Millorar la comunicació interna, escoltant i expressant-se des
                  del respecte.
                </li>
                <li>
                  Definir i alinear objectius comuns que donin sentit i direcció
                  a la tasca compartida.
                </li>
                <li>
                  Construir confiança i cohesió, aprofitant la diversitat com a
                  font de riquesa.
                </li>
                <li>
                  Avançar cap a un lideratge més compartit i col·laboratiu.
                </li>
              </ul>
              <h3 className="text-xl font-semibold mt-6 mb-2">
                🎯 Què es pot treballar?
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>Comunicació i coordinació interna</li>
                <li>Gestió de conflictes i discrepàncies</li>
                <li>Alineació d’objectius de centre</li>
                <li>Lideratge compartit i rols dins l’equip</li>
                <li>Integració de nous docents</li>
                <li>Clima positiu i motivació col·lectiva</li>
                <li>Cohesió i compromís en moments de canvi</li>
              </ul>
              <h3 className="text-xl font-semibold mt-6 mb-2">
                ✨ Els resultats
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>Comunicació més clara i respectuosa.</li>
                <li>Col·laboració i cohesió més fortes entre docents.</li>
                <li>Gestió constructiva dels conflictes.</li>
                <li>Presa de decisions més compartida i coherent.</li>
              </ul>
              <h3 className="text-xl font-semibold mt-6 mb-2">
                💡 És per al teu centre si...
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>
                  Voleu millorar la comunicació i la confiança dins l’equip.
                </li>
                <li>Esteu en un moment de canvi o redefinició d'objectius.</li>
                <li>
                  Busqueu reforçar el compromís i la motivació col·lectiva.
                </li>
              </ul>
              <div className="mt-8 text-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-block bg-coral-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-coral-600 transition-colors"
                >
                  Volem fer el primer pas
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
