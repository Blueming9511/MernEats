import { auth } from "express-oauth2-jwt-bearer";

export const jwtCheck = auth({ //check the authorization header for the bear token 
    audience: process.env.AUTH0_AUDIENCE,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
    tokenSigningAlg: 'RS256'
});
