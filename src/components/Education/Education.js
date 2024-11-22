import './Education.css'

export default function Education() {
 const section = document.createElement('section')
 section.className = 'education'

 const educationData = [
  {
   degree: 'Bootcamp Full Stack Developer',
   institution: '{Rock The Code} - ThePowerMBA Business School - currently',
   courses: ['Figma', 'Power IA v.3']
  },
  {
   degree: "Bachelor's degree Image Design",
   institution: 'Universidad Valle Continental, Monterrey MX - 2011',
   courses: ['Personal Stylist, Colour Me Beautiful -Aumente Style LLC-']
  }
 ]

 section.innerHTML = `
        <h2>Brain Loading...</h2>
        ${educationData
         .map(
          (item) => `
            <div class="education-item">
                <h3>${item.degree}</h3>
                <p><strong>Institution:</strong> ${item.institution}</p>
                <h4>Relevant Courses:</h4>
                <ul>
                    ${item.courses
                     .map((course) => `<li>${course}</li>`)
                     .join('')}
                </ul>
            </div>
        `
         )
         .join('')}
    `

 return section
}
