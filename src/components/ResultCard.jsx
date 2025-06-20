import { motion } from 'framer-motion'

export default function ResultCard({ categoria, index }) {
  return (
    <motion.div
      className="result-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
    >
      <h3>{categoria.nome}</h3>
      <p><strong>R$ {categoria.valor.toFixed(2)}</strong></p>
      <p>{categoria.dica}</p>
    </motion.div>
  )
}
