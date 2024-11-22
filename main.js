import './style.css'
import Header from './src/components/Header/Header.js'
import Main from './src/components/Main/Main.js'
import Footer from './src/components/Footer/Footer.js'

document.getElementById('app').append(Header(), Main(), Footer())
