import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./userSlice";
import movieReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice"
const appStore = configureStore({
    reducer:{
        user: userSlice, // this reducer by default we are exporting that
        movies: movieReducer, // same for this one 
        gpt: gptReducer,
        config: configReducer,
    }
})
export default appStore;