import rocketsReducer, { initialState, reserveRocket, cancelReservation } from '../rocketsSlice';

import fetchRockets from '../rocketsThunk';

describe('rockets slice', () => {
  it('has the correct initial state', () => {
    expect(initialState).toEqual({
      rockets: [],
      loading: true,
      error: null,
    });
  });

  it('dispatches the correct action when reserving a rocket', () => {
    const rocketId = 3;
    const expectedAction = {
      type: 'rockets/reserveRocket',
      payload: rocketId,
    };
    expect(reserveRocket(rocketId)).toEqual(expectedAction);
  });

  it('reserves a rocket in the state', () => {
    const rocketId = 9;
    const state = {
      ...initialState,
      rockets: [{ id: rocketId, reserved: false }],
    };
    const action = reserveRocket(rocketId);
    const nextState = rocketsReducer(state, action);
    expect(nextState.rockets).toEqual([{ id: rocketId, reserved: true }]);
  });

  it('dispatches the correct action when cancelling a reservation', () => {
    const rocketId = 3;
    const expectedAction = {
      type: 'rockets/cancelReservation',
      payload: rocketId,
    };
    expect(cancelReservation(rocketId)).toEqual(expectedAction);
  });

  it('cancels a reservation in the state', () => {
    const rocketId = 7;
    const state = {
      ...initialState,
      rockets: [{ id: rocketId, reserved: true }],
    };
    const action = cancelReservation(rocketId);
    const nextState = rocketsReducer(state, action);
    expect(nextState.rockets).toEqual([{ id: rocketId, reserved: false }]);
  });

  it('should handle the fetchRockets.pending action', () => {
    const state = {
      rockets: [],
      loading: false,
      error: 'some error',
    };
    const newState = rocketsReducer(state, fetchRockets.pending());
    expect(newState).toEqual({
      rockets: [],
      loading: true,
      error: null,
    });
  });

  it('should handle the fetchRockets.fulfilled action', () => {
    const state = {
      rockets: [],
      loading: true,
      error: null,
    };
    const payload = [{ id: 1, name: 'Falcon 1' }, { id: 2, name: 'Falcon 9' }];
    const newState = rocketsReducer(state, fetchRockets.fulfilled(payload));
    expect(newState).toEqual({
      rockets: payload,
      loading: false,
      error: null,
    });
  });

  it('should handle the fetchRockets.rejected action', () => {
    const state = {
      rockets: [],
      loading: true,
      error: null,
    };
    const error = new Error('Request failed');
    const newState = rocketsReducer(state, fetchRockets.rejected(error));
    expect(newState).toEqual({
      rockets: [],
      loading: false,
      error: 'Request failed',
    });
  });
});
