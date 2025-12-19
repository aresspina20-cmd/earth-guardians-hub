import { Thermometer, Factory, Waves, Cloud, Snowflake, Flame } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import PageNavigation from "@/components/PageNavigation";
import InfoCard from "@/components/InfoCard";
import KeyTakeaways from "@/components/KeyTakeaways";

const causes = [
  {
    title: "Combustibili Fossili",
    description: "Petrolio, carbone e gas naturale rilasciano enormi quantità di CO₂ nell'atmosfera quando bruciati per produrre energia.",
    icon: Factory,
  },
  {
    title: "Allevamenti Intensivi",
    description: "L'industria zootecnica produce metano, un gas serra 25 volte più potente della CO₂, attraverso i processi digestivi degli animali.",
    icon: Flame,
  },
  {
    title: "Deforestazione",
    description: "La distruzione delle foreste elimina i 'polmoni del pianeta' che assorbono CO₂ e rilasciano ossigeno.",
    icon: Cloud,
  },
];

const consequences = [
  {
    title: "Scioglimento Ghiacci",
    description: "I ghiacci dell'Artico e dell'Antartico si stanno sciogliendo a ritmi senza precedenti, contribuendo all'innalzamento dei mari.",
    icon: Snowflake,
    severity: "critical",
  },
  {
    title: "Innalzamento Mari",
    description: "Il livello dei mari sta crescendo, minacciando le comunità costiere e intere nazioni insulari.",
    icon: Waves,
    severity: "critical",
  },
  {
    title: "Acidificazione Oceani",
    description: "Gli oceani assorbono CO₂ diventando più acidi, causando la scomparsa delle barriere coralline.",
    icon: Waves,
    severity: "high",
  },
  {
    title: "Desertificazione",
    description: "Zone precedentemente fertili si stanno trasformando in deserti, causando scarsità d'acqua e migrazioni forzate.",
    icon: Thermometer,
    severity: "high",
  },
  {
    title: "Eventi Estremi",
    description: "Uragani, inondazioni, siccità e ondate di calore diventano sempre più frequenti e intensi.",
    icon: Cloud,
    severity: "high",
  },
  {
    title: "Alterazione Stagioni",
    description: "I cicli stagionali si stanno modificando, con fioriture anticipate e migrazioni animali alterate.",
    icon: Cloud,
    severity: "moderate",
  },
];

const CrisiClimatica = () => {
  return (
    <Layout>
      <PageHeader
        title="Crisi Climatica"
        subtitle="Comprendere le cause e le conseguenze del cambiamento climatico per agire con consapevolezza"
        icon={<Thermometer className="w-8 h-8 text-primary" />}
      />

      <div className="page-container">
        {/* Greenhouse Effect Explanation */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">L'Effetto Serra</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Il cambiamento climatico è causato primariamente dalle <strong className="text-foreground">attività umane</strong>: l'uso di combustibili fossili, gli allevamenti intensivi e lo sfruttamento irresponsabile delle risorse naturali.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I <strong className="text-foreground">gas serra</strong> come CO₂ e metano intrappolano il calore nell'atmosfera, creando l'effetto serra che impedisce al calore di abbandonare il pianeta. Questo fenomeno naturale, amplificato dalle attività umane, sta portando a un riscaldamento globale senza precedenti.
                </p>
              </div>
              <div className="bg-muted/50 rounded-xl p-6 border border-border">
                <div className="flex flex-col items-center">
                  <div className="w-full h-48 bg-gradient-to-b from-secondary/20 via-transparent to-earth/20 rounded-lg flex items-center justify-center relative overflow-hidden">
                    {/* Sun */}
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-energy animate-pulse-soft" />
                    {/* Earth */}
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-water to-nature" />
                    {/* Arrows */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-xs text-muted-foreground absolute top-1/4 left-1/4">
                        Radiazione ↓
                      </div>
                      <div className="text-xs text-muted-foreground absolute bottom-1/4 right-1/4">
                        Calore ⟲
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 text-center">
                    I gas serra intrappolano il calore, impedendogli di disperdersi nello spazio
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Causes */}
        <section className="mb-16">
          <h2 className="section-title">Le Cause</h2>
          <p className="section-subtitle">
            Le principali attività umane responsabili dell'aumento dei gas serra
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {causes.map((cause, index) => (
              <InfoCard
                key={cause.title}
                title={cause.title}
                description={cause.description}
                icon={<cause.icon className="w-6 h-6 text-primary" />}
                variant="accent"
                delay={index * 0.1}
              />
            ))}
          </div>
        </section>

        {/* Consequences */}
        <section className="mb-16">
          <h2 className="section-title">Le Conseguenze</h2>
          <p className="section-subtitle">
            Gli effetti devastanti e multiformi del riscaldamento globale
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {consequences.map((consequence, index) => (
              <motion.div
                key={consequence.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="info-card relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-2 h-full ${
                  consequence.severity === "critical" ? "bg-destructive" :
                  consequence.severity === "high" ? "bg-energy" : "bg-muted-foreground"
                }`} />
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    consequence.severity === "critical" ? "bg-destructive/10" :
                    consequence.severity === "high" ? "bg-energy/10" : "bg-muted"
                  }`}>
                    <consequence.icon className={`w-5 h-5 ${
                      consequence.severity === "critical" ? "text-destructive" :
                      consequence.severity === "high" ? "text-energy" : "text-muted-foreground"
                    }`} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      {consequence.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {consequence.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Coral Reefs Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl bg-secondary/10 border border-secondary/20"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                <Waves className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xl mb-2">
                  La Scomparsa delle Barriere Coralline
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  L'acidificazione delle acque oceaniche sta causando la scomparsa delle barriere coralline, ecosistemi fondamentali per la biodiversità marina. I coralli ospitano il 25% di tutte le specie marine, nonostante occupino meno dell'1% del fondale oceanico. La loro perdita avrebbe conseguenze catastrofiche per la vita negli oceani.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Key Takeaways */}
        <KeyTakeaways
          items={[
            "Il cambiamento climatico è causato principalmente dalle attività umane, in particolare l'uso di combustibili fossili",
            "I gas serra (CO₂, metano) intrappolano il calore nell'atmosfera, causando il riscaldamento globale",
            "Le conseguenze includono scioglimento dei ghiacci, innalzamento dei mari, eventi meteorologici estremi e perdita di biodiversità",
            "L'acidificazione degli oceani minaccia le barriere coralline e l'intera catena alimentare marina",
          ]}
        />

        <PageNavigation
          prevPage={{ path: "/antropocene", label: "L'Antropocene" }}
          nextPage={{ path: "/agenda-2030", label: "Agenda 2030" }}
        />
      </div>
    </Layout>
  );
};

export default CrisiClimatica;
