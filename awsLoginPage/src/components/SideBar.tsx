import { Mail, UserRound } from "lucide-react";
import type { ReactNode } from "react";
import { matchPath, useLocation } from "react-router-dom";

interface StepTypes {
    path: string;
    title: string;
    subtitle: string;
    icon: ReactNode
}
const Steps: StepTypes[] = [
    {
        path: "/auth/create",
        title: "Inscription",
        subtitle: "Entrez vos informations personnelles",
        icon: <UserRound />
    },
    {
        path: "/auth/otp",
        title: "Validation OTP",
        subtitle: "Confirmez votre adresse e-mail",
        icon: <Mail />
    },
    {
        path: "/auth/invite",
        title: "Invitez vos amis",
        subtitle: "Invitez vos amis",
        icon: <UserRound />
    },
    {
        path: "/auth/welcome",
        title: "Inscription",
        subtitle: "Entrez vos informations personnelles",
        icon: <UserRound />
    }
]
const SideBar = () => {
    const location = useLocation()
    return (
        <div className='bg-gray-100 h-screen'>
            <div className="space-y-4">

                {
                    Steps.map((step, index) => {
                        const isActive = !!matchPath(step.path, location.pathname)

                        return (
                            <div className="flex items-center gap-2" key={index}>
                                <div className="border border-gray-700 rounded-lg p-4">{step.icon}</div>
                                <div className="flex flex-col">
                                    <h1 className={` text-gray-500 text-xl first-line ${isActive ? "text-black font-bold" : " "}`}>{step.title}</h1>
                                    <h2 className="text-gray-500 text-xs">{step.subtitle}</h2>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default SideBar