const baseUrlDev = "http://cloud-music.pl-fe.cn/";
const baseUrlProduct = "http://localhost:3000/";

export const baseURL = process.env.NODE_ENV === "development" ? baseUrlDev : baseUrlProduct;
export const timeout = 5000;
