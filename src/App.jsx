import Contact from "./components/Contact"
import Presentation from "./components/Presentation.JSX"
import Proyects from "./components/Proyects"
import Skills from "./components/Skills"
import NavBar from "./components/navBar"
import AboutMe from "./components/AboutMe"
function App() {
	
	return (
		<div>
			<NavBar />
			<Presentation />
			<Skills />
			<Proyects />
			<AboutMe />
			<Contact />
		</div>
	)
}
export default App
