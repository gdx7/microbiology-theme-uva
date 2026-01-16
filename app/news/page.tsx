// app/news/page.tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

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
    <section className="section page-with-watermark">
      <div className="container">
        <p className="section-kicker">Latest Updates</p>
        <h1 className="section-title">News & Announcements</h1>
        <p className="lead">
          Stay updated with the latest news, publications, awards, and events from the Microbiology theme research groups.
        </p>

        {featured.length > 0 && (
          <>
            <h2 className="section-title" style={{ marginTop: "3rem", fontSize: "1.4rem" }}>
              Featured News
            </h2>
            <div style={{ marginTop: "1.5rem" }}>
              {featured.map((item, index) => (
                <article key={index} className="card" style={{ marginBottom: "1.5rem" }}>
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "auto",
                        maxHeight: "400px",
                        objectFit: "cover",
                        borderRadius: "8px",
                        marginBottom: "1rem"
                      }}
                    />
                  )}
                  <div style={{
                    display: "inline-block",
                    padding: "0.25rem 0.75rem",
                    background: "var(--accent-soft)",
                    color: "var(--primary)",
                    borderRadius: "var(--radius-sm)",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    marginBottom: "0.75rem"
                  }}>
                    {item.tag}
                  </div>
                  <h3 style={{ fontSize: "1.25rem", marginTop: "0.5rem" }}>{item.title}</h3>
                  <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", color: "#64748b" }}>
                    {new Date(item.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                  <p style={{ marginTop: "0.8rem", fontSize: "0.95rem" }}>
                    {item.description}
                  </p>
                  {item.link && (
                    <div style={{ marginTop: "1rem" }}>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline"
                      >
                        Read more →
                      </a>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </>
        )}

        <h2 className="section-title" style={{ marginTop: "3rem", fontSize: "1.4rem" }}>
          {featured.length > 0 ? "All News" : "Recent News"}
        </h2>

        {regular.length > 0 ? (
          <div className="grid" style={{ marginTop: "2rem" }}>
            {regular.map((item, index) => (
              <article key={index} className="card">
                <div style={{
                  display: "inline-block",
                  padding: "0.25rem 0.75rem",
                  background: "var(--accent-soft)",
                  color: "var(--primary)",
                  borderRadius: "var(--radius-sm)",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  marginBottom: "0.75rem"
                }}>
                  {item.tag}
                </div>
                <h3 style={{ fontSize: "1.1rem" }}>{item.title}</h3>
                <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", color: "#64748b" }}>
                  {new Date(item.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                <p style={{ marginTop: "0.8rem", fontSize: "0.95rem" }}>
                  {item.description}
                </p>
                {item.link && (
                  <div style={{ marginTop: "1rem" }}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline"
                    >
                      Read more →
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        ) : (
          newsItems.length === 0 && (
            <div className="card" style={{ marginTop: "2rem" }}>
              <p>News items will appear here once added via the CMS.</p>
            </div>
          )
        )}
      </div>
    </section>
  );
}
