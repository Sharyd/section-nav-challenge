import React, { useState } from 'react'
import IconArrowDown from '../Icons/IconArrowDown'
import IconArrowUp from '../Icons/IconArrowUp'
import CompanyCard from './CompanyCard'
import FeaturesCard from './FeaturesCard'
import MobileNavigation from './MobileNavigation'
import logo from '/images/logo.svg'

const Navigation = () => {
    const [isActiveFeatures, setIsActiveFeatures] = useState(false)
    const [isActiveCompany, setIsActiveCompany] = useState(false)
    const [activeNav, setActiveNav] = useState(false)

    return (
        <nav className="py-8 px-6 lg:py-7 lg:px-12 flex items-center text-mediumGray justify-between">
            <MobileNavigation
                setActiveNav={setActiveNav}
                activeNav={activeNav}
                setIsActiveCompany={setIsActiveCompany}
                isActiveCompany={isActiveCompany}
                setIsActiveFeatures={setIsActiveFeatures}
                isActiveFeatures={isActiveFeatures}
            />
            <div className="justify-between lg:flex w-full items-center hidden">
                <div className="flex items-center justify-center gap-16">
                    <img src={logo} alt="logo" />
                    <ul className="flex gap-12 items-center justify-center ">
                        <div className="relative">
                            <li
                                onClick={() =>
                                    setIsActiveFeatures((prev) => !prev)
                                }
                                className="flex items-center gap-2 cursor-pointer hoverActiveLinks "
                            >
                                <a href="#">Features</a>
                                {isActiveFeatures ? (
                                    <IconArrowUp />
                                ) : (
                                    <IconArrowDown />
                                )}
                            </li>
                            {isActiveFeatures ? <FeaturesCard /> : null}
                        </div>
                        <div className="relative">
                            <li
                                onClick={() =>
                                    setIsActiveCompany((prev) => !prev)
                                }
                                className="flex items-center gap-2 cursor-pointer hoverActiveLinks"
                            >
                                <a href="#">Company</a>
                                {isActiveCompany ? (
                                    <IconArrowUp />
                                ) : (
                                    <IconArrowDown />
                                )}
                            </li>
                            {isActiveCompany ? <CompanyCard /> : null}
                        </div>
                        <li className="hoverActiveLinks">
                            <a href="#">Careers</a>
                        </li>
                        <li className="hoverActiveLinks">
                            <a href="#">About</a>
                        </li>
                    </ul>
                </div>
                <div className="flex gap-10">
                    <button className="hoverActiveLinks">Login</button>
                    <button className="hoverActiveLinks hover:border-almostBlack  border-[3px] py-3 px-7 rounded-2xl border-mediumGray">
                        Register
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
