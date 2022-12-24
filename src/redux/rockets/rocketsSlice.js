import { createSlice } from '@reduxjs/toolkit';
import fetchRockets from './rocketsThunk';

export const initialState = {
  rockets: [],
  loading: true,
  error: null,
};

const updateReservationStatus = (state, action, reserved) => {
  state.rockets = state.rockets.map((rocket) => {
    if (rocket.id !== action.payload) return rocket;
    return { ...rocket, reserved };
  });
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => updateReservationStatus(state, action, true),
    cancelReservation: (state, action) => updateReservationStatus(state, action, false),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      state.error = null;
      state.rockets = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchRockets.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export const { reserveRocket, cancelReservation } = rocketsSlice.actions;
export default rocketsSlice.reducer;
