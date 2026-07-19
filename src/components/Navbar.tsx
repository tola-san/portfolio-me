import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";

const navItems = ["About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 px-3 py-3 sm:px-5 sm:py-4"
      aria-label="Main navigation"
    >
      <div className="glass mx-auto max-w-7xl rounded-lg border-white/10 px-3 py-2.5 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between gap-3">
          <a
            href="#"
            onClick={closeMenu}
            className="flex min-w-0 items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-accent"
            aria-label="Tola San — home"
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-cyan-accent font-heading text-sm font-bold text-black shadow-[0_0_18px_rgba(34,240,255,0.25)]">
              TS
            </span>
            <span className="truncate font-heading text-base font-bold tracking-tight sm:text-lg">
              Tola San
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="rounded-lg px-3 py-2 text-sm font-medium text-white/65 transition-colors hover:bg-white/5 hover:text-cyan-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-accent lg:px-4"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="liquid-glass-control liquid-glass-accent hidden rounded-xl px-4 py-2 text-sm font-bold text-black sm:inline-flex"
            >
              Resume
            </motion.a>

            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="liquid-glass-control inline-flex size-10 items-center justify-center rounded-xl text-white hover:text-cyan-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-accent md:hidden"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isMenuOpen && (
            <motion.div
              id="mobile-navigation"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="overflow-hidden md:hidden"
            >
              <div className="mt-2 grid gap-1 border-t border-white/10 pt-2">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={closeMenu}
                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-cyan-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-accent"
                  >
                    {item}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="liquid-glass-control liquid-glass-accent mt-1 rounded-xl px-4 py-2.5 text-center text-sm font-bold text-black sm:hidden"
                >
                  Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
