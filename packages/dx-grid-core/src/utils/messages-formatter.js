const processPattern = (pattern, params) =>
  Object.keys(params).reduce(
    (msg, key) =>
      msg.replace(`{${key}}`, params[key]),
    pattern,
  );

export const getMessagesFormatter = messages => (key, params) => {
  const message = messages[key];

  if (typeof message === 'function') {
    return message(params);
  }
  if (params) {
    return processPattern(message, params);
  }
  return message;
};
