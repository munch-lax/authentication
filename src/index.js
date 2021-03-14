import reactdom from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import { createStore,applyMiddleware,compose } from 'redux'
import reduxthunk from 'redux-thunk'
import reducers from './reducers'


const composeEnchancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducers,
    composeEnchancers(applyMiddleware(reduxthunk))
    )

reactdom.render(<Provider store={store}>
<App/>
</Provider>,document.querySelector("#root"))