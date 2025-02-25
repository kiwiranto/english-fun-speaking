export const stateStatus = {
   loading: 'loading',
   success: 'success',
   error: 'error'
};

export const paginationDefaultState = {
   total: null,
   perPage: null,
   current: 1,
   totalPages: 1
};

export const defaultState = {
   isLoading: false,
   data: null,
   pagination: paginationDefaultState,
   error: null,
   isError: false,
   isSuccess: false,
   payload: null,
   status: ''
};

export const pendingState = (path, state) => {
   state[path].isLoading = true;
   state[path].isError = false;
   state[path].isSuccess = false;
   state[path].status = stateStatus.loading;

   return state;
};

export const successState = (path, state, action) => {
   state[path].isLoading = false;
   state[path].isError = false;
   state[path].isSuccess = true;
   state[path].data = action?.payload?.data?.data;
   state[path].pagination = action?.payload?.data?.pagination;
   state[path].payload = action?.meta?.arg;
   state[path].status = stateStatus.success;

   return state;
};

export const errorState = (path, state, action) => {
   state[path].isLoading = false;
   state[path].isError = true;
   state[path].isSuccess = false;
   state[path].data = null;
   state[path].payload = action?.meta?.arg;
   state[path].error = action.payload;
   state[path].errorData = action.payload?.errorData;
   state[path].status = stateStatus.error;

   return state;
};

export const resetState = (path, state) => {
   state[path] = defaultState;

   return state;
};
