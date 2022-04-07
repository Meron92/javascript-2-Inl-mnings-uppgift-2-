import { createStore } from "redux";
import reducers from './Reducer/index'
// Skapar min store och lägger till min reducer
const store = createStore(reducers,{},
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



export default store;