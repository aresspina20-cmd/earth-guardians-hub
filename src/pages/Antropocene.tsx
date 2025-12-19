import { Globe, Calendar, ThermometerSun, Mountain } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import PageNavigation from "@/components/PageNavigation";
import InfoCard from "@/components/InfoCard";
import StatCard from "@/components/StatCard";
import KeyTakeaways from "@/components/KeyTakeaways";

const timelineEvents = [
  { year: "1850", event: "Inizio dell'era industriale", co2: "280 ppm" },
  { year: "1950", event: "Grande Accelerazione", co2: "310 ppm" },
  { year: "2000", event: "Riconoscimento scientifico", co2: "370 ppm" },
  { year: "Oggi", event: "Epoca attuale", co2: "420+ ppm" },
];

const Antropocene = () => {
  return (
    <Layout>
      <PageHeader
        title="L'Antropocene"
        subtitle="L'epoca geologica dove l'impatto delle attività umane è la forza dominante nel modificare il pianeta Terra"
        icon={<Globe className="w-8 h-8 text-primary" />}
        gradient="earth"
      />

      <div className="page-container">
        {/* Introduction */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              L'<strong className="text-foreground">Antropocene</strong> rappresenta l'epoca geologica attuale dove l'impatto delle attività umane è diventato la forza dominante nel modificare il pianeta Terra. Questo concetto rivoluzionario illustra come l'umanità sia diventata una <em>"forza geologica"</em> che altera la natura stessa del pianeta, lasciando tracce che saranno visibili per milioni di anni.
            </p>
          </motion.div>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="section-title">Timeline Geologica</h2>
          <p className="section-subtitle">
            L'evoluzione della concentrazione di CO₂ atmosferica dal 1850 ad oggi
          </p>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-8 md:space-y-0">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative md:flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="info-card">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-2">
                        {event.year}
                      </span>
                      <h3 className="font-heading font-semibold text-lg mb-2">{event.event}</h3>
                      <p className="text-muted-foreground">
                        CO₂ atmosferica: <span className="font-semibold text-foreground">{event.co2}</span>
                      </p>
                    </div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  </div>
                  
                  <div className="md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              value="+50%"
              label="Aumento CO₂"
              description="Dal 1850 ad oggi"
              delay={0}
            />
            <StatCard
              value="0.6-0.9°C"
              label="Aumento Temperatura"
              description="Media globale"
              delay={0.1}
            />
            <StatCard
              value="420+"
              label="ppm di CO₂"
              description="Livello attuale"
              delay={0.2}
            />
            <StatCard
              value="Record"
              label="Livello Mari"
              description="Il più alto di sempre"
              delay={0.3}
            />
          </div>
        </section>

        {/* Main Changes */}
        <section className="mb-16">
          <h2 className="section-title">I Cambiamenti Principali</h2>
          <p className="section-subtitle">
            Le trasformazioni che hanno definito l'Antropocene
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <InfoCard
              title="Industrializzazione"
              description="La rivoluzione industriale ha segnato l'inizio di emissioni massicce di gas serra, trasformando radicalmente l'atmosfera terrestre."
              icon={<Calendar className="w-6 h-6 text-primary" />}
              delay={0}
            />
            <InfoCard
              title="Crescita Demografica"
              description="L'esplosione della popolazione mondiale ha aumentato la pressione sulle risorse naturali e gli ecosistemi."
              icon={<Mountain className="w-6 h-6 text-primary" />}
              delay={0.1}
            />
            <InfoCard
              title="Combustibili Fossili"
              description="L'uso massiccio di petrolio, carbone e gas naturale ha innalzato la CO₂ da 280 a oltre 420 ppm."
              icon={<ThermometerSun className="w-6 h-6 text-primary" />}
              delay={0.2}
            />
          </div>
        </section>

        {/* Geological Traces */}
        <section className="mb-16">
          <h2 className="section-title">Tracce Geologiche</h2>
          <p className="section-subtitle">
            Le impronte visibili dell'attività umana sul pianeta
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-muted/50 border border-border"
            >
              <h3 className="font-heading font-semibold text-lg mb-4">Trasformazioni Terrestri</h3>
              <ul className="space-y-3">
                {[
                  "Deforestazione massiccia di foreste primarie",
                  "Urbanizzazione incontrollata",
                  "Erosione costiera accelerata",
                  "Attività agricole estensive",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
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
              className="p-6 rounded-xl bg-muted/50 border border-border"
            >
              <h3 className="font-heading font-semibold text-lg mb-4">Impatti sugli Ecosistemi</h3>
              <ul className="space-y-3">
                {[
                  "Inquinamento dei mari e oceani",
                  "Estinzione di innumerevoli specie",
                  "Modificazione degli equilibri ecosistemici",
                  "Alterazione dei cicli naturali",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Key Takeaways */}
        <KeyTakeaways
          items={[
            "L'Antropocene segna l'epoca in cui l'uomo è diventato una forza geologica dominante",
            "La concentrazione di CO₂ è aumentata del 50% dal 1850 ad oggi",
            "Le tracce dell'attività umana saranno visibili nei sedimenti per milioni di anni",
            "La consapevolezza di questa epoca è il primo passo verso il cambiamento",
          ]}
        />

        <PageNavigation
          prevPage={{ path: "/", label: "Home" }}
          nextPage={{ path: "/crisi-climatica", label: "Crisi Climatica" }}
        />
      </div>
    </Layout>
  );
};

export default Antropocene;
