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
    parsed: {
      food: string;
      foodId: string;
      foodMatch: string;
      measure: string;
      measureURI: string;
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
