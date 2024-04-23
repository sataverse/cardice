import { useNavigate } from "react-router-dom";
import { loadLocalStorage } from "../../Modules/util";
import UserPage from "../Page/UserPage";
import { useEffect } from "react";

const Auth = ({windowWidth}) => {
    const navigate = useNavigate();
    useEffect(() => {
        if(!loadLocalStorage('id')){
            navigate('/');
        }
    }, []);

    return  (
        <>
            {!loadLocalStorage('id') ? null : <UserPage windowWidth={windowWidth} />}
        </>
    );
}

export default Auth;