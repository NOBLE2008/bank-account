const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createAccount":
      return {
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return {
        fullName: action.payload,
      };
    default:
      return state;
  }
}

export function createAccount(fullName, nationalID, createdAt) {
  return {
    type: "customer/createAccount",
    payload: {
      fullName,
      nationalID,
      createdAt,
    },
  };
}

export function updateName(fullName) {
    return {
    type: "customer/updateName",
    payload: fullName,
  };
}