import { useAccount } from "../../../store/auth/hooks"
const Account = () => {
    const account = useAccount()
  return (
    <div className="flex items-center font-raleway group">
        <div className="flex items-center w-full p-1 transition-all rounded-lg cursor-pointer bg-white/10 group-hover:bg-blue-500/70">
        <img className="w-10 h-10 rounded-full " src={account.avatar} alt="avatar" />
        <h6 className="ml-2 font-bold text-white text-subtitle">{account.fullname}</h6>
        </div>
        </div>
  )
}
export default Account