import { createSlice } from '@reduxjs/toolkit';
import {
  setFnbAdvancedUseCase,
  setFnbBeginnerUseCase,
  setFnbIntermediateUseCase,
  setGeneralAdvancedUseCase,
  setGeneralBeginnerUseCase,
  setGeneralIntermediateUseCase,
  setVacationAdvancedUseCase,
  setVacationBeginnerUseCase,
  setVacationIntermediateUseCase,
} from './action';


export const initialState = {
  generalBeginner: null,
  generalIntermediate: null,
  generalAdvanced: null,
  fnbBeginner: null,
  fnbIntermediate: null,
  fnbAdvanced: null,
  vacationBeginner: null,
  vacationIntermediate: null,
  vacationAdvanced: null,
};

const extraReducers = (builder) => {
  builder.addCase(setGeneralBeginnerUseCase, (state, action) => {
    state.generalBeginner = action.payload;
  });
  builder.addCase(setGeneralIntermediateUseCase, (state, action) => {
    state.generalIntermediate = action.payload;
  });
  builder.addCase(setGeneralAdvancedUseCase, (state, action) => {
    state.generalAdvanced = action.payload;
  });
  builder.addCase(setFnbBeginnerUseCase, (state, action) => {
    state.fnbBeginner = action.payload;
  });
  builder.addCase(setFnbIntermediateUseCase, (state, action) => {
    state.fnbIntermediate = action.payload;
  });
  builder.addCase(setFnbAdvancedUseCase, (state, action) => {
    state.fnbAdvanced = action.payload;
  });
  builder.addCase(setVacationBeginnerUseCase, (state, action) => {
    state.vacationBeginner = action.payload;
  });
  builder.addCase(setVacationIntermediateUseCase, (state, action) => {
    state.vacationIntermediate = action.payload;
  });
  builder.addCase(setVacationAdvancedUseCase, (state, action) => {
    state.vacationAdvanced = action.payload;
  });
};

const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {},
  extraReducers,
  reducerPath: 'question'
});

export default questionSlice.reducer;
