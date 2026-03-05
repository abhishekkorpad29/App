import { UserRepository } from "../repositories/user.repository";
import bcrypt from "bcrypt";
import { User } from "../entities/User";

export class UserService {
    private repo = new UserRepository();

    async getUsers() {
        return this.repo.findAll();
    }

                                    
    async createUser(
        user: User
    ) {
        // 🔎 Check if user already exists
        const existingUser = await this.repo.findByEmail(user.email);

        if (existingUser) {
            throw new Error("User already exists with this email");
        }

        const existingContact = await this.repo.findByContactNumber(user.contactNumber);

        if (existingContact) {
            throw new Error("Contact number already exists");
        }

        const hashedPassword = await bcrypt.hash(user.password, 10);
        const userr : User = {

            name :user.name,
            email :user.email,
            password: hashedPassword,   // store hashed password
            contactNumber: user.contactNumber,
            profilePic: user.profilePic ?? ""

        }

        return await this.repo.create(
            userr
        );
    }
    
    async updateProfilePic(userId: number, profilePic: string) {
        return await this.repo.updateProfilePic(userId, profilePic);
    }

    async loginUser(identifier: string, password: string) {

        
        const user = await this.repo.findByEmailOrContact(identifier);

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
