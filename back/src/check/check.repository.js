const loginRepo = ({ userid, userpw }) => {
  try {
    const id = "cloudcoke";
    const password = "92fa30bfd0cf10af657499883e9a3da10023d2bebb8788d71bfef74022177ae8";
    if (userid === id && userpw === password) {
      return { name: "cloud", email: "cloudcoke@gmail.com" };
    }
    return false;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = { loginRepo };
