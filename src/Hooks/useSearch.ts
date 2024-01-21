import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getNutrition } from "../Utils/apis";
import { ISearchResult } from "../Utils/types";

interface FormValues {
  sentence: string;
}

export default function useSearch() {
  const navigate = useNavigate();

  const { handleSubmit, control, register } = useForm<FormValues>({
    defaultValues: {
      sentence: "",
    },
    mode: "onChange",
  });

  const goToResult = (values: FormValues) => {
    navigate(`/result?ingr=${values.sentence}`);
  };

  const handleSearch = async (ingr: string) => {
    const sentences = ingr.split(",");

    const searchData: ISearchResult | null = await getNutrition(sentences);

    if (searchData === null) {
      alert("에러!");
      return;
    }

    return searchData;
  };

  return { handleSubmit, control, handleSearch, goToResult, register };
}
