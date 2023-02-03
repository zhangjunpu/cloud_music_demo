const baseUrlDev = "http://cloud-music.pl-fe.cn/";
const baseUrlProduct = "http://localhost:3000/";

export const BASE_URL = process.env.NODE_ENV === "development" ? baseUrlDev : baseUrlProduct;
export const TIMEOUT = 5000;
