import { pool } from "../../infrastructure/db/mysql";
import { User } from "../entities/User";

export class UserRepository {
    async findAll(): Promise<User[]> {
        const [rows] = await pool.query("SELECT * FROM users");
        return rows as User[];
    }

    async create(
        name: string,
        email: string,
        contact_number: string,
        profile_pic: string | null
    ) {
        const [result]: any = await pool.query(
            "INSERT INTO users (name, email, contact_number, profile_pic) VALUES (?, ?, ?, ?)",
            [name, email, contact_number, profile_pic]
        );

        // 🔥 RETURN CREATED USER ID
        return {
            id: result.insertId,
            name,
            email,
            contact_number,
            profile_pic,
        };
    }

    async updateProfilePic(userId: number, profilePic: string) {
        await pool.query(
            "UPDATE users SET profile_pic = ? WHERE id = ?",
            [profilePic, userId]
        );
    }
}