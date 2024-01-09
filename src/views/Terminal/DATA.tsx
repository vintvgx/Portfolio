export const terminal_data = {
  about: (
    <div style={{ width: "100%" }}>
      HI! I am Kareem Saygbe, a Junior Full Stack Engineer. Sttarted at DEKA
      Research &
      <br />
      Development, developing Python GUIs for medical devices. Passionate about
      <br />
      blending technology and art, he's worked on projects like a MERN stack
      <br />
      chatbot and a React Native social network app, reflecting my dedication
      <br />
      to human-centric technology.
    </div>
  ),
  education: (
    <div>
      Associates, Northern Essex Community College (Jan 2015 — Dec 2018)
      <br />
      Bachelors, University of Massachusetts Lowell (Jan 2019 — Dec 2021)
      <br />
    </div>
  ),
  skills: (
    <div>
      MongoDB
      <br /> Node.js
      <br /> React
      <br /> Git
      <br /> MySQL
      <br /> JavaScript
      <br /> Python
      <br /> Jira
      <br /> AWS
      <br />
      Docker
      <br /> Linux
      <br /> Bash
    </div>
  ),
  projects: (
    <div>
      {/* <h3 style={{ textAlign: "center" }}>PROJECTS</h3> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "10px",
        }}>
        <a
          href="exp://u.expo.dev/update/819b8434-da84-47bb-b173-89145242c409"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "inherit",
            border: "2px solid #454545",
            margin: "5px",
            textAlign: "center",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            width: "100%",
            boxSizing: "border-box",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#333333"; // Darken background on hover
            e.currentTarget.style.color = "#FFFFFF"; // Optional: change text color on hover
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "transparent"; // Revert background color
            e.currentTarget.style.color = "inherit"; // Optional: revert text color
          }}>
          <div
            style={{
              fontWeight: "bold",
              fontSize: "1.2em",
              margin: "10px",
            }}>
            COLLECTIONS
          </div>
          <div style={{ marginBottom: "10px" }}>
            COLLECTIONS is a dynamic React Native application designed for
            sharing media. Users can effortlessly share their cherished images
            and videos, creating a collection of memories. Navigate through a
            curated feed filled with shared moments, with the intuitive
            functionality of Create, Read, Update and Delete. From breathtaking
            adventures to everyday snapshots, Collections is the showcase for
            your stories.
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              justifyContent: "center",
              marginBottom: "10px",
            }}>
            {[
              "React Native",
              "EXPO",
              "NODE JS",
              "Firebase",
              "Typescript",
              "Redux",
            ].map((tech) => (
              <span
                key={tech}
                style={{
                  backgroundColor: "rgba(82, 81, 81, 0.578)",
                  borderRadius: "5px",
                  padding: "5px 10px",
                  color: "white",
                  fontSize: "0.7rem",
                }}>
                {tech}
              </span>
            ))}
          </div>
          <div
            style={{
              marginBottom: "10px",
              fontSize: "0.9em",
              fontStyle: "italic",
              color: "#D5661C",
            }}>
            To view this project, please install the Expo Go app on your mobile
            device.
          </div>
        </a>
        <a
          href="https://urbanai.info"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "inherit",
            border: "2px solid #454545",
            margin: "5px",
            padding: "10px",
            textAlign: "center",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            width: "100%",
            boxSizing: "border-box",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#333333"; // Darken background on hover
            e.currentTarget.style.color = "#FFFFFF"; // Change text color on hover
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "transparent"; // Revert background color
            e.currentTarget.style.color = "inherit"; // Revert text color
          }}>
          <div
            style={{
              fontWeight: "bold",
              fontSize: "1.2em",
              margin: "10px 0",
            }}>
            Urban AI
          </div>
          <div style={{ marginBottom: "10px" }}>
            Urban ai is a fun and interactive chatbot that bridges the gap
            between technology and street culture. Designed to engage users in a
            unique way, it responds to queries and conversations using the
            vibrant and dynamic language of urban slang through chat-gpt-4.
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              justifyContent: "center",
            }}>
            {[
              "React",
              "EXPRESS",
              "MongoDB",
              "Firebase",
              "Docker",
              "Google Cloud Run",
              "Redux",
              "Gpt-4",
            ].map((tech) => (
              <span
                key={tech}
                style={{
                  backgroundColor: "rgba(82, 81, 81, 0.578)",
                  borderRadius: "5px",
                  padding: "5px 10px",
                  color: "white",
                  fontSize: "0.7rem",
                }}>
                {tech}
              </span>
            ))}
          </div>
        </a>
      </div>
    </div>
  ),
  resume: (
    <div>
      <h3>RESUME</h3>
      <p>Link to download resume...</p>
    </div>
  ),
  contact: (
    <div>
      <h3>CONTACT</h3>
      <p>ADDRESS: Boston, MA United States</p>
      <p>PHONE: (978) 305-5958</p>
      <p>EMAIL: Kareems0108@gmail.com</p>
      <p>LINKS: LinkedIn, Github, Portfolio</p>
    </div>
  ),
  profile: (
    <div>
      <h3>PROFILE</h3>
      <p>
        Passionate and driven software engineer with expertise in Python and web
        development...
      </p>
    </div>
  ),
  experience: (
    <div>
      <h3>EMPLOYMENT HISTORY</h3>
      <p>
        Software QA Engineer, DEKA Research & Development, Manchester, NH
        <br />
        Jan 2023 — Present
      </p>
    </div>
  ),
};
