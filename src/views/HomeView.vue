<script>
import 'boxicons/css/boxicons.min.css';
import emailjs from '@emailjs/browser';
import {getFirestore, collection, addDoc} from "firebase/firestore"
export default {
  data() {
    return {
      images: [
        'https://cdn-icons-png.flaticon.com/512/1216/1216733.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/240px-CSS3_logo.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png',
        'https://cdn.discordapp.com/attachments/703285604166926396/1114714735317897287/Untitled_drawing_2.png',
        'https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-png-transparent.png'
      ],
      currentImageIndex: 0,
      name: '',
      email: '',
      message: '',
      sent: false,
      error: false,
    };
  },
  methods: {
    async sendMessage() {
      if (this.name === '' || this.email === '' || this.message === '') {
  this.error = true;
  return;
}
      try {
      this.sent = false
      const db = getFirestore()
      const colRef = collection(db, "messages")
      const docRef = await addDoc(colRef, {
        name: this.name,
        email: this.email,
        message: this.message
      })
let params = {
name: this.name,
email: this.email,
message: this.message
}
  const serviceId = "service_o3eyqq5"
  const templateId = "template_h1bnnb4"
   
await emailjs.send(serviceId, templateId, params, 'ed30-R7z7_EH-yu97')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });

    await fetch(
  'https://discord.com/api/webhooks/1074815213808914503/-4vflh54xp7Ndzm7KMft6BBuzMr7-Ga95zykR4uNZQvMRhY0fxzFG6IPckM_AC7F6Uad',
  {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
            content: "@everyone",
            // embeds to be sent
            embeds: [
              {
                description: `${this.message}`,
            author: {
              name: this.name,
          },
          title: this.email,
              }
            ]
          })
  }
);

      this.sent = true
      this.error = false
      this.email = ''
      this.name = ''
      this.message = ''
    }
    catch(error) {
      console.log(error)
      this.sent = false
    }
    }
  },
  computed: {
    currentImage() {
      return this.images[this.currentImageIndex];
    }
  },
  mounted() {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, 3000); // Change image every 3 seconds
  }
};
</script>
<template>
  <div class="wrapper">
  <div class="main" v-motion-fade>
    <header class="navbar">
      <div class="logo">
        <h4>Connor.</h4>
      </div>
      <nav class="navbar-body">
        <div class="navbar-links">
          <a class="link" href="#about">About</a>
          <a class="link" href="#contact">Contact</a>
          <a class="link" href="#projects">Projects</a>
        </div>
      </nav>
    </header>
    <section class="hero">
      <div class="hero-content">
        <sub class="sub">Hello! My Name is</sub>
        <h1 class="color" v-motion-pop>Connor Le.</h1>
        <p class="info" v-motion-slide-left>I'm a Frontend Web Developer from Orange County passionate about helping businesses thrive online.</p>
        <div class="arrow">
          <img src="https://www.freeiconspng.com/thumbs/white-arrow-png/white-down-arrow-png-2.png">
        </div>
        <a href="#about" class="btn">Learn More</a>
      </div>
    </section>
  </div>
  <div class="marquee">

    <div class="html">
      <i class='bx bxl-html5'></i>
    </div>

    <div class="css">
      <i class='bx bxl-css3' ></i>
    </div>

    <div class="js">
      <i class='bx bxl-javascript' ></i>
    </div>

    <div class="vue">
      <i class='bx bxl-vuejs' ></i>
    </div>

    <div class="firebase">
      <i class='bx bxl-firebase'></i>
    </div>
    
    <div class="node">
      <i class='bx bxl-nodejs' ></i>
    </div>
    
  </div>
  <section class="about" id="about">
    <div class="about-content">
      <h3>ABOUT ME</h3>
      <h2>Passionate and Dedicated Front End Developer</h2>
      <p v-motion-fade-visible>Through the past few months, I've discovered a true passion for web development. I've taken my skills to the online freelance market, where I offer my expertise to businesses. My go-to tech stack includes Vue.js and Firebase, but I'm always open to learning new technologies. As a newer developer, I take pride in creating beautiful and interactive websites at an affordable price. If you're interested in working together, don't hesitate to reach out. Let's collaborate and bring your vision to life.</p>
    </div>
    <div class="about-image">
      <div>
        <img v-motion-slide-bottom :key="currentImage" :src="currentImage" alt="">
      </div>
    </div>
  </section>
  <h3 class="gradient" style="text-align: center; padding-top: 5rem;" id="projects">PORTFOLIO</h3>
    <h2 class="projecth1" v-motion-fade-visible style=" padding-bottom: 4rem;">Some of my Projects</h2>
  <section  v-motion-fade-visible :delay="150"  class="projects">
    <div class="project" v-motion-fade-visible>
      <div class="project-content">
     <h3>Nore Media</h3>
     <h4>Frontend Web Development</h4>
      <p>A Dynamic Website for Nore Media, a leading digital and social marketing agency dedicated to helping businesses thrive in the digital landscape.</p>
      <div class="tags">
        <div class="tag">
          #html
        </div>
        <div class="tag">
           #css
        </div>
        <div class="tag">
           #js
        </div>
        <div class="tag">
           #bootstrap
        </div>
      </div>
    </div>
     <div class="project-image">
      <img src="https://cdn.discordapp.com/attachments/1041122682982371439/1117124364106727476/ezgif-1-58964e489f.gif" alt="">
    </div>
    </div>

    <div class="project reverse" v-motion-fade-visible>
    <div class="project-content">
     <h3>Bruhware</h3>
     <h4>Frontend Web Development</h4>
      <p>Website for a Universal Roblox Multitool Service written in pure Lua that enhances their gaming experience and expands their creative possibilities within the Roblox platform.</p>
      <div class="tags">
        <div class="tag">
          #html
        </div>
        <div class="tag">
           #css
        </div>
        <div class="tag">
           #js
        </div>
      </div>
    </div>
    <div class="project-image">
      <img src="https://cdn.discordapp.com/attachments/1041122682982371439/1117133586739499098/ezgif-1-e2184cce11.gif" alt="">
    </div>
    </div>


    <div class="project" v-motion-fade-visible>
      <div class="project-content">
     <h3>Firebase Paste Site</h3>
        <h4>Frontend Web Development with BaaS</h4>
      <p>A Pastebin site created using Firebase and the Vue router that offering users a reliable and efficient platform for storing and sharing text-based information. This site provides a user-friendly interface where individuals can conveniently store snippets of code, text, or any other type of information they want to save or share.</p>
      <div class="tags">
        <div class="tag">
          #vuejs
        </div>
        <div class="tag">
           #css
        </div>
        <div class="tag">
           #firebase
        </div>
      </div>
    </div>
     <div class="project-image">
      <img src="https://cdn.discordapp.com/attachments/1041122682982371439/1117135453557112943/ezgif-1-75d8179f6b.gif" alt="">
    </div>
    </div>


    <div class="project reverse" v-motion-fade-visible>
    <div class="project-content">
      <h3>iCreate Pro</h3>
     <h4>Frontend Web Development</h4>
      <p>An unreleased website for the Geometry Dash modding service, iCreate Pro, that allows users to expand the customizations that the game has to offer.</p>
      <div class="tags">
        <div class="tag">
          #html
        </div>
        <div class="tag">
           #css
        </div>
        <div class="tag">
           #js
        </div>
        <div class="tag">
           #bootstrap
        </div>
      </div>
    </div>
    <div class="project-image">
      <img src="https://cdn.discordapp.com/attachments/1041122682982371439/1117136041896317018/ezgif-1-5e39cac6b3.gif" alt="">
    </div>
    </div>

  </section>



  <section class="contact" id="contact">
    <h3 class="gradient" style="text-align: center; padding-top: 5rem;">CONTACT</h3>
  <h1 class="contact-title">Get in Touch</h1>
  <h2 class="contact-subtitle">Have a question or an idea? We'd love to hear from you</h2>
  <form class="contact-form">
    <div v-if="sent" style="color: green;  font-size: 1.4rem; font-weight: bold; padding-bottom: 10px;">Success! I recieved your message and I will get back to you shortly.</div>
    <div v-if="error" style="color: red;  font-size: 1.4rem; font-weight: bold; padding-bottom: 10px;">Please fill in all of the boxes!</div>
    <input type="text" v-model="name" required placeholder="Your Name" class="contact-input">
    <input type="email" v-model="email" placeholder="Your Email" class="contact-input">
    <textarea v-model="message" placeholder="Your Message" class="contact-input"></textarea>
    <button type="submit" @click.prevent="sendMessage" class="contact-button">Send Message</button>
  </form>
