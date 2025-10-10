import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-coral-50 to-little-prince-sky/20">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Image
                src="/images/logoBlau.png"
                alt="Laia Bobé"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <Link
                href="#about"
                className="text-gray-700 hover:text-coral-500 transition-colors"
              >
                Sobre mi
              </Link>
              <Link
                href="#services"
                className="text-gray-700 hover:text-coral-500 transition-colors"
              >
                Formacions
              </Link>
              <Link
                href="#testimonials"
                className="text-gray-700 hover:text-coral-500 transition-colors"
              >
                Testimonis
              </Link>
              {/* <Link
                href="#blog"
                className="text-gray-700 hover:text-coral-500 transition-colors"
              >
                Blog
              </Link> */}
              <Link
                href="mailto:contactar@laiabobe.com"
                className="text-gray-700 hover:text-coral-500 transition-colors"
              >
                Contacte
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="flex justify-center mb-6">
              <Image
                src="/images/logoLila.png"
                alt="Laia Bobé Logo"
                width={400}
                height={150}
                className="h-30 w-auto opacity-100 drop-shadow-sm"
                priority
              />
            </div>
            <p className="text-xl text-coral-600 mb-4">
              Especialista en educació emocional, docent i coach
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Acompanyo persones i equips a potenciar i entrenar les seves
              competències emocionals perquè puguin assolir els canvis que es
              proposin i els mantinguin en el temps.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <Image
              src="/images/laia1.png"
              alt="Laia Bobé"
              width={1000}
              height={1000}
              className="max-w-full h-auto max-w-800px] w-auto"
              priority
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-coral-500 text-white px-8 py-3 rounded-full hover:bg-coral-600 transition-colors shadow-lg hover-lift">
              Descobreix les formacions
            </button>
            <a
              href="mailto:contactar@laiabobe.com"
              className="border-2 border-coral-500 text-coral-500 px-8 py-3 rounded-full hover:bg-coral-500 hover:text-white transition-colors inline-block text-center"
            >
              Contacta amb mi
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Qui soc?</h3>
            <div className="w-20 h-1 bg-coral-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-2xl font-semibold text-gray-800 mb-6">
                Laia Bobé
              </h4>
              <p className="text-gray-600 mb-6">
                Docent de secundària (Màster en Formació del Professorat per la
                Universitat Oberta de Catalunya i la Universitat Pompeu Fabra).
              </p>
              <p className="text-gray-600 mb-6">
                Especialista en Educació Emocional (Postgrau en Educació
                Emocional i Benestar per la Universitat de Barcelona).
              </p>
              <p className="text-gray-600 mb-8">
                Especialista en Comunicació No Violenta i Pràctiques
                Restauratives (REEB) i coach (Postgrau en Coaching i Lideratge
                Emocional per la REEB).
              </p>

              <div className="space-y-3">
                <div className="butterfly-bullet">
                  Imparteixo formacions a docents, equips directius, alumnat i
                  famílies
                </div>
                <div className="butterfly-bullet">
                  Especialitzada en educació emocional i comunicació no violenta
                </div>
                <div className="butterfly-bullet">
                  Coaching individual i d'equips per al desenvolupament personal
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Image
                src="/images/laia5.png"
                alt="Laia Bobé - Formadora"
                width={384}
                height={384}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-gradient-to-r from-little-prince-sky/20 to-coral-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <blockquote className="handwritten-quote mb-4">
            &ldquo;Just quan l'oruga va pensar que el món s'acabava, <br /> es
            va convertir en papallona&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Confien en mi
            </h3>
            <div className="w-20 h-1 bg-coral-500 mx-auto mb-8"></div>
            {/* <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Tinc una llarga experiència en formació en diferents centres
              educatius. Ofereixo una formació diferencial enfocada en la gestió
              de les emocions a través de la Intel·ligència Emocional mitjançant
              tallers i formacions elaborades a mida per a entitats socials, no
              només educatives també per a equips d'empreses.
            </p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg hover-lift flex items-center justify-center h-40 w-full max-w-sm">
              <Image
                src="/images/centres/UB.png"
                alt="Universitat de Barcelona"
                width={180}
                height={90}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover-lift flex items-center justify-center h-40 w-full max-w-sm">
              <Image
                src="/images/centres/GROP.jpg"
                alt="GROP - Universitat de Barcelona"
                width={210}
                height={110}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover-lift flex items-center justify-center h-40 w-full max-w-sm">
              <Image
                src="/images/centres/CAE.png"
                alt="CAE"
                width={180}
                height={90}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover-lift flex items-center justify-center h-40 w-full max-w-sm">
              <Image
                src="/images/centres/CdL.png"
                alt="Col·legi de Doctors i Llicenciats"
                width={180}
                height={90}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover-lift flex items-center justify-center h-40 w-full max-w-sm">
              <Image
                src="/images/centres/CEP Palma.png"
                alt="Centre de Professorat Palma"
                width={180}
                height={90}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover-lift flex items-center justify-center h-40 w-full max-w-sm">
              <Image
                src="/images/centres/CEP_Eivissa.png"
                alt="Govern de les Illes Balears - Conselleria d'Educació"
                width={210}
                height={110}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover-lift flex items-center justify-center h-40 w-full max-w-sm">
              <Image
                src="/images/centres/Narrative brains.avif"
                alt="Narrative Brains"
                width={180}
                height={90}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover-lift flex items-center justify-center h-40 w-full max-w-sm">
              <Image
                src="/images/centres/Singulars.png"
                alt="Programa Singulars"
                width={180}
                height={90}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover-lift flex items-center justify-center h-40 w-full max-w-sm">
              <Image
                src="/images/centres/UAO.webp"
                alt="Universitat Abat Oliba CEU"
                width={180}
                height={90}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-20 bg-gradient-to-br from-coral-50 to-little-prince-sky/20"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Testimonis
            </h3>
            <div className="w-20 h-1 bg-coral-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto max-w-xl">
              La transformació personal és real. Aquestes són les paraules de
              persones que han viscut l'experiència de créixer emocionalment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Remei */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover-lift flex flex-col h-full">
              <div className="flex items-center mb-4">
                <Image
                  src="/images/testimonis/remei.png"
                  alt="Remei"
                  width={60}
                  height={60}
                  className="rounded-full object-cover w-15 h-15 aspect-square"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-800">Remei</h4>
                  <p className="text-coral-600 text-sm">
                    Assessora de formació
                  </p>
                </div>
              </div>
              <div className="text-gray-600 flex-grow flex flex-col">
                <p className="mb-4">
                  Fa uns cursos escolars, en el marc de la meva tasca d'aquell
                  moment, com a assessora de formació a l'àmbit de Mallorca,
                  teníem la responsabilitat d'oferir formacions de qualitat als
                  professionals, especialment en àmbits tan crucials com el
                  desenvolupament de les competències emocionals...
                </p>
                <details className="testimonial-details mt-auto">
                  <div className="mb-4 space-y-3 text-sm">
                    <p>
                      Érem molt conscients que es tractava d'un tema fonamental,
                      tant per la salut emocional dels docents com per l'impacte
                      que té en la qualitat educativa.
                    </p>
                    <p>
                      Necessitàvem, per tant, una formadora amb sòlids
                      coneixements, criteri pedagògic i una mirada humana i
                      rigorosa ahora. En contactar amb el GROP, ens varen
                      proposar a na Laia, i va ser una elecció immillorable.
                    </p>
                    <p>
                      La seva formació va ser excel·lent en tots els sentits:
                      plenament contextualitzada, adaptada a la realitat dels
                      centres educatius de Mallorca, i especialment sensible a
                      les necessitats reals del professorat assistent.
                    </p>
                    <p>
                      Na Laia va saber crear un espai propi i segur, afavorint
                      la participació i el diàleg, resolent dubtes amb molta
                      claredat i sempre des d'una base neurocientífica ben
                      fonamentada.
                    </p>
                    <p>
                      La seva capacitat per vincular teoria i pràctica, ciència
                      i emoció, va ser especialment valorada per totes les
                      persones assistents.
                    </p>
                    <p>
                      La seva intervenció no només va aportar coneixement, sinó
                      que va generar reflexió profunda i transformadora. El seu
                      criteri, la seva capacitat comunicativa i el seu compromís
                      amb el benestar docent són realment destacables.
                    </p>
                    <p>
                      <strong>
                        Sens dubte, repetiríem amb ella qualsevol formació que
                        pogués sorgir. És una professional excepcional,
                        generosa, solvent i molt valuosa en l'àmbit de la
                        formació docent.
                      </strong>
                    </p>
                  </div>
                  <summary className="text-coral-500 hover:text-coral-600 font-medium">
                    Llegir més
                  </summary>
                </details>
              </div>
            </div>

            {/* Laia (alumna) */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover-lift flex flex-col h-full">
              <div className="flex items-center mb-4">
                <Image
                  src="/images/testimonis/laia.png"
                  alt="Laia"
                  width={60}
                  height={60}
                  className="rounded-full object-cover w-15 h-15 aspect-square"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-800">Laia</h4>
                  <p className="text-coral-600 text-sm">Alumna</p>
                </div>
              </div>
              <div className="text-gray-600 flex-grow flex flex-col">
                <p className="mb-4">
                  Vaig tenir l'oportunitat d'estar com a alumna amb la Laia en
                  diferents cursos d'emocions i intel·ligència emocional. Ha
                  estat un plaer comptar amb una professional que va més enllà
                  del paper...
                </p>
                <details className="testimonial-details mt-auto">
                  <div className="mb-4 space-y-3 text-sm">
                    <p>
                      Amb la Laia saps que t'emocionaràs de veritat, et sentiràs
                      acompanyada, segura i també et divertiràs.
                    </p>
                    <p>
                      Un combo perfecte per viure una experiència inoblidable
                      mentre aprens. Treballa amb metodologies actives i fa
                      servir recursos perquè no et quedis aturat/a, sinó que
                      puguis participar i aprendre fent i autodescobrint-te.
                    </p>
                    <p>
                      <strong>
                        Testic agraïda per ajudar-me a sortir de la zona de
                        confort i aixecar-me de la cadira.
                      </strong>
                    </p>
                  </div>
                  <summary className="text-coral-500 hover:text-coral-600 font-medium">
                    Llegir més
                  </summary>
                </details>
              </div>
            </div>

            {/* Cira */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover-lift flex flex-col h-full">
              <div className="flex items-center mb-4">
                <Image
                  src="/images/testimonis/cira.png"
                  alt="Cira"
                  width={60}
                  height={60}
                  className="rounded-full object-cover w-15 h-15 aspect-square"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-800">Cira</h4>
                  <p className="text-coral-600 text-sm">Participant formació</p>
                </div>
              </div>
              <div className="text-gray-600 flex-grow flex flex-col">
                <p className="mb-4">
                  Amb Laia vaig fer una formació en línia titulat: 'Autonomia
                  emocional, l'impacte de les 3A en el nostre benestar'. El que
                  més em va agradar va ser la forma de compartir i parlar de na
                  Laia...
                </p>
                <details className="testimonial-details mt-auto">
                  <div className="mb-4 space-y-3 text-sm">
                    <p>
                      Posant molts d'exemples propis per explicar conceptes que
                      no estam acostumats a tractar.
                    </p>
                    <p>
                      Particularment em vaig endur aprenentatges tant bàsics
                      com:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        Acceptar que sempre transitem entre el benestar i el
                        malestar emocional;
                      </li>
                      <li>
                        No hi ha emocions bones o dolentes, sinó positives o
                        negatives;
                      </li>
                      <li>El llenguatge crea identitat;</li>
                      <li>
                        Aprenem a través de les neurones mirall, actuam per
                        imitació.
                      </li>
                    </ul>
                    <p>
                      Des de que vaig fer el curs amb ella llegeix molt més i
                      faig molta més formació amb l'objectiu d'autocuidar-me
                      emocionalment.
                    </p>
                    <p>
                      <strong>Gràcies Laia!</strong>
                    </p>
                  </div>
                  <summary className="text-coral-500 hover:text-coral-600 font-medium">
                    Llegir més
                  </summary>
                </details>
              </div>
            </div>

            {/* Elena */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover-lift flex flex-col h-full">
              <div className="flex items-center mb-4">
                <Image
                  src="/images/testimonis/elenea.png"
                  alt="Elena"
                  width={60}
                  height={60}
                  className="rounded-full object-cover w-15 h-15 aspect-square"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-800">Elena</h4>
                  <p className="text-coral-600 text-sm">Projecte Singulars</p>
                </div>
              </div>
              <div className="text-gray-600 flex-grow flex flex-col">
                <p className="mb-4">
                  Vaig fer el curs de Gimnàstica Emocional dins el curs de
                  Monitor de lleure del projecte Singulars. Abans em costava
                  connectar amb les meves emocions i també amb la proximitat
                  física...
                </p>
                <details className="testimonial-details mt-auto">
                  <div className="mb-4 space-y-3 text-sm">
                    <p>
                      Però gràcies al curs he après a entendre millor què sento
                      i a expressar-ho amb més claredat i seguretat.
                    </p>
                    <p>
                      Ara em comunico de manera més assertiva i em sento més
                      còmoda en les relacions amb els altres.
                    </p>
                    <p>
                      <strong>
                        Amb l'ajuda de la Laia, he guanyat confiança i
                        tranquil·litat en el meu dia a dia.
                      </strong>
                    </p>
                  </div>
                  <summary className="text-coral-500 hover:text-coral-600 font-medium">
                    Llegir més
                  </summary>
                </details>
              </div>
            </div>

            {/* Yago */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover-lift flex flex-col h-full">
              <div className="flex items-center mb-4">
                <Image
                  src="/images/testimonis/yago.png"
                  alt="Yago"
                  width={60}
                  height={60}
                  className="rounded-full object-cover w-15 h-15 aspect-square"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-800">Yago</h4>
                  <p className="text-coral-600 text-sm">Universitat</p>
                </div>
              </div>
              <div className="text-gray-600 flex-grow flex flex-col">
                <p className="mb-4">
                  He tingut la sort d'acompanyar la Laia en diverses sessions
                  del taller 'El teu temps, el teu tresor' que oferim des de la
                  Universitat a la que treballo a estudiants de Batxillerat...
                </p>
                <details className="testimonial-details mt-auto">
                  <div className="mb-4 space-y-3 text-sm">
                    <p>I la veritat és que sempre em sorprèn positivament.</p>
                    <p>
                      És un taller molt actiu i participatiu, on els estudiants
                      no només escolten, sinó que s'hi impliquen de veritat. La
                      Laia té una manera molt natural i propera de connectar amb
                      ells, i aconsegueix crear un ambient de confiança que
                      convida a reflexionar i compartir.
                    </p>
                    <p>
                      <strong>
                        És un luxe poder comptar amb ella; el seu taller aporta
                        moltíssim.
                      </strong>
                    </p>
                  </div>
                  <summary className="text-coral-500 hover:text-coral-600 font-medium">
                    Llegir més
                  </summary>
                </details>
              </div>
            </div>

            {/* Franco */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover-lift flex flex-col h-full">
              <div className="flex items-center mb-4">
                <Image
                  src="/images/testimonis/franco.png"
                  alt="Franco"
                  width={60}
                  height={60}
                  className="rounded-full object-cover w-15 h-15 aspect-square"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-800">
                    Franco
                  </h4>
                  <p className="text-coral-600 text-sm">Coaching individual</p>
                </div>
              </div>
              <div className="text-gray-600 flex-grow flex flex-col">
                <p className="mb-4">
                  Mi nombre es Franco Ángel Transilvani, soy de Argentina, más
                  precisamente Lujan de Cuyo, Mendoza. Conozco a Laia a través
                  de una persona que me recomenda a ella para hacer un proceso
                  de coaching...
                </p>
                <details className="testimonial-details mt-auto">
                  <div className="mb-4 space-y-3 text-sm">
                    <p>
                      Lo realizamos durante 10 sesiones comprendidas entre mayo
                      y julio de 2025.
                    </p>
                    <p>
                      La distancia no fue problema ya que sucedió de manera
                      virtual, aún así la calidez de los encuentros fue real, de
                      empatía y entendimiento. Aquí emprendí mi trabajo hacia
                      acabar con mis limitaciones personales y antiguos
                      paradigmas que me alejaban del objetivo. El mismo es ser
                      hoy Fotógrafo profesional.
                    </p>
                    <p>
                      <strong>
                        Agradezco de corazón, mente e intuición cada instancia
                        de trabajo con Laia.
                      </strong>
                    </p>
                  </div>
                  <summary className="text-coral-500 hover:text-coral-600 font-medium">
                    Llegir més
                  </summary>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-coral-500 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl font-bold mb-4">
            Vols començar la transformació?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Tot canvi comença amb una decisió: posar-se en marxa.
            <br />
            <i>“Un viatge de mil milles comença amb el primer pas.”</i> — Lao
            Tsé
          </p>
          <a
            href="mailto:contactar@laiabobe.com"
            className="bg-white text-coral-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block"
          >
            Vull fer el primer pas
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h4 className="text-2xl font-bold text-coral-400 mb-4">Laia Bobé</h4>
          <p className="text-gray-300 mb-8">
            Especialista en educació emocional, docent i coach
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <span className="text-3xl">🦋</span>
            <span className="text-3xl">⭐</span>
            <span className="text-3xl">🌹</span>
          </div>

          <p className="text-gray-400 text-sm">
            © 2025 Laia Bobé. Tots els drets reservats.
          </p>
        </div>
      </footer>
    </main>
  );
}
