import { UserRepository } from "../repositories/user.repository";

export class UserService {
    private repo = new UserRepository();

    async getUsers() {
        return this.repo.findAll();
    }

   
    async createUser(
        name: string,
        email: string,
        contact_number: string,
        profile_pic: string | null
    ) {
        return await this.repo.create(
            name,
            email,
            contact_number,
            profile_pic
        );
    }
    
    async updateProfilePic(userId: number, profilePic: string) {
        return await this.repo.updateProfilePic(userId, profilePic);
    }
}