</section>

</div>


</template>

<style>
.wrapper {
  position: relative;
  overflow-x: hidden;
}
html, body {
  scroll-behavior: smooth;
  overflow-x: hidden;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  color: white;
}
.btn {
  padding: 1rem;
  background-color: rgb(5, 5, 121);
  border-radius: 5px;
}
.logo h4 {
  padding: 1.5rem;
  font-size: 2rem;
  background: -webkit-linear-gradient(#339adf, #975ae7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.navbar-body {
  display: flex;
  align-items: center;
  justify-content: center;
}
.link {
  margin-left: 5rem;
  margin-right: 3rem;
  font-size: 1.5rem;
}
body {
  background: #0f172a;
  font-family: 'Poppins', sans-serif;
  color: white;
  overflow-x: hidden;
}
a {
  text-decoration: none;
  color: white;
}
.sub {
  color: #bdc8d3;
  font-size: 2.5rem;
  font-weight: 800;
}

.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: white;
  height: 90vh;
}

.hero-content {
  max-width: 800px;
  text-align: center;
  z-index: 1;
  margin-left: 1rem;
  margin-right: 1rem;
}
.main {
  margin-bottom: 4rem;
}

.main::after {
  content: "";
  background-image: url("https://cdn.discordapp.com/attachments/703285604166926396/1114650624504635415/tech_stack.png");
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.022;
  z-index: -1;
  animation: scroll 2200s infinite linear;
}


