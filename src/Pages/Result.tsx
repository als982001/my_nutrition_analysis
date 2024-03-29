import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ISearchResult } from "../Utils/types";

import useSearch from "../Hooks/useSearch";
import Calories from "../Components/Calories";

const Wrapper = styled.main`
  width: 100%;
  height: calc(100vh - 100px);
  background-color: #d5f0c1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.section`
  width: 50%;
  height: auto;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
`;

const ThickBar = styled.section`
  width: 90%;
  height: 10px;
  background-color: #e9e8e9;
  border-radius: 10px;
  margin: 20px 0;
`;

const Bar = styled.section``;

const testResult: ISearchResult = {
  uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_60641b657a7840dc9c0088a8a694f899",
  calories: 702,
  totalCO2Emissions: 273.8619,
  co2EmissionsClass: "A",
  totalWeight: 195,
  dietLabels: ["LOW_FAT", "LOW_SODIUM"],
  healthLabels: [
    "FAT_FREE",
    "LOW_FAT_ABS",
    "SUGAR_CONSCIOUS",
    "LOW_SUGAR",
    "LOW_POTASSIUM",
    "KIDNEY_FRIENDLY",
    "VEGAN",
    "VEGETARIAN",
    "PESCATARIAN",
    "MEDITERRANEAN",
    "DASH",
    "DAIRY_FREE",
    "GLUTEN_FREE",
    "WHEAT_FREE",
    "EGG_FREE",
    "MILK_FREE",
    "PEANUT_FREE",
    "TREE_NUT_FREE",
    "SOY_FREE",
    "FISH_FREE",
    "SHELLFISH_FREE",
    "PORK_FREE",
    "RED_MEAT_FREE",
    "CRUSTACEAN_FREE",
    "CELERY_FREE",
    "MUSTARD_FREE",
    "SESAME_FREE",
    "LUPINE_FREE",
    "MOLLUSK_FREE",
    "ALCOHOL_FREE",
    "NO_OIL_ADDED",
    "NO_SUGAR_ADDED",
    "SULPHITE_FREE",
    "FODMAP_FREE",
    "KOSHER",
  ],
  cautions: [],
  totalNutrients: {
    ENERC_KCAL: {
      label: "Energy",
      quantity: 702,
      unit: "kcal",
    },
    FAT: {
      label: "Total lipid (fat)",
      quantity: 1.131,
      unit: "g",
    },
    FASAT: {
      label: "Fatty acids, total saturated",
      quantity: 0.3081,
      unit: "g",
    },
    FAMS: {
      label: "Fatty acids, total monounsaturated",
      quantity: 0.35295,
      unit: "g",
    },
    FAPU: {
      label: "Fatty acids, total polyunsaturated",
      quantity: 0.30225,
      unit: "g",
    },
    CHOCDF: {
      label: "Carbohydrate, by difference",
      quantity: 154.635,
      unit: "g",
    },
    "CHOCDF.net": {
      label: "Carbohydrates (net)",
      quantity: 154.635,
      unit: "g",
    },
    PROCNT: {
      label: "Protein",
      quantity: 12.8895,
      unit: "g",
    },
    CHOLE: {
      label: "Cholesterol",
      quantity: 0,
      unit: "mg",
    },
    NA: {
      label: "Sodium, Na",
      quantity: 1.95,
      unit: "mg",
    },
    CA: {
      label: "Calcium, Ca",
      quantity: 17.55,
      unit: "mg",
    },
    MG: {
      label: "Magnesium, Mg",
      quantity: 68.25,
      unit: "mg",
    },
    K: {
      label: "Potassium, K",
      quantity: 167.7,
      unit: "mg",
    },
    FE: {
      label: "Iron, Fe",
      quantity: 1.56,
      unit: "mg",
    },
    ZN: {
      label: "Zinc, Zn",
      quantity: 2.262,
      unit: "mg",
    },
    P: {
      label: "Phosphorus, P",
      quantity: 210.6,
      unit: "mg",
    },
    VITC: {
      label: "Vitamin C, total ascorbic acid",
      quantity: 0,
      unit: "mg",
    },
    THIA: {
      label: "Thiamin",
      quantity: 0.1365,
      unit: "mg",
    },
    RIBF: {
      label: "Riboflavin",
      quantity: 0.0936,
      unit: "mg",
    },
    NIA: {
      label: "Niacin",
      quantity: 3.12,
      unit: "mg",
    },
    VITB6A: {
      label: "Vitamin B-6",
      quantity: 0.28275,
      unit: "mg",
    },
    FOLDFE: {
      label: "Folate, DFE",
      quantity: 17.55,
      unit: "µg",
    },
    FOLFD: {
      label: "Folate, food",
      quantity: 17.55,
      unit: "µg",
    },
    FOLAC: {
      label: "Folic acid",
      quantity: 0,
      unit: "µg",
    },
    VITB12: {
      label: "Vitamin B-12",
      quantity: 0,
      unit: "µg",
    },
    VITD: {
      label: "Vitamin D (D2 + D3)",
      quantity: 0,
      unit: "µg",
    },
    WATER: {
      label: "Water",
      quantity: 25.155,
      unit: "g",
    },
  },
  totalDaily: {
    ENERC_KCAL: {
      label: "Energy",
      quantity: 35.1,
      unit: "%",
    },
    FAT: {
      label: "Fat",
      quantity: 1.74,
      unit: "%",
    },
    FASAT: {
      label: "Saturated",
      quantity: 1.5405,
      unit: "%",
    },
    CHOCDF: {
      label: "Carbs",
      quantity: 51.545,
      unit: "%",
    },
    PROCNT: {
      label: "Protein",
      quantity: 25.779,
      unit: "%",
    },
    CHOLE: {
      label: "Cholesterol",
      quantity: 0,
      unit: "%",
    },
    NA: {
      label: "Sodium",
      quantity: 0.08125,
      unit: "%",
    },
    CA: {
      label: "Calcium",
      quantity: 1.755,
      unit: "%",
    },
    MG: {
      label: "Magnesium",
      quantity: 16.25,
      unit: "%",
    },
    K: {
      label: "Potassium",
      quantity: 3.568085106382979,
      unit: "%",
    },
    FE: {
      label: "Iron",
      quantity: 8.666666666666666,
      unit: "%",
    },
    ZN: {
      label: "Zinc",
      quantity: 20.563636363636363,
      unit: "%",
    },
    P: {
      label: "Phosphorus",
      quantity: 30.085714285714285,
      unit: "%",
    },
    VITC: {
      label: "Vitamin C",
      quantity: 0,
      unit: "%",
    },
    THIA: {
      label: "Thiamin (B1)",
      quantity: 11.375,
      unit: "%",
    },
    RIBF: {
      label: "Riboflavin (B2)",
      quantity: 7.199999999999999,
      unit: "%",
    },
    NIA: {
      label: "Niacin (B3)",
      quantity: 19.5,
      unit: "%",
    },
    VITB6A: {
      label: "Vitamin B6",
      quantity: 21.749999999999996,
      unit: "%",
    },
    FOLDFE: {
      label: "Folate equivalent (total)",
      quantity: 4.3875,
      unit: "%",
    },
    VITB12: {
      label: "Vitamin B12",
      quantity: 0,
      unit: "%",
    },
    VITD: {
      label: "Vitamin D",
      quantity: 0,
      unit: "%",
    },
  },
  ingredients: [
    {
      text: "1 cup rice",
      parsed: [
        {
          quantity: 1,
          measure: "cup",
          foodMatch: "rice",
          food: "rice",
          foodId: "food_bpumdjzb5rtqaeabb0kbgbcgr4t9",
          weight: 195,
          retainedWeight: 195,
          nutrients: {
            RIBF: {
              label: "Riboflavin",
              quantity: 0.09359999999999999,
              unit: "mg",
            },
            VITD: {
              label: "Vitamin D (D2 + D3), International Units",
              quantity: 0,
              unit: "IU",
            },
            THIA: {
              label: "Thiamin",
              quantity: 0.1365,
              unit: "mg",
            },
            FAPU: {
              label: "Fatty acids, total polyunsaturated",
              quantity: 0.30225,
              unit: "g",
            },
            NIA: {
              label: "Niacin",
              quantity: 3.12,
              unit: "mg",
            },
            ENERC_KCAL: {
              label: "Energy",
              quantity: 702,
              unit: "kcal",
            },
            FASAT: {
              label: "Fatty acids, total saturated",
              quantity: 0.3081,
              unit: "g",
            },
            VITC: {
              label: "Vitamin C, total ascorbic acid",
              quantity: 0,
              unit: "mg",
            },
            PROCNT: {
              label: "Protein",
              quantity: 12.8895,
              unit: "g",
            },
            CHOLE: {
              label: "Cholesterol",
              quantity: 0,
              unit: "mg",
            },
            FAMS: {
              label: "Fatty acids, total monounsaturated",
              quantity: 0.35295000000000004,
              unit: "g",
            },
            CHOCDF: {
              label: "Carbohydrate, by difference",
              quantity: 154.635,
              unit: "g",
            },
            FAT: {
              label: "Total lipid (fat)",
              quantity: 1.131,
              unit: "g",
            },
            VITB6A: {
              label: "Vitamin B-6",
              quantity: 0.28275,
              unit: "mg",
            },
            VITB12: {
              label: "Vitamin B-12",
              quantity: 0,
              unit: "µg",
            },
            WATER: {
              label: "Water",
              quantity: 25.155,
              unit: "g",
            },
            K: {
              label: "Potassium, K",
              quantity: 167.7,
              unit: "mg",
            },
            P: {
              label: "Phosphorus, P",
              quantity: 210.6,
              unit: "mg",
            },
            NA: {
              label: "Sodium, Na",
              quantity: 1.95,
              unit: "mg",
            },
            ZN: {
              label: "Zinc, Zn",
              quantity: 2.262,
              unit: "mg",
            },
            CA: {
              label: "Calcium, Ca",
              quantity: 17.55,
              unit: "mg",
            },
            MG: {
              label: "Magnesium, Mg",
              quantity: 68.25,
              unit: "mg",
            },
            FE: {
              label: "Iron, Fe",
              quantity: 1.56,
              unit: "mg",
            },
            FOLFD: {
              label: "Folate, food",
              quantity: 17.55,
              unit: "µg",
            },
            FOLAC: {
              label: "Folic acid",
              quantity: 0,
              unit: "µg",
            },
            FOLDFE: {
              label: "Folate, DFE",
              quantity: 17.55,
              unit: "µg",
            },
          },
          measureURI: "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
          status: "OK",
        },
      ],
    },
  ],
  totalNutrientsKCal: {
    ENERC_KCAL: {
      label: "Energy",
      quantity: 702,
      unit: "kcal",
    },
    PROCNT_KCAL: {
      label: "Calories from protein",
      quantity: 53,
      unit: "kcal",
    },
    FAT_KCAL: {
      label: "Calories from fat",
      quantity: 11,
      unit: "kcal",
    },
    CHOCDF_KCAL: {
      label: "Calories from carbohydrates",
      quantity: 638,
      unit: "kcal",
    },
  },
};

const defaultResultL: ISearchResult = {
  calories: -1,
  cautions: [],
  co2EmissionsClass: "",
  dietLabels: [],
  healthLabels: [],
  ingredients: [],
  totalCO2Emissions: 0,
  totalDaily: {},
  totalNutrients: {},
  totalNutrientsKCal: {},
  totalWeight: 0,
  uri: "",
};

export default function Result() {
  const [result, setResult] = useState<ISearchResult | null>(defaultResultL);
  const [isLoading, setIsLoading] = useState(true);
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

      // const result = await handleSearch(ingr);

      if (result) {
        setResult((prev) => testResult);
      } else {
        setResult((prev) => null);
      }

      setIsLoading((prev) => false);
    })();
  }, [location, navigate]);

  useEffect(() => {
    if (result === null) {
      alert("없음");
      navigate("/");
      return;
    }

    console.log(result);
  }, [result]);

  if (isLoading) {
    return <Title>로딩중...</Title>;
  }

  return (
    <Wrapper>
      {result ? (
        <Container>
          <Title>결과</Title>
          <ThickBar />
          <Calories calories={result.calories} />
        </Container>
      ) : (
        <h1>없음</h1>
      )}
    </Wrapper>
  );
}
