export function usePubSub() {
  const events = {};

  function subscribe(eventName, callbackFn) {
    console.log(`PUBSUB: someone just subscribed to know about ${eventName}`);
    //add an event with a name as new or to existing event from list
    events[eventName] = events[eventName] || [];
    events[eventName].push(callbackFn);
  }

  function unsubscribe(eventName, callbackFn) {
    console.log(`PUBSUB: someone just Unsubscribed from ${eventName}`);
    //remove an event function by name
    if (events[eventName]) {
      events[eventName] = events[eventName].filter((f) => f !== callbackFn);
    }
  }

  function publish(eventName, data) {
    console.log(
      `PUBSUB: Making a broadcast about ${eventName} with previous value being: ${data}`
    );
    //emit|publish|dispatch the event to anyone who is subscribed
    if (events[eventName]) {
      events[eventName].forEach((f) => {
        f(data);
      });
    }
  }
  return [subscribe, unsubscribe, publish];
}
