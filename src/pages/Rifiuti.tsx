import { Trash2, AlertTriangle, Recycle, Fish, Factory } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import PageNavigation from "@/components/PageNavigation";
import InfoCard from "@/components/InfoCard";
import KeyTakeaways from "@/components/KeyTakeaways";

const recyclingExamples = [
  { material: "Carta", products: "Libri, quaderni, scatole", icon: "📦" },
  { material: "Plastica", products: "Felpe, tute, scarpe", icon: "👟" },
  { material: "Vetro", products: "Nuove bottiglie", icon: "🍾" },
  { material: "Organico", products: "Fertilizzante biologico", icon: "🌱" },
];

const Rifiuti = () => {
  return (
    <Layout>
      <PageHeader
        title="I Rifiuti"
        subtitle="Il problema dello smaltimento e l'impatto devastante della plastica sugli ecosistemi"
        icon={<Trash2 className="w-8 h-8 text-primary" />}
      />

      <div className="page-container">
        {/* Introduction */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              La gestione dei rifiuti rappresenta una <strong className="text-foreground">crisi ambientale complessa</strong> che richiede soluzioni innovative e un cambiamento radicale nelle nostre abitudini di consumo. Ogni anno produciamo miliardi di tonnellate di rifiuti, molti dei quali finiscono in discariche o negli oceani.
            </p>
          </motion.div>
        </section>

        {/* Disposal Methods */}
        <section className="mb-16">
          <h2 className="section-title">Metodologie di Smaltimento</h2>
          <p className="section-subtitle">
            Le diverse opzioni per la gestione dei rifiuti e il loro impatto ambientale
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InfoCard
              title="Discariche"
              description="Contaminano terreni e falde acquifere per decenni. I rifiuti si decompongono lentamente rilasciando gas serra e sostanze tossiche nel suolo."
              icon={<AlertTriangle className="w-6 h-6 text-destructive" />}
              variant="default"
              delay={0}
            />
            <InfoCard
              title="Incenerimento"
              description="L'incenerimento tradizionale causa significativi danni ambientali e sanitari, rilasciando diossine e particolato nell'atmosfera."
              icon={<Factory className="w-6 h-6 text-muted-foreground" />}
              variant="default"
              delay={0.1}
            />
            <InfoCard
              title="Termovalorizzatori"
              description="Bruciano rifiuti in modo controllato per generare energia termica ed elettrica. Benefici se dotati di filtri avanzati per le emissioni."
              icon={<Recycle className="w-6 h-6 text-primary" />}
              variant="highlight"
              delay={0.2}
            />
          </div>
        </section>

        {/* Plastic Impact */}
        <section className="mb-16">
          <h2 className="section-title">L'Impatto della Plastica</h2>
          <p className="section-subtitle">
            Un materiale che sta soffocando i nostri oceani e la vita marina
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-destructive/5 border border-destructive/20"
            >
              <h3 className="font-heading font-semibold text-lg mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-destructive" />
                Impatto Devastante
              </h3>
              <ul className="space-y-3">
                {[
                  "Impiega centinaia di anni per degradarsi",
                  "Intrapola fauna marina: pesci, tartarughe, uccelli",
                  "Crea isole di spazzatura oceaniche",
                  "Si frammenta in microplastiche che entrano nella catena alimentare",
                  "Rilascia sostanze tossiche durante la decomposizione",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-xl bg-secondary/5 border border-secondary/20"
            >
              <h3 className="font-heading font-semibold text-lg mb-4 flex items-center gap-2">
                <Fish className="w-5 h-5 text-secondary" />
                Pacific Trash Vortex
              </h3>
              <p className="text-muted-foreground mb-4">
                Un'isola di spazzatura grande tre volte la Francia galleggia nell'Oceano Pacifico. È composta principalmente da plastica e microplastiche che minacciano la vita marina.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-lg bg-background">
                  <div className="text-2xl font-heading font-bold text-secondary">1.6M</div>
                  <div className="text-xs text-muted-foreground">km² di superficie</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-background">
                  <div className="text-2xl font-heading font-bold text-secondary">80.000</div>
                  <div className="text-xs text-muted-foreground">tonnellate di plastica</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Recycling Section */}
        <section className="mb-16">
          <h2 className="section-title">Il Potere del Riciclo</h2>
          <p className="section-subtitle">
            Come i materiali possono trasformarsi in nuovi prodotti
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {recyclingExamples.map((item, index) => (
              <motion.div
                key={item.material}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-primary/5 border border-primary/10 text-center"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="font-heading font-semibold text-foreground mb-1">
                  {item.material}
                </h4>
                <p className="text-sm text-muted-foreground">{item.products}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* E-Waste */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-muted/50 border border-border"
          >
            <h3 className="font-heading font-semibold text-lg mb-3">
              🖥️ Inquinamento Digitale
            </h3>
            <p className="text-muted-foreground">
              I rifiuti tecnologici (RAEE) rappresentano una problematica emergente. Computer, smartphone e elettrodomestici contengono metalli pesanti e sostanze tossiche che richiedono un trattamento speciale. Nel mondo si producono oltre 50 milioni di tonnellate di e-waste all'anno, ma solo il 20% viene riciclato correttamente.
            </p>
          </motion.div>
        </section>

        {/* Key Takeaways */}
        <KeyTakeaways
          items={[
            "Le discariche contaminano terreni e acque per decenni",
            "La plastica impiega centinaia di anni per degradarsi e sta soffocando gli oceani",
            "Il riciclo di qualità trasforma i rifiuti in nuove risorse preziose",
            "I rifiuti elettronici sono una problematica in crescita che richiede attenzione",
          ]}
        />

        <PageNavigation
          prevPage={{ path: "/acqua", label: "L'Acqua" }}
          nextPage={{ path: "/economia-circolare", label: "Economia Circolare" }}
        />
      </div>
    </Layout>
  );
};

export default Rifiuti;
