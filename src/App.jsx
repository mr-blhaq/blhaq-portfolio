import { useState } from 'react'
import { useEffect } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header from './header.jsx'
import Hero from './Hero.jsx'
import Workcard from './Workcard.jsx'
import Projectcard from './Projectcard.jsx'
import Statcard from './Statcard.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);

  // comment 

  const projects = [
    {
      image: "https://res.cloudinary.com/dkvxns0mb/image/upload/q_auto/f_auto/v1776921270/tf_shoe1_c6fsgf.png",
      title: "Ig Reel Content",
      description: "Cinematic brand story for tech startup",
      tools: ["Premiere Pro", "After Effects", "Photoshop"],
      type: "videoedit",
      link: "https://res.cloudinary.com/dkvxns0mb/video/upload/q_auto/f_auto/v1776921601/Leg_Into_Shoe_Transition_Talking_Foot_1_lfwhwi.mp4",
    },
    {
      image: "https://res.cloudinary.com/dkvxns0mb/image/upload/q_auto/f_auto/v1776921321/cryyptech_asaurs.png",
      title: "Crypto Wallet Demo",
      description: "Demo crypto wallet app",
      tools: ["HTML", "CSS", "JavaScript"],
      type: "website",
      link: 'https://www.google.com/?zx=1776259068396',
    },
    {
      image: "https://res.cloudinary.com/dkvxns0mb/image/upload/q_auto/f_auto/v1776921285/2025_09_22_10_55_IMG_6758_unrdlw.jpg",
      title: "Artist Profile Art",
      description: "Artistic representation",
      tools: ["ibis paint"],
      type: "art",
      link: "https://res.cloudinary.com/dkvxns0mb/image/upload/f_auto,q_auto/2025_09_22_10_55_IMG_6743_pfnqso", 
    },
    {
      image: "https://res.cloudinary.com/dkvxns0mb/image/upload/q_auto/f_auto/v1776921286/2026_02_08_21_00_IMG_0874_yjnaiq.jpg",
      title: "album cover art",
      description: "album cover art for music artist",
      tools: ["ibis paint"],
      type: "art",
      link: "https://res.cloudinary.com/dkvxns0mb/image/upload/q_auto/f_auto/v1776921400/2026_02_08_21_00_IMG_1094_fjutls.png",
    },
    {
      image: "https://res.cloudinary.com/dkvxns0mb/image/upload/q_auto/f_auto/v1776997049/Screenshot_2026-04-24_031655_aukons.png",
      title: "Brand Promo Video",
      description: "Cinematic brand story for entertainment brand",
      tools: ["After Effects"],
      type: "videoedit",
      link: "https://res.cloudinary.com/dkvxns0mb/video/upload/q_auto/f_auto/v1776996078/More-Den_Club_News_Clip_01_n0bgrj.mp4",
    },
    {
      image: "https://res.cloudinary.com/dkvxns0mb/image/upload/q_auto/f_auto/v1776921300/chess_vguydo.png",
      title: "Simple Chess Game",
      description: "Simple chess game with timer and difficulty",
      tools: ["HTML", "CSS", "JavaScript"],
      type: "website",
      link: 'https://www.google.com/?zx=1776259068396',
    },
    {
      image: "https://res.cloudinary.com/dkvxns0mb/image/upload/q_auto/f_auto/v1776921273/tf_boxing_l5cjkb.png",
      title: "Ig Reel Content",
      description: "Cinematic brand story for tech startup",
      tools: ["After Effects"],
      type: "videoedit",
      link: "https://res.cloudinary.com/dkvxns0mb/video/upload/q_auto/f_auto/v1776922031/Shoe_Packaging_Vid_1_iaf8z3.mp4",
    },
    {
      image: "https://res.cloudinary.com/dkvxns0mb/image/upload/q_auto/f_auto/v1776921286/2026_04_20_02_30_IMG_1095_kwper4.jpg",
      title: "album cover art",
      description: "album cover art for music artist",
      tools: ["ibis paint"],
      type: "art",
      link: "https://res.cloudinary.com/dkvxns0mb/image/upload/q_auto/f_auto/v1776921351/2026_04_20_02_30_IMG_1096_fjowfv.png",
    },
    {
      image: "https://res.cloudinary.com/dkvxns0mb/image/upload/q_auto/f_auto/v1776921270/sisi_eko_vid_wqhese.png",
      title: "Music Video Snippet",
      description: "Short music video snippet for music artist",
      tools: ["After Effects"],
      type: "videoedit",
      link: "https://res.cloudinary.com/dkvxns0mb/video/upload/q_auto/f_auto/v1776922247/Nate_X_Ifyboboh_Sisi_Eko_Reel_1_eje8m9.mp4",
    },
    {
      image: "https://res.cloudinary.com/dkvxns0mb/image/upload/q_auto/f_auto/v1776921276/tf_recap_cwgvtt.png",
      title: "Pop Up Highlight",
      description: "Pop up hihglight video for shoe brand ",
      tools: ["After Effects"],
      type: "videoedit",
      link: "https://res.cloudinary.com/dkvxns0mb/video/upload/q_auto/f_auto/v1776922229/Talking_Foot_Recap_Clip_f62mvs.mp4",
    },
    {
      image: "https://res.cloudinary.com/dkvxns0mb/image/upload/q_auto/f_auto/v1776921273/tf_shoe3_zm5jcf.png",
      title: "Ig Reel Content",
      description: "Short brand video for social media content",
      tools: ["After Effects"],
      type: "videoedit",
      link: "https://res.cloudinary.com/dkvxns0mb/video/upload/q_auto/f_auto/v1776921518/X_Tape_Shoe_Swap_Final_V_k7fwle.mp4",
    },
    {
      image: "https://res.cloudinary.com/dkvxns0mb/image/upload/q_auto/f_auto/v1776921295/2026_04_20_02_32_IMG_1097_toa7q5.jpg",
      title: "album cover art",
      description: "album cover art for music artist",
      tools: ["ibis paint"],
      type: "art",
      link: "https://res.cloudinary.com/dkvxns0mb/image/upload/q_auto/f_auto/v1776921341/2026_04_20_02_32_IMG_1098_qn7ppo.png",
    },
    {
      image: "https://res.cloudinary.com/dkvxns0mb/image/upload/q_auto/f_auto/v1776921300/2026_04_20_02_35_IMG_1099_g6r0kz.jpg",
      title: "Product Sticker Design",
      description: "Brand sticker design for product packaging",
      tools: ["canva"],
      type: "design",
      link: "https://res.cloudinary.com/dkvxns0mb/image/upload/q_auto/f_auto/v1776921300/2026_04_20_02_35_IMG_1099_g6r0kz.jpg",
    },
    {
      image: "https://res.cloudinary.com/dkvxns0mb/image/upload/q_auto/f_auto/v1776921293/tf_shoe2_lkqe82.png",
      title: "Ig Reel Content",
      description: "Short brand video for social media content",
      tools: ["After Effects"],
      type: "videoedit",
      link: "https://res.cloudinary.com/dkvxns0mb/video/upload/q_auto/f_auto/v1776921602/Talking_Foot_Shoe_Shake_Swap_2_s0usep.mp4",
    },
    {
      image: "https://res.cloudinary.com/dkvxns0mb/image/upload/q_auto/f_auto/v1776921319/short_reel_rjfeke.png",
      title: "Ig Reel Content",
      description: "Short brand video for social media content",
      tools: ["After Effects"],
      type: "videoedit",
      link: "https://res.cloudinary.com/dkvxns0mb/video/upload/q_auto/f_auto/v1776922370/Short_reel_tngbcy.mp4",
    },
  ];

  const [filter, setFilter] = useState("all");

  const filteredProjects =
  filter === "all"
    ? projects
  : projects.filter((p) => p.type === filter);

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <div className='headdiv'>
        <Header/>
      </div>
      <div className='herodiv'>
        <Hero/>
      </div>
      <div className="mywork" id='skills'>
        <h2 >What I Do</h2>
        <p className='p'>Four creative disciplines. Endless possibilities</p>
        <div className='workcardlist'>
          <Workcard index={0} iconcolor='linear-gradient(90deg, #8400ff, #ba6fff)' icon={
            <svg width="54px" height="54px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ffffff" d="M55 18v476h18v-37h46v37h274v-37h46v37h18V18h-18v37h-46V18h-18v60H137V18h-18v37H73V18H55zm18 55h46v46H73V73zm320 0h46v46h-46V73zm-256 41h238v156H137V114zm-64 23h46v46H73v-46zm320 0h46v46h-46v-46zM73 201h46v46H73v-46zm320 0h46v46h-46v-46zM73 265h46v46H73v-46zm320 0h46v46h-46v-46zm-256 41h238v156H137V306zm-64 23h46v46H73v-46zm320 0h46v46h-46v-46zM73 393h46v46H73v-46zm320 0h46v46h-46v-46z"></path></g>
            </svg>} title='Video Editing' description='Cinematic storytelling through professional video editing, color grading, and motion graphics.'/>
          <Workcard index={1} iconcolor='linear-gradient(90deg, #004cff, #5084fe)' icon={<svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 7L4 12L9 17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15 7L20 12L15 17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>} title='Web Development' description='Building responsive, high-performance websites with modern frameworks and best practices.'/>
          <Workcard index={2} iconcolor='linear-gradient(90deg, #ff00dd, #fe6deb)' icon={<svg fill="#ffffff" height="54px" width="54px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" xml:space="preserve" stroke="#ffffff" transform="rotate(270)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M124.062,287.327c-18.119,18.119-15.531,50.083,5.78,71.393c21.311,21.311,53.275,23.898,71.393,5.78 c18.119-18.119,15.531-50.083-5.78-71.394C174.145,271.797,142.181,269.209,124.062,287.327z M186.239,349.504 c-10.009,10.009-28.684,7.561-41.712-5.468c-13.028-13.028-15.477-31.703-5.468-41.712c10.008-10.008,28.683-7.56,41.712,5.468 C193.799,320.82,196.247,339.496,186.239,349.504z"></path> <path d="M329.137,156.604c-18.119,18.119-15.531,50.083,5.78,71.393c21.311,21.311,53.275,23.898,71.393,5.78 c18.119-18.119,15.531-50.083-5.78-71.394S347.256,138.486,329.137,156.604z M391.314,218.781 c-10.008,10.008-28.684,7.56-41.712-5.468c-13.028-13.028-15.477-31.703-5.468-41.712c10.009-10.009,28.684-7.561,41.712,5.468 C398.874,190.097,401.322,208.773,391.314,218.781z"></path> <path d="M193.012,69.302c-20.766,20.766-17.8,57.401,6.624,81.826c24.425,24.425,61.06,27.391,81.826,6.625 c20.766-20.767,17.8-57.401-6.625-81.826C250.413,51.502,213.778,48.536,193.012,69.302z M266.942,143.232 c-12.603,12.603-36.119,9.52-52.524-6.885s-19.488-39.921-6.885-52.524c12.603-12.603,36.119-9.52,52.524,6.885 C276.462,107.113,279.545,130.63,266.942,143.232z"></path> <path d="M174.871,237.614c20.766-20.766,17.801-57.401-6.624-81.826c-24.425-24.425-61.06-27.391-81.826-6.625 c-20.766,20.766-17.8,57.401,6.624,81.826C117.471,255.415,154.105,258.38,174.871,237.614z M99.608,162.351 c13.169-13.169,37.741-9.948,54.883,7.194c17.142,17.142,20.363,41.714,7.195,54.883c-13.169,13.169-37.741,9.948-54.883-7.194 C89.66,200.091,86.439,175.519,99.608,162.351z"></path> <path d="M395.559,95.015C335.357,34.631,258.427,0,184.502,0c-53.023,0-98.91,17.821-132.691,51.542 c-83.038,82.855-63.948,237.17,42.567,344.002c54.785,54.948,125.401,89.335,193.727,94.344c1.049,0.077,2.087,0.113,3.136,0.113 c18.917,0,35.207-12.05,39.717-29.627c8.023-32.285-17.685-59.698-37.721-77.515c-21.116-18.759-41.173-39.004-34.494-62.075 c2.433-8.425,8.919-15.958,17.349-20.148c20.424-10.145,46.661-2.393,64.213,17.669c11.107,12.691,19.364,30.086,25.229,53.192 l1.212,4.922c3.37,13.724,7.188,29.286,18.316,40.96c2.922,3.074,6.313,5.778,10.06,8.033c7.178,4.327,15.444,6.617,23.885,6.617 c18.042,0,35.206-9.998,44.797-26.083C516.246,318.044,487.545,187.278,395.559,95.015z M445.904,395.264 c-8.349,13.989-27.102,20.077-40.023,12.289c-2.158-1.298-4.083-2.831-5.732-4.561c-7.29-7.651-10.131-19.258-13.154-31.542 l-1.252-5.086c-6.689-26.359-16.422-46.574-29.75-61.795c-16.126-18.427-38.658-29.433-60.251-29.433 c-10.079,0-19.813,2.296-28.935,6.827c-13.766,6.847-24.008,18.881-28.101,33.023c-10.894,37.644,21.391,66.325,40.685,83.459 c25.402,22.592,35.359,40.669,31.612,55.941l-0.336,1.145c-2.128,8.354-11.271,14.264-21.035,13.556 c-63.408-4.643-129.189-36.815-180.492-88.266C10.74,282.13-8.37,141.04,66.533,66.304c29.8-29.734,70.586-45.453,117.969-45.453 c68.428,0,139.971,32.396,196.294,88.887C466.145,195.346,493.532,315.427,445.904,395.264z"></path> </g> </g></svg>} title='Digital Art' description='Creating stunning digital illustrations, concept art, and visual designs that captivate.'/>
          <Workcard index={3} iconcolor='linear-gradient(90deg, #ff6a00, #fb964f)' icon={<svg fill="#ffffff" width="54px" height="54px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)matrix(-1, 0, 0, 1, 0, 0)" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>stack2</title> <path d="M28.608 11.246l-12.608-8.632-12.608 8.632 12.608 8.631 12.608-8.631zM16 21.803l-11.129-7.338-1.479 1.535 12.608 8.631 12.608-8.631-1.499-1.568-11.109 7.371zM16 26.559l-11.129-7.338-1.479 1.535 12.608 8.631 12.608-8.631-1.499-1.568-11.109 7.371z"></path> </g></svg>} title='Graphic Design' description='Brand identity, UI/UX design, and visual communication that makes an impact.'/>
        </div>
      </div>

      <div className="mywork" id='mywork'>
        <h2>Featured Work</h2>

        <p className='p'>Four creative disciplines. Endless possibilities</p>

        <div className="projecttypebtn">
          <button
            className={`projecttype ${filter === "all" ? "activee" : ""}`}
            onClick={() => setFilter("all")}
          >
            All
          </button>

          <button
            className={`projecttype ${filter === "videoedit" ? "activee" : ""}`}
            onClick={() => setFilter("videoedit")}
          >
            Video Editing
          </button>

          <button
            className={`projecttype ${filter === "website" ? "activee" : ""}`}
            onClick={() => setFilter("website")}
          >
            Web Development
          </button>

          <button
            className={`projecttype ${filter === "art" ? "activee" : ""}`}
            onClick={() => setFilter("art")}
          >
            Digital Art
          </button>

          <button
            className={`projecttype ${filter === "design" ? "activee" : ""}`}
            onClick={() => setFilter("design")}
          >
            Graphic Design
          </button>
        </div>

        <div className='jobcardlist'>
            {filteredProjects.map((project, index) => (
              <Projectcard
                key={index}
                {...project}
                onClick={() => {
                  if (project.type === "website") {
                    window.open(project.link, "_blank"); // 👈 open new tab
                  } else {
                    setSelectedProject(project); // 👈 open modal
                  }
                }}
              />
            ))}
        </div>

        {selectedProject && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => setSelectedProject(null)}>
                <svg fill="#ffffff" width="24px" height="24px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>cancel2</title> <path d="M19.587 16.001l6.096 6.096c0.396 0.396 0.396 1.039 0 1.435l-2.151 2.151c-0.396 0.396-1.038 0.396-1.435 0l-6.097-6.096-6.097 6.096c-0.396 0.396-1.038 0.396-1.434 0l-2.152-2.151c-0.396-0.396-0.396-1.038 0-1.435l6.097-6.096-6.097-6.097c-0.396-0.396-0.396-1.039 0-1.435l2.153-2.151c0.396-0.396 1.038-0.396 1.434 0l6.096 6.097 6.097-6.097c0.396-0.396 1.038-0.396 1.435 0l2.151 2.152c0.396 0.396 0.396 1.038 0 1.435l-6.096 6.096z"></path> </g>
                </svg>
              </span>

              {selectedProject.type === "videoedit" && (
                <video controls autoPlay>
                  <source src={selectedProject.link} type="video/mp4" />
                </video>
              )}

              {selectedProject.type === "art" && (
                <img src={selectedProject.link} alt="preview" />
              )}

              {selectedProject.type === "design" && (
                <img src={selectedProject.link} alt="preview" />
              )}
            </div>
          </div>
        )}
      </div>

      <div className="aboutme reveal slide-up" id='aboutme'>
        <div className="aboutimg reveal slide-left">
          <img src="https://res.cloudinary.com/dkvxns0mb/image/upload/q_auto/f_auto/v1776921357/IMG_9784_ke2plu.jpg" alt="ME" />
        </div>

        <div className="about-content reveal slide-right">
          <h2 className="abouttitle">About Me</h2>
          <p className='mydescription'>
            I'm a multi-disciplinary creative professional with a passion for bringing ideas to life through visual storytelling. With expertise spanning video editing, digital art, web development, and graphic design, I offer a unique perspective that bridges creativity and technology.
          </p>
          <p className='mydescription'>
            My versatility allows me to tackle complex projects from multiple angles, ensuring cohesive and impactful results. Whether it's crafting a compelling brand video, designing an intuitive website, or creating stunning visual artwork, I'm committed to delivering excellence in every pixel.
          </p>

          <div className="stats">
            <div className="reveal zoom-in delay-1">
                <Statcard icon={
              <svg fill="#ffffff" height="26px" width="26px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" stroke="#ffffff">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M471.149,87.149h-99.448c-2.466-6.952-7.983-12.469-14.935-14.935V40.851C356.766,18.325,338.441,0,315.915,0h-119.83 c-22.526,0-40.851,18.325-40.851,40.851v31.363c-6.952,2.465-12.469,7.983-14.935,14.935H40.851C18.325,87.149,0,105.474,0,128 v343.149C0,493.675,18.325,512,40.851,512h430.298C493.675,512,512,493.675,512,471.149V128 C512,105.474,493.675,87.149,471.149,87.149z M196.085,16.34h119.83c10.651,0,19.733,6.831,23.105,16.34H172.98 C176.352,23.172,185.434,16.34,196.085,16.34z M171.574,49.021h168.851v38.128H171.574V49.021z M40.851,495.66 c-13.515,0-24.511-10.995-24.511-24.511v-56.804c43.046,3.9,77.414,38.268,81.314,81.314H40.851z M495.66,471.149 c0,13.516-10.996,24.511-24.511,24.511h-56.804c3.9-43.046,38.268-77.414,81.314-81.314V471.149z M495.66,217.872 c0,13.516-10.996,24.511-24.511,24.511H329.067c-4.079-36.714-35.284-65.362-73.067-65.362c-40.546,0-73.532,32.986-73.532,73.532 c0,31.416,19.858,59.077,49.021,69.349v20.524h-24.511c-4.513,0-8.17,3.658-8.17,8.17v32.681c0,4.512,3.657,8.17,8.17,8.17h24.511 v24.511c0,4.512,3.657,8.17,8.17,8.17h32.681c4.513,0,8.17-3.658,8.17-8.17v-24.511h24.511c4.513,0,8.17-3.658,8.17-8.17v-32.681 c0-4.512-3.657-8.17-8.17-8.17h-24.511v-20.524c26.604-9.371,45.457-33.215,48.562-61.179h142.077 c9.19,0,17.678-3.051,24.511-8.192v147.397c-52.066,3.979-93.752,45.665-97.731,97.731H114.071 c-3.979-52.066-45.665-93.752-97.731-97.731V250.531c6.832,5.141,15.321,8.192,24.511,8.192h117.106c4.513,0,8.17-3.658,8.17-8.17 c0-4.512-3.657-8.17-8.17-8.17H40.851c-13.515,0-24.511-10.995-24.511-24.511V128c0-13.516,10.996-24.511,24.511-24.511h430.298 c13.515,0,24.511,10.995,24.511,24.511V217.872z M272.34,356.766h24.511v16.34H272.34c-4.513,0-8.17,3.658-8.17,8.17v24.511 h-16.34v-24.511c0-4.512-3.657-8.17-8.17-8.17h-24.511v-16.34h24.511c4.513,0,8.17-3.658,8.17-8.17v-34.741 c0-3.728-2.523-6.983-6.134-7.912c-25.251-6.499-42.887-29.277-42.887-55.39c0-31.536,25.657-57.192,57.191-57.192 s57.191,25.656,57.191,57.192c0,26.113-17.636,48.891-42.887,55.39c-3.61,0.929-6.134,4.184-6.134,7.912v34.741 C264.17,353.108,267.827,356.766,272.34,356.766z"></path> </g> </g> <g> <g> <circle cx="49.021" cy="136.17" r="8.17"></circle> </g> </g> <g> <g> <circle cx="81.702" cy="168.851" r="8.17"></circle> </g> </g> <g> <g> <circle cx="430.298" cy="381.277" r="8.17"></circle> </g> </g> <g> <g> <path d="M256,226.043c-4.513,0-8.17,3.658-8.17,8.17v32.681c0,4.512,3.657,8.17,8.17,8.17c4.513,0,8.17-3.658,8.17-8.17v-32.681 C264.17,229.701,260.513,226.043,256,226.043z"></path> </g> </g> </g>
              </svg>} statnum={'30+'} statdesc={'Projects Completed'} />
            </div>

            <div className="reveal zoom-in delay-2">
            <Statcard icon={<svg width="26px" height="26px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.096"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.4" d="M17.9981 7.16C17.9381 7.15 17.8681 7.15 17.8081 7.16C16.4281 7.11 15.3281 5.98 15.3281 4.58C15.3281 3.15 16.4781 2 17.9081 2C19.3381 2 20.4881 3.16 20.4881 4.58C20.4781 5.98 19.3781 7.11 17.9981 7.16Z" stroke="#ffffff" stroke-width="0.9120000000000001" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="0.4" d="M16.9675 14.4402C18.3375 14.6702 19.8475 14.4302 20.9075 13.7202C22.3175 12.7802 22.3175 11.2402 20.9075 10.3002C19.8375 9.59016 18.3075 9.35016 16.9375 9.59016" stroke="#ffffff" stroke-width="0.9120000000000001" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="0.4" d="M5.96656 7.16C6.02656 7.15 6.09656 7.15 6.15656 7.16C7.53656 7.11 8.63656 5.98 8.63656 4.58C8.63656 3.15 7.48656 2 6.05656 2C4.62656 2 3.47656 3.16 3.47656 4.58C3.48656 5.98 4.58656 7.11 5.96656 7.16Z" stroke="#ffffff" stroke-width="0.9120000000000001" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="0.4" d="M6.9975 14.4402C5.6275 14.6702 4.1175 14.4302 3.0575 13.7202C1.6475 12.7802 1.6475 11.2402 3.0575 10.3002C4.1275 9.59016 5.6575 9.35016 7.0275 9.59016" stroke="#ffffff" stroke-width="0.9120000000000001" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12.0001 14.6302C11.9401 14.6202 11.8701 14.6202 11.8101 14.6302C10.4301 14.5802 9.33008 13.4502 9.33008 12.0502C9.33008 10.6202 10.4801 9.47021 11.9101 9.47021C13.3401 9.47021 14.4901 10.6302 14.4901 12.0502C14.4801 13.4502 13.3801 14.5902 12.0001 14.6302Z" stroke="#ffffff" stroke-width="0.9120000000000001" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9.0907 17.7804C7.6807 18.7204 7.6807 20.2603 9.0907 21.2003C10.6907 22.2703 13.3107 22.2703 14.9107 21.2003C16.3207 20.2603 16.3207 18.7204 14.9107 17.7804C13.3207 16.7204 10.6907 16.7204 9.0907 17.7804Z" stroke="#ffffff" stroke-width="0.9120000000000001" stroke-linecap="round" stroke-linejoin="round"></path> </g>
            </svg>} statnum={'10+'} statdesc={'Happy Clients'}/>
            </div>

            <div className="reveal zoom-in delay-3">
            <Statcard icon={<svg width="26px" height="26px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.245 4.174C11.4765 3.50808 11.5922 3.17513 11.7634 3.08285C11.9115 3.00298 12.0898 3.00298 12.238 3.08285C12.4091 3.17513 12.5248 3.50808 12.7563 4.174L14.2866 8.57639C14.3525 8.76592 14.3854 8.86068 14.4448 8.93125C14.4972 8.99359 14.5641 9.04218 14.6396 9.07278C14.725 9.10743 14.8253 9.10947 15.0259 9.11356L19.6857 9.20852C20.3906 9.22288 20.743 9.23007 20.8837 9.36432C21.0054 9.48051 21.0605 9.65014 21.0303 9.81569C20.9955 10.007 20.7146 10.2199 20.1528 10.6459L16.4387 13.4616C16.2788 13.5829 16.1989 13.6435 16.1501 13.7217C16.107 13.7909 16.0815 13.8695 16.0757 13.9507C16.0692 14.0427 16.0982 14.1387 16.1563 14.3308L17.506 18.7919C17.7101 19.4667 17.8122 19.8041 17.728 19.9793C17.6551 20.131 17.5108 20.2358 17.344 20.2583C17.1513 20.2842 16.862 20.0829 16.2833 19.6802L12.4576 17.0181C12.2929 16.9035 12.2106 16.8462 12.1211 16.8239C12.042 16.8043 11.9593 16.8043 11.8803 16.8239C11.7908 16.8462 11.7084 16.9035 11.5437 17.0181L7.71805 19.6802C7.13937 20.0829 6.85003 20.2842 6.65733 20.2583C6.49056 20.2358 6.34626 20.131 6.27337 19.9793C6.18915 19.8041 6.29123 19.4667 6.49538 18.7919L7.84503 14.3308C7.90313 14.1387 7.93218 14.0427 7.92564 13.9507C7.91986 13.8695 7.89432 13.7909 7.85123 13.7217C7.80246 13.6435 7.72251 13.5829 7.56262 13.4616L3.84858 10.6459C3.28678 10.2199 3.00588 10.007 2.97101 9.81569C2.94082 9.65014 2.99594 9.48051 3.11767 9.36432C3.25831 9.23007 3.61074 9.22289 4.31559 9.20852L8.9754 9.11356C9.176 9.10947 9.27631 9.10743 9.36177 9.07278C9.43726 9.04218 9.50414 8.99359 9.55657 8.93125C9.61593 8.86068 9.64887 8.76592 9.71475 8.57639L11.245 4.174Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>} statnum={'4.9'} statdesc={'Average Rating'}/>
            </div>

            <div className="reveal zoom-in delay-4">
            <Statcard icon={<svg width="26px" height="26px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="0.10">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.048"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.261 1.03462C12.6971 1.15253 13 1.54819 13 1.99997V8.99997H19C19.3581 8.99997 19.6888 9.19141 19.8671 9.50191C20.0455 9.8124 20.0442 10.1945 19.8638 10.5038L12.8638 22.5038C12.6361 22.8941 12.1751 23.0832 11.739 22.9653C11.3029 22.8474 11 22.4517 11 22V15H5C4.64193 15 4.3112 14.8085 4.13286 14.498C3.95452 14.1875 3.9558 13.8054 4.13622 13.4961L11.1362 1.4961C11.3639 1.10586 11.8249 0.916719 12.261 1.03462ZM6.74104 13H12C12.5523 13 13 13.4477 13 14V18.301L17.259 11H12C11.4477 11 11 10.5523 11 9.99997V5.69889L6.74104 13Z" fill="#ffffff"></path> </g>
            </svg>} statnum={'4'} statdesc={'Creative Skills'}/>
            </div>

          </div>
        </div>
      </div>

      <div className="process reveal slide-up">
        <h2>My Process</h2>
        <p class="subtitle">A systematic approach to turning your ideas into reality</p>

        <div class="process-container">

          <div class="step reveal slide-up delay-1">
            <div class="stepicon ideate">
              <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34px" height="34px" viewBox="0 0 512 512" xml:space="preserve" fill="#ffffff" stroke="#ffffff">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css">  </style> <g> <path class="st0" d="M360.266,43.188C333.656,16.531,296.656-0.016,256,0c-40.656-0.016-77.656,16.531-104.266,43.188 c-26.641,26.625-43.203,63.609-43.188,104.266c-0.016,34.641,12.016,66.656,32.078,91.797c5.906,7.438,11.016,13.609,15.094,18.906 c3.063,3.969,5.547,7.438,7.516,10.594c2.953,4.75,4.75,8.672,6.078,13.375c1.297,4.719,2.094,10.469,2.109,18.594 c0,5.469,0.609,10.797,2.141,16.031c1.141,3.906,2.844,7.781,5.25,11.344c3.547,5.375,8.813,9.891,14.594,12.563 c5.766,2.703,11.781,3.688,17.391,3.688h90.422c4.984,0,10.281-0.781,15.469-2.859c3.875-1.547,7.656-3.859,10.875-6.828 c4.875-4.438,8.297-10.141,10.281-15.953c2-5.844,2.75-11.828,2.75-17.984c0-7.219,0.641-12.578,1.688-16.969 c1.625-6.563,4-11.438,8.641-18.266c4.609-6.766,11.578-15.078,20.484-26.234c20.047-25.141,32.063-57.172,32.047-91.797 C403.469,106.797,386.906,69.813,360.266,43.188z M338.531,213.063c-5.672,7.094-10.781,13.297-15.516,19.406 c-3.531,4.594-6.859,9.156-9.906,14.031c-4.547,7.281-8.422,15.375-10.922,24.438s-3.625,18.859-3.625,29.781 c0,0.594-0.016,1.125-0.047,1.594h-85c-0.031-0.469-0.063-0.984-0.063-1.594c0-9.719-0.875-18.531-2.859-26.75 c-2.906-12.359-8.391-22.922-14.828-32.25c-6.484-9.406-13.813-18-22.266-28.656c-14.375-18.047-22.906-40.734-22.922-65.609 c0.016-29.172,11.766-55.391,30.891-74.547C200.609,53.797,226.813,42.031,256,42.031s55.406,11.766,74.547,30.875 c19.109,19.156,30.859,45.375,30.875,74.547C361.406,172.344,352.875,195.031,338.531,213.063z"></path> <path class="st0" d="M256,512c17.406,0,31.531-14.109,31.531-31.531h-63.063C224.469,497.891,238.594,512,256,512z"></path> <path class="st0" d="M310.047,369.375H201.969c-9.406,0-17.016,7.609-17.016,17c0,9.406,7.609,17.016,17.016,17.016h108.078 c9.391,0,17.016-7.609,17.016-17.016C327.063,376.984,319.438,369.375,310.047,369.375z"></path> <path class="st0" d="M310.047,424.297H201.969c-9.406,0-17.016,7.609-17.016,17.016c0,9.391,7.609,17,17.016,17h108.078 c9.391,0,17.016-7.609,17.016-17C327.063,431.906,319.438,424.297,310.047,424.297z"></path> </g> </g>
              </svg>
            </div>
            <div className='stepinfo'>
              <h3>Ideate</h3>
              <p>Understanding your vision, goals, and target audience to craft the perfect strategy.</p>
            </div>
          </div>

          <div class="step reveal slide-up delay-2">
            <div class="stepicon design">
              <svg fill="#ffffff" width="34px" height="34px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M30.133 1.552c-1.090-1.044-2.291-1.573-3.574-1.573-2.006 0-3.47 1.296-3.87 1.693-0.564 0.558-19.786 19.788-19.786 19.788-0.126 0.126-0.217 0.284-0.264 0.456-0.433 1.602-2.605 8.71-2.627 8.782-0.112 0.364-0.012 0.761 0.256 1.029 0.193 0.192 0.45 0.295 0.713 0.295 0.104 0 0.208-0.016 0.31-0.049 0.073-0.024 7.41-2.395 8.618-2.756 0.159-0.048 0.305-0.134 0.423-0.251 0.763-0.754 18.691-18.483 19.881-19.712 1.231-1.268 1.843-2.59 1.819-3.925-0.025-1.319-0.664-2.589-1.901-3.776zM22.37 4.87c0.509 0.123 1.711 0.527 2.938 1.765 1.24 1.251 1.575 2.681 1.638 3.007-3.932 3.912-12.983 12.867-16.551 16.396-0.329-0.767-0.862-1.692-1.719-2.555-1.046-1.054-2.111-1.649-2.932-1.984 3.531-3.532 12.753-12.757 16.625-16.628zM4.387 23.186c0.55 0.146 1.691 0.57 2.854 1.742 0.896 0.904 1.319 1.9 1.509 2.508-1.39 0.447-4.434 1.497-6.367 2.121 0.573-1.886 1.541-4.822 2.004-6.371zM28.763 7.824c-0.041 0.042-0.109 0.11-0.19 0.192-0.316-0.814-0.87-1.86-1.831-2.828-0.981-0.989-1.976-1.572-2.773-1.917 0.068-0.067 0.12-0.12 0.141-0.14 0.114-0.113 1.153-1.106 2.447-1.106 0.745 0 1.477 0.34 2.175 1.010 0.828 0.795 1.256 1.579 1.27 2.331 0.014 0.768-0.404 1.595-1.24 2.458z"></path> </g></svg>
            </div>
            <div className='stepinfo'>
              <h3>Design</h3>
              <p>Creating wireframes, mockups, and visual concepts that align with your brand identity.</p>
            </div>
          </div>

          <div class="step reveal slide-up delay-3">
            <div class="stepicon develop">
              <svg width="34px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div>
            <div className="stepinfo">
              <h3>Develop</h3>
              <p>Bringing designs to life with clean code, smooth animations, and optimal performance.</p>
            </div>
          </div>

          <div class="step reveal slide-up delay-4">
            <div class="stepicon refine">
              <svg className='herosvg' fill="#ffffff" width="34px" height="34px" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)" stroke="#ffffff" stroke-width="0.00056"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.33599999999999997"></g><g id="SVGRepo_iconCarrier"><path d="M 26.6875 12.6602 C 26.9687 12.6602 27.1094 12.4961 27.1797 12.2383 C 27.9062 8.3242 27.8594 8.2305 31.9375 7.4570 C 32.2187 7.4102 32.3828 7.2461 32.3828 6.9648 C 32.3828 6.6836 32.2187 6.5195 31.9375 6.4726 C 27.8828 5.6524 28.0000 5.5586 27.1797 1.6914 C 27.1094 1.4336 26.9687 1.2695 26.6875 1.2695 C 26.4062 1.2695 26.2656 1.4336 26.1953 1.6914 C 25.3750 5.5586 25.5156 5.6524 21.4375 6.4726 C 21.1797 6.5195 20.9922 6.6836 20.9922 6.9648 C 20.9922 7.2461 21.1797 7.4102 21.4375 7.4570 C 25.5156 8.2774 25.4687 8.3242 26.1953 12.2383 C 26.2656 12.4961 26.4062 12.6602 26.6875 12.6602 Z M 15.3438 28.7852 C 15.7891 28.7852 16.0938 28.5039 16.1406 28.0821 C 16.9844 21.8242 17.1953 21.8242 23.6641 20.5821 C 24.0860 20.5117 24.3906 20.2305 24.3906 19.7852 C 24.3906 19.3633 24.0860 19.0586 23.6641 18.9883 C 17.1953 18.0977 16.9609 17.8867 16.1406 11.5117 C 16.0938 11.0899 15.7891 10.7852 15.3438 10.7852 C 14.9219 10.7852 14.6172 11.0899 14.5703 11.5352 C 13.7969 17.8164 13.4687 17.7930 7.0469 18.9883 C 6.6250 19.0821 6.3203 19.3633 6.3203 19.7852 C 6.3203 20.2539 6.6250 20.5117 7.1406 20.5821 C 13.5156 21.6133 13.7969 21.7774 14.5703 28.0352 C 14.6172 28.5039 14.9219 28.7852 15.3438 28.7852 Z M 31.2344 54.7305 C 31.8438 54.7305 32.2891 54.2852 32.4062 53.6524 C 34.0703 40.8086 35.8750 38.8633 48.5781 37.4570 C 49.2344 37.3867 49.6797 36.8945 49.6797 36.2852 C 49.6797 35.6758 49.2344 35.2070 48.5781 35.1133 C 35.8750 33.7070 34.0703 31.7617 32.4062 18.9180 C 32.2891 18.2852 31.8438 17.8633 31.2344 17.8633 C 30.6250 17.8633 30.1797 18.2852 30.0860 18.9180 C 28.4219 31.7617 26.5938 33.7070 13.9140 35.1133 C 13.2344 35.2070 12.7891 35.6758 12.7891 36.2852 C 12.7891 36.8945 13.2344 37.3867 13.9140 37.4570 C 26.5703 39.1211 28.3281 40.8321 30.0860 53.6524 C 30.1797 54.2852 30.6250 54.7305 31.2344 54.7305 Z"></path></g></svg>
            </div>
            <div className="stepinfo">
              <h3>Refine</h3>
              <p>Iterating based on feedback, polishing details, and ensuring perfection.</p>
            </div>
          </div>

          <div class="step reveal slide-up delay-5">
            <div class="stepicon deliver">
              <svg fill="#ffffff" width="34px" height="34px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <style>  </style> </defs> <path id="checkmark" class="cls-1" d="M1224,312a12,12,0,1,1,3.32-23.526l-1.08,1.788A10,10,0,1,0,1234,300a9.818,9.818,0,0,0-.59-3.353l1.27-2.108A11.992,11.992,0,0,1,1224,312Zm0.92-8.631a0.925,0.925,0,0,1-.22.355,0.889,0.889,0,0,1-.72.259,0.913,0.913,0,0,1-.94-0.655l-3.82-3.818a0.9,0.9,0,0,1,1.27-1.271l3.25,3.251,7.39-10.974a1,1,0,0,1,1.38-.385,1.051,1.051,0,0,1,.36,1.417Z" transform="translate(-1212 -288)"></path> </g></svg>
            </div>
            <div className="stepinfo">
              <h3>Deliver</h3>
              <p>Final delivery with documentation, support, and ensuring your complete satisfaction.</p>
            </div>
          </div>

        </div>
      </div>

      <div className="brands reveal fade-in">
        <p className=""> Trusted by leading brands</p>

        <div className="brandslist">
          <div className="brandsicon reveal zoom-in delay-1">
            <img src="https://res.cloudinary.com/dkvxns0mb/image/upload/q_auto/f_auto/v1777004942/test2_qhpd4r.png" alt="morden club" />
          </div>
          <div className="brandsicon reveal zoom-in delay-2">
            <p>IB</p>
          </div>
          <div className="brandsicon reveal zoom-in delay-3">
            <img src="https://res.cloudinary.com/dkvxns0mb/image/upload/q_auto/f_auto/v1777005295/Screenshot_2026-04-24_053358_nclhih.png" />
          </div>
          <div className="brandsicon reveal zoom-in delay-4">
            <p>GL</p>
          </div>
          <div className="brandsicon reveal zoom-in delay-5">
            <p>GF</p>
          </div>
        </div>
      </div>

      <div className="contact reveal slide-up" id='contact'>
        <h2 className="titleee">Let's Create Something <br /> <span>Amazing Together</span> </h2>

        <p className="subtitle">
