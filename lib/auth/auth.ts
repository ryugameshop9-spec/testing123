import jwt from 'jsonwebtoken';
export function signAdminToken(payload:any){return jwt.sign(payload,process.env.JWT_SECRET||'dev',{expiresIn:'1d'});}
