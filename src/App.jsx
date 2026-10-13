import { NavLink, Route, Routes, Link, useParams, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { projects, blogPosts, resume } from './content.js';

const GITHUB = 'https://github.com/Rafael-Hoek';

function Tags({ tags }) {
  if (!tags?.length) return null;
  return <ul className="tags">{tags.map((t) => <li key={t}>{t}</li>)}</ul>;
}

function Meta({ item }) {
  return (
    <p className="meta">
      {item.date && <time>{item.date}</time>}
      {item.minutes && <span> · {item.minutes} min read</span>}
    </p>
  );
}

function PostRow({ item, base }) {
  return (
    <Link className="row" to={`${base}/${item.slug}`}>
      <time>{item.date}</time>
      <span className="row__title">{item.title}</span>
      <span className="row__abstract">{item.abstract}</span>
    </Link>
  );
}

function ProjectCard({ item }) {
  return (
    <Link className="card" to={`/projects/${item.slug}`}>
      <h3>{item.title}</h3>
      <p>{item.abstract}</p>
      <Tags tags={item.tags} />
    </Link>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <h1 className="hero__name">Rafaël Hoek</h1>
        <p className="hero__role">AI empowered software engineer</p>
        <p className="hero__skills">C#/.NET · JavaScript · React · AWS · Azure · SQL · Claude</p>
        <hr className="hero__rule" />
        <nav className="hero__links" aria-label="Elsewhere">
          <Link className="link-btn" to="/resume">Resume</Link>
          <Link className="link-btn" to="/projects">Projects</Link>
          <Link className="link-btn" to="/blog">Blog</Link>
          <a className="link-btn" href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
      </section>

      <div className="page">
        <section className="block">
          <div className="block__head">
            <h2>Latest posts</h2>
            <Link to="/blog">all posts &rarr;</Link>
          </div>
          {blogPosts.length === 0 && <p className="empty">First post coming soon.</p>}
          {blogPosts.slice(0, 3).map((p) => <PostRow key={p.slug} item={p} base="/blog" />)}
        </section>

        <section className="block">
          <div className="block__head">
            <h2>Projects</h2>
            <Link to="/projects">all projects &rarr;</Link>
          </div>
          <div className="grid">
            {projects.slice(0, 4).map((p) => <ProjectCard key={p.slug} item={p} />)}
          </div>
        </section>
      </div>
    </>
  );
}

function Resume() {
  return (
    <div className="page prose resume">
      <ReactMarkdown>{resume.body}</ReactMarkdown>
      <p className="noprint"><a href="/resume-RafaelHoek.pdf">Download as PDF</a> · <button onClick={() => window.print()}>Print</button></p>
    </div>
  );
}

function ListPage({ title, intro, items, base, cards }) {
  return (
    <div className="page">
      <h1>{title}</h1>
      <p className="intro">{intro}</p>
      {items.length === 0 && <p className="empty">Nothing here yet.</p>}
      {cards
        ? <div className="grid">{items.map((i) => <ProjectCard key={i.slug} item={i} />)}</div>
        : items.map((i) => <PostRow key={i.slug} item={i} base={base} />)}
    </div>
  );
}

function Detail({ items, base, label }) {
  const { slug } = useParams();
  const index = items.findIndex((i) => i.slug === slug);
  const item = items[index];
  if (!item) return <div className="page"><p>Not found. <Link to={base}>Back to {label}</Link></p></div>;
  const newer = items[index - 1];
  const older = items[index + 1];
  return (
    <article className="page prose">
      <Link to={base} className="back">&larr; {label}</Link>
      <h1>{item.title}</h1>
      <Meta item={item} />
      <Tags tags={item.tags} />
      <ReactMarkdown>{item.body}</ReactMarkdown>
      <nav className="pager">
        {older ? <Link to={`${base}/${older.slug}`}>&larr; {older.title}</Link> : <span />}
        {newer ? <Link to={`${base}/${newer.slug}`}>{newer.title} &rarr;</Link> : <span />}
      </nav>
    </article>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <header>
        <nav className="topnav" aria-label="Primary">
          <Link className="brand" to="/"><span className="brandmark" aria-hidden="true">{'>_'}</span>rafael</Link>
          <div className="topnav__links">
            <NavLink to="/blog">blog</NavLink>
            <NavLink to="/projects">projects</NavLink>
            <NavLink to="/resume">resume</NavLink>
            <NavLink to={GITHUB}>github</NavLink>
          </div>
        </nav>
      </header>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<ListPage title="Projects" intro="Things I've built." items={projects} base="/projects" cards />} />
          <Route path="/projects/:slug" element={<Detail items={projects} base="/projects" label="projects" />} />
          <Route path="/blog" element={<ListPage title="Blog" intro="What I think is important, useful, or funny." items={blogPosts} base="/blog" />} />
          <Route path="/blog/:slug" element={<Detail items={blogPosts} base="/blog" label="blog" />} />
          <Route path="*" element={<div className="page"><h1>404</h1><p>Page not found. <Link to="/">Go home</Link></p></div>} />
        </Routes>
      </div>
      <footer>
        <span>© {new Date().getFullYear()} Rafaël Hoek</span>
        <a href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub</a>
      </footer>
    </>
  );
}
