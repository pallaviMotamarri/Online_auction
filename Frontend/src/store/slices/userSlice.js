// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { toast } from "react-toastify";

// const userSlice=createSlice({
//     name:"user",
//     initialState:{
//         loading:false,
//         isAuthenticated:false,
//         user:{},
//         leaderboard:[],
//     },
//     reducers:{
//         registerRequest(state, action) {
//             state.loading = true;
//             state.isAuthenticated = false;
//             state.user = {};
//           },
//           registerSuccess(state, action) {
//             state.loading = false;
//             state.isAuthenticated = true;
//             state.user = action.payload.user;
//           },
//           registerFailed(state, action) {
//             state.loading = false;
//             state.isAuthenticated = false;
//             state.user = {};
//           },
//           loginRequest(state, action) {
//             state.loading = true;
//             state.isAuthenticated = false;
//             state.user = {};
//           },
//           loginSuccess(state, action) {
//             state.loading = false;
//             state.isAuthenticated = true;
//             state.user = action.payload.user;
//           },
//           loginFailed(state, action) {
//             state.loading = false;
//             state.isAuthenticated = false;
//             state.user = {};
//           },
//           fetchUserRequest(state, action) {
//             state.loading = true;
//             state.isAuthenticated = false;
//             state.user = {};
//           },
//           fetchUserSuccess(state, action) {
//             state.loading = false;
//             state.isAuthenticated = true;
//             state.user = action.payload;
//           },
//           fetchUserFailed(state, action) {
//             state.loading = false;
//             state.isAuthenticated = false;
//             state.user = {};
//           },
//         logoutSuccess(state,action){
//             state.isAuthenticated=false;
//             state.user={};
//         },
//         logoutFailed(state,action){
//             state.loading=false;
//             state.isAuthenticated=state.isAuthenticated;
//             state.user=state.user;
//         },
//         fetchLeaderboardRequest(state, action) {
//             state.loading = true;
//             state.leaderboard = [];
//           },
//           fetchLeaderboardSuccess(state, action) {
//             state.loading = false;
//             state.leaderboard = action.payload;
//           },
//           fetchLeaderboardFailed(state, action) {
//             state.loading = false;
//             state.leaderboard = [];
//           },
//         clearAllErrors(state,action){
//             state.user=state.user;
//             state.isAuthenticated=state.isAuthenticated;
//             state.leaderboard=state.leaderboard;
//             state.loading=false;
//         },
//     },
// });

// export const register = (data) => async (dispatch) => {
//     dispatch(userSlice.actions.registerRequest());
//     try {
//       const response = await axios.post(
//         "http://localhost:5001/api/v1/user/register",
//         data,
//         {
//           withCredentials: true,
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );
//       dispatch(userSlice.actions.registerSuccess(response.data));
//       toast.success(response.data.message);
//       dispatch(userSlice.actions.clearAllErrors());
//     } catch (error) {
//       dispatch(userSlice.actions.registerFailed());
//       toast.error(error.response.data.message);
//       dispatch(userSlice.actions.clearAllErrors());
//     }
//   };

//   export const login = (data) => async (dispatch) => {
//     dispatch(userSlice.actions.loginRequest());
//     try {
//       const response = await axios.post(
//         "http://localhost:5001/api/v1/user/login",
//         data,
//         {
//           withCredentials: true,
//           headers: { "Content-Type": "application/json" },
//         }
//       );
//       dispatch(userSlice.actions.loginSuccess(response.data));
//       toast.success(response.data.message);
//       dispatch(userSlice.actions.clearAllErrors());
//     } catch (error) {
//       dispatch(userSlice.actions.loginFailed());
//       toast.error(error.response.data.message);
//       dispatch(userSlice.actions.clearAllErrors());
//     }
//   };

// export const logout =() => async(dispatch)=>{
//     try{
//         const response=await axios.get("http://localhost:5001/api/v1/user/logout",{withCredentials:true});
//         dispatch(userSlice.actions.logoutSuccess());
//         toast.success(response.data.message);
//         dispatch(userSlice.actions.clearAllErrors());
//     }catch(error){
//         dispatch(userSlice.actions.logoutFailed());
//         toast.error(error.response.data.message);
//         dispatch(userSlice.actions.clearAllErrors);
//     }  
// };

// export const fetchUser = () => async (dispatch) => {
//     dispatch(userSlice.actions.fetchUserRequest());
//     try {
//       const response = await axios.get("http://localhost:5001/api/v1/user/me", {
//         withCredentials: true,
//       });
//       dispatch(userSlice.actions.fetchUserSuccess(response.data.user));
//       dispatch(userSlice.actions.clearAllErrors());
//     } catch (error) {
//       dispatch(userSlice.actions.fetchUserFailed());
//       dispatch(userSlice.actions.clearAllErrors());
//       console.error(error);
//     }
//   };

//   export const fetchLeaderboard = () => async (dispatch) => {
//     dispatch(userSlice.actions.fetchLeaderboardRequest());
//     try {
//       const response = await axios.get(
//         "http://localhost:5001/api/v1/user/leaderboard",
//         {
//           withCredentials: true,
//         }
//       );
//       dispatch(
//         userSlice.actions.fetchLeaderboardSuccess(response.data.leaderboard)
//       );
//       dispatch(userSlice.actions.clearAllErrors());
//     } catch (error) {
//       dispatch(userSlice.actions.fetchLeaderboardFailed());
//       dispatch(userSlice.actions.clearAllErrors());
//       console.error(error);
//     }
//   };


