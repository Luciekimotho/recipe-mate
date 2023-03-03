export const ConvertUnits = (value: number, from: string, to: string ) => {

    const units: any = {
        ml: {
            ratio: 1
        },
        l: {
            ratio: 1000
        },
        tsp: {
            ratio: 5
        },
        tbs: {
            ratio: 15
        },
        cup: {
            ratio: 250
        },
    }

    return value * units[from].ratio / units[to].ratio;
};