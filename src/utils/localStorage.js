export const saveInLocalStorage = (type, content) => {
  localStorage.setItem(type, JSON.stringify(content));
};

export const getElementFromLocalStorage = (type) => {
  return JSON.parse(localStorage.getItem(type));
};
