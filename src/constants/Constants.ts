export const REGEX_ANY = /^.*$/;

export const REGEX_PASSWORD = /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{4,16}$/; //(?=.*[A-Z]) req: 1 upper
//4-16 symbols, req: 1+ number 1+ lower

export const REGEX_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
