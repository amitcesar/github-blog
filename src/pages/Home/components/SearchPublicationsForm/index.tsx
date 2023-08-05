import { SearchFormContainer, InputFormTitle } from "./styles";

export function SearchPublicationsForm() {
  return (
    <SearchFormContainer>
      <InputFormTitle>
        <h3>Publicações</h3>
        <span>6 Publicaçoes</span>
      </InputFormTitle>
      <input type="text" placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  );
}
