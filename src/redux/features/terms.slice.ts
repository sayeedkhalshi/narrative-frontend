import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Term } from "@/types/Term.type";

interface TermsState {
    terms: Term[];
}

const initialState: TermsState = {
    terms: [],
};

export const termsSlice = createSlice({
    name: "terms",
    initialState,
    reducers: {
        setTerms(state, action: PayloadAction<Term[]>) {
            state.terms = action.payload;
        },
        clearTerms(state) {
            state.terms = [];
        },
    },
});

export const { setTerms, clearTerms } = termsSlice.actions;
export const selectTerms = (state: RootState) => state.terms.terms;
