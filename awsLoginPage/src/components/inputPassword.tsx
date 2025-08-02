// contient la logique de validation passwordStrength de l'input et le rend sur une page
import React, { useState } from 'react';
import PasswordInput from './PasswordInput';
import { checkPasswordStrength } from '../utils/utils';

const InputPassword: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const [passwordStrength, setPasswordStrength] = useState<number>(0);

  const handlePasswordChange = (newPassword: string) => {
    setPassword(newPassword);
    const { strength} = checkPasswordStrength(newPassword);
    setPasswordStrength(strength);
  };



  // Fonction pour obtenir la couleur de la barre de force
  const getStrengthBarColor = (index: number) => {
    if (password.length === 0) return 'bg-gray-200'; // Grise si vide

    if (passwordStrength >= index + 1) {
      if (passwordStrength<=1) return 'bg-red-500' 
      if (passwordStrength == 2) return 'bg-orange-500';
      if (passwordStrength === 3) return 'bg-yellow-500';
      if (passwordStrength >= 4) return 'bg-green-500'; 
    }
    return 'bg-gray-200'; 
  };

  return (
    <>
        <label htmlFor="password" className="font-[700] text-[1rem] sm:text-[1.2rem] font-inter ">
          Mot de passe:
        </label>
        <PasswordInput
          onChange={handlePasswordChange}
          placeholder="Entrez votre mot de passe"
          password=''
        />

      {/* Barre du password strength */}
      <div className="mt-2">
        <div className="flex space-x-1 h-3 rounded-full overflow-hidden">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className={`flex-1 rounded-full transition-colors duration-[1s] ${getStrengthBarColor(index)}`}
            ></div>
          ))}
        </div>
      </div>
      </>

  );
};

export default InputPassword;