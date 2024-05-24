import https from "../https-common";
import measureAPI from "../https-measure-common";

class FileUploadService {
  base64ToBlob(base64String, contentType) {
    const byteCharacters = btoa(base64String);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: contentType });
  }

  tryon(modelType, model, garmentType, garment, onUploadProgress) {
    
    switch (garmentType) {
      case 'Upper':
        garmentType = 'Upper-body';
        break;
      case 'Lower':
        garmentType = 'Lower-body';
        break;
      case 'Dress':
        garmentType = 'Dress';
        break;
      default:
        garmentType = 'Upper-body';
    }

    return https.post("/", {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      model: model,
      garment: garment,
      modelType: modelType,
      garmentType: garmentType,
      onUploadProgress,
    });
  }

  tryon_new(modelType, model, garmentType, subgarmentType, garment, onUploadProgress) {
    
    switch (garmentType) {
      case 'Upper':
        garmentType = 'upper_body';
        break;
      case 'Lower':
        garmentType = 'lower_body';
        break;
      case 'Dress':
        garmentType = 'dresses';
        break;
      default:
        garmentType = 'upper_body';
    }

    return https.post("/virtual-fit", {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      model: model,
      garment: garment,
      modelType: modelType,
      garmentType: garmentType,
      subgarmentType: subgarmentType,
      onUploadProgress,
    });
  }

  measure(model, height, onUploadProgress) {
    let formData = new FormData();

    return measureAPI.post("/measure", {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      model: model,
      height: height,
      onUploadProgress,
    });
  }

  getFiles() {
    return https.get("/");
  }
}

export default new FileUploadService();