import './Main.css'
import AboutMe from '../AboutMe/AboutMe.js'
import Education from '../Education/Education.js'
import Experience from '../Experience/Experience.js'
import Projects from '../Projects/Projects.js'
import Contact from '../Contact/Contact.js'

export default function Main() {
 const main = document.createElement('main')
 main.append(AboutMe(), Education(), Experience(), Projects(), Contact())
 return main
}
