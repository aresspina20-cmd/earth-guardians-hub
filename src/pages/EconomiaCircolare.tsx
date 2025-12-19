import { RefreshCcw, ArrowRight, Hammer, Share2, Leaf, Trash2, Factory, Users } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import PageNavigation from "@/components/PageNavigation";
import KeyTakeaways from "@/components/KeyTakeaways";

const circularStrategies = [
  { title: "Progettazione", description: "Attenzione al ciclo di vita intero del prodotto", icon: Hammer },
  { title: "Condivisione", description: "Prestito e sharing di oggetti tra utenti", icon: Share2 },
  { title: "Riparazione", description: "Ricondizionamento anziché sostituzione", icon: Hammer },
  { title: "Raccolta Differenziata", description: "Separazione accurata dei materiali", icon: Trash2 },
  { title: "Upcycling", description: "Creazione di prodotti con valore aggiunto superiore", icon: RefreshCcw },
  { title: "Compostaggio", description: "Trasformazione organico in fertilizzante", icon: Leaf },
];

const wasteHierarchy = [
  { level: "Prevenzione", impact: "Massimo", jobs: "Massimi", color: "bg-primary text-primary-foreground" },
  { level: "Riuso e Riparazione", impact: "Alto", jobs: "Alti", color: "bg-primary/80 text-primary-foreground" },
  { level: "Riciclo", impact: "Medio-Alto", jobs: "250/100kt", color: "bg-primary/60 text-primary-foreground" },
  { level: "Incenerimento", impact: "Basso", jobs: "40/100kt", color: "bg-muted-foreground/60 text-background" },
  { level: "Discarica", impact: "Minimo", jobs: "16/100kt", color: "bg-muted-foreground/40 text-foreground" },
];

const EconomiaCircolare = () => {
  return (
    <Layout>
      <PageHeader
        title="Economia Circolare"
        subtitle="Dal modello lineare al circolare: ripensare produzione e consumo per un futuro sostenibile"
        icon={<RefreshCcw className="w-8 h-8 text-primary" />}
        gradient="nature"
      />

      <div className="page-container">
        {/* Linear vs Circular */}
        <section className="mb-16">
          <h2 className="section-title">Lineare vs Circolare</h2>
          <p className="section-subtitle">
            Due modelli economici a confronto
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Linear Economy */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-destructive/5 border border-destructive/20"
            >
              <h3 className="font-heading font-semibold text-lg mb-4 text-destructive">
                Economia Lineare (Insostenibile)
              </h3>
              <div className="flex items-center justify-center gap-2 flex-wrap mb-4">
                {["Estrazione", "Produzione", "Consumo", "Discarica"].map((step, index) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-destructive/10 text-sm">
                      {step}
                    </span>
                    {index < 3 && <ArrowRight className="w-4 h-4 text-destructive" />}
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground text-sm">
                Modello "prendi-usa-getta" che esaurisce le risorse naturali e genera enormi quantità di rifiuti.
              </p>
            </motion.div>

            {/* Circular Economy */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-xl bg-primary/5 border border-primary/20"
            >
              <h3 className="font-heading font-semibold text-lg mb-4 text-primary">
                Economia Circolare (Sostenibile)
              </h3>
              <div className="flex items-center justify-center mb-4">
                <div className="relative w-32 h-32">
                  <RefreshCcw className="w-full h-full text-primary/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs text-center text-primary font-medium">
                      Riuso<br />Riciclo<br />Rigenerazione
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                I prodotti vengono progettati per durare, riparati, riutilizzati e infine riciclati in nuove risorse.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Circular Strategies */}
        <section className="mb-16">
          <h2 className="section-title">Strategie Circolari</h2>
          <p className="section-subtitle">
            Le pratiche che rendono possibile l'economia circolare
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {circularStrategies.map((strategy, index) => (
              <motion.div
                key={strategy.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <strategy.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground">
                    {strategy.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {strategy.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Waste Hierarchy */}
        <section className="mb-16">
          <h2 className="section-title">Gerarchia dei Rifiuti</h2>
          <p className="section-subtitle">
            I cinque livelli in ordine di sostenibilità
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            {wasteHierarchy.map((item, index) => (
              <div
                key={item.level}
                className={`${item.color} p-4 first:rounded-t-xl last:rounded-b-xl flex items-center justify-between`}
                style={{ 
                  width: `${100 - index * 10}%`,
                  marginLeft: `${index * 5}%`
                }}
              >
                <span className="font-heading font-semibold">{item.level}</span>
                <span className="text-sm opacity-90">{item.jobs} posti/100kt</span>
              </div>
            ))}
          </motion.div>

          <p className="text-center text-sm text-muted-foreground mt-4">
            La prevenzione è sempre la scelta migliore: ridurre i rifiuti alla fonte ha il massimo impatto positivo
          </p>
        </section>

        {/* Job Creation */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl bg-accent border border-primary/10"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xl mb-2">
                  Impatto Occupazionale
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  L'economia circolare non è solo sostenibile, ma crea più posti di lavoro:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center p-4 rounded-lg bg-background">
                    <div className="text-2xl font-heading font-bold text-muted-foreground">16</div>
                    <div className="text-xs text-muted-foreground">posti/discarica</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-background">
                    <div className="text-2xl font-heading font-bold text-energy">40</div>
                    <div className="text-xs text-muted-foreground">posti/incenerimento</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-background">
                    <div className="text-2xl font-heading font-bold text-primary">250</div>
                    <div className="text-xs text-muted-foreground">posti/riciclo</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Per ogni 100.000 tonnellate di rifiuti gestite
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Environmental Benefits */}
        <section className="mb-16">
          <h2 className="section-title">Benefici Ambientali</h2>
          <p className="section-subtitle">
            Come la circolarità aiuta il pianeta
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-primary/5 border border-primary/10"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg mb-2">
                  Esempio: La Carta Riciclata
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  La produzione di carta riciclata <strong className="text-foreground">elimina la necessità di abbattere alberi</strong> e riduce il consumo di acqua ed energia elettrica in modo sostanziale. Un processo virtuoso che trasforma il concetto di rifiuto in "materia prima secondaria".
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Key Takeaways */}
        <KeyTakeaways
          items={[
            "L'economia lineare (prendi-usa-getta) è insostenibile e deve essere superata",
            "L'economia circolare ripensa produzione e consumo per eliminare gli sprechi",
            "La gerarchia dei rifiuti privilegia prevenzione, riuso e riciclo su incenerimento e discarica",
            "La transizione circolare crea più occupazione rispetto al modello lineare",
          ]}
        />

        <PageNavigation
          prevPage={{ path: "/rifiuti", label: "I Rifiuti" }}
          nextPage={{ path: "/crediti", label: "Crediti" }}
        />
      </div>
    </Layout>
  );
};

export default EconomiaCircolare;
