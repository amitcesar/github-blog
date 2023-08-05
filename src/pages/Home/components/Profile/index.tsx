import {
  ProfileContainer,
  ProfileInfoContainer,
  ProfileTitleAndLink,
} from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
const avatar = "https://avatars.githubusercontent.com/u/34512814?v=4";
export function ProfileCard() {
  return (
    <ProfileContainer>
      <div>
        <img src={avatar} />
      </div>

      <ProfileInfoContainer>
        <ProfileTitleAndLink>
          <h2>Cameron Williamson</h2>
          <span>
            <a href="https://github.com/amitcesar/">
              GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </span>
        </ProfileTitleAndLink>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <span>brmonte</span>
        <span>Rocketseat</span>
        <span>32 seguidores</span>
      </ProfileInfoContainer>
    </ProfileContainer>
  );
}
