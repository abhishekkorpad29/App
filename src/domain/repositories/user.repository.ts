import { pool } from "../../infrastructure/db/mysql";
import { User } from "../entities/User";

export class UserRepository {
    async findAll(): Promise<User[]> {
        const [rows] = await pool.query("SELECT * FROM users");
        return rows as User[];
    }

    async create(
        user : User
    ) {
        const [result]: any = await pool.query(
            "INSERT INTO users (name, email ,password , contact_number, profile_pic) VALUES (?, ?,?, ?, ?)",
            [user.name,user.email,user.password,user.contactNumber,user.profilePic]
        );

        // 🔥 RETURN CREATED USER ID
        return {
            id: result.insertId,
            name: user.name,
            email: user.email,
            contactNumber: user.contactNumber,
            profilePic: user.profilePic
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

    async findByEmailOrContact(identifier: string): Promise<User | null> {

        const [rows]: any = await pool.query(
            `SELECT * FROM users 
             WHERE email = ? OR contact_number = ?
             LIMIT 1`,
            [identifier, identifier]
        );

        return rows.length ? rows[0] : null;
    }
}