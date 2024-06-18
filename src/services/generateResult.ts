const generateResult = (name: string): string => {
  const nameLower = name.toLowerCase();
  if (name.length === 4 && nameLower[1] === 'a') {
    return "kerbau";
  }
  if (name.length === 7 && nameLower[0] === 'a') {
    return "batman maling gas lpg";
  }
  if (name.length > 5 && nameLower.includes('e')) {
    return "ular berkepala tiga";
  }
  if (name.length < 4 && nameLower.endsWith('i')) {
    return "harimau putih";
  }
  if (name.length === 6 && nameLower[2] === 'o') {
    return "naga terbang";
  }
  if (name.length === 3 && nameLower[0] === 'b') {
    return "gajah kecil";
  }
  if (name.length > 8 && nameLower[4] === 'n') {
    return "alien dari planet mars";
  }
  if (name.length === 5 && nameLower.includes('s')) {
    return "serigala hitam";
  }
  return "makhluk misterius";
};

export default generateResult;