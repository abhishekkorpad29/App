import { UserRepository } from "../repositories/user.repository";
import bcrypt from "bcrypt";

export class UserService {
    private repo = new UserRepository();

    async getUsers() {
        return this.repo.findAll();
    }

   
    async createUser(
        name: string,
        email: string,
        password:string ,
        contact_number: string,
        profile_pic: string | null
    ) {
        // 🔎 Check if user already exists
        const existingUser = await this.repo.findByEmail(email);

        if (existingUser) {
            throw new Error("User already exists with this email");
        }

        const existingContact = await this.repo.findByContactNumber(contact_number);

        if (existingContact) {
            throw new Error("Contact number already exists");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        return await this.repo.create(
            name,
            email,
            hashedPassword,
            contact_number,
            profile_pic
        );
    }
    
    async updateProfilePic(userId: number, profilePic: string) {
        return await this.repo.updateProfilePic(userId, profilePic);
    }

    async loginUser(email: string, password: string) {

        const user = await this.repo.findByEmail(email);

        if (!user) {
            throw new Error("Invalid credentials");
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            throw new Error("Invalid credentials");
        }

        // const token = jwt.sign(
        //     { id: user.id, email: user.email },
        //     JWT_SECRET,
        //     { expiresIn: "1d" }
        // );

        return {
            // token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        };
    }
}
