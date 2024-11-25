import './AboutMe.css'

const avatarSrc = '/assets/YV.porfolio.png'

export default function AboutMe() {
 const section = document.createElement('section')
 section.id = 'about'
 section.className = 'about'

 section.innerHTML = `
          <h2>Hello there!</h2>
          <img src="${avatarSrc}" alt="Avatar" class="avatar">
          <p>
            Let me tell you a bit about myself...
            From fashion visionary to creative 
            <span class="redirect-projects">
              tech explorer!
            </span>
            With a background in Image and Fashion Design, I spent years collaborating with fashion manufacturers, providing textile and design solutions that brought collections to life. 
            Now, I'm diving into tech development and exploring the world of artificial intelligence, eager to combine creativity with code. My goal is to find a role that fuels my growth and lets me fully unleash my creative skills.
          </p>
      `

 section.addEventListener('click', (e) => {
  if (e.target.classList.contains('redirect-projects')) {
   const projectsSection = document.getElementById('projects')
   if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: 'smooth' })
   }
  }
 })

 return section
}
