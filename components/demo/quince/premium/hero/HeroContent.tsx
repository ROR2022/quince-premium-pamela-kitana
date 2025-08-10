import { motion } from "framer-motion"

type HeroContentProps = {
  title: string
  subtitle: string
  extraContent?: string
}

export function HeroContent({ 
  title, 
  subtitle, 
  extraContent = "Una celebración única con música, galería y padrinos" 
}: HeroContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="z-10 text-center px-4"
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-white text-xl mb-2"
      >
        {subtitle}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="font-script text-6xl md:text-8xl text-white mb-4"
      >
        {title}
      </motion.h1>
      
      {/* Mensaje adicional premium */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="text-white/90 text-lg md:text-xl font-light tracking-wide"
      >
        {extraContent}
      </motion.p>
    </motion.div>
  )
}
