import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

function SkillContent({ images, title }) {
	const [ref, inView] = useInView({
		triggerOnce: true, // Solo activa la animación una vez
	})

	return (
		<div ref={ref}>
			<motion.div
				className="rounded-xl py-[6px] gap-4 border-double border-[6px]  border-bluePrimary lg:border-gray-300 lg:hover:border-bluePrimary transition-colors bg-gray-200/75 dark:bg-gradient-to-r from-[#13111C] to-darkBluePrimary"
				initial={{ opacity: 0, y: 20 }}
				animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
				transition={{ duration: 0.2 }}
				whileHover={{ scale: 1.01 }}
			>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
					transition={{ duration: 0.3 }}
					className="text-center text-lg font-semibold mb-3"
				>
					<h3>{title}</h3>
				</motion.div>
				<motion.div
					className="flex justify-center items-center gap-5 md:gap-8 "
					initial={{ opacity: 0, x: -20 }}
					animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					{images.map((image, index) => (
						<motion.img
							key={index}
							className={image.className}
							src={image.src}
							alt={image.alt}
							initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
							animate={
								inView
									? { opacity: 1, scale: 1, rotate: 0 }
									: { opacity: 0, scale: 0.8, rotate: -180 }
							}
							transition={{ duration: 0.5, delay: 0.1 * index }}
						/>
					))}
				</motion.div>
			</motion.div>
		</div>
	)
}

export default SkillContent
