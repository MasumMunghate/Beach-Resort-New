import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Page/Home"
import Room from "./Page/Rooms"
import Error from "./Page/Error"
import SingleRoom from "./Page/SingleRoom";
import Navbar from "./Component/Navbar";



function App() {
  return (
    <>
    <Navbar/>
    {/*If we are not use Switch we got error page in every page */}  
    <Switch> 
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Room} />
         {/*slug is a variable that we accese when we create a SingalRoom */}
        {/* :slug"  url Paramer. unique information when we click particular Room it give us info. that perticular room that we click*/}
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
