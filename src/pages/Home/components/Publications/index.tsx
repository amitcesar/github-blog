import {
  PostCard,
  PublicationsContainer,
  PostTitle,
  PostDescription,
} from "./styles";

import { NavLink } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { api } from "../../../../lib/axios";
// `/search/issues?q=${query}%20label:published%20repo:${username}/${repoName}`

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export function Publications() {
  const fetchPublications = useCallback(async (query: string = "") => {
    const response = await api.get(
      `/search/issues?q=${query}%20label:published%20repo:amitcesar/github-blog`
    );

    console.log(response);
  }, []);

  useEffect(() => {
    fetchPublications();
  }, [fetchPublications]);

  return (
    <PublicationsContainer>
      <NavLink to={"/post"}>
        <PostCard>
          <PostTitle>
            <h3> JavaScript data types and data structures</h3>
            <span>Há 1 dia</span>
          </PostTitle>
          <PostDescription>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types: let foo = 42; //
              foo is now a number foo = 'bar'; // foo is now a string foo =
              true; // foo is now a boolean
            </p>
          </PostDescription>
        </PostCard>
      </NavLink>

      <NavLink to={"/post"}>
        <PostCard>
          <PostTitle>
            <h3> JavaScript data types and data structures</h3>
            <span>Há 1 dia</span>
          </PostTitle>
          <PostDescription>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types: let foo = 42; //
              foo is now a number foo = 'bar'; // foo is now a string foo =
              true; // foo is now a boolean
            </p>
          </PostDescription>
        </PostCard>
      </NavLink>
    </PublicationsContainer>
  );
}
