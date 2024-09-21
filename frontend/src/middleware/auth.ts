const { auth } = require('express-oauth2-jwt-bearer');

const jwtCheck = auth({
    audience: 'mern-food-ordering-app-api',
    issuerBaseURL: 'https://dev-znrr25c64ptyfixu.us.auth0.com/',
    tokenSigningAlg: 'RS256'
  });