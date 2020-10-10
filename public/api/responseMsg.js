const responseCode = (code) => {
  const RESPONSE_CODE = {
    AP: "duplicate",
    NF: "nullField",
    InD: "invalidId",
  };
  return RESPONSE_CODE[code];
};

const responseMsg = {
  duplicate: "Already present.",
  nullField: "Email and Name both are required.",
  invalidId: "Invalid member with member id has been requested.",
};

const throwErrResponse = (res, type) => {
  switch (type) {
    case "AP": //AP-->Already Present
      res.status(400).json({
        msg: responseMsg[responseCode(type)],
      });
      break;

    case "NF": //NF --> Null Field
      res.status(400).json({
        msg: responseMsg[responseCode(type)],
      });
      break;
    case "InD": //Ind-->Invalid Id
      res.status(400).json({
        msg: responseMsg[responseCode[type]],
      });
      break;
  }
};

module.exports = throwErrResponse;
