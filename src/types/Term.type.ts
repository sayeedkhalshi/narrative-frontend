export interface Term {
    id: string;
    title: string;
    details: string;
    derivedFrom: `0x${string}`;
    termType: TermType;
    createdAt?: Date;
    updatedAt?: Date;
}

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
            return "Unknown";
    }
};
