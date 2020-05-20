import { GET_LIST, PUT_NEW_POINT_LIST, NEW_STATUS, NEW_CHANGE } from "./action";

const initialState = {
  list: [],
};

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST:
      return {
        ...state,
        list: action.payload,
      };
    case PUT_NEW_POINT_LIST:
      return {
        ...state,
        list: [action.payload, ...state.list],
      };

    case NEW_STATUS:
      const { payload: newItem } = action;
      return {
        ...state,
        list: state.list.map((item) => {
          if (item.id === newItem.id) {
            return {
              ...item,
              status: "Y",
            };
          }
          return item;
        }),
      };

    case NEW_CHANGE:
      const { payload: itemChange } = action;
      return {
        ...state,
        list: state.list.map((item) => {
          if (item.id === itemChange.id) {
            return {
              ...item,
              name: itemChange.name,
              description: itemChange.description,
              category: itemChange.category,
              importance: itemChange.importance,
            };
          }
          return item;
        }),
      };
    default:
      return state;
  }
};
