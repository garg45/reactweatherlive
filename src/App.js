import React from "react";
import Form from "./components/Form";
import { ContextApi } from "./components/store/ContextApi";

const App = () => {
  return (
    <>
      <div>
        <ContextApi>
          <Form />
        </ContextApi>
      </div>
    </>
  );
};

export default App;
