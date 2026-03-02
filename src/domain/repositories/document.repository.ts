import { pool } from "../../infrastructure/db/mysql";
import { Document } from "../entities/Document";

export class DocumentRepository {
    async create(doc: Document): Promise<void> {
        await pool.query(
            "INSERT INTO documents (user_id, document_type, file_name, file_path) VALUES (?, ?, ?, ?)",
            [doc.user_id, doc.document_type, doc.file_name, doc.file_path]
        );
    }
}