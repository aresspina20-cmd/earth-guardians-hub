import { Link } from "react-router-dom";
import { Leaf, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-nature flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-heading font-semibold text-lg">
                La Tutela Ambientale
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Un progetto educativo per sensibilizzare sulla tutela ambientale e lo sviluppo sostenibile.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Esplora</h4>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/antropocene" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                L'Antropocene
              </Link>
              <Link to="/crisi-climatica" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Crisi Climatica
              </Link>
              <Link to="/agenda-2030" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Agenda 2030
              </Link>
              <Link to="/risorse-energetiche" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Risorse Energetiche
              </Link>
              <Link to="/acqua" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                L'Acqua
              </Link>
              <Link to="/rifiuti" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                I Rifiuti
              </Link>
            </div>
          </div>

          {/* Credits */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Progetto</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Educazione Civica - Classi Quinte
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              A.S. 2025-2026
            </p>
            <Link
              to="/crediti"
              className="inline-flex items-center text-sm text-primary hover:underline"
            >
              Visualizza crediti →
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 La Tutela Ambientale. Progetto Educativo.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
            Torna su
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
