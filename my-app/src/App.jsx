import "./App.css";
import { Footer, Header, NavBar } from "./Components";
import { useEffect, useState } from "react";

function App() {
  const pages = [
    {
      key: "about-me",
      displayName: "About Me",
    },
    {
      key: "portfolio",
      displayName: "Portfolio",
    },
    {
      key: "contact",
      displayName: "Contact",
    },
    {
      key: "resume",
      displayName: "Resume",
    },
  ];
  const projects = [
    {
      key: "project-1",
      displayName: "Project #1",
      repositoryLink: "",
      gitHubPagesLink: "",
      backgroundImageSource: "",
    },
    {
      key: "project-2",
      displayName: "Project #2",
      repositoryLink: "",
      gitHubPagesLink: "",
      backgroundImageSource: "",
    },
    {
      key: "project-3",
      displayName: "Project #3",
      repositoryLink: "",
      gitHubPagesLink: "",
      backgroundImageSource: "",
    },
    {
      key: "project-4",
      displayName: "Project #4",
      repositoryLink: "",
      gitHubPagesLink: "",
      backgroundImageSource: "",
    },
    {
      key: "project-5",
      displayName: "Project #5",
      repositoryLink: "",
      gitHubPagesLink: "",
      backgroundImageSource: "",
    }
  ]
  

  const [currentPage, setCurrentPage] = useState("about-me");

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "portfolio":
        return <h1>Portfolio Page</h1>;
      case "contact":
        return <h1>Contact Page</h1>;
      case "resume":
        return <h1>Resume Page</h1>;
      case "about-me":
      default:
        return <h1>About Me Page</h1>;
    }
  };

  return (
    <div className="App">
      <Header />
      <NavBar pages={pages} onPageClick={setCurrentPage} />
      <div>{renderCurrentPage()}</div>
      <Footer />
    </div>
  );
}

export default App;
