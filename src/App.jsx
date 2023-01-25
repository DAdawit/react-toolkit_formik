import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Cakeview from "./features/cake/Cakeview";
import Icecreamview from "./features/icecream/Icecreamview";
import Userview from "./features/user/Userview";
import FormsView from "./components/FormsView";
import OldForm from "./components/oldForm";
function App() {
  return (
    <div className="App">
      <FormsView />
      <OldForm />
      {/* <Cakeview />
      <Icecreamview />
      <Userview /> */}
    </div>
  );
}

export default App;
