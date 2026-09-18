import { Link, useLocation } from "react-router-dom";
import { person } from "../data/content";

type Props = {
  solid: boolean;
  menuOpen: boolean;
  onToggle: () => void;
};

const links = [
  { to: "/work", label: "Work" },
  { to: { pathname: "/", hash: "#skills" }, label: "Skills" },
  { to: "/about", label: "About" },
  { to: { pathname: "/", hash: "#contact" }, label: "Contact" },
];

export function Navbar({ menuOpen, onToggle }: Props) {
  const { pathname } = useLocation();
  const inner = pathname !== "/";

  return (
    <header className="navbar is-solid">
      <div className="navbar__brand">
        <Link to="/" className="logo">
          {person.name}
        </Link>
        {inner ? (
          <Link className="back" to="/">
            ← Home
          </Link>
        ) : null}
      </div>
      <nav className="nav-links" aria-label="Primary">
        {links.map((link) => (
          <Link key={link.label} to={link.to}>
            {link.label}
          </Link>
        ))}
        <a href={person.resume}>Resume</a>
      </nav>
      <button
        className="nav-toggle"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={onToggle}
      >
        {menuOpen ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        )}
      </button>
    </header>
  );
}

export function MenuOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <div className={`menu-overlay${open ? " is-open" : ""}`} aria-hidden={!open}>
      <nav aria-label="Primary">
        <Link to="/" onClick={onClose}>
          Home
        </Link>
        <Link to="/work" onClick={onClose}>
          Work
        </Link>
        <Link to={{ pathname: "/", hash: "#skills" }} onClick={onClose}>
          Skills
        </Link>
        <Link to="/about" onClick={onClose}>
          About
        </Link>
        <a href={`mailto:${person.email}`} onClick={onClose}>
          Contact
        </a>
        <a href={person.resume} onClick={onClose}>
          Resume
        </a>
      </nav>
    </div>
  );
}
