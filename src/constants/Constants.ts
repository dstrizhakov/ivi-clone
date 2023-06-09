export const REGEX_ANY = /^.*$/;

export const REGEX_PASSWORD = /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{6,32}$/; //(?=.*[A-Z]) req: 1 upper
//6-32 symbols, req: 1+ number 1+ lower
