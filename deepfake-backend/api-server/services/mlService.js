import axios from "axios";
import FormData from "form-data";
import fs from "fs";

export const callMLService = async (filePath, isVideo) => {
  const formData = new FormData();
  formData.append("file", fs.createReadStream(filePath));

  const endpoint = isVideo
    ? "http://127.0.0.1:8000/predict/video"
    : "http://127.0.0.1:8000/predict/image"
;

  const response = await axios.post(endpoint, formData, {
    headers: formData.getHeaders(),
  });

  return response.data;
};
