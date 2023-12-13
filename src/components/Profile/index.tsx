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
                    <h2>Marco Túlio Rodrigues da Silveira</h2>

                    <a href="https://github.com/MarcosDevPF">
                        GITHUB
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                </header>

                <main>
                    <p>
                        Aqui vai vir um texto da bio das pessoas que eu puxar da API do github. Vai ficar massa. (CONFIA)
                    </p>
                </main>

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

