import { useContext } from "react"
import SkillContent from "./SkillContent"
import Context from "../context/createContext"

function Skills() {
	const { changeLanguage, changeTheme } = useContext(Context)

	return (
		<div className={`flex flex-col justify-center items-center gap-4 px-3 py-10  h-auto w-full dark:text-[#FFFF] lg:flex-row lg:py-16 lg:px-32 ${changeTheme === "dark"
		? "dark:bg-gradient-to-tr from-[#31132A]  via-[#13111C]  to-darkBluePrimary   dark:border-grayPrimary"
		: "bg-gradient-to-br from-[#FEFDFF] from- via-[#FEFDFF] to-[#e0f5ff] "}`}>
			<div className="flex flex-col items-center justify-center gap-5 lg:w-2/5">
				<h2 className="font-bold text-4xl dark:text-bluePrimary ">
					{changeLanguage === "es"
						? "Tecnologías puestas en practica"
						: "Technologies put into practice"}
				</h2>
				<p className="text-lg">
				{changeLanguage === "es"
						? "Estas son algunas de las tecnologías que he tenido el placer de explorar y aplicar en proyectos personales hasta el día de hoy."
						: "These are some of the technologies that I have had the pleasure of exploring and applying in personal projects to date."}
				</p>
			</div>
			<div className="flex flex-col w-full gap-8 xl:w-3/5  ">
				<SkillContent
					title="Front End"
					images={[
						{
							src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
							alt: "HTML",
							className: "w-8 md:w-14",
						},
						{
							src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
							alt: "CSS",
							className: "w-8 md:w-14",
						},
						{
							src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
							alt: "TailwindCSS",
							className: "w-8 md:w-12",
						},
						{
							src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
							alt: "JavaScript",
							className: "w-8 md:w-12",
						},
						{
							src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
							alt: "React",
							className: "w-8 md:w-12",
						},
						{
							src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
							alt: "Redux",
							className: "w-8 md:w-12",
						},
					]}
				/>
				<SkillContent
					title="Back End"
					inverted={true}
					images={[
						{
							src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg",
							alt: "PostgreeSQL",
							className: "w-8 md:w-14",
						},
						{
							src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
							alt: "NODE.JS",
							className: "w-8 md:w-14",
						},
						{
							src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
							alt: "Express.JS",
							className: "w-8 md:w-14 bg-white p-1 ",
						},
					]}
				/>
				<SkillContent
					title="Extras"
					images={[
						{
							src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
							alt: "git",
							className: "w-8 md:w-14",
						},
						{
							src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg",
							alt: "FireBase",
							className: "w-8 md:w-16",
						},
						{
							src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
							alt: "GitHub",
							className: "w-8 md:w-14 bg-white",
						},
					]}
				/>
			</div>
		</div>
	)
}

export default Skills
