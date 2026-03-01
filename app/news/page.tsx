import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import ScrollReveal from "../components/ScrollReveal";

interface NewsItem {
  title: string;
  date: string;
  tag: string;
  description: string;
  body?: string;
  link?: string;
  image?: string;
  featured?: boolean;
  slug?: string;
}

function getNewsItems(): NewsItem[] {
  const newsDirectory = path.join(process.cwd(), 'content/news');

  if (!fs.existsSync(newsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(newsDirectory);
  const newsItems = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const fullPath = path.join(newsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      // Extract slug from filename
      const slug = fileName.replace(/\.md$/, '');

      return { ...data, slug } as NewsItem;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return newsItems;
}

export default function NewsPage() {
  const newsItems = getNewsItems();
  const featured = newsItems.filter(item => item.featured);
  const regular = newsItems.filter(item => !item.featured);

  return (
    <div className="relative overflow-hidden selection:bg-uva-red selection:text-white bg-academic-50 min-h-screen pb-24">
      <section className="relative pt-12 pb-12 border-b border-academic-200 overflow-hidden bg-gradient-to-br from-white via-academic-50 to-academic-100">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#102a43_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="inline-flex gap-2 text-xs md:text-sm font-bold tracking-[0.15em] uppercase text-uva-red mb-4 bg-uva-red/5 px-4 py-1.5 rounded-full border border-uva-red/10">
              Latest Updates
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight text-academic-900 leading-[1.1] mb-6">
              News <span className="text-academic-400 font-light italic">& Announcements</span>
            </h1>
            <p className="text-lg md:text-xl text-academic-600 leading-relaxed max-w-3xl font-light">
              Stay updated with the latest news, publications, awards, and events from the Microbiology theme research groups.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 space-y-24">
        {featured.length > 0 && (
          <section>
            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="font-serif text-3xl font-bold text-academic-900 mb-8 flex items-center gap-4">
                <span className="w-8 h-1 bg-uva-red rounded-full"></span>
                Featured News
              </h2>
            </ScrollReveal>
            <div className="space-y-12">
              {featured.map((item, index) => (
                <ScrollReveal key={index} direction="up" delay={0.2 + (index * 0.1)}>
                  <article className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 border border-academic-200 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group">
                    <div className="grid md:grid-cols-[2fr_3fr] gap-8 items-center">
                      {item.image && (
                        <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-academic-100/50">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                      )}
                      <div>
                        <div className="inline-flex px-3 py-1 mb-4 text-xs font-bold tracking-[0.15em] uppercase text-academic-900 bg-academic-100 rounded-lg">
                          {item.tag}
                        </div>
                        <h3 className="font-serif text-3xl font-bold text-academic-900 mb-4 group-hover:text-uva-red transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-academic-500 text-sm font-semibold tracking-widest uppercase mb-4">
                          {new Date(item.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                        <p className="text-academic-700 font-light leading-relaxed text-lg mb-8 max-w-2xl">
                          {item.description}
                        </p>
                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold tracking-widest uppercase text-white bg-academic-900 shadow-md hover:shadow-lg hover:bg-academic-700 transition-all duration-300 rounded-xl hover:-translate-y-0.5"
                          >
                            Read more
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </section>
        )}

        <section>
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="font-serif text-3xl font-bold text-academic-900 mb-8 flex items-center gap-4">
              <span className="w-8 h-1 bg-academic-900 rounded-full"></span>
              {featured.length > 0 ? "All News" : "Recent News"}
            </h2>
          </ScrollReveal>

          {regular.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regular.map((item, index) => (
                <ScrollReveal key={index} direction="up" delay={0.1 * (index % 3 + 1)}>
                  <article className="bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-academic-200 shadow-sm hover:shadow-lg transition-all duration-500 h-full flex flex-col group hover:-translate-y-1">
                    <div className="inline-flex px-3 py-1 mb-6 text-xs font-bold tracking-[0.15em] uppercase text-academic-600 bg-academic-100 rounded-lg self-start group-hover:bg-uva-red group-hover:text-white transition-colors">
                      {item.tag}
                    </div>
                    <h3 className="text-2xl font-bold text-academic-900 mb-3 group-hover:text-uva-red transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-academic-500 text-xs font-semibold tracking-widest uppercase mb-4">
                      {new Date(item.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                    <p className="text-academic-700 font-light leading-relaxed flex-grow line-clamp-4">
                      {item.description}
                    </p>
                    {item.link && (
                      <div className="mt-8 pt-6 border-t border-academic-200/50">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center text-sm font-bold tracking-widest uppercase text-academic-900 group-hover:text-uva-red transition-colors"
                        >
                          Read more
                          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </a>
                      </div>
                    )}
                  </article>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <ScrollReveal direction="up" delay={0.3}>
              <div className="bg-white/50 backdrop-blur rounded-2xl p-12 text-center border border-academic-200 shadow-inner">
                <p className="text-academic-600 text-lg font-light italic">More news coming soon.</p>
              </div>
            </ScrollReveal>
          )}
        </section>
      </div>
    </div>
  );
}
