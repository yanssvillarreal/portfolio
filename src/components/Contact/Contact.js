import './Contact.css'

export default function Contact() {
 const section = document.createElement('section')
 section.id = 'contact'
 section.className = 'contact'

 section.innerHTML = `
   <h2>Let's Chat!</h2>
   <p>If you'd like to work together or just say hi, drop me a message or connect with me:</p>
   <a href="mailto:yancy_344@hotmail.com" class="contact-button">Send an Email</a>
   <div class="social-links">
     <a href="https://linkedin.com/in/yancyvillarreal
" target="_blank" rel="noopener noreferrer">
       <img src="./assets/linkedin.png" alt="LinkedIn" />
     </a>
     <a href="https://github.com/yanssvillarreal" target="_blank" rel="noopener noreferrer">
       <img src="./assets/github.png" alt="GitHub" />
     </a>
   </div>
 `

 return section
}
