export type TUser = {
    name: string; 
    email: string; 
    photo: string; 
    password: string
    role: 'admin' | 'user'; 
    isDeleted: boolean;
}