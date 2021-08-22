import Head from "next/head";
import Header from "../components/Header/Header.component";
import Button from "../components/Button/Button.component";
import { useState,useEffect } from "react";
import Fade from "react-reveal/Fade";


export default function Home() {
  const [title, setTitle] = useState("ModelX");
  const [scroll, setScroll] = useState(1);
  const [activeBg,setActiveBg] = useState('Model S')

  const scrollHandler = () => {
    if(window.pageYOffset == 0) return(setScroll(1))
    let val =0
    bgImages.map((e) => {
    let box = document.querySelector('.'+e.class);
    let height =  box.getBoundingClientRect().top
    if(height <= 0 && e.id === 7){
       return(setActiveBg(e.name))
    }
    if(height <= 150){
       val = (Math.floor(height/75)%10)/10
      setActiveBg(e.name)
      return 
       }
  })  
    let scrollValue = 0
       switch (Math.abs(val)) {
      case val = 0.1:
        scrollValue = 1
        break;
      case val = 0.2:
        scrollValue = 1
        break;
      case val = 0.3:
        scrollValue = 0.9
        break;
      case val = 0.4:
        scrollValue = 0.8
        break;
      case val = 0.5:
        scrollValue = 0.7
        break;
      case val = 0.6:
        scrollValue = 0.6
        break;
      case val = 0.7:
        scrollValue = 0.5
        break;
       case val = 0.8:
        scrollValue = 0
        break;
       case val = 0.9:
        scrollValue = 0
        break;
       case val = 0:
        scrollValue = 1
        break;
      default:
        break;
    }
    setScroll(scrollValue)
  }
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

     return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  })

  let bgImages = [
    {
      id: 1,
      url: "https://res.cloudinary.com/insta-clone-001/image/upload/v1629640231/Tesla-clone/ModelS_rzulnm.jpg",
      name: "Model S",
      class:"ModelS"
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/insta-clone-001/image/upload/v1629640237/Tesla-clone/ModelY_o4yvdi.jpg",
      name: "Model Y",
      class:"ModelY"
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/insta-clone-001/image/upload/v1629640228/Tesla-clone/Model3_jhdzzq.jpg",
      name: "Model 3",
      class:"Model3"
    },
    {
      id: 4,
      url: "https://res.cloudinary.com/insta-clone-001/image/upload/v1629640234/Tesla-clone/ModelX_dqaume.jpg",
      name: "Model X",
      class:"ModelX"
    },
    {
      id: 5,
      url: "https://res.cloudinary.com/insta-clone-001/image/upload/v1629640223/Tesla-clone/SolarPanels_mmdcga.jpg",
      name: "SolarPanels",
      class:"SolarPanels"
    },
    {
      id: 6,
      url: "https://res.cloudinary.com/insta-clone-001/image/upload/v1629640223/Tesla-clone/solarRoof_rttswk.jpg",
      name: "SolarRoofs ",
      class:"SolarRoofs"
    },
    {
      id: 7,
      url: "https://res.cloudinary.com/insta-clone-001/image/upload/v1629640225/Tesla-clone/DesktopAccessories_hclxxm.jpg",
      name: "Accessories",
      class:"DesktopAccessories"
    },
  ];

  return (
    <>
      <Head>
        <title>Tesla clone website</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-container">
        {bgImages.map((bg) => (
          <Fade  key={bg.id} fraction={0.7} onReveal={() => setTitle(bg.name)}>
            <div
              key={bg.id}
              className={`${bg.class} bg-images`}
              style={{ backgroundImage: `url(${bg.url})` }}
            ></div>
          </Fade>
        ))}
      </div>
      <div className="container">
        <Header />
        <div className="title-container" style={{opacity:`${activeBg == 'Accessories'? 1 : scroll}`}}>
          <h1 className="main-title" >{activeBg}</h1>
          <span>
            Order Online for <a href="#">Touchless Delivery</a>
          </span>
        </div>

        <div className="main-button-container" style={{opacity:`${activeBg == 'Accessories'? 1 : scroll}`}}>
          <Button text="CUSTOM ORDER" color="black" />
          <Button text="EXISTING INVENTORY" color="white" style={activeBg == 'Accessories'? 'none':'block'}/>
        </div>
      </div>
    </>
  );
}
