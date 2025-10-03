import Navigation from "@/components/Navigation";
import Link from "next/link";

// Simulem alguns articles de blog per mostrar la funcionalitat
const blogPosts = [
  {
    id: 1,
    title: "La importància de l'intel·ligència emocional en l'educació",
    excerpt:
      "Com l'intel·ligència emocional pot transformar l'experiència educativa tant per a docents com per a estudiants.",
    date: "2025-01-15",
    slug: "importancia-intelligencia-emocional-educacio",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "Comunicació No Violenta: Construint ponts entre persones",
    excerpt:
      "Descobreix com la Comunicació No Violenta pot millorar les teves relacions personals i professionals.",
    date: "2025-01-10",
    slug: "comunicacio-no-violenta-construint-ponts",
    readTime: "7 min",
  },
  {
    id: 3,
    title: "El Petit Príncep i les lliçons d'intel·ligència emocional",
    excerpt:
      "Les ensenyances intemporals d'Antoine de Saint-Exupéry sobre les emocions i les relacions humanes.",
    date: "2025-01-05",
    slug: "petit-princep-lliçons-intelligencia-emocional",
    readTime: "6 min",
  },
  {
    id: 4,
    title: "Gestió de l'estrès docent: Estratègies pràctiques",
    excerpt:
      "Eines i tècniques per ajudar els educadors a gestionar l'estrès i el burnout.",
    date: "2024-12-28",
    slug: "gestio-estres-docent-estrategies",
    readTime: "8 min",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-coral-50 to-little-prince-sky/20">
      <Navigation />

      <main className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reflexions, consells i recursos sobre intel·ligència emocional,
              educació i desenvolupament personal.
            </p>
            <div className="w-20 h-1 bg-coral-500 mx-auto mt-8"></div>
          </div>

          {/* Featured Post */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12 hover-lift">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-coral-200 to-little-prince-sky/30 flex items-center justify-center p-8">
                <span className="text-6xl">🦋</span>
              </div>
              <div className="md:w-2/3 p-8">
                <div className="text-sm text-coral-600 font-semibold mb-2">
                  ARTICLE DESTACAT
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <span>
                      {new Date(blogPosts[0].date).toLocaleDateString("ca-ES")}
                    </span>
                    <span className="mx-2">•</span>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <Link
                    href={`/blog/${blogPosts[0].slug}`}
                    className="text-coral-600 hover:text-coral-700 font-semibold"
                  >
                    Llegir més →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover-lift"
              >
                <div className="h-48 bg-gradient-to-br from-coral-100 to-little-prince-sky/20 flex items-center justify-center">
                  <span className="text-4xl">📝</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="text-gray-500">
                      <span>
                        {new Date(post.date).toLocaleDateString("ca-ES")}
                      </span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-coral-600 hover:text-coral-700 font-semibold"
                    >
                      Llegir →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Vols estar al dia?
              </h3>
              <p className="text-gray-600 mb-6">
                Subscriu-te per rebre els últims articles sobre intel·ligència
                emocional i desenvolupament personal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="El teu email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-500"
                />
                <button className="bg-coral-500 text-white px-6 py-2 rounded-lg hover:bg-coral-600 transition-colors">
                  Subscriure'm
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-16">
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
    </div>
  );
}
