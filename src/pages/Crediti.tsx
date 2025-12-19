import { Users, GraduationCap, Calendar, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageNavigation from "@/components/PageNavigation";

const team = [
  { name: "Ares Spina", role: "Sviluppatore & Ricercatore" },
  { name: "Christian Colatruglio", role: "Sviluppatore & Ricercatore" },
  { name: "Andrea Cervellino", role: "Sviluppatore & Ricercatore" },
  { name: "Davide Della Ventura", role: "Sviluppatore & Ricercatore" },
];

const Crediti = () => {
  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Logo */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-nature mb-8">
              <Leaf className="w-10 h-10 text-primary-foreground" />
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Realizzato da
            </h1>

            {/* Team */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mt-12 mb-12">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </motion.div>
              ))}
            </div>

            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="p-8 rounded-xl bg-muted/50 border border-border max-w-2xl mx-auto"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <GraduationCap className="w-5 h-5" />
                  <span>Educazione Civica</span>
                </div>
                <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground" />
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span>Classi Quinte</span>
                </div>
                <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground" />
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-5 h-5" />
                  <span>A.S. 2025-2026</span>
                </div>
              </div>

              <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                La Tutela Ambientale
              </h2>
              <p className="text-sm text-muted-foreground">
                Dicembre 2025
              </p>
            </motion.div>

            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-12 max-w-2xl mx-auto"
            >
              <p className="text-muted-foreground leading-relaxed">
                Questo sito web è stato sviluppato come parte del percorso educativo di Educazione Civica per sensibilizzare sulla tutela ambientale, lo sviluppo sostenibile e la responsabilità individuale verso il pianeta.
              </p>
            </motion.div>
          </motion.div>

          <PageNavigation
            prevPage={{ path: "/economia-circolare", label: "Economia Circolare" }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Crediti;
