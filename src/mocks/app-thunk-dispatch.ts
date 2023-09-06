import {Action, ThunkDispatch} from '@reduxjs/toolkit';
import {createAPI} from '../api/api.ts';
import {StateType} from '../store/service/types/types.ts';

export type AppThunkDispatch = ThunkDispatch<StateType, ReturnType<typeof createAPI>, Action>;
