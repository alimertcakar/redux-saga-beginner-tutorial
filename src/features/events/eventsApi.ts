async function fetchEvents(amount = 1) {
  try {
    const events = await fetch(
      "https://5fd0d08f1f237400166323f2.mockapi.io/events"
    );
    return events.json();
  } catch (e) {
    return e;
  }
}

export { fetchEvents };
