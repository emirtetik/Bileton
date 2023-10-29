import { useAccount } from "../../../store/auth/hooks"
import AdminLogin from "../../login/admin"
import { useLogin } from "../../../store/auth/hooks"
import { useNavigate } from "react-router-dom"
import { setCurrentLogin } from "../../../store/auth/actions"
import {FiLogOut} from "react-icons/fi"

const Account = () => {
    const account = useAccount()
    const isLoggedIn = useLogin()
    const navigate = useNavigate();
     

    const handleLogout = () => {
        setCurrentLogin(false);
        navigate("/");
    }
  return (
    <div>
    {isLoggedIn ? (
      <div className="flex gap-3 items-center font-raleway group">
        <div className="flex items-center w-full p-1 transition-colors rounded-lg cursor-pointer bg-white/10 group-hover:bg-fourth gap-2">
          <img className="w-10 h-10 rounded-full " src={account.avatar} alt="avatar" />
          <h6 className=" font-medium text-third text-tex">{account.fullname}</h6>
        </div>
        <button onClick={handleLogout}>
          <FiLogOut className="w-6 h-6"/>
          </button>
      </div>
    ) : (
      <AdminLogin/>
    )}
  </div>
  )
}
export default Account