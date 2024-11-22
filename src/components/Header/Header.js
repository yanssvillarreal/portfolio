import './Header.css'

export default function Header() {
 const header = document.createElement('header')
 header.innerHTML = `
        <nav>
        <h1>Design meets development</h1>
            <h2>Creative Web Solutions for Unique Digital Experiences</h2>
            <ul>
                <li><a href="#about">About Me</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    `
 return header
}
