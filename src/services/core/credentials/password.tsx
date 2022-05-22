export class Password {

    private static QTD_SPECIAL_CHARS = 1;
  
    private static QTD_UPPER_CASES = 1;
  
    private static QTD_LOWER_CASES = 1;
  
    private static QTD_NUMBERS = 1;
  
    private static MIN_LENGTH = 8;
  
    private static MAX_LENGTH = 20;
  
    // Needs to figure out how to add the regex for consecutive
    private static REGEX = '^'
      + `(?=.*[a-z]{${Password.QTD_LOWER_CASES},})`
      + `(?=.*[A-Z]{${Password.QTD_UPPER_CASES},})`
      + `(?=.*[0-9]{${Password.QTD_NUMBERS},})`
      + `(?=.*[!@#$%^&*]{${Password.QTD_SPECIAL_CHARS},})`
      + `(?=.{${Password.MIN_LENGTH},${Password.MAX_LENGTH}})`;
  
    public static REGEXP = new RegExp(Password.REGEX);
  
    value: string;
  
  
    constructor(value: string) {
  
      this.value = value;
      Password.checkIsPassword(value);
  
    }
  
    private static checkIsPassword(value: string): void {
  
      const isEmail = Password.REGEXP.test(value);
      if (!isEmail) {
  
        throw new Error(`Provided value=${value} is not a valid password.`);
  
      }
  
    }
  
  }
  