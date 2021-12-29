import { createContext, useReducer } from "react";

import AuthReducer from './AuthReducer';



// Setting intial state for context
const INITIAL_STATE = {
    user: {
        _id: "619bffe9e875e1bd07a72f48",
        username: "bob",
        email: "bob@gmail.com",
        profilePicture: "person/1.jpeg",
        coverPicture: "",
        isAdmin: false,
        followers: [],
        following: []
    },
    isFetching: false,
    error: false
};



// Create Context for User authentification
export const AuthContext = createContext(INITIAL_STATE);





// Create Provider For User Auth Context to wrap around project
export const AuthContextProvider = ({ children }) => {

    // Conext state and method for dispatching data
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider value={{ user: state.user, isFetching: state.isFetching, error: state.error, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}