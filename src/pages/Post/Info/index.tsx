import {
  InfoContainer,
  BackButton,
  InfoCardContent,
  InfoIconsContainer,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faCalendarDay,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function Info() {
  return (
    <InfoContainer>
      <header>
        <BackButton>
          <FontAwesomeIcon icon={faChevronLeft} />
          VOLTAR
        </BackButton>

        <span>
          <a href="https://github.com/amitcesar/">
            VER NO GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </span>
      </header>
      <InfoCardContent>
        <h2>JavaScript data types and data structures</h2>
        <InfoIconsContainer>
          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              amitc
            </li>

            <li>
              <FontAwesomeIcon icon={faCalendarDay} />
              {"Há 1 dia"}
            </li>

            <li>
              <FontAwesomeIcon icon={faComment} />
              {"32"} seguidores
            </li>
          </ul>
        </InfoIconsContainer>
      </InfoCardContent>
    </InfoContainer>
  );
}