// export default userSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    isAuthenticated: false,
    user: {},
    leaderboard: [],
    error: null,  // ✅ Added error state
  },
  reducers: {
    registerRequest(state) {
      state.loading = true;
      state.isAuthenticated = false;
      state.user = {};
      state.error = null;
    },
    registerSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
    registerFailed(state, action) {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = {};
      state.error = action.payload; // ✅ Store error message
    },
    loginRequest(state) {
      state.loading = true;
      state.isAuthenticated = false;
      state.user = {};
      state.error = null;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
    loginFailed(state, action) {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = {};
      state.error = action.payload;
    },
    fetchUserRequest(state) {
      state.loading = true;
      state.isAuthenticated = false;
      state.user = {};
    },
    fetchUserSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    fetchUserFailed(state, action) {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = {};
      state.error = action.payload;
    },
    logoutSuccess(state) {
      state.isAuthenticated = false;
      state.user = {};
    },
    logoutFailed(state, action) {
      state.loading = false;
      state.error = action.payload; // ✅ Store logout error
    },
    fetchLeaderboardRequest(state) {
      state.loading = true;
      state.leaderboard = [];
    },
    fetchLeaderboardSuccess(state, action) {
      state.loading = false;
      state.leaderboard = action.payload;
    },
    fetchLeaderboardFailed(state, action) {
      state.loading = false;
      state.leaderboard = [];
      state.error = action.payload;
    },
    clearAllErrors(state) {
      state.error = null;
    },
  },
});

// export const register = (data) => async (dispatch) => {
//   dispatch(userSlice.actions.registerRequest());
//   try {
//     const response = await axios.post(
//       "http://localhost:5001/api/v1/user/register",
//       data,
//       {
//         withCredentials: true,
//         headers: { "Content-Type": "multipart/form-data" },
//       }
//     );
//     console.log("✅ Response from backend:", response.data); // ✅ Debugging Step
//     dispatch(userSlice.actions.registerSuccess(response.data));
//     toast.success(response.data.message);
//   } catch (error) {
//     const errorMessage = error.response?.data?.message || "Registration failed!";
//     dispatch(userSlice.actions.registerFailed(errorMessage));
//     toast.error(errorMessage);
//   }
// };

export const register = (data) => async (dispatch) => {
  dispatch(userSlice.actions.registerRequest());

  try {
    console.log("📤 Sending data to backend:", data); // ✅ Log before request

    const response = await axios.post(
      "http://localhost:5001/api/v1/user/register",
      data,
      {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    console.log("✅ Response from backend:", response.data); // ✅ Log response
    dispatch(userSlice.actions.registerSuccess(response.data));
    toast.success(response.data.message);
  } catch (error) {
    console.error("❌ Register Error:", error.response?.data || error.message);
    dispatch(userSlice.actions.registerFailed());
    toast.error(error.response?.data?.message || "Registration failed!");
  }
};



// export const login = (data) => async (dispatch) => {
//   dispatch(userSlice.actions.loginRequest());
//   try {
//     const response = await axios.post(
//       "http://localhost:5001/api/v1/user/login",
//       data,
//       {
//         withCredentials: true,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//     dispatch(userSlice.actions.loginSuccess(response.data));
//     toast.success(response.data.message);
//   } catch (error) {
//     const errorMessage = error.response?.data?.message || "Login failed!";
//     dispatch(userSlice.actions.loginFailed(errorMessage));
//     toast.error(errorMessage);
//   }
// };
export const login = (data) => async (dispatch) => {
  dispatch(userSlice.actions.loginRequest());
  try {
    const response = await axios.post(
      "http://localhost:5001/api/v1/user/login",
      data,
      {
        withCredentials: true, // ✅ MUST BE TRUE
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch(userSlice.actions.loginSuccess(response.data));
    toast.success(response.data.message);
  } catch (error) {
    console.error("❌ Login Network Error:", error.message);
    toast.error(error.response?.data?.message || "Login failed");
  }
};


export const logout = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:5001/api/v1/user/logout", { withCredentials: true });
    dispatch(userSlice.actions.logoutSuccess());
    toast.success(response.data.message);
  } catch (error) {
    const errorMessage = error.response?.data?.message || "Logout failed!";
    dispatch(userSlice.actions.logoutFailed(errorMessage));
    toast.error(errorMessage);
  }
};

export const fetchUser = () => async (dispatch) => {
  dispatch(userSlice.actions.fetchUserRequest());
  try {
    const response = await axios.get("http://localhost:5001/api/v1/user/me", {
      withCredentials: true,
    });
    dispatch(userSlice.actions.fetchUserSuccess(response.data.user));
  } catch (error) {
    const errorMessage = error.response?.data?.message || "Fetching user failed!";
    dispatch(userSlice.actions.fetchUserFailed(errorMessage));
    console.error(errorMessage);
  }
};

export const fetchLeaderboard = () => async (dispatch) => {
  dispatch(userSlice.actions.fetchLeaderboardRequest());
  try {
    const response = await axios.get("http://localhost:5001/api/v1/user/leaderboard", {
      withCredentials: true,
    });
    dispatch(userSlice.actions.fetchLeaderboardSuccess(response.data.leaderboard));
  } catch (error) {
    const errorMessage = error.response?.data?.message || "Fetching leaderboard failed!";
    dispatch(userSlice.actions.fetchLeaderboardFailed(errorMessage));
    console.error(errorMessage);
  }
};

export default userSlice.reducer;