@keyframes scroll {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 0 5000rem;
  }
}

.color {
  font-size: 4.5rem;
  background: -webkit-linear-gradient(#1a5f8d, #6738a5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.info {
  font-size: 1.8rem;
  line-height: 2.5rem;
  color: #d3d3d3;
}
.arrow img {
  width: 40px;
  animation: up-down .6s ease-in-out infinite alternate-reverse both;
  margin-top: 20%;
  margin-bottom: 2rem;
}

@-webkit-keyframes up-down {
  0% {
    transform: translateY(5px);
  }

  100% {
    transform: translateY(-5px);
  }
}

@keyframes up-down {
  0% {
    transform: translateY(5px);
  }

  100% {
    transform: translateY(-5px);
  }
}

.about {
padding: 2rem;
padding-top: 5rem;
display: grid;
grid-template-columns: 1.4fr 1fr;
place-items: center;
margin-top: 10vh;
margin-bottom: 20vh;
}
.about h3, .gradient{
  font-size: 1.5rem;
  background: -webkit-linear-gradient(#339adf, #975ae7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-bottom: 10px;
}

.about h2 {
  font-size: 2.1rem;
  padding-bottom: 10px;
  padding-right: 5px;
}
.about p {
  font-size: 1.5rem;
}
.about-content {
  margin: 3rem;
}
.about-image {
  margin: 3rem;
}
.about img {
  width: 250px;
  padding: 2rem;
}

.about-content {
  margin-left: 10vh;
}
.about-image {
  border-radius: 20px;
  background-color: rgb(13, 13, 41);
}

.about p {
  font-size: 1.8rem;
  line-height: 2.5rem;
  color: #d3d3d3;
  margin-bottom: 2rem; /* Add spacing at the bottom */
}

.about-content {
  margin: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.marquee {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  justify-content: center;
    overflow: hidden;
  gap: 40px;
}
.marquee div:hover {
  animation-play-state: paused;
}
.marquee div:hover i {
  font-size: 60px;
}

@keyframes m-anim {
  0% {
    transform: translate(calc(100vh + 100px));
  }
  100% {
    transform: translateX(-200vh);
  }
}

.marquee i {
 font-size: 50px;
 color: rgb(255, 255, 255);
 opacity: 0.25;
 transition: font-size 0.2s;
 background-color: rgb(40, 40, 68);
  border-radius: 5px;
  padding: 4px;
  box-shadow: 0 2px 4px rgba(36, 35, 35, 0.3); /* Add box shadow */
}
.marquee div {
  height: 70px;
  width: 50px;
  animation: m-anim 11s ease-in infinite;
}

.contact {
  padding: 4rem;
  text-align: center;
}

.contact-title {
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  color: #ffffff;
}

.contact-subtitle {
  font-size: 1.5rem;
  margin-bottom: 3rem;
  color: #b4b1b1;
}

.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
textarea {
  height: 15rem;
}
.contact-input{
  padding: 0.8rem;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 1200px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background:transparent;
  font-size: 1rem;
  transition: border-color 0.15s;
}

.contact-input:focus {
  outline: none;
 border-color: rgb(27, 42, 177);
}

.contact-button {
  padding: 0.8rem 2rem;
  background-color: #2d1d69;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.contact-button:hover {
  background-color: #131353;
}

.projecth1 {
  text-align: center;
  font-size: 2rem;
  padding-bottom: 3rem;
}
.project h3, p, h4 {
  padding-bottom: 20px;
}
.project h3 {
  color: #c7d3df;
}
.projects {
  display: flex;
 flex-direction: column;
  gap: 20px;
  margin-bottom: 10vh;
}
.project-content {
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  flex-direction: column;
}

.project-content p {
  width: 500px;
  color: #f7f0f0;
}
.project h3 {
  font-size: 2.5rem;
  font-weight: 600;
}
.project h4 {
  font-size: 1.6rem;
  color: #d3d3d3;
}

.project {
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: row;
 gap: 6rem;
  margin-bottom: 20vh;
}

.project p {
  font-size: 1.1rem;
  line-height: 2rem;
}
.reverse {
  flex-direction: row-reverse;
}

.project img {
  border-radius: 20px;
  width: 580px;
}

.tags {
  display: flex;
  flex-direction: row;
  gap: 3px;
  justify-content: center;
}
.tag {
  background-color: rgb(35, 35, 78);
  border-radius: 5px;
  padding: 4px;
  box-shadow: 0 2px 4px rgba(36, 35, 35, 0.3); /* Add box shadow */
}
.tag:hover {
  cursor: pointer;
}

/* Media queries for smaller devices */

@media only screen and (max-width: 600px) {
  .navbar-body a {
  font-size: 1.2rem;
}
  .navbar {
    justify-content: center;
    padding-right: 1.6rem;
    padding-top: 1rem
  }
  .navbar-body {
    justify-content: center;
  }
  .link {
    margin-left: 2rem;
    margin-right: 1.5rem;
  }
  .logo {
   display: none;
  }
  .hero sub {
    font-size: 1.5rem;
  }
.hero h1 {
  font-size: 3rem;
}
.hero p {
  font-size: 1rem;
}
  .about {
    grid-template-columns: 1fr;
    margin-top: 5vh;
    margin-bottom: 5vh;
  }

  .about-content {
    margin-left: 0;
    margin-right: 0;
  }
  .about p {
    font-size: 1rem;
  }
  
  .project {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #11192e;
  box-shadow: 0 2px 4px rgba(7, 7, 7, 0.3); /* Add box shadow */
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 10px;
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.project p {
  width:auto;
}
.project img {
  width: 360px;
}

.about-image {
  display: none;
}
}

@media only screen and (max-width: 1180px) and (min-width: 600px) {
  .logo {
   display: none;
  }
  .navbar {
    padding-top: 1rem;
  }
.project {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #11192e;
  box-shadow: 0 2px 4px rgba(7, 7, 7, 0.3); /* Add box shadow */
  margin-left: 40px;
  margin-right: 40px;
  border-radius: 10px;
  padding-top: 2rem;
  padding-bottom: 2rem;
}


.project p {
  margin-left: 2rem;
  margin-right: 2rem;
}
.project img {
  width: 580px;
}
.project-image {
  padding-left: 0;
  padding-top: 10px;
}

.navbar-body a {
  font-size: 1.2rem;
}
  .about {
    grid-template-columns: 1fr;
    margin-top: 5vh;
    margin-bottom: 5vh;
  }

  .about p {
    font-size: 1.5rem;
  }

.about-image {
  display: none;
}

}

</style>
