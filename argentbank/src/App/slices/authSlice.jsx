import { createSlice} from '@reduxjs/toolkit'
// import { argentBankApi } from '../services/api.services';
// import { logInUser } from '../services/callApi';


// const authSlice = createSlice({
//     name: 'auth',
//     initialState: {
//         token: '',
//         user: {
//             id: '',
//             email: '',
//             password: '',
//             firstName: '',
//             lastName: '',
//             userName: ''
//         },
//     },
//     reducers: {
//         loginUser: (currentState, action) => {
//             currentState.token = action.payload
//         },
//         logout: (currentState) => {
//             currentState.token = null
//             currentState.user = ''
//             localStorage.removeItem('user')
//         },
//         getInfoUser: (currentState, action) => {
//             currentState.user = {...currentState, ...action.payload}
//         },
//         setUsername: (currentState, action) => {
//             currentState.user.userName = action.payload.user.usrname
//         },
//         createUser: (currentState, action) => {
//             currentState.user = action.payload
//         }
//     },
// })

// export const {logout, loginUser, getInfoUser, setUsername} = authSlice.actions
// export default authSlice.reducer

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        user: {
            firstName:'',
            lastName: '',
            email: '',
            password: '',
            userName: ''
        }
    },
    reducers: {
        loginUser: (state, action) => {
            const token = action.payload
            state.token = token
        },
        getInfosUser: (state, action) => {
            const user = action.payload
            state.user = user
            localStorage.getItem('user', JSON.stringify(user))
        }
    },
    // extraReducers: (builder) => {
    //     builder.addCase(logInUser.fulfilled, (state, action) => {
    //         // state = Object.assign({}, state, ...action.payload)
    //         state = action.payload
    //     })
    //     builder.addCase(logInUser.rejected, (state, action) => {
    //         state.error = action.error;
    //     })
        
        // builder.addCase(
        //     argentBankApi.endpoints.login.fulfilled, (state, action) => {
        //         state = Object.assign({}, state, ...action.payload)
        //     }
        // )
        // builder.addMatcher(
        //     argentBankApi.endpoints.login.matchFulfilled,
        //     (state, {payload}) => {
        //         state.token = payload.token
        //         state.user = payload.user
        //     }
        // )
        // builder.addCase(
        //     argentBankApi.endpoints.login.rejected,
        //     (state, action) => {
        //         state.error = action.error;
        //     }
        // )
    // }
})
export const {loginUser} = authSlice.actions
export default authSlice.reducer

// create slice

// const name = 'auth';
// const initialState = createInitialState();
// const reducers = createReducers();
// const extraActions = createExtraActions();
// const extraReducers = createExtraReducers();
// const authSlice = createSlice({ name, initialState, reducers, extraReducers });

// // exports

// export const authActions = { ...authSlice.actions, ...extraActions };
// export default authSlice.reducer;

// // implementation

// function createInitialState() {
//     return {
//         // initialize state from local storage to enable user to stay logged in
//         user: 
//             JSON.parse(localStorage.getItem('user')) ||
//             {
//                 email: '',
//                 password: ''
//             },
//         token: null,
//         error: null
//     }
// }

// function createReducers() {
//     return {
//         logout
//     };

//     function logout(state) {
//         state.user = null;
//         localStorage.removeItem('user');
//     }
// }

// function createExtraActions() {

//     return {
//         login: login()
//     };    

//     function login() {
//         return createAsyncThunk(
//             `${name}/login`,
//             async ({ email, password }) => await Axios.post(`http://localhost:3001/api/v1/user/login`, { email, password })
//         );
//     }
// }

// function createExtraReducers() {
//     return {
//         ...login()
//     };

//     function login() {
//         return (builder) => {
//             builder
//             .addCase(extraActions.login.pending, (state, action) => {
//                 state.error = null}
//             )
//             .addCase(extraActions.login.fulfilled, (state, action) => {
//                 state.token = action.payload
//                 const userInfos = action.payload
//                 localStorage.setItem('user', JSON.stringify(userInfos))
//             }
//             )
//             .addCase(extraActions.login.rejected, (state, action) => {
//                 state.error = action.error}
//             )
//         };
//     }
// }