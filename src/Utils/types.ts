export interface INutrient {
  label: string;
  quantity: number;
  unit: string;
}

export interface ISearchResult {
  calories: number;
  cautions: any[];
  co2EmissionsClass?: string;
  dietLabels: string[];
  healthLabels: string[];
  ingredients: {
    text: string;
    parsed: {
      quantity: number;
      weight: number;
      retainedWeight: number;
      food: string;
      foodId: string;
      foodMatch: string;
      measure: string;
      measureURI: string;
      status: string;
      nutrients: {
        [key: string]: INutrient;
      };
    }[];
  }[];
  totalCO2Emissions: number;
  totalDaily: {
    [key: string]: INutrient;
  };
  totalNutrients: {
    [key: string]: INutrient;
  };
  totalNutrientsKCal: {
    [key: string]: INutrient;
  };
  totalWeight: number;
  uri: string;
}
