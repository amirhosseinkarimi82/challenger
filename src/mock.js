export const mockGetToken = (number, code) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log({ number, code });
      resolve("this is token");
    }, 5000);
  });
};
