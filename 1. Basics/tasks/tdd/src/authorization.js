// @ts-check

export default class CheckToken {

  constructor(str) {
      this.str = str;
    }

  isToken(str){
    let token = this.str.split("Bearer ")[1];

    if (!token)
      return null;    

    if (token.length < 10){
      throw new Error("The authorization token is too short");
    }

    if (!/^[a-z0-9]+$/ig.test(token)){
      throw new Error("Invalid characters in the authorization token");
    }

    return token;
  }
  }