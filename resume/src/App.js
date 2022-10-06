import profilepic from './image/Ami.jpg';
import './App.css';

function App() {
  return (
    <div className="App">

      <div class="resume-main">
        <div class="left-box">
          <br /><br />
          <div class="profile">
            <img alt="profile" src={profilepic} />
          </div>
          <div class="content-box">
            <h2>Summary</h2>
            <hr class="hr1" />
            <p class="p1">
              <ul>
                <li>Experienced Java Developer buildingcustomised web application for somegreat clients across various businesssectors.</li>
                <li>Proven ability to estimate, develop,document and deliver highlycustomised solutions.</li>
                <li>The expertise to develop carefullythought through solutions using well-known design patterns to produceclean, functional code.</li>
                <li>Experience with variousmethodologies. Including Agileiterations, processes anddocumentation.</li>
                <li>Specialities: Java, Docker, MySQL,React Js, CSS, Selenium</li>
              </ul>
            </p>
          </div>
          <div class="content-box">
            <h3>Languages</h3>
            <hr class="hr1" />
            <br />
            <div class="col-div-6"><p class="p2">English</p></div>

            <br /><br />
            <h2>Skills</h2>
            <hr class="hr1" />
            <br />
            <div class="col-div-6"><p class="p2">HTML</p></div>
            <div class="col-div-6">
              <i class="fa fa-circle circle"></i>
              <i class="fa fa-circle circle"></i>
              <i class="fa fa-circle circle"></i>
              <i class="fa fa-circle circle1"></i>
              <i class="fa fa-circle circle1"></i>
            </div>
            <div class="clearfix"></div>
            <div class="col-div-6"><p class="p2">CSS</p></div>
            <div class="col-div-6">
              <i class="fa fa-circle circle"></i>
              <i class="fa fa-circle circle"></i>
              <i class="fa fa-circle circle"></i>
              <i class="fa fa-circle circle"></i>
              <i class="fa fa-circle circle1"></i>
            </div>
            <div class="clearfix"></div>
            <div class="col-div-6"><p class="p2">JQUERY</p></div>
            <div class="col-div-6">
              <i class="fa fa-circle circle"></i>
              <i class="fa fa-circle circle"></i>
              <i class="fa fa-circle circle"></i>
              <i class="fa fa-circle circle1"></i>
              <i class="fa fa-circle circle1"></i>
            </div>
            <div class="clearfix"></div>
            <div class="col-div-6"><p class="p2">JAVASCRIPT</p></div>
            <div class="col-div-6">
              <i class="fa fa-circle circle"></i>
              <i class="fa fa-circle circle"></i>
              <i class="fa fa-circle circle1"></i>
              <i class="fa fa-circle circle1"></i>
              <i class="fa fa-circle circle1"></i>
            </div>

          </div>
        </div>

        <div class="right-box">
          <h1>
            Ami<br />
            <span>Parekh</span>
          </h1>
          <p class="p3">Software Developer</p>

          <br />
          <h2 class="heading">Work Experience</h2>
          <hr class="hr2" />
          <br />
          <div class="col-div-4">
            <p class="p5">2021-2022</p>
            <span class="span1">GBL.io (Green Brick Labs)</span>
          </div>
          <div class="col-div-8">
            <p class="p5">Frontend Developer(Intern)</p>
            <span class="span1">
              <p>Maintaining and developing new features of a popular gambling web application atGBL. Primary features of the app were sports batting, online casino gaming and newuser sign up.</p>
              <ul>
                <li>Worked on multiple components such as Homepage, Registration, Login</li>
                <li>Learned basic concepts of blockchain technology during my experience at GBL</li>
                <li>Worked with Docker, Kibana, GIT, Jira</li>
                <li>CI/CD pipeline to automate software delivery process</li>
              </ul>
            </span>
          </div>
          <div class="clearfix"></div>
          <br />
          <div class="col-div-4">
            <p class="p5">2016-2018</p>
            <span class="span1">Expia Private Limited</span>
          </div>
          <div class="col-div-8">
            <p class="p5">Software Developer</p>
            <span class="span1">
              <ul>
                <li>Creating REST endpoints</li>
                <li>Securing endpoints with Authentication and Authorization</li>
                <li>Data modelling</li>
                <li>Communication with MySQL database through JPA</li>
                <li>Requirement Analysis and work estimation</li>
                <li>Attending daily standups to communicate requirements, task updates andblockers</li>
                <li>Documenting analysis in confluence</li>
                <li>Peer code review</li>
                <li>Code versioning in GIT</li>
                <li>Performed unit testing and integration testing.</li>
                <li>Set up scripts, test cases and automation protocols.</li>
              </ul>
            </span>
          </div>

          <div class="clearfix"></div>

          <br />
          <h2 class="heading">Education</h2>
          <hr class="hr2" />
          <br />
          <div class="col-div-4">
            <p class="p5">2018-2020</p>
            <span class="span1">Cégep de la Gaspésie et des Îles, Montreal,Quebec, Canada</span>
          </div>
          <div class="col-div-8">
            <p class="p5">Post Graduate Diploma in MobileApplication Development</p>
          </div>
          <div class="clearfix"></div>
          <br />
          <div class="col-div-4">
            <p class="p5">2011-2015</p>
            <span class="span1">Gujarat Technological University, Gujarat,India</span>
          </div>
          <div class="col-div-8">
            <p class="p5">Bachelors of Computer Engineering</p>
          </div>
          <div class="clearfix"></div>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
  );
}

export default App;
