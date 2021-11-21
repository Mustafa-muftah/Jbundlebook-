import "bulmaswatch/superhero/bulmaswatch.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import  ReactDOM  from "react-dom";
import { Provider } from "react-redux";
import CellList from "./Componant/Cell-List";
import { Store } from "./state";


 const App =() => {
  
  return (
    <div>
    <Provider store={Store}>
      <CellList/>
  </Provider>
  </div>
  )
}

ReactDOM.render(
  <App/> ,
  document.querySelector("#root")
)