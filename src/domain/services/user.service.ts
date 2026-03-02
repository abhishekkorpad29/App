import { UserRepository } from "../repositories/user.repository";

export class UserService {
    private repo = new UserRepository();

    async getUsers() {
        return this.repo.findAll();
    }

    async createUser(name: string, email: string, contact_number: string, profile_pic  : string) {
       
        if (!email.includes("@")) {
            throw new Error("Invalid Email");
        }
        return this.repo.create(name, email, contact_number, profile_pic );
       
    }
}