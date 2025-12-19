import { ReactNode } from "react";
import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  icon?: ReactNode;
  gradient?: "nature" | "ocean" | "earth";
}

const gradientStyles = {
  nature: "from-primary/20 via-primary/5 to-transparent",
  ocean: "from-secondary/20 via-secondary/5 to-transparent",
  earth: "from-earth/20 via-earth/5 to-transparent",
};

const PageHeader = ({ title, subtitle, icon, gradient = "nature" }: PageHeaderProps) => {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-b ${gradientStyles[gradient]} py-16 sm:py-24`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {icon && (
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
              {icon}
            </div>
          )}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
    </div>
  );
};

export default PageHeader;
