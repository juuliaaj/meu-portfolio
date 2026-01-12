import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled || menuOpen ? "scrolled" : ""}`}>
      <div className="header-container">
        <strong className="logo">Júlia Jardim</strong>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={menuOpen ? "nav open" : "nav"}>
          <a href="#about">Sobre Mim</a>
          <a href="#education">Formação</a>
          <a href="#tecnologias">Tecnologias</a>
          <a href="#projects">Projetos</a>
          <a href="#events">Participações</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>
    </header>
  );
}
