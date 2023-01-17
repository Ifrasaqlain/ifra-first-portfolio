import  Allies from  "../Images/Allies-Interactive-Logo.png";
import Futureistic from "../Images/futureistic_logo.png";
import Award2020 from '../Images/2020-top-contributor.jpeg';
import Award2021 from '../Images/2021-awards.jpeg';
import Award2022Single from '../Images/2022-awards-single.jpeg';
import Award2022 from '../Images/2022-awards.jpeg';
import Drogo from '../Images/Drogo.png';
import Sagma from '../Images/sagma.png';
import Arwa from '../Images/Arwa.png';
import Meissa from '../Images/Arwa.png';

export const projects = [
    {
      title: "Drogo Theme",
      subtitle: "Zendesk",
      description:
        "I worked (Update code time to time, update UI, test UI cross browser and fix bugs, create documentation) on many products of Diziana. This themes is one of them. ",
      image: Drogo,
      link: "https://drogo.zendesk.com/hc/en-us",
    },
    {
      title: "Sagma Theme",
      subtitle: "Zendesk",
      description:
        "I worked (Update code time to time, update UI, test UI cross browser and fix bugs, create documentation) on many products of Diziana. This themes is one of them. ",
      image: Sagma,
      link: "https://sagma.zendesk.com/hc/en-us",
    },
    {
      title: "Arwa Theme",
      subtitle: "Zendesk",
      description:
        "I developed this theme, it's design, look and feel. I worked (Write code, create UI, Update code time to time, update UI, test UI cross browser and fix bugs, create documentation) on many products of Diziana.",
      image: Arwa,
      link: "https://diziana-arwa.zendesk.com/hc/en-us",
    },
    {
      title: "Meissa Theme (Not live yet)",
      subtitle: "Zendesk",
      description:
        "I developed this theme, it's design, look and feel. I worked (Write code, create UI, Update code time to time, update UI, test UI cross browser and fix bugs, create documentation) on many products of Diziana.",
      image: Meissa,
      link: "#",
    },
  ];

  export const aboutData = [
    {
      id:"Team one",
      image: Futureistic,
      designation:"Web Developer",
      companyName:"Futureistic, Kanpur, India",
      employmentType :"Full Time",
      employmentTime:"2018 Jan-2018 Jul",
      team:"Web Development Team",
      description: 
      "Wordpress Theme Development & Make Website Using Wordpress. My boss lives in South Africa, from there she runs this company. Projects would also be from different countries. Mostly we do US projects."
    },
    {
      id:"Team two",
      image: Allies,
      designation:"Frontend Web Developer",
      companyName:"Allies Interactive Services Pvt. Ltd., Kanpur, India",
      employmentType :"Full Time",
      employmentTime:"2018 Aug-2019 Mar",
      team:"Web Development Team",
      description: 
      "Build Websites on WordPress | Build Website Using HTML, CSS & JavaScript"
    },
    {
      id:"Team three",
      image: Allies,
      designation:"Frontend Web Developer",
      companyName:"Allies Interactive Services Pvt. Ltd., Kanpur, India",
      employmentType :"Full Time",
      employmentTime:"2019 Mar-2022 Nov",
      team:"I moved to Diziana Team in 2019.",
      description: 
      "Diziana (Apps development for Zendesk Support and Help Center, Design/Theming Implementation)"
    }
  ]


  const award2021URL = 'https://support.zendesk.com/hc/en-us/articles/4411301646234-2021-Zendesk-Community-Award-Winners';
  const award2021 = new URL(award2021URL).href;

  const award2020URL = 'https://support.zendesk.com/hc/en-us/articles/4411301646234-2021-Zendesk-Community-Award-Winners';
  const award2020 = new URL(award2020URL).href;

  const award2022URL = 'https://support.zendesk.com/hc/en-us/community/posts/5126453340058-Congratulations-to-the-2022-Zendesk-Community-Award-winners-';
  const award2022 = new URL(award2022URL).href;

  const award2022SingleURL = 'https://support.zendesk.com/hc/en-us/community/posts/5126453340058-Congratulations-to-the-2022-Zendesk-Community-Award-winners-';
  const award2022Single = new URL(award2022SingleURL).href;

  export const owlCarousel = [
    {
      id: "Item One",
      itemURL: award2020,
      owlItemImage: Award2020,
      title:"Zendesk Community",
      description: "Top 3 contributor in 2020"
    },
    {
      id: "Item Two",
      itemURL: award2021,
      owlItemImage: Award2021,
      title:"Zendesk Community",
      description: "Most engaged community member of the year in 2021"
    },
    {
      id: "Item Three",
      itemURL: award2022Single,
      owlItemImage: Award2022Single,
      title:"Zendesk Community",
      description: "Most engaged community member of the year in 2022"
    },
    {
      id: "Item Four",
      itemURL: award2022,
      owlItemImage: Award2022,
      title:"Zendesk Community",
      description: "We all worked hard in 2022"
    }
  ]

  export const socialMedia = [
    {
      iconName: "fab fa-instagram",
      ariaLabel: "Instagram",
      iconURL: "https://www.instagram.com/ifra_saqlain/",
      
    },
    {
      iconName: "fab fa-facebook-f",
      ariaLabel: "Facebook",
      iconURL: "https://www.instagram.com/ifra_saqlain/"
    },
    {
      iconName: "fab fa-linkedin-in",
      ariaLabel: "LinkedIn",
      iconURL: "https://www.linkedin.com/in/ifra-saqlain-559106250/"
    }
  ]


