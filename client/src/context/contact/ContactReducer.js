import {
  ADD_CONTACT,
  DELETE_CONTACT,
  REMOVE_ALERT,
  FILTER_CONTACT,
  SET_ALERT,
  SET_CURRENT,
  UPDATE_CONTACT,
  CLEAR_CURRENT,
  CLEAR_FILTER,
} from "../types";
export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
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
        current: null,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };
    case FILTER_CONTACT:
        return{
            ...state,
            filter:state.contacts.filter(contact=>{
                const regEx=new RegExp(`${action.payload}`,"gi")
                return contact.name.match(regEx)||contact.email.match(regEx)
            })
        }
    case CLEAR_FILTER:
        return{
            ...state,
            filter:null
        }
    default:
      return state;
  }
};
