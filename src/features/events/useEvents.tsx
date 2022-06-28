import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAllInitialData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "EVENTS_FETCH_REQUESTED" });
  }, []);

  function refetchEvents() {
    dispatch({ type: "EVENTS_FETCH_REQUESTED" });
  }
  return { refetchEvents };
};

export default useGetAllInitialData;
