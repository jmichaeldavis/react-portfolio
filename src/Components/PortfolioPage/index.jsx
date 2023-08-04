import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { DeployedLinkButton, ProjectBox, ProjectContainer, ProjectImage, ProjectTitle } from "./styles";


export const PortfolioPage = ({ projects }) => {
  console.log(projects)
  return (
    <ProjectContainer>
      {projects.map((project) => (
        <ProjectBox>
          <ProjectImage href={project.backgroundImageSource} />
          <ProjectTitle>{project.displayName}</ProjectTitle>
          <DeployedLinkButton target = "_blank" href={project.repositoryLink}><FontAwesomeIcon size="2x" icon={faGithub} /></DeployedLinkButton>
          <DeployedLinkButton target = "_blank" href={project.gitHubPagesLink}>View Page</DeployedLinkButton>
        </ProjectBox>
      ))}
    </ProjectContainer>
  );
};
