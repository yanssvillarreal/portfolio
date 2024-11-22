import './AboutMe.css'

const avatarSrc = '/assets/YV.porfolio.png'

export default function AboutMe() {
 const section = document.createElement('section')
 section.id = 'about'
 section.className = 'about'
 section.innerHTML = `
 <h2>Hello there!</h2>
 <div class="about-me-content">
     <img src="${avatarSrc}" alt="Avatar" class="avatar">
     <div class="about-me-text">
         <p>Let me tell you a bit about myself... <br />
         From fashion visionary to creative tech explorer! With a background in Image and Fashion Design, I spent years collaborating with fashion manufacturers, providing textile and design solutions that brought collections to life. Now, I'm diving into tech development and exploring the world of artificial intelligence, eager to combine creativity with code. My goal is to find a role that fuels my growth and lets me fully unleash my creative skills. Blending style with strategy, pixels with passion – I can’t wait to see where this journey leads!</p>
     </div>
 </div>
`

 return section
}
