import { auth } from "express-oauth2-jwt-bearer";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
import User from "../models/user";

// add custom properties to express request
declare global {
    namespace Express {
        interface Request {
            userId: String;
            auth0Id: String;
        }
    }
}

// connect us to auth0 service based on the credentials that we use whenever we create the account
export const jwtCheck = auth({ //check the authorization header for the bear token from frontend
    audience: process.env.AUTH0_AUDIENCE,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
    tokenSigningAlg: 'RS256'
});


// convert auth0Id into userId and pass it into update in myUserController
export const jwtParse = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers
    if (!authorization || !authorization.startsWith("Bearer ")) {
        return res.sendStatus(404)
    }

    const token = authorization.split(" ")[1]

    //decode using jsonwebtoken
    try {
        const decoded = jwt.decode(token) as jwt.JwtPayload
        const auth0Id = decoded.sub //hold the auth0 id of the user
        const user = await User.findOne({ auth0Id })
        if (!user) {
            return res.status(401).send("Unauthorized")
        }

        req.auth0Id = auth0Id as string
        req.userId = user._id.toString()

        next()
    } catch (error) {
        return res.sendStatus(401)
    }

}
