import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ISearchResult } from "../Utils/types";

import useSearch from "../Hooks/useSearch";

const Wrapper = styled.main`
  width: 100%;
  height: calc(100vh - 100px);
  background-color: #d5f0c1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Result() {
  const [result, setResult] = useState<ISearchResult | null>(null);
  const { handleSearch } = useSearch();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    (async () => {
      const queryParams = new URLSearchParams(location.search);
      const ingr = queryParams.get("ingr");

      if (!ingr) {
        navigate("/");
        return;
      }

      const result = await handleSearch(ingr);

      if (result) {
        setResult((prev) => result);
      } else {
        setResult((prev) => null);
      }
    })();
  }, [location, navigate]);

  return <Wrapper>Result</Wrapper>;
}
