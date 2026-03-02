import { pool } from "../../infrastructure/db/mysql";
import { Admin } from "../entities/Admin";

export class AdminRepository {
    async findAll(): Promise<Admin[]> {
        const [rows] = await pool.query("SELECT * FROM admins");
        return rows as Admin[];
    }
}