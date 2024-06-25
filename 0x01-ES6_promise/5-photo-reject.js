// 5-photo-reject.js

function uploadPhoto(fileName) {
  return Promise.reject(new Error(`${fileName} cannot be processed`));
}

export default uploadPhoto;

