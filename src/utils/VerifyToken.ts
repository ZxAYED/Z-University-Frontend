import { jwtDecode } from "jwt-decode";

export default function VerifyToken(token: string) {
    return jwtDecode(token)
}
