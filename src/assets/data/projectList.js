import { techno } from "./technos";
import argentbankCover from '../data/images/argentbank/cover.png'
import argentbankimg1 from '../data/images/argentbank/img1.png'
import argentbankimg2 from '../data/images/argentbank/img2.png'

import bookiCover from '../data/images/booki/cover.png'
import bookiimg1 from '../data/images/booki/img1.png'
import bookiimg2 from '../data/images/booki/img2.png'
import bookiimg3 from '../data/images/booki/img3.png'

import kasaCover from '../data/images/kasa/cover.png'
import kasaImg1 from '../data/images/kasa/img1.png'
import kasaImg2 from '../data/images/kasa/img2.png'

import ninaCover from '../data/images/ninacarducci/cover.png'
import ninaImg1 from '../data/images/ninacarducci/img1.png'
import ninaImg2 from '../data/images/ninacarducci/img2.png'

import sophieCover from '../data/images/sophiebluel/cover.png'
import sophieImg1 from '../data/images/sophiebluel/img1.png'
import sophieImg2 from '../data/images/sophiebluel/img2.png'
import sophieImg3 from '../data/images/sophiebluel/img3.png'



export const projectsList =  [
      {
        "id": 1,
        "name": "Argent Bank",
        "summary": "Bank account interface",
        "description": "ArgentBank, a comprehensive banking interface, consolidates user accounts. My task focused on managing user authentication with Redux while ensuring robust security measures for connections. Through meticulous implementation, the project fortified user authentication protocols, enhancing the platform's reliability and user trust.",
        "technologies": [techno.react, techno.js, techno.sass],
        "coverImage": argentbankCover,
        "illustrationImages": [argentbankCover, argentbankimg1, argentbankimg2],
        "externalLinks": {
          "VIEW CODE": "https://github.com/JksonKnew/P11",
        }
      },
      {
        "id": 2,
        "name": "Booki",
        "summary": "Logement search start-up",
        "description": "For Booki, a startup aimed at creating an interface for users to search for accommodations in specific locations, I undertook the task of developing this dynamic interface. My mission involved crafting an intuitive platform that enables users to seamlessly search for lodging in precise locations, enhancing their overall experience and facilitating efficient property exploration.",
        "technologies": [techno.html, techno.css, techno.figma],
        "coverImage": bookiCover,
        "illustrationImages": [bookiCover, bookiimg1, bookiimg2, bookiimg3],
        "externalLinks": {
          "VIEW CODE": "https://github.com/JksonKnew/P3",
          "LIVE VIEW": "https://jksonknew.github.io/P3/",
        }
      },
      {
        "id": 3,
        "name": "Kasa",
        "summary": "Apartment rental between individuals",
        "description": "Kasa is a web application for peer-to-peer real estate rental.The aim of my mission was to dynamically integrate the website based on a Figma mockup. Leveraging a database, the site automatically manages the pages.",
        "technologies": [techno.react, techno.sass, techno.js, techno.figma],
        "coverImage": kasaCover,
        "illustrationImages": [kasaCover, kasaImg1, kasaImg2],
        "externalLinks": {
          "VIEW CODE": "https://github.com/JksonKnew/P8",
        }
      },
      {
        "id": 4,
        "name": "Sophie Bluel",
        "summary": "Administrator interface",
        "description": "For Sophie Bluel's portfolio, a architect's showcase, I developed an administration interface enabling dynamic management of the photos displayed in her portfolio. I integrated JavaScript for authentication, ensuring secure access to the platform's backend. This allowed Sophie to effortlessly update and organize her photography collection, enhancing the overall user experience for visitors to her portfolio.",
        "technologies": [techno.html, techno.sass, techno.js, techno.figma],
        "coverImage": sophieCover,
        "illustrationImages": [sophieImg1, sophieImg2, sophieImg3],
        "externalLinks": {
          "VIEW CODE": "https://github.com/JksonKnew/P6",
        }
      },
      {
        "id": 5,
        "name": "Nina Carducci",
        "summary": "SEO optimization",
        "description": "For Nina Carducci's photography portfolio, I enhanced SEO optimization and crafted an optimization report. My role involved implementing strategies to boost visibility and reach on search engines, ensuring her work receives the attention it deserves.",
        "technologies": [techno.html, techno.sass, techno.js],
        "coverImage": ninaCover,
        "illustrationImages": [ninaCover, ninaImg1, ninaImg2],
        "externalLinks": {
          "VIEW CODE": "https://github.com/JksonKnew/P9",
          "LIVE VIEW": "https://jksonknew.github.io/P9/",
        }
      },
    ]
  