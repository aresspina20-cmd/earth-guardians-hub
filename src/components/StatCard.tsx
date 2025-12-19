import { motion } from "framer-motion";

interface StatCardProps {
  value: string;
  label: string;
  description?: string;
  delay?: number;
}

const StatCard = ({ value, label, description, delay = 0 }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-primary/5 rounded-xl p-6 text-center border border-primary/10"
    >
      <div className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-2">
        {value}
      </div>
      <div className="font-medium text-foreground mb-1">{label}</div>
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
    </motion.div>
  );
};

export default StatCard;
