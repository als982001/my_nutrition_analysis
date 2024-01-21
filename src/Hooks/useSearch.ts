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

  const handleSearch = async (values: FormValues) => {
    const sentences = values.sentence.split(",");

    const searchData: ISearchResult | null = await getNutrition(sentences);

    if (searchData === null) {
      alert("에러!");
      return;
    }
  };

  return { handleSubmit, control, handleSearch, register };
}
