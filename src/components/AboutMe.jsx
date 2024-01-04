import { useContext } from "react"
import Context from "../context/createContext"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

function AboutMe() {
	const [ref1, inView1] = useInView({
		triggerOnce: true, // Solo activa la animación una vez
	})
	const [ref2, inView2] = useInView({
		triggerOnce: true, // Solo activa la animación una vez
	})

	const { changeLanguage, changeTheme } = useContext(Context)

	return (
		<div
			className={`flex items-center justify-center py-10 px-3  h-full w-full lg:px-28 dark:bg-darkBluePrimary  ${
				changeTheme === "dark"
					? "dark:bg-gradient-to-bl from-[#1f5088]  via-[#13111C] to-darkBluePrimary"
					: "bg-gradient-to-bl from-[#e0f5ff] via-[#FEFDFF] to-[#e0f5ff] "
			}`}
		>
			<div className="md:w-1/2">
				<img
					className=" hidden md:block	 w-[600px] h-[600px] object-cover"
					src="./img/businessman-explain-pose-character-design-free-vector-removebg-preview.png"
					alt="front-pick"
				/>
			</div>
			<div className="flex md:w-1/2 dark:text-grayPrimary  text-lg ">
				<div>
					{changeLanguage === "es" ? (
						<div>
							<div className="flex items-center justify-center">
								<img
									className="rounded-full w-[100px] h-[150px] object-cover md:hidden"
									src="./img/businessman-explain-pose-character-design-free-vector-removebg-preview.png"
									alt="gonza-movil"
								/>
								<motion.h3
									ref={ref1}
									initial={{ opacity: 0, y: 80 }}
									animate={
										inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }
									}
									transition={{ duration: 0.3, delay: 0.1 }}
									className="text-5xl font-semibold dark:text-[#ffff]  md:py-6"
								>
									Sobre Mí
								</motion.h3>
							</div>
							<motion.div
								className="flex flex-col gap-8 dark:text-grayPrimary text-gray-600"
								ref={ref2}
								initial={{ opacity: 0, x: 80 }}
								animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
								transition={{ duration: 0.3, delay: 0.2 }}
							>
								<p>
									🎓 Estudié desarrollo front-end y profundicé en algunas
									tecnologías backend.
								</p>
								<p>
									💻 Especializado en la elaboración de deliciosas interfaces de
									usuario y experiencias de usuario sin fisuras. Siempre
									explorando nuevas tecnologías y frameworks para estar a la
									vanguardia del desarrollo desarrollo web.
								</p>
								<p>
									🚀 Estudié desarrollo front-end y profundicé en algunas
									tecnologías backend.
								</p>
								<p>
									💪🏼 Estudié desarrollo front-end y profundicé en algunas
									tecnologías backend.
								</p>
							</motion.div>
						</div>
					) : (
						<div className="flex flex-col gap-6 text-lg">
							<h3 className="text-5xl font-semibold text-[#ffff] text-center py-4">
								About Me
							</h3>

							<motion.div
								className="flex flex-col gap-8"
								ref={ref2}
								initial={{ opacity: 0, x: 80 }}
								animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
								transition={{ duration: 0.3, delay: 0.2 }}
							>
								<p>
									🎓 Estudié desarrollo front-end y profundicé en algunas
									tecnologías backend.
								</p>
								<p>
									💻 Especializado en la elaboración de deliciosas interfaces de
									usuario y experiencias de usuario sin fisuras. Siempre
									explorando nuevas tecnologías y frameworks para estar a la
									vanguardia del desarrollo desarrollo web.
								</p>
								<p>
									🚀 Estudié desarrollo front-end y profundicé en algunas
									tecnologías backend.
								</p>
								<p>
									💪🏼 Estudié desarrollo front-end y profundicé en algunas
									tecnologías backend.
								</p>
							</motion.div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default AboutMe
