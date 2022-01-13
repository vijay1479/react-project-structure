import {createStore ,applyMiddleware ,combineReducers}  from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import AuthReducer from "./auth/auth.reducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
    // transforms: [
    //   encryptTransform({
    //     secretKey: localStorage.getItem("login-token") || "recru@123",
    //     onError: function (error) {
    //       // Handle the error.
    //       console.log(error)
    //     },
    //   }),
    // ],
  }

const rootReducer = combineReducers({auth:AuthReducer});
const persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(persistedReducer ,composeWithDevTools(applyMiddleware(thunk)));
let persistor = persistStore(store);
export {store ,persistor};
