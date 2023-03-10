export const ConvertVolumeUnits = (value: number, from: string, to: string) => {
  const units: any = {
    ml: {
      ratio: 1,
    },
    l: {
      ratio: 1000,
    },
    tsp: {
      ratio: 5,
    },
    tbs: {
      ratio: 15,
    },
    cup: {
      ratio: 250,
    },
  };

  return (value * units[from].ratio) / units[to].ratio;
};

export const ConvertWeightUnits = (value: number, from: string, to: string) => {
  const units: any = {
    g: {
      ratio: 1,
    },
    kg: {
      ratio: 1000,
    },
    oz: {
      ratio: 28.3495,
    },
    lb: {
      ratio: 453.592,
    },
    cups: {
      ratio: 250,
    },
  };

  return (value * units[from].ratio) / units[to].ratio;
};
