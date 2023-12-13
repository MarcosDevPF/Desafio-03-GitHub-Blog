import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { ProfileContainer, ProfileContent, ProfileIcons } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";

interface Profile {
    avatar_url: string,
    name: string,
    bio: string,
    html_url: string,
    company: string,
    login: string,
    followers: number
}

export function Profile() {
    const [profile, setProfile] = useState<Profile | null>(null)

    useEffect(() => {
        api.get('/users/MarcosDevPF')
            .then(response => {
                setProfile(response.data)
            })
    }, [])

    if (!profile) {
        return (
            <>
                loading...
            </>
        )
    }

    return (
        <ProfileContainer>
            <img src={profile.avatar_url} />

            <ProfileContent>
                <header>
                    <h2>{profile.name}</h2>

                    <a
                        href={profile.html_url}
                        target="_blank"
                    >
                        GITHUB
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                </header>

                <main>
                    <p>
                        {profile.bio}
                    </p>
                </main>

                <ProfileIcons>

                    <div>
                        <FontAwesomeIcon icon={faGithub} />
                        <span>{profile.login}</span>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faBuilding} />
                        <span>{profile.company}</span>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faUserGroup} />
                        <span>{profile.followers}</span>
                    </div>

                </ProfileIcons>
            </ProfileContent>

        </ProfileContainer>
    )
}

