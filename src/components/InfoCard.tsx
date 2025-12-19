import { ReactNode } from "react";
import { motion } from "framer-motion";

interface InfoCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  variant?: "default" | "accent" | "highlight";
  delay?: number;
}

const variantStyles = {
  default: "bg-card border-border hover:border-primary/20",
  accent: "bg-accent border-accent hover:border-primary/30",
  highlight: "bg-primary/5 border-primary/20 hover:border-primary/40",
};

const InfoCard = ({ title, description, icon, variant = "default", delay = 0 }: InfoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`rounded-xl p-6 border transition-all duration-300 ${variantStyles[variant]}`}
      style={{ boxShadow: "var(--shadow-md)" }}
    >
      {icon && (
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
          {icon}
        </div>
      )}
      <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default InfoCard;
