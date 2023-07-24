
export const ProjectArea = ({
    onProjectClick,
    projects
}) => {
    
    return (
        <ProjectContainer>
            {projects.map(project => (
                <Project onClick={() => onProjectClick(project.key)} />
            ))}
        </ProjectContainer>
    )
}