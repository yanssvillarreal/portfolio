import './Footer.css'

export default function Footer() {
 const footer = document.createElement('footer')
 footer.id = 'footer'
 footer.className = 'footer'

 footer.innerHTML = `
      <div class="skills-icons">
        <img src="./assets/html.png" alt="HTML" title="HTML" />
        <img src="./assets/css-3.png" alt="CSS" title="CSS" />
        <img src="./assets/js.png" alt="JavaScript" title="JavaScript" />
        <img src="./assets/node-js.png" alt="Node.js" title="Node.js" />
        <img src="./assets/Vitejs-logo.svg.png" alt="Vite" title="Vite" />
        <img src="./assets/figma.png" alt="Figma" title="Figma" />
        <img src="./assets/canva-logo.png" alt="Canva" title="Canva" />
        <img src="./assets/inteligencia-artificial.png" alt="AI" title="Artificial Intelligence" />
      </div>
      <p>Crafted with Code and Coke by Yanss Villarreal 2024</p>
    `

 return footer
}
