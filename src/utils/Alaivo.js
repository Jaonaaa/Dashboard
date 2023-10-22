export const alaivoGet = async (url = "", params, options = {}) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "GET",
      ...options,
    })
      .then((response) => response.json())
      .then((responseData) => {
        resolve(responseData);
      })
      .catch((error) => reject(error));
  });
};

export const alaivoDelete = async (url = "", params, options = {}) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "DELETE",
      ...options,
    })
      .then((response) => response.json())
      .then((responseData) => {
        resolve(responseData);
      })
      .catch((error) => reject(error));
  });
};

export const alaivoPut = (url = "", data, options = {}) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "PUT",
      body: data,
      ...options,
    })
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        resolve(responseData);
      })
      .catch((error) => reject(error));
  });
};

export const alaivoPost = (url = "", data, options = {}) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "POST",
      body: data,
      ...options,
    })
      .then((response) => response.json())
      .then((responseData) => {
        resolve(responseData);
      })
      .catch((error) => reject(error));
  });
};
