import { motion } from "framer-motion";
import Typography from "./TypographyComponent";

const GuaranteeComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="text-center"
    >
      <Typography
        type="h2"
        color="primary"
        size="extra-large"
        weight="bold"
        family="poppins"
        align="center"
      >
        Mi Garantía hacia Ustedes
      </Typography>
      <Typography
        type="p"
        color="black"
        size="large"
        weight="regular"
        family="poppins"
        align="center"
        className="mt-4"
      >
        Mi compromiso es con la excelencia. Ofrezco código de alta calidad,
        cumplimiento de plazos y un soporte poslanzamiento proactivo. Estoy
        dedicado a tu éxito continuo y a construir relaciones a largo plazo con
        mis clientes.
      </Typography>
    </motion.div>
  );
};
export default GuaranteeComponent;
