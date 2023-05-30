import { changeMessage, changeValue, validEmail } from "@/redux/reducers/formEmail";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

export default function NewsLetter () {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.formEmail.value);
  const isValid = useSelector((state: RootState) => state.formEmail.isValidEmail);
  const message = useSelector((state: RootState) => state.formEmail.message);
  
  function handleEmailChange (e: React.ChangeEvent<HTMLInputElement>) {
    const newEmail = e.target.value;
    
    dispatch(changeValue(newEmail));
  }
  
  function isValidEmail () {  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    dispatch(validEmail(emailRegex.test(value)));

    return dispatch(changeMessage());
  }

  return (
    <div className="md:w-[500px] md:m-auto lg:pt-[50px]">
      <h4 className="text-base pb-2 md:text-center md:pb-4">Join our community for exclusive updates and offers!</h4>
      
      <div className="flex flex-col gap-2 md:flex-row md:relative md:gap-0 md:justify-between">
        <input 
          type="email" 
          placeholder="email@email.com" 
          className={`p-3 rounded-lg border-2 border-black bg-transparent placeholder-zinc-400 ${!isValid && message !== "" ? "border-red-500" : "border-black"} md:w-[70%]`}
          value={value} 
          onChange={handleEmailChange} />

        <span className={`text-sm ${isValid ? "text-green-500" : "text-red-500"} md:absolute md:-bottom-7 md:left-2`}>{message}</span>
            
        <button
          className="p-3 rounded-lg bg-[--black] text-[--beige] md:w-[25%]"
          onClick={() => isValidEmail()}
        >subscribe</button>
      </div>
    </div>
  )
}