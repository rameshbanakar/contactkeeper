import {
  GET_CONTACT,
  ADD_CONTACT,
  DELETE_CONTACT,
  REMOVE_ALERT,
  FILTER_CONTACT,
  SET_ALERT,
  SET_CURRENT,
  UPDATE_CONTACT,
  CLEAR_CURRENT,
  CLEAR_FILTER,
  CONTACT_ERROR,
  CLEAR_CONTACT,
} from "../types";
export default (state, action) => {
  switch (action.type) {
    case GET_CONTACT:
      return {
        ...state,
        contacts: action.payload,
        loading: false,
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload,...state.contacts ],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact._id !== action.payload
        ),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        contacts: [],
        current: null,
        filter: null,
        error: null,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact._id === action.payload._id ? action.payload : contact
        ),
      };
    case FILTER_CONTACT:
      return {
        ...state,
        filter: state.contacts.filter((contact) => {
          const regEx = new RegExp(`${action.payload}`, "gi");
          return contact.name.match(regEx) || contact.email.match(regEx);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filter: null,
      };
    case CONTACT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
