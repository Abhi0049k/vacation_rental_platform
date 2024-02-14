import { useRecoilValue } from "recoil";
import { childrenPropI } from "../shared/types";
import { Navigate } from "react-router-dom";
import { FC } from "react";
import { tokenAtom } from "../stores/authentication.atom";

const ProtectedRoute: FC<childrenPropI> = ({ children }) => {
    const token = useRecoilValue<string>(tokenAtom);
    console.log(token);
    return token ? children : <Navigate to={"/host-login"} />
}

export default ProtectedRoute