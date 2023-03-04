export class ApplicationUserCreate {
    constructor(
        public applicationUserId: number, 
        public username: string,
        public fullName: string,
        public email: string,
        public token: string
        
    ){}
}