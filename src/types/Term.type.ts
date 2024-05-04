export interface Term {
    id: string;
    title: string;
    details: string;
    derivedFrom: `0x${string}`;
    termType: TermType;
    createdAt?: Date;
    updatedAt?: Date;
}

export const TermTypes = [
    "STANDALONE",
    "PERSPECTIVE",
    "CO",
    "MICRO",
    "MACRO",
    "PHILOSOPHY",
    "SCIENTIFIC",
];

export enum TermType {
    STANDALONE,
    PERSPECTIVE,
    CO,
    MICRO,
    MACRO,
    PHILOSOPHY,
    SCIENTIFIC,
}

export const findTermType = (val: TermType): string => {
    switch (val) {
        case TermType.STANDALONE:
            return "Standalone";
        case TermType.PERSPECTIVE:
            return "Perspective";
        case TermType.CO:
            return "Co";
        case TermType.MICRO:
            return "Micro";
        case TermType.MACRO:
            return "Macro";
        case TermType.PHILOSOPHY:
            return "Philosophy";
        case TermType.SCIENTIFIC:
            return "Scientific";
        default:
            return "ALL";
    }
};

export const findTermTypeValue = (val: string): TermType | number => {
    // Convert the input string to uppercase for case-insensitive comparison
    const upperCaseVal = val.toUpperCase();

    // Iterate over the TermType enum keys
    for (const key in TermType) {
        // Convert the enum key to a string and compare it to the input string
        if (key.toUpperCase() === upperCaseVal) {
            // Return the corresponding TermType enum value
            return TermType[key as keyof typeof TermType];
        }
    }

    // Return undefined if no match is found
    return 1;
};

export const allTermTypeValues = (): string[] => {
    // Get an array of the TermType enum's values
    const termTypeValues = Object.values(TermType);

    const termTypes = [];

    for (let i = 0; i < termTypeValues.length / 2 - 1; i++) {
        termTypes.push(termTypeValues[i]);
    }

    return termTypes as string[];

    // Map over the enum values and convert each to its string representation
    //return termTypeValues.map((termType) => findTermType(termType as TermType));
};

export const findFunctionListForTermTypes = (val: TermType): string => {
    switch (val) {
        case TermType.STANDALONE:
            return "getStandaloneTerms";
        case TermType.PERSPECTIVE:
            return "getLastPerspectivesTerms";
        case TermType.CO:
            return "getLastCoTerm";
        case TermType.MICRO:
            return "getLastMicroTerm";
        case TermType.MACRO:
            return "getLastMacroTerm";
        case TermType.PHILOSOPHY:
            return "getLastPhilosophyTerm";
        case TermType.SCIENTIFIC:
            return "getLastScientificTerms";
        default:
            return "getLastPerspectivesTerms";
    }
};

export const getAllMethodsForTermEachFilter = (
    filter: string,
    methodCount: number
) => {
    const allMethods = [];
    const termTypeValueFromFilter = findTermTypeValue(filter);

    if (filter === "ALL") {
        for (let i = 0; i < methodCount; i++) {
            allMethods.push({
                method: findFunctionListForTermTypes(i),
                indexValue: i === methodCount - 1 ? 2 : 1,
            });
        }

        return allMethods;
    } else {
        for (let i = 0; i < methodCount; i++) {
            allMethods.push({
                method: findFunctionListForTermTypes(termTypeValueFromFilter),
                indexValue: i + 1,
            });
        }

        return allMethods;
    }
};
