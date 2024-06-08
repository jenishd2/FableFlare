import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

// AuthServices class to manage authentication
export class AuthServices {
    client;
    account;

    constructor() {
        this.client = new Client()
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            // If the user is successfully created, log them in
            if (userAccount) {
                return this.loginAccount({ email, password });
            }
            else{
                return userAccount
            }
        } catch (error) {
            throw new Error(`Failed to create account: ${error.message}`);
        }
    }

    async loginAccount({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            throw new Error(`Failed to login: ${error.message}`);
        }
    }

    async getAccount() {
        try {
            return await this.account.get();
        } catch (error) {
            throw new Error(`Failed to get account details: ${error.message}`);
        }
        return null;
    }

    async Logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw new Error(`Failed to logout: ${error.message}`);
        }
    }

    async GoogleLogin(){
        
    }
}

const authServices = new AuthServices();

export default authServices;
