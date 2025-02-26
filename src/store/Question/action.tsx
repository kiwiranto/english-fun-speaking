import { createAction } from '@reduxjs/toolkit';
import * as constant from './constant';

export const setDataQuestionUseCase = createAction(constant.SET_DATA_QUESTION);
export const setGeneralBeginnerUseCase = createAction(constant.SET_GENERAL_BEGINNER);
export const setGeneralIntermediateUseCase = createAction(constant.SET_GENERAL_INTERMEDIATE);
export const setGeneralAdvancedUseCase = createAction(constant.SET_GENERAL_ADVANCED);
export const setFnbBeginnerUseCase = createAction(constant.SET_FNB_BEGINNER);
export const setFnbIntermediateUseCase = createAction(constant.SET_FNB_INTERMEDIATE);
export const setFnbAdvancedUseCase = createAction(constant.SET_FNB_ADVANCED);
export const setVacationBeginnerUseCase = createAction(constant.SET_VACATION_BEGINNER);
export const setVacationIntermediateUseCase = createAction(constant.SET_VACATION_INTERMEDIATE);
export const setVacationAdvancedUseCase = createAction(constant.SET_VACATION_ADVANCED);
