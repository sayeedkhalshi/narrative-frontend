import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CentralTermsState {
    centralTerms: {
        [key: number]: `0x${string}`;
    };
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
            }>
        ) {
            state.centralTerms[action.payload.addressIndex] =
                action.payload.address;
        },
        setCentralTerms(state, action: PayloadAction<`0x${string}`[]>) {
            state.centralTerms = {};
            for (let i = 0; i < action.payload.length; i++) {
                state.centralTerms[i] = action.payload[i];
            }
        },
        clearCentralTerms(state) {
            state.centralTerms = {};
        },
    },
});

export const {
    replaceCentralAddressByIndex,
    setCentralTerms,
    clearCentralTerms,
} = centralTermsSlice.actions;
export const selectcentralTerms = (state: RootState) =>
    state.centralTerms.centralTerms;

export const selectSingleCentralAddress = (
    state: RootState,
    index: number
): `0x${string}` | undefined => {
    return state.centralTerms.centralTerms[index];
};