Have a project in mind? Let's discuss how I can bring your vision to life</p>

        <div className="contactlist">
          <div className="contactoption reveal slide-left delay-1">
            <h3 className="git">Get In Touch</h3>

            <div className="contacts">

              <div className="contacticon">
                <svg width="24px" height="24px" viewBox="0 -4 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>mail</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-412.000000, -259.000000)" fill="#ffffff"> <path d="M442,279 C442,279.203 441.961,279.395 441.905,279.578 L433,270 L442,263 L442,279 L442,279 Z M415.556,280.946 L424.58,271.33 L428,273.915 L431.272,271.314 L440.444,280.946 C440.301,280.979 415.699,280.979 415.556,280.946 L415.556,280.946 Z M414,279 L414,263 L423,270 L414.095,279.578 C414.039,279.395 414,279.203 414,279 L414,279 Z M441,261 L428,271 L415,261 L441,261 L441,261 Z M440,259 L416,259 C413.791,259 412,260.791 412,263 L412,279 C412,281.209 413.791,283 416,283 L440,283 C442.209,283 444,281.209 444,279 L444,263 C444,260.791 442.209,259 440,259 L440,259 Z" id="mail" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
              </div>
              
              <div className="con">
                <p className="mode">
                  Email
                </p>

                <p className="cn">
                  jeremiahadebanjo00@gmail.com
                </p>
              </div>

            </div>
            <div className="contacts">
              
              <div className="contacticon">
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.1007 13.359L15.5719 12.8272H15.5719L16.1007 13.359ZM16.5562 12.9062L17.085 13.438H17.085L16.5562 12.9062ZM18.9728 12.5894L18.6146 13.2483L18.9728 12.5894ZM20.8833 13.628L20.5251 14.2869L20.8833 13.628ZM21.4217 16.883L21.9505 17.4148L21.4217 16.883ZM20.0011 18.2954L19.4723 17.7636L20.0011 18.2954ZM18.6763 18.9651L18.7459 19.7119H18.7459L18.6763 18.9651ZM8.81536 14.7266L9.34418 14.1947L8.81536 14.7266ZM4.00289 5.74561L3.2541 5.78816L3.2541 5.78816L4.00289 5.74561ZM10.4775 7.19738L11.0063 7.72922H11.0063L10.4775 7.19738ZM10.6342 4.54348L11.2346 4.09401L10.6342 4.54348ZM9.37326 2.85908L8.77286 3.30855V3.30855L9.37326 2.85908ZM6.26145 2.57483L6.79027 3.10667H6.79027L6.26145 2.57483ZM4.69185 4.13552L4.16303 3.60368H4.16303L4.69185 4.13552ZM12.0631 11.4972L12.5919 10.9654L12.0631 11.4972ZM16.6295 13.8909L17.085 13.438L16.0273 12.3743L15.5719 12.8272L16.6295 13.8909ZM18.6146 13.2483L20.5251 14.2869L21.2415 12.9691L19.331 11.9305L18.6146 13.2483ZM20.8929 16.3511L19.4723 17.7636L20.5299 18.8273L21.9505 17.4148L20.8929 16.3511ZM18.6067 18.2184C17.1568 18.3535 13.4056 18.2331 9.34418 14.1947L8.28654 15.2584C12.7186 19.6653 16.9369 19.8805 18.7459 19.7119L18.6067 18.2184ZM9.34418 14.1947C5.4728 10.3453 4.83151 7.10765 4.75168 5.70305L3.2541 5.78816C3.35456 7.55599 4.14863 11.144 8.28654 15.2584L9.34418 14.1947ZM10.7195 8.01441L11.0063 7.72922L9.9487 6.66555L9.66189 6.95073L10.7195 8.01441ZM11.2346 4.09401L9.97365 2.40961L8.77286 3.30855L10.0338 4.99296L11.2346 4.09401ZM5.73263 2.04299L4.16303 3.60368L5.22067 4.66736L6.79027 3.10667L5.73263 2.04299ZM10.1907 7.48257C9.66189 6.95073 9.66117 6.95144 9.66045 6.95216C9.66021 6.9524 9.65949 6.95313 9.659 6.95362C9.65802 6.95461 9.65702 6.95561 9.65601 6.95664C9.65398 6.95871 9.65188 6.96086 9.64972 6.9631C9.64539 6.96759 9.64081 6.97245 9.63599 6.97769C9.62634 6.98816 9.61575 7.00014 9.60441 7.01367C9.58174 7.04072 9.55605 7.07403 9.52905 7.11388C9.47492 7.19377 9.41594 7.2994 9.36589 7.43224C9.26376 7.70329 9.20901 8.0606 9.27765 8.50305C9.41189 9.36833 10.0078 10.5113 11.5343 12.0291L12.5919 10.9654C11.1634 9.54499 10.8231 8.68059 10.7599 8.27309C10.7298 8.07916 10.761 7.98371 10.7696 7.96111C10.7748 7.94713 10.7773 7.9457 10.7709 7.95525C10.7677 7.95992 10.7624 7.96723 10.7541 7.97708C10.75 7.98201 10.7451 7.98759 10.7394 7.99381C10.7365 7.99692 10.7335 8.00019 10.7301 8.00362C10.7285 8.00534 10.7268 8.00709 10.725 8.00889C10.7241 8.00979 10.7232 8.0107 10.7223 8.01162C10.7219 8.01208 10.7212 8.01278 10.7209 8.01301C10.7202 8.01371 10.7195 8.01441 10.1907 7.48257ZM11.5343 12.0291C13.0613 13.5474 14.2096 14.1383 15.0763 14.2713C15.5192 14.3392 15.8763 14.285 16.1472 14.1841C16.28 14.1346 16.3858 14.0763 16.4658 14.0227C16.5058 13.9959 16.5392 13.9704 16.5663 13.9479C16.5799 13.9367 16.5919 13.9262 16.6024 13.9166C16.6077 13.9118 16.6126 13.9073 16.6171 13.903C16.6194 13.9008 16.6215 13.8987 16.6236 13.8967C16.6246 13.8957 16.6256 13.8947 16.6266 13.8937C16.6271 13.8932 16.6279 13.8925 16.6281 13.8923C16.6288 13.8916 16.6295 13.8909 16.1007 13.359C15.5719 12.8272 15.5726 12.8265 15.5733 12.8258C15.5735 12.8256 15.5742 12.8249 15.5747 12.8244C15.5756 12.8235 15.5765 12.8226 15.5774 12.8217C15.5793 12.82 15.581 12.8183 15.5827 12.8166C15.5862 12.8133 15.5895 12.8103 15.5926 12.8074C15.5988 12.8018 15.6044 12.7969 15.6094 12.7929C15.6192 12.7847 15.6265 12.7795 15.631 12.7764C15.6403 12.7702 15.6384 12.773 15.6236 12.7785C15.5991 12.7876 15.501 12.8189 15.3038 12.7886C14.8905 12.7253 14.02 12.3853 12.5919 10.9654L11.5343 12.0291ZM9.97365 2.40961C8.95434 1.04802 6.94996 0.83257 5.73263 2.04299L6.79027 3.10667C7.32195 2.578 8.26623 2.63181 8.77286 3.30855L9.97365 2.40961ZM4.75168 5.70305C4.73201 5.35694 4.89075 4.9954 5.22067 4.66736L4.16303 3.60368C3.62571 4.13795 3.20329 4.89425 3.2541 5.78816L4.75168 5.70305ZM19.4723 17.7636C19.1975 18.0369 18.9029 18.1908 18.6067 18.2184L18.7459 19.7119C19.4805 19.6434 20.0824 19.2723 20.5299 18.8273L19.4723 17.7636ZM11.0063 7.72922C11.9908 6.7503 12.064 5.2019 11.2346 4.09401L10.0338 4.99295C10.4373 5.53193 10.3773 6.23938 9.9487 6.66555L11.0063 7.72922ZM20.5251 14.2869C21.3429 14.7315 21.4703 15.7769 20.8929 16.3511L21.9505 17.4148C23.2908 16.0821 22.8775 13.8584 21.2415 12.9691L20.5251 14.2869ZM17.085 13.438C17.469 13.0562 18.0871 12.9616 18.6146 13.2483L19.331 11.9305C18.2474 11.3414 16.9026 11.5041 16.0273 12.3743L17.085 13.438Z" fill="#ffffff"></path> </g></svg>
              </div>

              <div className="con">
                <p className="mode">
                  Phone
                </p>

                <p className="cn">
                  09031144875
                </p>
              </div>

            </div>
            {/* <div className="contacts">
              
              <div className="contacticon">
                <svg width="24px" height="24px" viewBox="-4 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>location</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-104.000000, -411.000000)" fill="#ffffff"> <path d="M116,426 C114.343,426 113,424.657 113,423 C113,421.343 114.343,420 116,420 C117.657,420 119,421.343 119,423 C119,424.657 117.657,426 116,426 L116,426 Z M116,418 C113.239,418 111,420.238 111,423 C111,425.762 113.239,428 116,428 C118.761,428 121,425.762 121,423 C121,420.238 118.761,418 116,418 L116,418 Z M116,440 C114.337,440.009 106,427.181 106,423 C106,417.478 110.477,413 116,413 C121.523,413 126,417.478 126,423 C126,427.125 117.637,440.009 116,440 L116,440 Z M116,411 C109.373,411 104,416.373 104,423 C104,428.018 114.005,443.011 116,443 C117.964,443.011 128,427.95 128,423 C128,416.373 122.627,411 116,411 L116,411 Z" id="location" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
              </div>

              <div className="con">
                <p className="mode">
                  Location
                </p>

                <p className="cn">
                  Lagos State, NIGERIA
                </p>
              </div>

            </div> */}
          </div>
          <div className="contactoption reveal slide-up delay-2">
            <div className="contacts">
              <div className="whatsappicon">
                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z" stroke="#ffffff" stroke-width="1.5"></path> </g></svg>
              </div>

              <div className="con">
                <h4>Quick Whatsapp Chat</h4>

                <p>Get instant response on whatsapp</p>
              </div>

            </div>
            
          </div>
          <div className="contactoption reveal slide-right delay-3">
            <h4>Follow Me</h4>

            <div className="socialslinks">
              <div className="socialsicon">
                <a href="">
                  <svg width="34px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fd35e2"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#fd35e2"></path> <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#fd35e2"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#fd35e2"></path> </g></svg>
                </a>
              </div>
              <div className="socialsicon">
                <a href=""></a>
              </div>
              <div className="socialsicon">
                <a href=""></a>
              </div>
              <div className="socialsicon">
                <a href=""></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
