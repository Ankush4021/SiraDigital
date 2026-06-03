import { useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { pageMotion } from "./data/motion";
import { useRoute } from "./hooks/useRoute";

const pages = {
  "/": { key: "home", component: (navigate) => <Home navigate={navigate} /> },

  "/services": {
    key: "services",
    component: (navigate) => <Services navigate={navigate} />,
  },

  "/about": {
    key: "about",
    component: (navigate) => <About navigate={navigate} />,
  },

  "/projects": {
    key: "projects",
    component: (navigate) => <Projects navigate={navigate} />,
  },

  "/contact": {
    key: "contact",
    component: (navigate) => <Contact navigate={navigate} />,
  },
};

function App() {
  const { path, navigate } = useRoute();
  const page = useMemo(() => pages[path] ?? pages["/"], [path]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#110719] text-white">
      <div className="site-bg" />
      <Header path={path} navigate={navigate} />
      <AnimatePresence mode="wait">
        <motion.div
          key={page.key}
          variants={pageMotion}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          {page.component(navigate)}
        </motion.div>
      </AnimatePresence>
      <Footer navigate={navigate} />
    </main>
  );
}

export default App;
