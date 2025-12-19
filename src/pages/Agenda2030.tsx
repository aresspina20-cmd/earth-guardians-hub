import { Target, Droplets, Zap, TreePine, Fish, Recycle } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import PageNavigation from "@/components/PageNavigation";
import KeyTakeaways from "@/components/KeyTakeaways";

const environmentalGoals = [
  {
    number: 6,
    title: "Acqua Pulita e Igiene",
    description: "Garantire a tutti la disponibilità e la gestione sostenibile dell'acqua e delle strutture igienico-sanitarie.",
    icon: Droplets,
    color: "bg-water/10 text-water border-water/20",
  },
  {
    number: 7,
    title: "Energia Pulita e Accessibile",
    description: "Assicurare a tutti l'accesso a sistemi di energia economici, affidabili, sostenibili e moderni.",
    icon: Zap,
    color: "bg-energy/10 text-energy border-energy/20",
  },
  {
    number: 12,
    title: "Consumo e Produzione Responsabili",
    description: "Garantire modelli sostenibili di produzione e di consumo.",
    icon: Recycle,
    color: "bg-primary/10 text-primary border-primary/20",
  },
  {
    number: 13,
    title: "Lotta Contro il Cambiamento Climatico",
    description: "Adottare misure urgenti per combattere il cambiamento climatico e le sue conseguenze.",
    icon: Target,
    color: "bg-destructive/10 text-destructive border-destructive/20",
  },
  {
    number: 14,
    title: "Vita Sott'acqua",
    description: "Conservare e utilizzare in modo durevole gli oceani, i mari e le risorse marine.",
    icon: Fish,
    color: "bg-secondary/10 text-secondary border-secondary/20",
  },
  {
    number: 15,
    title: "Vita sulla Terra",
    description: "Proteggere, ripristinare e favorire un uso sostenibile dell'ecosistema terrestre.",
    icon: TreePine,
    color: "bg-nature/10 text-nature border-nature/20",
  },
];

const Agenda2030 = () => {
  return (
    <Layout>
      <PageHeader
        title="Agenda 2030"
        subtitle="I 17 Obiettivi di Sviluppo Sostenibile dell'ONU per un futuro migliore"
        icon={<Target className="w-8 h-8 text-primary" />}
        gradient="ocean"
      />

      <div className="page-container">
        {/* Introduction */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              L'<strong className="text-foreground">Agenda 2030</strong> delle Nazioni Unite presenta 17 obiettivi interconnessi per garantire un futuro sostenibile al nostro pianeta. Adottata nel 2015, rappresenta un piano d'azione globale che coinvolge tutti: individui, comunità, governi e organizzazioni.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Per la <strong className="text-foreground">tutela ambientale</strong>, alcuni obiettivi sono particolarmente prioritari: la conservazione delle fonti d'acqua, l'energia pulita, l'azione per il clima, la protezione degli ecosistemi e il consumo responsabile.
            </p>
          </motion.div>
        </section>

        {/* SDG Overview */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="section-title">17 Obiettivi per il Futuro</h2>
            <p className="section-subtitle">
              Una panoramica degli obiettivi di sviluppo sostenibile
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-6 sm:grid-cols-9 md:grid-cols-17 gap-2 justify-center"
          >
            {Array.from({ length: 17 }, (_, i) => i + 1).map((num) => {
              const isEnvironmental = [6, 7, 12, 13, 14, 15].includes(num);
              return (
                <div
                  key={num}
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center font-heading font-bold text-sm ${
                    isEnvironmental
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {num}
                </div>
              );
            })}
          </motion.div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Gli obiettivi evidenziati sono particolarmente rilevanti per la tutela ambientale
          </p>
        </section>

        {/* Environmental Goals Detail */}
        <section className="mb-16">
          <h2 className="section-title">Obiettivi per l'Ambiente</h2>
          <p className="section-subtitle">
            Gli obiettivi chiave per la tutela del nostro pianeta
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {environmentalGoals.map((goal, index) => (
              <motion.div
                key={goal.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-xl border ${goal.color} transition-all duration-300 hover:shadow-lg`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-2xl font-heading font-bold">{goal.number}</span>
                    <goal.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-2">
                      {goal.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {goal.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-8 sm:p-12 rounded-xl bg-muted/50 border border-border"
          >
            <h3 className="font-heading text-2xl font-bold mb-4">
              Dalla Consapevolezza all'Azione
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
              L'Agenda 2030 richiede l'impegno collettivo di tutti noi. La sfida è trasformare la consapevolezza in comportamenti concreti che riducano la nostra impronta ecologica, dalle azioni quotidiane alle scelte di consumo.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Individui
              </div>
              <div className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Comunità
              </div>
              <div className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Governi
              </div>
              <div className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Organizzazioni
              </div>
            </div>
          </motion.div>
        </section>

        {/* Key Takeaways */}
        <KeyTakeaways
          items={[
            "L'Agenda 2030 presenta 17 obiettivi interconnessi per un futuro sostenibile",
            "Gli obiettivi ambientali prioritari riguardano acqua, energia, clima, oceani e ecosistemi terrestri",
            "Il raggiungimento degli obiettivi richiede l'impegno di individui, comunità, governi e organizzazioni",
            "La trasformazione della consapevolezza in azione è la sfida principale",
          ]}
        />

        <PageNavigation
          prevPage={{ path: "/crisi-climatica", label: "Crisi Climatica" }}
          nextPage={{ path: "/risorse-energetiche", label: "Risorse Energetiche" }}
        />
      </div>
    </Layout>
  );
};

export default Agenda2030;
