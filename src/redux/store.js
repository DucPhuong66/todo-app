// import {legacy_createStore as createStore} from 'redux'
// import rootReducer from './reducer';
// import {composeWithDevTools} from 'redux-devtools-extension'

// const composeEnhancers = composeWithDevTools();

// const store = createStore(rootReducer, composeEnhancers);

// export default store;



// using redux 

import {configureStore} from '@reduxjs/toolkit'
import filtersSlice from '../components/Filters/filtersSlide'
import todoSlice from '../components/TodoList/todoSlice'

const store = configureStore({
    reducer: {
        filters: filtersSlice.reducer,
        todoList: todoSlice.reducer
    }
})

export default store;
