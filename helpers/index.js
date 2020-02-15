import jwtDecode from 'jwt-decode';
let cookieparser = require('cookieparser');

export function getUserFromCookie(req) {
    if (process.server && process.static) return;
    if (!req.headers.cookie) return;

    if (req.headers.cookie) {
        const parsed = cookieparser.parse(req.headers.cookie);
        const accesTokenCookie = parsed.access_token;
        if (!accesTokenCookie) return

        const decodedToken = jwtDecode(accesTokenCookie);
        if (!decodedToken) return;
        return decodedToken
    }
}