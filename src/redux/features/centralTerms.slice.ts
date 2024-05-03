import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CentralTermsDetails {
    [key: number]: {
        address: `0x${string}`;

        levels: [
            {
                address: `0x${string}`;
                title: string;
            }
        ];
    };
}

interface CentralTermsState {
    centralTerms: CentralTermsDetails;
}

const initialState: CentralTermsState = {
    centralTerms: {},
};

export const centralTermsSlice = createSlice({
    name: "centralTerms",
    initialState,
    reducers: {
        replaceCentralAddressByIndex(
            state,
            action: PayloadAction<{
                addressIndex: number;
                address: `0x${string}`;
                title: string;
            }>
        ) {
            state.centralTerms[action.payload.addressIndex].levels?.push({
                address: action.payload.address,
                title: action.payload.title,
            });
            state.centralTerms[action.payload.addressIndex].address =
                action.payload.address;
        },
        changeCentralAddressFromDepth(
            state,
            action: PayloadAction<{
                addressIndex: number;
                address: `0x${string}`;
                //title: string;
            }>
        ) {
            state.centralTerms[action.payload.addressIndex].address =
                action.payload.address;
        },
        setCentralTerms(state, action: PayloadAction<`0x${string}`[]>) {
            let newCentralTerms: CentralTermsDetails = {};
            for (let i = 0; i < action.payload.length; i++) {
                // Initialize each entry as an object
                newCentralTerms[i] = {
                    address: action.payload[i],
                    levels: [
                        {
                            address: action.payload[i],
                            title: "",
                        },
                    ],
                };
            }
            // Update the state with the new central terms
            state.centralTerms = newCentralTerms;
        },

        //initial level setup
        setCentralTermsLevelbyIndex(
            state,
            action: PayloadAction<{ index: number; title: string }>
        ) {
            if (state.centralTerms[action.payload.index].levels.length > 0) {
                return;
            }
            state.centralTerms[action.payload.index].levels = [
                {
                    address: state.centralTerms[action.payload.index].address,
                    title: action.payload.title,
                },
            ];
        },
        clearCentralTerms(state) {
            state.centralTerms = {};
        },
    },
});

export const {
    replaceCentralAddressByIndex,
    changeCentralAddressFromDepth,
    setCentralTerms,
    setCentralTermsLevelbyIndex,
    clearCentralTerms,
} = centralTermsSlice.actions;
export const selectcentralTerms = (state: RootState) =>
    state.centralTerms.centralTerms;

export const selectSingleCentralAddress = (
    state: RootState,
    index: number
): `0x${string}` | undefined => {
    return state.centralTerms.centralTerms[index].address;
};

export const selectCentralAddressLevelsByIndex = (
    state: RootState,
    index: number
): { address: `0x${string}`; title: string }[] | undefined => {
    return state.centralTerms.centralTerms[index].levels;
};
