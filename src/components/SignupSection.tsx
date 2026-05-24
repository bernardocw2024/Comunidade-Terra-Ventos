"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

// Componente de seção de CTA para a Comunidade Terra Ventos
// Este componente convida usuários a voltarem ao topo para preencherem o formulário
export default function SignupSection() {
  const { t } = useLanguage();

  const scrollToHero = () => {
    const heroSection = document.getElementById("hero-form");
    if (heroSection) {
      heroSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section
      id="signup-section"
      className="py-20 bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-primary-500 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          {t("signup.title")}
        </motion.h2>
        
        <motion.p
          className="text-xl text-primary-700 mb-10 font-avenir"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          {t("signup.subtitle.line1")} {t("signup.subtitle.line2")}
        </motion.p>

        <motion.button
          onClick={scrollToHero}
          className="bg-accent-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 font-avenir cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t("nav.join-community")}
        </motion.button>
      </div>
    </section>
  );
}
