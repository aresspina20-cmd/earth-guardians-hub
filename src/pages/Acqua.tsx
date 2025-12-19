import { Droplets, Factory, Leaf, ShowerHead, CloudRain, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import PageNavigation from "@/components/PageNavigation";
import StatCard from "@/components/StatCard";
import KeyTakeaways from "@/components/KeyTakeaways";

const waterTips = [
  { tip: "Chiudi il rubinetto mentre ti lavi i denti", saving: "6 litri/minuto" },
  { tip: "Preferisci la doccia alla vasca da bagno", saving: "fino a 100 litri" },
  { tip: "Ripara rubinetti che gocciolano", saving: "20 litri/giorno" },
  { tip: "Usa la lavatrice a pieno carico", saving: "50 litri/lavaggio" },
  { tip: "Raccogli l'acqua piovana per le piante", saving: "variabile" },
  { tip: "Installa riduttori di flusso", saving: "30% consumo" },
];

const Acqua = () => {
  return (
    <Layout>
      <PageHeader
        title="L'Acqua"
        subtitle="Gestione sostenibile della risorsa più preziosa del pianeta"
        icon={<Droplets className="w-8 h-8 text-primary" />}
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
            <p className="text-lg text-muted-foreground leading-relaxed">
              L'<strong className="text-foreground">acqua</strong> è una risorsa preziosa ma sotto pressione estrema. Non viene consumata solo per bere, ma massicciamente nell'industria, agricoltura e allevamento attraverso <em>consumi "idrici virtuali"</em> incorporati nei prodotti che acquistiamo ogni giorno.
            </p>
          </motion.div>
        </section>

        {/* Stats */}
        <section className="mb-16">
          <h2 className="section-title">Consumo Globale</h2>
          <p className="section-subtitle">
            I numeri drammatici del consumo idrico
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              value="215"
              label="Litri/giorno"
              description="Consumo pro capite italiano"
              delay={0}
            />
            <StatCard
              value="2.500"
              label="Miliardi di litri"
              description="Consumo annuo nazionale"
              delay={0.1}
            />
            <StatCard
              value="70%"
              label="Agricoltura"
              description="Del consumo idrico globale"
              delay={0.2}
            />
            <StatCard
              value="2,2"
              label="Miliardi"
              description="Persone senza acqua pulita"
              delay={0.3}
            />
          </div>
        </section>

        {/* Virtual Water */}
        <section className="mb-16">
          <h2 className="section-title">Acqua Virtuale</h2>
          <p className="section-subtitle">
            Quanta acqua serve per produrre ciò che consumiamo?
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4"
          >
            {[
              { product: "1 kg manzo", water: "15.000 L", icon: "🥩" },
              { product: "1 kg formaggio", water: "5.000 L", icon: "🧀" },
              { product: "1 kg riso", water: "2.500 L", icon: "🍚" },
              { product: "1 kg pane", water: "1.600 L", icon: "🍞" },
              { product: "1 uovo", water: "200 L", icon: "🥚" },
              { product: "1 mela", water: "70 L", icon: "🍎" },
            ].map((item, index) => (
              <div
                key={item.product}
                className="p-4 rounded-xl bg-water/5 border border-water/20 text-center"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="font-heading font-bold text-water text-lg">
                  {item.water}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {item.product}
                </div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* Problems */}
        <section className="mb-16">
          <h2 className="section-title">Le Problematiche</h2>
          <p className="section-subtitle">
            Le sfide che minacciano le risorse idriche globali
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="info-card"
            >
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Scarsità</h3>
              <p className="text-muted-foreground text-sm">
                Inquinamento, cambiamento climatico e consumo eccessivo stanno riducendo la disponibilità di acqua potabile in molte regioni.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="info-card"
            >
              <div className="w-12 h-12 rounded-lg bg-muted-foreground/10 flex items-center justify-center mb-4">
                <Factory className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Contaminazione</h3>
              <p className="text-muted-foreground text-sm">
                L'inquinamento industriale e agricolo sta contaminando fiumi, laghi e falde acquifere, danneggiando gli ecosistemi acquatici.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="info-card"
            >
              <div className="w-12 h-12 rounded-lg bg-energy/10 flex items-center justify-center mb-4">
                <CloudRain className="w-6 h-6 text-energy" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Cambiamento Climatico</h3>
              <p className="text-muted-foreground text-sm">
                Siccità più frequenti e intense, insieme a precipitazioni irregolari, stanno alterando la distribuzione delle risorse idriche.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Solutions */}
        <section className="mb-16">
          <h2 className="section-title">Soluzioni Individuali</h2>
          <p className="section-subtitle">
            Come ridurre il tuo consumo idrico quotidiano
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {waterTips.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center justify-between p-4 rounded-xl bg-muted/50 border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-water/10 flex items-center justify-center">
                    <ShowerHead className="w-4 h-4 text-water" />
                  </div>
                  <span className="text-foreground">{item.tip}</span>
                </div>
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {item.saving}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Sustainable Management */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl bg-accent border border-primary/10"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xl mb-2">
                  Gestione Sostenibile
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  La gestione sostenibile delle risorse idriche richiede impegno collettivo per assicurare disponibilità per le generazioni future. Oltre alle azioni individuali, sono necessarie politiche pubbliche per la tutela delle falde acquifere, il trattamento delle acque reflue e la riduzione degli sprechi nell'agricoltura e nell'industria.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Key Takeaways */}
        <KeyTakeaways
          items={[
            "Il consumo medio italiano è di 215 litri pro capite al giorno",
            "L'acqua virtuale nei prodotti moltiplica enormemente il nostro consumo reale",
            "Scarsità, contaminazione e cambiamento climatico minacciano le risorse idriche",
            "Piccole azioni quotidiane possono fare una grande differenza nel risparmio idrico",
          ]}
        />

        <PageNavigation
          prevPage={{ path: "/risorse-energetiche", label: "Risorse Energetiche" }}
          nextPage={{ path: "/rifiuti", label: "I Rifiuti" }}
        />
      </div>
    </Layout>
  );
};

export default Acqua;
