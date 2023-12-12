import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { ProfileContainer, ProfileContent, ProfileIcons } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

export function Profile() {
    return (
        <ProfileContainer>
            <img src="https://github.com/MarcosDevPF.png" />

            <ProfileContent>
                <header>
                    <strong>Marco Túlio</strong>

                    <a href="https://github.com/MarcosDevPF">
                        GITHUB
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                </header>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptate delectus dolorum iure, consectetur, doloremque sed veritatis fugiat maxime sim.</p>

                <ProfileIcons>

                    <div>
                        <FontAwesomeIcon icon={faGithub} />
                        <span>MarcosDevPF</span>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faBuilding} />
                        <span>Sharp</span>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faUserGroup} />
                        <span>50 seguidores</span>
                    </div>

                </ProfileIcons>
            </ProfileContent>

        </ProfileContainer>
    )
}

