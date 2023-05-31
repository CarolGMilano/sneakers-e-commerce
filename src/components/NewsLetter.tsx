import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/redux/store";
import { changeMessage, changeValue, validEmail } from "@/redux/reducers/formEmail";

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
    <footer className="bg-[--black] flex justify-center items-center py-12 w-full">
      <div className="md:w-[500px] px-3">
        <h4 className="text-[--beige] text-base pb-2 md:text-center md:pb-4">Join our community for exclusive updates and offers!</h4>
        
        <div className="flex flex-col gap-2 md:flex-row md:relative md:gap-0 md:justify-between">
          <input 
            className={`p-3 rounded-lg border-2 bg-transparent placeholder-zinc-400 text-[--beige] ${!isValid && message !== "" ? "border-red-500" : "border-[--beige]"} md:w-[70%]`}
            type="email" 
            placeholder="email@email.com" 
            value={value} 
            onChange={handleEmailChange} />

          <span className={`text-sm ${isValid ? "text-green-500" : "text-red-500"} md:absolute md:-bottom-7 md:left-2`}>{message}</span>
              
          <button
            className="p-3 rounded-lg bg-[--beige] text-[--black] md:w-[25%]"
            onClick={() => isValidEmail()}
          >subscribe</button>
        </div>
      </div>
    </footer>
  )
}