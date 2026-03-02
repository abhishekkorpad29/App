import { AdminRepository } from "../repositories/admin.repository";

export class AdminService {
    private repo = new AdminRepository();

    async getAdmins() {
        return this.repo.findAll();
    }
}