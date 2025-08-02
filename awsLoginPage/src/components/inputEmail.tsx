import { useState } from "react";

interface Pros {
    type: string; 
    label: string;
    placeHolder: string;
}

export default function InputEmail({ type, label, placeHolder }: Pros) {

const [email, setEmail] = useState('');
const handleSubmit = (e: React.FormEvent) => {
   e.preventDefault() 
   console.log("Email submitted:", email);
}
    return (
        <form className="mt-[3rem] mb-3" action="" method="post">
            <label className="font-[700] text-[1.2rem] font-inter">
                {label}
                <div className="border-[var(--border-color)] mt-[0.5rem] rounded-[0.3rem]  border-[0.1rem] flex items-center">
                    <input
                        type={type}              
                        placeholder={placeHolder}
                        className="font-inter text-[1.2rem] w-full bg-[var(--bg-input)] font-[400] text-[var(--first-text-color)] outline-none rounded-[0.3rem] px-3 py-2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
            </label>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    );
}