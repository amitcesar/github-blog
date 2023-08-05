import { HeaderContainer } from "./styles";
import gitHubLogo from "../../assets/Logo.png";
export function Header() {
  return (
    <HeaderContainer>
      <img src={gitHubLogo} alt="" />
    </HeaderContainer>
  );
}
