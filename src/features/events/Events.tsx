import React from "react";
import { useSelector } from "react-redux";
import { eventsSelector } from "./eventsSlice";

const Events = () => {
  const events = useSelector(eventsSelector);
  return <div>Events: {JSON.stringify(events)}</div>;
};

export default Events;
