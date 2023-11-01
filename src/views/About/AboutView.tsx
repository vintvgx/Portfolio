import React from "react";
import "./AboutView.css";

const AboutView: React.FC = () => {
  return (
    <div className="about-view">
      <div className="about-content-section">
        <div className="left-column">
          <img src={"/About.png"} alt="About" />
        </div>
        <div className="right-column">
          <div className="about-content">
            <p>
              My name is Kareem Saygbe, a Junior Full Stack Engineer with a
              passion for technology and art. I started my professional journey
              at DEKA Research & Development, an organization dedicated to
              innovating health devices. My work at DEKA involved developing
              GUIs in Python, primarily focusing on testing the functionality of
              FDA-approved medical devices. Specifically, I was responsible for
              ensuring the performance and reliability of the battery component
              of a QNX embedded system. Additionally, I played a key role in
              providing unit and automation testing for a Kotlin Android
              application designed for a Remodulin medical device. This
              experience laid a strong foundation for my career in full-stack
              engineering.
            </p>
            <p>
              In my pursuit of becoming an experienced full-stack engineer, I've
              worked on personal projects that reflect my commitment to creating
              software that connects people and emphasizes their stories over
              commercialization. Among my projects is a MERN stack chatbot React
              app designed to respond to users in authentic urban rhetoric. I've
              also crafted a React Native media-sharing social network
              application from the ground up. I've worked on these projects
              solely, and they represent my dedication to technology with a
              human touch.
            </p>
            <p>
              Beyond my technical interests, I am deeply passionate about art
              and photography. I find inspiration in my surroundings, often
              traveling within my community to capture its essence. My lens is
              not just focused on the visual, but on the stories and cultures I
              encounter along the way. This love for art and storytelling blends
              with my goals as a software engineer by keeping the focus on the
              art and narratives that make us human.
            </p>
            {/* <p>
              My ultimate aspiration is to establish a company dedicated to
              crafting applications that revolve around art and communication
              while championing marginalized communities. In a world where
              technology and data often get oversaturated in monetization and
              ads, my mission is to shift the focus back to the art and
              narratives that make us human.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutView;
