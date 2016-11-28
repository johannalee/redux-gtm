function logger() {
  const styles = {
    title: {
      primary: 'color: #1da1f2; font-weight: bold;',
      danger: 'color: #D63230; font-weight: bold;',
      warning: 'color: #F39237; font-weight: bold;',
    },
    label: 'color: #93748A; font-weight: bold;',
  };

  function logEvents(events) {
    if (events.length > 1) {
      console.group('%c Events:', styles.label);
      events.forEach((event, index) => {
        console.log(`%c (${index + 1})`, styles.label, event);
      });
      console.groupEnd('Events');
    } else {
      console.log('%c Event: ', styles.label, events[0]);
    }
  }

  function logAction(action) {
    console.log('%c Action: ', styles.label, action);
  }

  function log(events, action, state, isSavedOffline, wasSavedOffline) {
    if (isSavedOffline) {
      console.group('%c ReduxGTM (saved offline)', styles.title.danger);
      logAction(action);
      logEvents(events);
      console.groupEnd();
    } else if (wasSavedOffline) {
      console.group('%c ReduxGTM (was offline)', styles.title.warning);
      logEvents(events);
      console.groupEnd();
    } else {
      console.group('%c ReduxGTM', styles.title.primary);
      logAction(action);
      logEvents(events);
      console.groupEnd();
    }
  }
  return { log };
}

module.exports = logger;
