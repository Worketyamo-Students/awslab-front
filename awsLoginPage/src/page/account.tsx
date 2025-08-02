import logo from "../../public/logo.svg";
import Header from "../components/header";
// import InputPassword from "../components/inputPassword"
import Ligne2 from "../components/ouAvec";
import Google from "../components/google";
import Github from "../components/github";
import CreateAccount from "../components/createButton";
import Text from "../components/Text";
import LigneProgressive from "../components/footerNav";
import { useState } from "react";
import { axiosRequest } from "../components/Axios";
// import InputEmail from "../components/inputEmail"

export default function Account() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    console.log("Password submitted:", password);

    try {
      const response = await axiosRequest.post(
        "/api/auth/register",
        {
          email: email,
          password: password,
          name: name,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials:true,
                  
        }
      );
      console.log("Response:", response);
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };
  return (
    <div className="px-[2rem] lg:px-[10rem] sm:px-[4rem] pt-[1rem]">
      <Header
        images={logo}
        bigText="Creation de compte"
        smallText="Rentrez vos infos pour creer votre compte ."
      />
      {/* <InputEmail type="email" label="Email" placeHolder="abc@example.com" />
            <InputPassword /> */}
      <input
        type="email"
        placeholder="Entrez votre email"
        className="font-inter text-[1.2rem] w-full bg-[var(--bg-input)] font-[400] text-[var(--first-text-color)] outline-none rounded-[0.3rem] px-3 py-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Entrez votre nom"
        className="font-inter text-[1.2rem] w-full bg-[var(--bg-input)] font-[400] text-[var(--first-text-color)] outline-none rounded-[0.3rem] px-3 py-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="*********"
        value={password}
        className="font-inter text-[1.2rem] w-full bg-[var(--bg-input)] font-[400] text-[var(--first-text-color)] outline-none rounded-[0.3rem] px-3 py-2"
      />
      <button onClick={handleSubmit}>Submit</button>

      <Ligne2 />
      <Github />
      <Google />
      <CreateAccount />
      <Text />
      <div className="mb-12"></div>
      <div className="flex gap-2  justify-center items-center fixed bottom-1 left-1/2 -translate-x-1/2 px-[2rem] w-full ">
        <LigneProgressive color="bg-[#FFA273] opacity-[50%]" />
        <LigneProgressive color="bg-[var(--bg-input)]" />
        <LigneProgressive color="bg-[var(--bg-input)]" />
        <LigneProgressive color="bg-[var(--bg-input)]" />
      </div>
    </div>
  );
}
