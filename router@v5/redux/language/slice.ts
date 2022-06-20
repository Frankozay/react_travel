import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LanguageState {
  language: "en" | "zh";
  languageList: { name: string; code: string }[];
}

const initialState: LanguageState = {
  language: "zh",
  languageList: [
    { name: "中文", code: "zh" },
    { name: "English", code: "en" },
  ],
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<"en" | "zh">) => {
      state.language = action.payload;
    },
    addLanguage: (
      state,
      action: PayloadAction<{ name: string; code: string }>
    ) => {
      state.languageList = [...state.languageList, action.payload];
    },
  },
});
