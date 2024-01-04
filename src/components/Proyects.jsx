import ProyectSection from "./ProyectSection"
import Context from "../context/createContext"
import { useContext } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

function Proyects() {
	const { changeTheme } = useContext(Context)

	const [ref1, inView1] = useInView({
		triggerOnce: true,
	})

	const [ref2, inView2] = useInView({
		triggerOnce: true,
	})

	return (
		<div
			className={`h-auto px-3 py-10 lg:px-32 ${
				changeTheme === "dark"
					? "dark:bg-gradient-to-br from-[#31132A]  via-[#13111C] to-[#1f5088]"
					: "bg-gradient-to-br from-[#ffdada] via-[#FEFDFF]  to-[#e0f5ff] "
			}`}
		>
			<motion.h2
				ref={ref1}
				initial={{ opacity: 0, y: 40 }}
				animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
				transition={{ duration: 0.3, delay: 0.3 }}
				className="font-bold text-4xl dark:text-[#FFFF] text-center py-6"
			>
				Proyects
			</motion.h2>

			<motion.div
				ref={ref1}
				initial={{ x: 80, opacity: 0 }}
				animate={inView1 ? { x: 0, opacity: 1 } : { x: 80, opacity: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				<ProyectSection
					proyectsImages={[
						{
							src: "./img/Vite + React - Google Chrome 4_1_2024 19_04_12.png",
						},
						{
							src: "./img/Vite + React - Google Chrome 18_12_2023 17_42_23 (2).png",
						},
						{
							src: "./img/Revisá tu compra - Opera 4_1_2024 19_05_20.png",
						}

			
					]}
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facilis ea deleniti esse quasi eos expedita rem tempora dolore? Vero sint atque optio molestiae placeat cupiditate ipsa earum labore est."
					images={[
						{
							src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
							alt: "React",
							className: "w-8",
						},
						{
							src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
							alt: "TailwindCSS",
							className: "w-8",
						},
						{
							src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg",
							alt: "FireBase",
							className: "w-8",
						},
						{
							src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
							alt: "FireBase",
							className: "w-8 bg-[#EAECF0]",
						},
					]}
				/>
			</motion.div>

			<motion.div
				ref={ref2}
				initial={{ x: -80, opacity: 0 }}
				animate={inView2 ? { x: 0, opacity: 1 } : { x: -80, opacity: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				<ProyectSection
					inverted
					proyectsImages={[
						{
							src: "./img/Vite + React - Google Chrome 17_12_2023 15_32_02 (2).png",
						},
						{
							src: "./img/Vite + React - Google Chrome 18_12_2023 17_45_41 (2).png",
						},
						{
							src: "./img/Vite + React - Google Chrome 18_12_2023 17_47_57 (2).png",
						},
					]}
					alt="proyect-Ecommerce"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facilis ea deleniti esse quasi eos expedita rem tempora dolore? Vero sint atque optio molestiae placeat cupiditate ipsa earum labore est."
					images={[
						{
							src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
							alt: "React",
							className: "w-8",
						},
						{
							src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
							alt: "TailwindCSS",
							className: "w-8",
						},
					
						
					]}
				/>
			</motion.div>
		</div>
	)
}

export default Proyects
