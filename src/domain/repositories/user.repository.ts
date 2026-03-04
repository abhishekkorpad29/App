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
        password: string,
        contact_number: string,
        profile_pic: string | null
    ) {
        const [result]: any = await pool.query(
            "INSERT INTO users (name, email ,password , contact_number, profile_pic) VALUES (?, ?,?, ?, ?)",
            [name, email,password, contact_number, profile_pic]
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

    async findByEmail(email: string): Promise<User | null> {
        const [rows]: any = await pool.query(
            "SELECT * FROM users WHERE email = ?",
            [email]
        );

        if (rows.length === 0) {
            return null;
        }

        return rows[0] as User;
    }
    async findByContactNumber(contact_number: string) {
        const [rows]: any = await pool.query(
            "SELECT * FROM users WHERE contact_number = ?",
            [contact_number]
        );
        return rows[0];
    }
}