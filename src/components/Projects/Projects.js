import './Projects.css'

export default function Projects() {
 const section = document.createElement('section')
 section.id = 'projects'
 section.className = 'projects'

 section.innerHTML = `
    <h2>Design. Code. Repeat...</h2>
    <div class="projects-container">
      <div class="project">
        <a href="https://tiffany-anna-art-proyect1.netlify.app" target="_blank">
          <img src="./assets/DSC07074_copy_61fc8113-9c33-406c-aa2c-8c33cbf4f52f - copia.webp" />
          <p>TIFFANY ANNA ART</p>
        </a>
      </div>
      <div class="project">
        <a href="https://practica-flex-entregafinal.netlify.app" target="_blank">
          <img src="./assets/free 3d shapes.png" alt="Project 2" />
          <p>FREE 3D SHAPES</p>
        </a>
      </div>
      <div class="project">
        <a href="https://fastprinting.netlify.app" target="_blank">
          <img src="./assets/fastprintngimg.png" />
          <p>FAST PRINTING</p>
        </a>
      </div>
      <div class="project">
        <a href="https://pinterestys.netlify.app/" target="_blank">
          <img src="./assets/arq..png" />
          <p>PINTEREST</p>
        </a>
      </div>
      <div class="project">
        <a href="#" target="_blank">
          <img src="pendiente.jpg" alt="Project 5" />
          <p>GAME</p>
        </a>
      </div>
    </div>
  `

 return section
}
