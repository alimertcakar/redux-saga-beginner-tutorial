import React from "react";
import Events from "./features/events/Events";
import useGetAllInitialData from "./features/events/useEvents";

function App() {
  const { refetchEvents } = useGetAllInitialData();
  return (
    <div>
      <button onClick={refetchEvents}>Refetch Events</button>
      <Events />
    </div>
  );
}

export default App;
