uploadImage(imageFile); {
  return new Promise((resolve, reject) => {
    let imageFormData = new FormData();

    imageFormData.append('imageFile', imageFile);
    
    var xhr = new XMLHttpRequest();
    
    xhr.open('post', '/upload', true);
    
    xhr.onload = function () {
      if (this.status == 200) {
        resolve(this.response);
      } else {
        reject(this.statusText);
      }
    };
    
    xhr.send(imageFormData);

  });
}
