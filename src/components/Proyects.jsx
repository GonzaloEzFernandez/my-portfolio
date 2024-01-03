import ProyectSection from "./ProyectSection"
import Context from "../context/createContext"
import { useContext } from "react"

function Proyects() {
	const { changeTheme } = useContext(Context)

	return (
		<div
			className={`h-auto px-3 py-10   dark:border-grayPrimary border-bluePrimary lg:px-32 ${
				changeTheme === "dark"
					? "dark:bg-gradient-to-br from-[#31132A]  via-darkBluePrimary to-[#1f5088]   dark:border-grayPrimary"
					: "bg-gradient-to-tr from-[#e0f5ff] from-20% via-[#FEFDFF] via-30% to-[#e0f5ff] to-90%"
			}`}
		>
			<h2 className="font-bold text-4xl dark:text-[#FFFF] text-center py-6">
				Proyects
			</h2>

			<ProyectSection
				proyectsImages={[
					{
						src: "./img/Vite + React - Google Chrome 14_12_2023 17_35_00.png",
					},
					{
						src: "./images/img/Vite + React - Google Chrome 18_12_2023 17_42_23 (2).png",
					},
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
				]}
			/>
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
		</div>
	)
}

export default Proyects
