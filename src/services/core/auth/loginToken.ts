export class LoginToken {
    
    private static REFRESH_LIMIT_MIN = 10;

    constructor(
        public authorization: string,
        public when: Date
    ) { }

    public shouldRefresh(): boolean {

        const refreshDate = new Date();
        refreshDate.setMinutes(new Date().getMinutes() + LoginToken.REFRESH_LIMIT_MIN);
    
        return refreshDate.getTime() >= this.when.getTime();
    
      }
}