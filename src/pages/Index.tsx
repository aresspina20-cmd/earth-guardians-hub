import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Thermometer, Target, Zap, Droplets, Trash2, RefreshCcw } from "lucide-react";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-nature.jpg";

const topics = [
  {
    path: "/antropocene",
    title: "L'Antropocene",
    description: "L'epoca geologica dove l'impatto umano è la forza dominante nel modificare il pianeta.",
    icon: Globe,
    color: "bg-earth/10 text-earth",
  },
  {
    path: "/crisi-climatica",
    title: "Crisi Climatica",
    description: "Cause e conseguenze del cambiamento climatico causato dalle attività umane.",
    icon: Thermometer,
    color: "bg-destructive/10 text-destructive",
  },
  {
    path: "/agenda-2030",
    title: "Agenda 2030",
    description: "I 17 obiettivi ONU per garantire un futuro sostenibile al pianeta.",
    icon: Target,
    color: "bg-secondary/10 text-secondary",
  },
  {
    path: "/risorse-energetiche",
    title: "Risorse Energetiche",
    description: "Confronto tra energie rinnovabili e non rinnovabili per un futuro pulito.",
    icon: Zap,
    color: "bg-energy/10 text-energy",
  },
  {
    path: "/acqua",
    title: "L'Acqua",
    description: "Gestione sostenibile della risorsa più preziosa del pianeta.",
    icon: Droplets,
    color: "bg-water/10 text-water",
  },
  {
    path: "/rifiuti",
    title: "I Rifiuti",
    description: "Il problema dello smaltimento e l'impatto devastante della plastica.",
    icon: Trash2,
    color: "bg-muted-foreground/10 text-muted-foreground",
  },
  {
    path: "/economia-circolare",
    title: "Economia Circolare",
    description: "Dal modello lineare al circolare per un'economia sostenibile.",
    icon: RefreshCcw,
    color: "bg-primary/10 text-primary",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Foresta rigogliosa che incontra l'oceano"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              Educazione Civica • Classi Quinte • A.S. 2025-2026
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              La Tutela{" "}
              <span className="text-gradient">Ambientale</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Un percorso educativo per comprendere le sfide ambientali del nostro tempo e scoprire come ciascuno di noi può contribuire a un futuro sostenibile.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/antropocene"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-nature text-primary-foreground font-semibold transition-all hover:shadow-lg hover:scale-105"
              >
                Inizia il Percorso
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/crediti"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-background/50 backdrop-blur-sm text-foreground font-medium hover:bg-muted transition-colors"
              >
                Chi Siamo
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </section>

      {/* Topics Grid */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Esplora i Temi
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sette capitoli interconnessi per comprendere la complessità delle sfide ambientali e le soluzioni possibili.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, index) => (
              <motion.div
                key={topic.path}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={topic.path}
                  className="group block h-full p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-lg ${topic.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <topic.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {topic.description}
                  </p>
                  <div className="mt-4 flex items-center text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Scopri di più
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-8 sm:p-12 rounded-2xl bg-gradient-nature"
          >
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
              Il futuro del pianeta è nelle nostre mani
            </h2>
            <p className="text-primary-foreground/90 mb-6 max-w-xl mx-auto">
              Ogni azione conta. Scopri come le tue scelte quotidiane possono fare la differenza per l'ambiente.
            </p>
            <Link
              to="/antropocene"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-background text-foreground font-semibold hover:bg-background/90 transition-colors"
            >
              Comincia ad Esplorare
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
