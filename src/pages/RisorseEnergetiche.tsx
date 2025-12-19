import { Zap, Sun, Wind, Droplets, Flame, Atom, Check, X } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import PageNavigation from "@/components/PageNavigation";
import KeyTakeaways from "@/components/KeyTakeaways";

const renewables = [
  {
    title: "Energia Solare",
    description: "Pannelli solari che convertono la radiazione solare in energia termica ed elettrica.",
    icon: Sun,
    color: "bg-energy/10 text-energy",
  },
  {
    title: "Energia Eolica",
    description: "Turbine che catturano la forza del vento per generare elettricità pulita.",
    icon: Wind,
    color: "bg-secondary/10 text-secondary",
  },
  {
    title: "Energia Idroelettrica",
    description: "La potenza dell'acqua in movimento converte energia cinetica in elettricità.",
    icon: Droplets,
    color: "bg-water/10 text-water",
  },
  {
    title: "Energia Geotermica",
    description: "Calore interno terrestre utilizzato per riscaldamento e produzione elettrica.",
    icon: Flame,
    color: "bg-destructive/10 text-destructive",
  },
];

const nonRenewables = [
  { name: "Petrolio", co2: "Alta", reserves: "50-100 anni" },
  { name: "Carbone", co2: "Molto alta", reserves: "100+ anni" },
  { name: "Gas Naturale", co2: "Media", reserves: "50-100 anni" },
  { name: "Nucleare", co2: "Bassa*", reserves: "80+ anni" },
];

const RisorseEnergetiche = () => {
  return (
    <Layout>
      <PageHeader
        title="Risorse Energetiche"
        subtitle="Confronto tra energie rinnovabili e non rinnovabili per un futuro pulito e sostenibile"
        icon={<Zap className="w-8 h-8 text-primary" />}
        gradient="nature"
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
              La transizione verso le <strong className="text-foreground">energie rinnovabili</strong> è imperativa per ridurre la CO₂ atmosferica e combattere il cambiamento climatico. Comprendere la differenza tra fonti rinnovabili e non rinnovabili è il primo passo verso scelte energetiche consapevoli.
            </p>
          </motion.div>
        </section>

        {/* Renewable Energy Section */}
        <section className="mb-16">
          <h2 className="section-title text-primary">Energie Rinnovabili</h2>
          <p className="section-subtitle">
            Fonti naturali che si rigenerano continuamente e non si esauriscono
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {renewables.map((source, index) => (
              <motion.div
                key={source.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="info-card"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg ${source.color} flex items-center justify-center flex-shrink-0`}>
                    <source.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">
                      {source.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {source.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Advantages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-primary/5 border border-primary/20"
          >
            <h3 className="font-heading font-semibold text-lg mb-4 flex items-center gap-2">
              <Check className="w-5 h-5 text-primary" />
              Vantaggi delle Energie Rinnovabili
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Non producono emissioni di CO₂ né gas serra",
                "Sono fonti illimitate e naturali",
                "Più sicure per la salute umana",
                "Non generano residui tossici",
                "Riducono la dipendenza da combustibili fossili",
                "Creano occupazione nel settore green",
              ].map((advantage, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-sm">{advantage}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Disadvantages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 p-6 rounded-xl bg-muted/50 border border-border"
          >
            <h3 className="font-heading font-semibold text-lg mb-4 flex items-center gap-2">
              <X className="w-5 h-5 text-muted-foreground" />
              Possibili Svantaggi
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Dipendenza dalle condizioni meteorologiche",
                "Costi iniziali di installazione elevati",
                "Necessità di grandi spazi per impianti",
                "Variabilità geografica delle risorse",
              ].map((disadvantage, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground flex-shrink-0" />
                  <span className="text-sm">{disadvantage}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Non-Renewable Energy Section */}
        <section className="mb-16">
          <h2 className="section-title text-muted-foreground">Energie Non Rinnovabili</h2>
          <p className="section-subtitle">
            Fonti limitate che non si rigenerano naturalmente e producono inquinamento
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-heading font-semibold">Fonte</th>
                  <th className="text-left py-4 px-4 font-heading font-semibold">Emissioni CO₂</th>
                  <th className="text-left py-4 px-4 font-heading font-semibold">Riserve Stimate</th>
                </tr>
              </thead>
              <tbody>
                {nonRenewables.map((source, index) => (
                  <tr key={source.name} className="border-b border-border">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                          <Atom className="w-4 h-4 text-muted-foreground" />
                        </div>
                        {source.name}
                      </div>
                    </td>
                    <td className={`py-4 px-4 ${
                      source.co2 === "Molto alta" ? "text-destructive" :
                      source.co2 === "Alta" ? "text-destructive/80" :
                      source.co2 === "Media" ? "text-energy" : "text-muted-foreground"
                    }`}>
                      {source.co2}
                    </td>
                    <td className="py-4 px-4 text-muted-foreground">{source.reserves}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <p className="text-sm text-muted-foreground mt-4">
            * Il nucleare produce basse emissioni dirette ma genera rifiuti radioattivi pericolosi
          </p>

          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 p-6 rounded-xl bg-destructive/5 border border-destructive/20"
          >
            <h3 className="font-heading font-semibold text-lg mb-4 text-destructive">
              Problemi delle Energie Non Rinnovabili
            </h3>
            <ul className="space-y-2">
              {[
                "Emissioni massicce di gas inquinanti e serra",
                "Risorse finite destinate ad esaurirsi",
                "Rifiuti radioattivi pericolosi (nucleare)",
                "Rischio di disastri ambientali",
                "Contributo diretto al riscaldamento globale",
              ].map((problem, index) => (
                <li key={index} className="flex items-center gap-2 text-muted-foreground">
                  <X className="w-4 h-4 text-destructive flex-shrink-0" />
                  <span className="text-sm">{problem}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </section>

        {/* Personal Efficiency */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl bg-accent border border-primary/10"
          >
            <h3 className="font-heading font-semibold text-xl mb-4">
              💡 Efficienza Energetica Personale
            </h3>
            <p className="text-muted-foreground mb-6">
              Ognuno di noi può contribuire alla transizione energetica analizzando il proprio consumo e implementando strategie di riduzione nella vita quotidiana.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Utilizzare elettrodomestici classe A+++",
                "Spegnere le luci non necessarie",
                "Preferire trasporti pubblici o bici",
                "Installare pannelli solari domestici",
                "Isolare termicamente la casa",
                "Regolare correttamente il termostato",
              ].map((tip, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  {tip}
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Key Takeaways */}
        <KeyTakeaways
          items={[
            "Le energie rinnovabili (solare, eolica, idroelettrica, geotermica) sono illimitate e non inquinano",
            "Le energie non rinnovabili (petrolio, carbone, gas, nucleare) sono limitate e producono emissioni nocive",
            "La transizione energetica è essenziale per combattere il cambiamento climatico",
            "L'efficienza energetica personale contribuisce alla riduzione dell'impronta ecologica",
          ]}
        />

        <PageNavigation
          prevPage={{ path: "/agenda-2030", label: "Agenda 2030" }}
          nextPage={{ path: "/acqua", label: "L'Acqua" }}
        />
      </div>
    </Layout>
  );
};

export default RisorseEnergetiche;
