import './Experience.css'

export default function Experience() {
 const section = document.createElement('section')
 section.className = 'experience'
 section.innerHTML = `
        <h2>Where the Real Work Happens...</h2>
        <h3>Sales Manager in California Textil Mexico 2018-2022</h3>
        <p>Developed new markets and identified growth opportunities while analyzing commercial data and performance metrics. Managed projects efficiently and collaborated with both international and local suppliers. Established and maintained strategic alliances with key clients.</p>
        <h3>Sales Executive in California Textil Mexico 2013-2018</h3>
        <p>Surpassed sales targets by adapting strategies based on market trends and analysis. Built strong, lasting relationships with clients and leveraged effective negotiation skills to secure sales opportunities.</p>
    `
 return section
}
