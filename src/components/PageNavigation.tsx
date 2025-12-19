import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PageNavigationProps {
  prevPage?: { path: string; label: string };
  nextPage?: { path: string; label: string };
}

const PageNavigation = ({ prevPage, nextPage }: PageNavigationProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-stretch gap-4 mt-12 pt-8 border-t border-border">
      {prevPage ? (
        <Link
          to={prevPage.path}
          className="flex-1 group flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
        >
          <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
            <ChevronLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
          </div>
          <div className="text-left">
            <span className="text-xs text-muted-foreground uppercase tracking-wide">
              Precedente
            </span>
            <p className="font-heading font-medium text-foreground group-hover:text-primary transition-colors">
              {prevPage.label}
            </p>
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {nextPage ? (
        <Link
          to={nextPage.path}
          className="flex-1 group flex items-center justify-end gap-4 p-4 rounded-xl border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
        >
          <div className="text-right">
            <span className="text-xs text-muted-foreground uppercase tracking-wide">
              Successivo
            </span>
            <p className="font-heading font-medium text-foreground group-hover:text-primary transition-colors">
              {nextPage.label}
            </p>
          </div>
          <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </div>
  );
};

export default PageNavigation;
