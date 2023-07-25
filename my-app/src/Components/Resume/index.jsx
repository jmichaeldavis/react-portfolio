import { ContactContainer, ContactDetails, Title, WorkExperienceContainer, WorkExperienceDescription, WorkExperienceItem, WorkExperienceLocation, WorkExperienceTimeframe, WorkExperienceTitle } from "./styles"


export const Resume = ({
    resume
}) => {
    return (
        <div>
            <ContactContainer>
                <Title>
                    Joshua Davis
                </Title>
                <ContactDetails>
                    <ul>
                        <li>(801) 687-8089</li>
                        <li>jmichaeldavis17@gmail.com</li>
                    </ul>
                </ContactDetails>
            </ContactContainer>
            <WorkExperienceContainer>
                <WorkExperienceItem>
                    {resume.map(info => (
                    <div>
                        <WorkExperienceTitle>{info.title}</WorkExperienceTitle>
                        <WorkExperienceLocation>{info.location}</WorkExperienceLocation>
                        <WorkExperienceTimeframe>{info.timeline}</WorkExperienceTimeframe>
                        <WorkExperienceDescription>{info.description}</WorkExperienceDescription>
                    </div>
                    ))}
                    
                </WorkExperienceItem>    
            </WorkExperienceContainer>
        </div>
    )
}