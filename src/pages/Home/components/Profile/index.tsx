import {
  ProfileContainer,
  ProfileInfoContainer,
  ProfileTitleContainer,
  ProfileCardDescription,
  ProfileIconsContainer,
  AvatarContainer,
} from "./styles";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

import { useCallback, useEffect, useState } from "react";
import { api } from "../../../../lib/axios";

interface ProfileData {
  id: number;
  avatar_url: string;
  bio: string;
  login: string;
  name: string;
  followers: number;
  url: string;
}
const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;
export function ProfileCard() {
  const [ProfileData, setProfileData] = useState<ProfileData>();
  const LoadProfile = useCallback(async () => {
    const response = await api.get(`/users/amitcesar`);

    setProfileData(response.data);
  }, []);

  useEffect(() => {
    LoadProfile();
  }, [LoadProfile]);

  return (
    <ProfileContainer>
      <AvatarContainer src={ProfileData?.avatar_url} />

      <ProfileInfoContainer>
        <ProfileTitleContainer>
          <h2>{ProfileData?.name}</h2>
          <span>
            <a href={ProfileData?.avatar_url}>
              GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </span>
        </ProfileTitleContainer>
        <ProfileCardDescription>
          <p>
            {ProfileData?.bio} <br></br>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass
          </p>
          <ProfileIconsContainer>
            <ul>
              <li>
                <FontAwesomeIcon icon={faGithub} />
                {ProfileData?.login}
              </li>

              <li>
                <FontAwesomeIcon icon={faBuilding} />
                {"Rocketseat"}
              </li>

              <li>
                <FontAwesomeIcon icon={faUserGroup} />
                {ProfileData?.followers}
              </li>
            </ul>
          </ProfileIconsContainer>
        </ProfileCardDescription>
      </ProfileInfoContainer>
    </ProfileContainer>
  );
}
