import { motion } from "framer-motion";

interface KeyTakeawaysProps {
  items: string[];
  title?: string;
}

const KeyTakeaways = ({ items, title = "Punti Chiave" }: KeyTakeawaysProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-accent rounded-xl p-6 sm:p-8 border border-primary/10"
    >
      <h3 className="font-heading font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-primary" />
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-start gap-3 text-muted-foreground"
          >
            <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs font-semibold text-primary">{index + 1}</span>
            </span>
            <span className="text-sm leading-relaxed">{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default KeyTakeaways;
