import axios from 'axios';




// Handle Log In Api calls
export const loginCall = async (userCredentials, dispatch) => {

    // Dispatch the Login Start Action
    dispatch({ type: "LOGIN_START" });

    try {
        // Login Post request with axios - dispatch Login Success Action with User if successful
        const res = await axios.post("auth/login", userCredentials);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });

    } catch (err) {
        // Dispatch the Login Failure action if any errors caught
        dispatch({ type: "LOGIN_FAILURE", payload: err});
    }
}