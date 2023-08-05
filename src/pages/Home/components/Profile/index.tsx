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

const avatar = "https://avatars.githubusercontent.com/u/34512814?v=4";

export function ProfileCard() {
  return (
    <ProfileContainer>
      <AvatarContainer src={avatar} />

      <ProfileInfoContainer>
        <ProfileTitleContainer>
          <h2>Cameron Williamson</h2>
          <span>
            <a href="https://github.com/amitcesar/">
              GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </span>
        </ProfileTitleContainer>
        <ProfileCardDescription>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass
          </p>
          <ProfileIconsContainer>
            <ul>
              <li>
                <FontAwesomeIcon icon={faGithub} />
                amitc
              </li>

              <li>
                <FontAwesomeIcon icon={faBuilding} />
                {"Rocketseat"}
              </li>

              <li>
                <FontAwesomeIcon icon={faUserGroup} />
                {"32"} seguidores
              </li>
            </ul>
          </ProfileIconsContainer>
        </ProfileCardDescription>
      </ProfileInfoContainer>
    </ProfileContainer>
  );
}
