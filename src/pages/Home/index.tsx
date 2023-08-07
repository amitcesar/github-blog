import { ProfileCard } from "./components/Profile";
import { Publications } from "./components/Publications";
import { SearchPublicationsForm } from "./components/SearchPublicationsForm";

export function HomePage() {
  return (
    <div>
      <ProfileCard />
      <SearchPublicationsForm />
      <Publications />
    </div>
  );
}
