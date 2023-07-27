import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DeployedLinkButton, ProjectBox, ProjectContainer, ProjectImage, ProjectTitle } from "./styles";


export const PortfolioPage = ({ projects }) => {
  return (
    <ProjectContainer>
      {projects.map((project) => (
        <ProjectBox>
          <ProjectImage href={project.backgroundImageSource} />
          <ProjectTitle>{project.displayName}</ProjectTitle>
          <a src={project.gitHubPagesLink}></a>
          <FontAwesomeIcon icon="fa-brands fa-github" />          
          <DeployedLinkButton src={project.repositoryLink}>View Page</DeployedLinkButton>
        </ProjectBox>
      ))}
    </ProjectContainer>
  );
};
