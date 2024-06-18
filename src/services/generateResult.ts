import { khodamNames } from "../constants/khodamList";

const generateResult = (name: string): string => {
  const nameLower = name.toLowerCase();

  if (name === "") {
    return name;
  }

  let sum = 0;

  // Menghitung jumlah ASCII dari setiap karakter dalam nama anda
  for (let i = 0; i < nameLower.length; i++) {
    sum += nameLower.charCodeAt(i);
  }

  // const randomFactor = Math.floor(Math.random() * 100);
  // const result = ((sum + randomFactor) % 100) + 1;
  const result = (sum % 100) + 1;

  return khodamNames[result];
};

export default generateResult;