# Laia Bobé - Website Personal

Una web moderna i professional per a Laia Bobé, formadora en intel·ligència emocional, docent i coach.

## 🌟 Característiques

- **Framework Modern**: Next.js 15 amb TypeScript
- **Disseny Responsive**: Tailwind CSS amb colors coral i referències al Petit Príncep
- **Blog Integrat**: Sistema de blog per a articles sobre intel·ligència emocional
- **Optimitzat per SEO**: Metadades i estructura optimitzades
- **Desplegament Fàcil**: Llest per a Vercel, Netlify o similar

## 🎨 Tema Visual

- **Colors Principals**: Palette coral (#eb6b47) amb accents del Petit Príncep
- **Elements Visuals**: Papallones com a bullets i elements decoratius
- **Tipografia**: Inter i Georgia per a una aparença professional
- **Animacions**: Transicions suaus i efectes hover elegants

## 🚀 Inici Ràpid

### Prerequisits

- Node.js 18+
- npm, yarn, pnpm o bun

### Instal·lació

1. Clona el repositori:

```bash
git clone <url-del-repositori>
cd laia-bobe-website
```

2. Instal·la les dependències:

```bash
npm install
```

3. Executa el servidor de desenvolupament:

```bash
npm run dev
```

4. Obre [http://localhost:3000](http://localhost:3000) al teu navegador.

## 📁 Estructura del Projecte

```
src/
├── app/                  # App Router (Next.js 13+)
│   ├── blog/            # Pàgines del blog
│   ├── globals.css      # Estils globals
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Pàgina d'inici
├── components/          # Components reutilitzables
│   └── Navigation.tsx   # Component de navegació
└── ...
```

## 🌐 Pàgines Incloses

- **Inici**: Presentació de Laia, serveis i testimonis
- **Blog**: Articles sobre intel·ligència emocional
- **Sobre mi**: Informació professional i acadèmica
- **Formacions**: Serveis oferits
- **Contacte**: Formulari de contacte

## 🎯 Per a Laia: Gestió de Contingut

### Afegir Nous Articles de Blog

1. Ves a `src/app/blog/page.tsx`
2. Afegeix un nou objecte a l'array `blogPosts`:

```javascript
{
  id: 5,
  title: "El teu nou títol",
  excerpt: "Resum del teu article...",
  date: "2025-02-01",
  slug: "url-amigable-del-article",
  readTime: "5 min"
}
```

### Modificar Contingut de la Pàgina Principal

- **Textos principals**: Edita `src/app/page.tsx`
- **Informació de contacte**: Modifica la secció footer
- **Serveis**: Actualitza la secció "Services"

## 📱 Responsive Design

La web està optimitzada per a:

- **Desktop**: Experiència completa amb navegació horitzontal
- **Tablet**: Layout adaptat amb elements redimensionats
- **Mobile**: Menú hamburguesa i disseny vertical

## 🎨 Personalització de Colors

Els colors es poden modificar a `tailwind.config.ts`:

```typescript
colors: {
  coral: {
    50: '#fef7f4',   // Més clar
    500: '#eb6b47',  // Principal
    600: '#d54e2a',  // Més fosc
  }
}
```

## 🚀 Desplegament

### Vercel (Recomanat)

1. Puja el codi a GitHub
2. Connecta el repositori a [Vercel](https://vercel.com)
3. El desplegament és automàtic!

### Altres Plataformes

- **Netlify**: Compatible amb build command `npm run build`
- **Railway**: Suport per Next.js
- **Render**: Configuració automàtica

## 📝 Scripts Disponibles

```bash
npm run dev      # Servidor de desenvolupament
npm run build    # Build de producció
npm run start    # Servidor de producció
npm run lint     # Linting del codi
```

## 🤝 Contribucions

Aquest projecte està dissenyat específicament per a Laia Bobé. Per modificacions significatives, contacta amb el desenvolupador.

## 📄 Llicència

Tots els drets reservats - Laia Bobé 2025

---

🦋 _"El que realment importa per a l'èxit, el caràcter, la felicitat i els èxits vitals és un conjunt definit d'habilitats socials, no només habilitats cognitives"_ - Daniel Goleman
