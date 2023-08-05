import { ProfileCard } from "./components/Profile";
import { SearchPublicationsForm } from "./components/SearchPublicationsForm";

export function HomePage() {
  return (
    <div>
      <ProfileCard />
      <SearchPublicationsForm />
    </div>
  );
}
