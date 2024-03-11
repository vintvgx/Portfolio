import React, { useEffect, useRef, useState } from "react";
import { terminal_data } from "./DATA";
import "./Terminal.css";
import { useNavigate } from "react-router-dom";
import TerminalSplashScreen from "../../components/TerminalSplashScreen/TerminalSplashScreen";
import ReactConfetti from "react-confetti";
import * as Sentry from "@sentry/react";

interface HistoryItem {
  command: string;
  output: string | JSX.Element;
}

const Terminal: React.FC = () => {
  const navigate = useNavigate();

  const [showSplash, setShowSplash] = useState(true);

  const [showConfetti, setShowConfetti] = useState(false);
  const darkThemeConfettiColors = [
    "#a864fd",
    "#29cdff",
    "#78ff44",
    "#ff718d",
    "#fdff6a",
  ];
  const lightThemeConfettiColors = ["#f0f0f0", "#0056b3"];
  const matrixThemeConfettiColors = ["#0F0"];

  const [fadeOutConfetti, setFadeOutConfetti] = useState(false);
  const [theme, setTheme] = useState("dark");

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

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          Sentry.captureMessage("Terminal Page Loaded", {
            level: "info",
            extra: { userLocation },
          });
        },
        (error) => {
          Sentry.captureMessage(
            "Terminal Page Loaded - Location access denied",
            {
              level: "info",
              extra: { error: error.message },
            }
          );
        }
      );
    } else {
      Sentry.captureMessage("Terminal Page Loaded - Geolocation not supported");
    }
  }, []);

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
    const lowerCaseCommand = command.toLowerCase();
    console.log(lowerCaseCommand);

    Sentry.captureMessage(`Terminal Command: ${lowerCaseCommand}`);

    Sentry.captureMessage(`Terminal Command:`, {
      level: "info",
      extra: {
        command: lowerCaseCommand,
      },
    });

    switch (lowerCaseCommand) {
      case "about":
      case "education":
      case "skills":
      case "projects":
      case "resume":
      case "experience":
      case "contact":
        return terminal_data[lowerCaseCommand as keyof typeof terminal_data];
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

            <br />

            <div>
              <span className="command-name">light</span>
              <span className="command-desc">Light Theme</span>
            </div>
            <div>
              <span className="command-name">dark</span>
              <span className="command-desc">Dark Theme</span>
            </div>
            <div>
              <span className="command-name">matrix</span>
              <span className="command-desc">Matrix Theme</span>
            </div>

            <br />
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
        return ""; // Return an empty string as output for the 'clear' command
      case "party":
        setShowConfetti(true);
        return "🎉 Party time! 🎉";
      case "light":
        setTheme("light");
        return "Switched to light theme";
      case "dark":
        setTheme("dark");
        return "Switched to dark theme";
      case "matrix":
        setTheme("matrix");
        return "Switched to Matrix theme";
      default:
        return `sh: Unknown command: ${command}\nSee \`help\` for info`;
    }
  };

  const getConfettiColors = (theme: any) => {
    switch (theme) {
      case "light":
        return lightThemeConfettiColors;
      case "matrix":
        return matrixThemeConfettiColors;
      case "dark":
      default:
        return darkThemeConfettiColors;
    }
  };

  return (
    <div
      className={`terminal-container ${theme}`}
      onClick={(e) => {
        inputRef.current?.focus();
      }}>
      {showSplash ? (
        <TerminalSplashScreen />
      ) : (
        <>
          {showConfetti && (
            <ReactConfetti
              colors={getConfettiColors(theme)}
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
                    <span className="command-prompt-symbol">λ</span> :: ~ {">>"}{" "}
                  </span>
                  <span className="command">{item.command}</span>
                  <br />
                  <span className="output-text">{item.output}</span>
                </p>
              ))}
            </div>
            <div className="input-line">
              <span className="command-prompt">
                <span className="command-prompt-symbol">λ</span> :: ~ {">>"}
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
