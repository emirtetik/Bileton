import { useSelector } from "react-redux"
import { Account } from "../../types";

 interface AuthState {
    auth:{
    account: Account
}

}

export const useAccount = () => {return useSelector((state:AuthState) => state.auth.account);}
