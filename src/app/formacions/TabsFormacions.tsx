"use client";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

const tabs = [
  { label: "Per a docents", id: "docents" },
  { label: "Per a alumnat", id: "alumnat" },
  { label: "Per a famílies", id: "families" },
];

export default function TabsFormacions() {
  const [active, setActive] = useState("docents");
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
          {active === "docents" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-coral-600 mb-2">
                👩‍🏫 Formacions per a docents
              </h2>
              <p className="text-lg text-gray-700">
                Eines per créixer com a equip i educar des del benestar
                emocional.
              </p>
              <p className="text-gray-700">
                Les formacions per a docents són espais per viure i integrar
                l’educació emocional i la comunicació conscient dins la realitat
                dels centres educatius. Treballo a partir del model de
                competències emocionals del GROP (Universitat de Barcelona) i
                del model de Comunicació No Violenta de Marshall B. Rosenberg,
                que ofereixen un marc teòric sòlid i contrastat per al
                creixement personal i professional. A través d’una metodologia
                vivencial i participativa, convertim la teoria en experiència:
                els docents descobreixen com aplicar les competències emocionals
                i la comunicació empàtica a la seva pràctica diària, tant dins
                com fora de l’aula. Perquè difícilment podem acompanyar
                emocionalment si no treballem primer les nostres pròpies
                competències — educar des del benestar és el punt de partida per
                millorar la convivència i potenciar l’aprenentatge.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-2">
                💬 Formacions disponibles
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>Benestar docent: connectar amb les pròpies emocions</li>
                <li>
                  Competències emocionals a l’aula: de la teoria a la pràctica
                </li>
                <li>Comunicació empàtica: construir relacions que cuiden</li>
                <li>Formacions a mida</li>
              </ul>
              <div className="mt-8 text-center">
                <span className="italic text-coral-600 text-lg font-handwritten">
                  "Educar és l'arma més poderosa per canviar el món."
                  <br />— Nelson Mandela
                </span>
              </div>
              <div className="mt-8 text-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-block bg-coral-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-coral-600 transition-colors"
                >
                  En parlem?
                </button>
              </div>
            </div>
          )}
          {active === "alumnat" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-coral-600 mb-2">
                Tallers per a l’alumnat de secundària
              </h2>
              <p className="text-lg text-gray-700">
                Espais per conèixer-se, expressar-se i créixer emocionalment.
              </p>
              <p className="text-gray-700">
                Els tallers per a l’alumnat són experiències vivencials per
                descobrir, comprendre i gestionar l'univers emocional. A través
                d’activitats pràctiques, reflexió i dinàmiques participatives,
                els joves prenen consciència de com se senten, com pensen i com
                es relacionen amb les persones i el món que els envolta. Cada
                proposta s’adapta a l’edat i a les necessitats del grup, per
                convertir l’aprenentatge emocional en una experiència real i
                significativa.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-2">
                💬 Tallers disponibles
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>Consciència emocional: comprendre per créixer</li>
                <li>
                  Gestionar el que sento: l’art de navegar per les emocions
                </li>
                <li>Autoconeixement i autoestima: mirar-te amb bons ulls</li>
                <li>Posar-se a la pell de l’altre: descobrir l’empatia</li>
                <li>El teu temps, el teu tresor</li>
                <li>TR: emoció i pensament per a una bona defensa oral</li>
                <li>Tallers a mida</li>
              </ul>
              <div className="mt-8 text-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-block bg-coral-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-coral-600 transition-colors"
                >
                  En parlem?
                </button>
              </div>
            </div>
          )}
          {active === "families" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-coral-600 mb-2">
                🟠 Xerrades per a famílies
              </h2>
              <p className="text-lg text-gray-700">
                Espais per compartir, reflexionar i créixer junts.
              </p>
              <p className="text-gray-700">
                Les famílies juguen un paper clau en el desenvolupament
                emocional dels infants i joves. A través d’aquestes xerrades,
                comparteixo eines pràctiques i reflexions per ajudar a millorar
                la comunicació, la gestió emocional i el benestar familiar. Cada
                trobada és un espai proper i vivencial, pensat per generar
                conversa, inspirar i oferir recursos útils per al dia a dia.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-2">
                💬 Xerrades disponibles
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>Educar en les emocions</li>
                <li>
                  Acompanyar en la frustració: la importància de posar límits
                </li>
                <li>La construcció d’una autoestima sana</li>
                <li>
                  Comunicació No Violenta: claus per teixir relacions afectuoses
                  i respectuoses
                </li>
              </ul>
              <div className="mt-8 text-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-block bg-coral-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-coral-600 transition-colors"
                >
                  Dissenyem una proposta a mida
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
