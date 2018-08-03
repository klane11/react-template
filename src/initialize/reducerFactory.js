export default function reducerFactory(reducerHandlers, initialState, displayName) {
  function reducer(state = initialState, action) {
    const { type } = action;

    if (typeof reducerHandlers[type] === 'function') {
      return reducerHandlers[type](state, action);
    }

    return state;
  }

  if (displayName) {
    Object.defineProperty(reducer, 'name', { value: displayName });
  }

  return reducer;
}
