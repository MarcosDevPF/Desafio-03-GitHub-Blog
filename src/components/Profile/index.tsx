import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { ProfileContainer, ProfileContent } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

export function Profile() {
    return (
        <ProfileContainer>
            <ProfileContent>
                <img src="https://github.com/MarcosDevPF.png" />

                <div>
                    <strong>Marco Túlio</strong>

                    <a href="https://github.com/MarcosDevPF">
                        GITHUB
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptate delectus dolorum iure, consectetur, doloremque sed veritatis fugiat maxime sim.</p>

                    <div>
                        <FontAwesomeIcon icon={faGithub} />
                        <span>MarcosDevPF</span>
                        <FontAwesomeIcon icon={faBuilding} />
                        <span>Sharp</span>
                        <FontAwesomeIcon icon={faUserGroup} />
                        <span>50 seguidores</span>
                    </div>
                </div>

            </ProfileContent>
        </ProfileContainer>
    )
}

