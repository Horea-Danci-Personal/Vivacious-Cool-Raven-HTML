import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div id="HomePage" className="home-container">
      <Helmet>
        <title>Vivacious Cool Raven</title>
        <meta property="og:title" content="Vivacious Cool Raven" />
      </Helmet>
      <h1 className="home-text">Danci Horea</h1>
      <span className="home-text01">ENGINEER</span>
      <span className="home-text02">
        <span>
          Engineering graduate with
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span>
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span>
          experience in
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br></br>
        <span>
          Automotive Testing,
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span>
          Web
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span>Development,</span>
        <br></br>
        <span> Industrial Engineering and much more.</span>
      </span>
      <h1 id="About_Section" className="home-text12">
        About me
      </h1>
      <header data-thq="thq-navbar" className="home-navbar-interactive">
        <div data-thq="thq-navbar-nav" className="home-desktop-menu">
          <nav className="home-links">
            <a href="#About_Section" className="home-link">
              About Me
            </a>
            <a href="#Experience" id="TopPage" className="home-link1">
              Experience
            </a>
            <a href="#Education" className="home-link2">
              Education
            </a>
            <a href="#Projects" className="home-link3">
              Projects
            </a>
            <a href="#Contact" className="home-link4">
              Contact
            </a>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="home-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="home-mobile-menu">
          <div className="home-nav">
            <div className="home-top">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="home-logo"
              />
              <div data-thq="thq-close-menu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="home-links1">
              <span className="home-text13">About</span>
              <span className="home-text14">Features</span>
              <span className="home-text15">Pricing</span>
              <span className="home-text16">Team</span>
              <span className="home-text17">Blog</span>
            </nav>
            <div className="home-buttons">
              <button className="home-login button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <span className="home-text18">
        <span>
          I&apos;m a recent graduate, with a passion for learning and a thirst
          for skill perfection. 
        </span>
        <br></br>
        <span>
          My winding academic journey, punctuated by various jobs and
          experiences, has
        </span>
        <br></br>
        <span>
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span>
          equipped me with a diverse range of knowledge and skills across
          different fields
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br></br>
        <span>
          and industries. I am eager to apply this multifaceted background,
          adapt to new
        </span>
        <br></br>
        <span>
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span>challenges, and continue growing as a </span>
        <span>professional.</span>
      </span>
      <a href="#HomePage" className="home-link5 button">
        TOP
      </a>
      <h1 id="Experience" className="home-text31">
        Experience
      </h1>
      <h1 id="Education" className="home-text32">
        Education
      </h1>
      <div className="home-container1">
        <div className="home-container2">
          <Script
            html={`<a href="C:\Users\Horea\Desktop" download="CV">
    <button>Download Resume</button>
</a>`}
          ></Script>
        </div>
      </div>
      <div className="home-container3">
        <h1 className="home-text33">Test Engineer</h1>
        <span className="home-text34">
          <span>
            During my internship at Bosch in the Parking Systems department, I
            learned crucial technologies such as CANoe, CANape, Jira, and IBM
            Doors. Additionally, I gained hands-on experience in customer
            projects and developed strong teamwork skills.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
        </span>
      </div>
      <div className="home-container4">
        <h1 className="home-text37">Website Manager</h1>
        <span className="home-text38">
          <span>
            During my tenure as a website manager at Bervas, my responsibilities
            revolved around bringing ideas for enhancing the website&apos;s
            design and functionality. Additionally, I consistently updated the
            website with new product data, ensuring that customers had access to
            the latest offerings.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
        </span>
      </div>
      <div className="home-container5">
        <h1 className="home-text41">Media Specialist</h1>
        <span className="home-text42">
          <span>
            At KingPing Performance Sighetu Marmatiei, my role consisted of
            responsibilities such as content creation, client relations,
            marketing and communication. This was an important learning
            experience, offering practical insights into marketing and enhancing
            my ability to engage with clients while producing captivating visual
            content
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
        </span>
      </div>
      <img
        alt="image"
        src="/external/logo%20utcn-200h.png"
        className="home-image"
      />
      <li className="home-li list-item"></li>
      <span className="home-text45">Technical University of Cluj Napoca</span>
      <span className="home-text46">
        <span>
          Bachelor&apos;s degree in Industrial Engineering and Robotics
        </span>
        <br></br>
        <span>2018 - 2022</span>
        <br></br>
      </span>
      <h1 id="Projects" className="home-text51">
        Projects
      </h1>
      <span className="home-text52">
        <span className="home-text53">
          ∎ Bachelor&apos;s degree: &quot;Demonstrator for domotics&quot;
        </span>
        <br></br>
        <br></br>
        <br></br>
      </span>
      <span className="home-text57">
        This project consisted of a web application used to mimic the remote
        monitoring and controlling of an industrial process. The main
        technologies used were NodeRED, IBM Cloud, TIA. The web application used
        a cloud based instance of NodeRED to send data to a Siemens
        microcontroller, which was wired to different specific hardware bits
        that were used to simulate the industrial process. 
      </span>
      <img
        alt="image"
        src="/external/nodered-200h.png"
        className="home-image1"
      />
      <img
        alt="image"
        src="/external/ibm_cloud_logo-200h.png"
        className="home-image2"
      />
      <img alt="image" src="/external/tia-200h.png" className="home-image3" />
      <span className="home-text58">
        ∎ Presentation website: This website, that you are currently browsing
      </span>
      <span className="home-text59">
        This project was done to give an edge when it comes to applying for a
        possible career opportunity over the conventional resume, and ultimately
        to give a better first impression. This website was created using HTML
        and CSS elements, and hosted with the help of Microsoft Azure services.
      </span>
      <img alt="image" src="/external/azure-200h.png" className="home-image4" />
      <img alt="image" src="/external/css-300h.png" className="home-image5" />
      <img alt="image" src="/external/html-200h.png" className="home-image6" />
      <h1 id="Contact" className="home-text60">
        Contact 
      </h1>
      <img
        alt="image"
        src="/poza%20about%20me-300w.jpeg"
        className="home-image7"
      />
      <li className="home-li1 list-item"></li>
      <span className="home-text61">
        <span>Phone number: +40 754 261 270 </span>
        <br></br>
      </span>
      <li className="home-li2 list-item"></li>
      <span className="home-text64">
        <span>Email: horeadanci@yahoo.com</span>
        <br></br>
      </span>
      <li className="home-li3 list-item"></li>
      <span className="home-text67">
        <span>LinkedIn: https://www.linkedin.com/in/danci-horea-488527239</span>
        <br></br>
      </span>
      <a
        href="https://drive.google.com/uc?export=download&amp;id=1XtgXrvX54KhhOUJ-mSl8NtcFisXZskYV"
        target="_blank"
        rel="noreferrer noopener"
        className="home-link6 button butonCV"
      >
        Download Resume
      </a>
    </div>
  )
}

export default Home
