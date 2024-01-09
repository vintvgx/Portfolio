import React, { useEffect, useRef, useState } from "react";
import { terminal_data } from "./DATA";
import "./Terminal.css";
import { useNavigate } from "react-router-dom";
import TerminalSplashScreen from "../../components/TerminalSplashScreen/TerminalSplashScreen";
import ReactConfetti from "react-confetti";

interface HistoryItem {
  command: string;
  output: string | JSX.Element;
}

const Terminal: React.FC = () => {
  const navigate = useNavigate();

  const [showSplash, setShowSplash] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const [fadeOutConfetti, setFadeOutConfetti] = useState(false);

  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: "type help to start",
      output: "",
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timerSplash = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => {
      clearTimeout(timerSplash);
    };
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current?.focus();
    }
  }, []);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    console.log(history);
  }, [history]);

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (showConfetti) {
      // Set a timer to start fading out the confetti 2 seconds before the end
      timer = setTimeout(() => setFadeOutConfetti(true), 8000); // Start fading out after 8 seconds
      // Set another timer to hide the confetti completely after 10 seconds
      const hideTimer = setTimeout(() => setShowConfetti(false), 10000);
      return () => {
        clearTimeout(timer);
        clearTimeout(hideTimer);
        setFadeOutConfetti(false);
      };
    }
  }, [showConfetti]);

  const handleInput = (event: { key: string }) => {
    if (event.key === "Enter") {
      if (input.toLowerCase() === "clear") {
        setHistory([{ command: "type help to start", output: "" }]);
      } else {
        const newHistory = history.concat({
          command: input,
          output: processCommand(input),
        });
        setHistory(newHistory);
      }
      setInput("");
    }
  };

  const processCommand = (command: string) => {
    switch (command.toLowerCase()) {
      case "about":
      case "education":
      case "skills":
      case "projects":
      case "resume":
      case "experience":
      case "contact":
        return terminal_data[command as keyof typeof terminal_data];
      case "help":
        return (
          <div className="help-commands">
            <div>
              <span className="command-name">about</span>{" "}
              <span className="command-desc">About Me</span>
            </div>
            <div>
              <span className="command-name">education</span>{" "}
              <span className="command-desc">My Education</span>
            </div>
            <div>
              <span className="command-name">skills</span>{" "}
              <span className="command-desc">My Tech Skills</span>
            </div>
            <div>
              <span className="command-name">projects</span>{" "}
              <span className="command-desc">My Tech Projects</span>
            </div>
            <div>
              <span className="command-name">resume</span>{" "}
              <span className="command-desc">My Resume</span>
            </div>
            <div>
              <span className="command-name">contact</span>{" "}
              <span className="command-desc">Contact Me</span>
            </div>
            <div>
              <span className="command-name">party</span>
              <span className="command-desc">🎉 Party time! 🎉</span>
            </div>
            <div>
              <span className="command-name">clear</span>
              <span className="command-desc">Clear Terminal</span>
            </div>
          </div>
        );
      case "clear":
        setHistory([
          {
            command: "type help to start",
            output: "",
          },
        ]);
        return "hi"; // Return an empty string as output for the 'clear' command
      case "party":
        setShowConfetti(true);
        return "🎉 Party time! 🎉";
      default:
        return `sh: Unknown command: ${command}\nSee \`help\` for info`;
    }
  };

  return (
    <div
      className="terminal-container"
      onClick={(e) => {
        inputRef.current?.focus();
      }}>
      {showSplash ? (
        <TerminalSplashScreen />
      ) : (
        <>
          {showConfetti && (
            <ReactConfetti
              numberOfPieces={100}
              className={fadeOutConfetti ? "confetti-fade-out" : ""}
            />
          )}{" "}
          <div
            className="switch-view-button"
            onClick={() => {
              navigate("/Home");
            }}>
            <span className="switch-view-button-text">
              Switch to Standard View
            </span>
          </div>
          <div className="terminal">
            <h1 className="terminal-header">Terminal</h1>

            <div className="output" ref={outputRef}>
              {history.map((item, index) => (
                <p key={index}>
                  <span className="command-prompt">
                    <span style={{ color: "#D5661C" }}>λ</span> :: ~ {">>"}{" "}
                  </span>
                  <span className="command">{item.command}</span>
                  <br />
                  <span className="output-text">{item.output}</span>
                </p>
              ))}
            </div>
            <div className="input-line">
              <span className="command-prompt">
                <span style={{ color: "#D5661C" }}>λ</span> :: ~ {">>"}
              </span>
              <input
                ref={inputRef}
                className="terminal-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleInput}
                autoFocus
              />
            </div>
          </div>
          <footer className="terminal-footer">
            Welcome to my Terminal Portfolio.
            <br /> Designed & Coded with ❤️ by Kareem Saygbe.
            <br />© 2024 Kareem Saygbe. All rights reserved.
          </footer>
        </>
      )}
    </div>
  );
};

export default Terminal;
