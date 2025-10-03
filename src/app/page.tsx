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
              <Link
                href="#blog"
                className="text-gray-700 hover:text-coral-500 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="#contact"
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
              Intel·ligència emocional, Docent i Coach
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ajudo a les persones i els equips a desenvolupar el seu potencial
              amb eines pràctiques i transformadores. Connecta amb les teves
              emocions i impulsa el teu potencial.
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
            <button className="border-2 border-coral-500 text-coral-500 px-8 py-3 rounded-full hover:bg-coral-500 hover:text-white transition-colors">
              Contacta amb mi
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Qui sóc?</h3>
            <div className="w-20 h-1 bg-coral-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-2xl font-semibold text-gray-800 mb-6">
                Laia Bobé
              </h4>
              <p className="text-gray-600 mb-6">
                Docent de secundària Màster en Formació del Professorat per la
                Universitat Oberta de Catalunya i la Universitat Pompeu Fabra.
              </p>
              <p className="text-gray-600 mb-6">
                Especialista en educació emocional (Postgrau en Educació
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
            &ldquo;Justo cuando la oruga pensó que el mundo se acababa,
            <br />
            se convirtió en mariposa.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Centres de Formació i Universitats
            </h3>
            <div className="w-20 h-1 bg-coral-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Tinc una llarga experiència en formació en diferents centres
              educatius. Ofereixo una formació diferencial enfocada en la gestió
              de les emocions a través de la Intel·ligència Emocional mitjançant
              tallers i formacions elaborades a mida per a entitats socials, no
              només educatives també per a equips d'empreses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg hover-lift flex items-center justify-center h-32 w-full max-w-xs">
              <Image
                src="/images/centres/CAE.png"
                alt="CAE"
                width={180}
                height={90}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover-lift flex items-center justify-center h-32 w-full max-w-xs">
              <Image
                src="/images/centres/CdL.png"
                alt="Col·legi de Doctors i Llicenciats"
                width={180}
                height={90}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover-lift flex items-center justify-center h-32 w-full max-w-xs">
              <Image
                src="/images/centres/CEP Palma.png"
                alt="Centre de Professorat Palma"
                width={180}
                height={90}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover-lift flex items-center justify-center h-32 w-full max-w-xs">
              <Image
                src="/images/centres/Conselleria educació balears.png"
                alt="Govern de les Illes Balears - Conselleria d'Educació"
                width={180}
                height={90}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover-lift flex items-center justify-center h-32 w-full max-w-xs">
              <Image
                src="/images/centres/Narrative brains.avif"
                alt="Narrative Brains"
                width={180}
                height={90}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover-lift flex items-center justify-center h-32 w-full max-w-xs">
              <Image
                src="/images/centres/Singulars.png"
                alt="Programa Singulars"
                width={180}
                height={90}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover-lift flex items-center justify-center h-32 w-full max-w-xs">
              <Image
                src="/images/centres/UAO.png"
                alt="Universitat Abat Oliba CEU"
                width={180}
                height={90}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover-lift flex items-center justify-center h-32 w-full max-w-xs">
              <Image
                src="/images/centres/UB.png"
                alt="Universitat de Barcelona"
                width={180}
                height={90}
                className="max-w-full max-h-full object-contain"
              />
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
            Contacta amb mi i descobreix com l&apos;intel·ligència emocional pot
            canviar la teva vida.
          </p>
          <button className="bg-white text-coral-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            Contacta'm
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h4 className="text-2xl font-bold text-coral-400 mb-4">Laia Bobé</h4>
          <p className="text-gray-300 mb-8">
            Intel·ligència emocional, Docent i Coach
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
