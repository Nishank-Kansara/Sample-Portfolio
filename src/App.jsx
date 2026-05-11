import { Suspense, useState, useEffect } from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import About from './component/About';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Timeline from './component/Timeline';
import Contact from './component/Contact';
import Footer from './component/Footer';
import CustomCursor from './component/CustomCursor';
import ScrollTop from './component/ScrollTop';
import './App.css';

// ========================
//  Page Loader
// ========================
function Loader() {
  return (
    <div className="page-loader">
      <div className="page-loader__inner">
        <div className="page-loader__logo">
          <span className="page-loader__bracket">{'<'}</span>
          <span className="page-loader__name">J</span>
          <span className="page-loader__bracket">{'/>'}</span>
        </div>
        <div className="page-loader__bar">
          <div className="page-loader__progress" />
        </div>
        <p className="page-loader__text">Loading Experience...</p>
      </div>
    </div>
  );
}

// ========================
//  Main App
// ========================
export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="app">
      <CustomCursor />
      <Navbar />

      <main>
        <Suspense fallback={null}>
          <Hero />
        </Suspense>

        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>

      <Footer />
      <ScrollTop />
    </div>
  );
}