import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Backdrop from '../Backdrop'
import IconArrowDown from '../Icons/IconArrowDown'
import IconArrowUp from '../Icons/IconArrowUp'
import IconCloseMenu from '../Icons/IconCloseMenu'
import IconMenu from '../Icons/IconMenu'
import CompanyCard from './CompanyCard'
import FeaturesCard from './FeaturesCard'
import logo from '/images/logo.svg'

interface Props {
    activeNav: boolean
    setActiveNav: React.Dispatch<React.SetStateAction<boolean>>
    isActiveFeatures: boolean
    setIsActiveCompany: React.Dispatch<React.SetStateAction<boolean>>
    setIsActiveFeatures: React.Dispatch<React.SetStateAction<boolean>>
    isActiveCompany: boolean
}

const MobileNavigation = ({
    setActiveNav,
    activeNav,
    isActiveCompany,
    isActiveFeatures,
    setIsActiveCompany,
    setIsActiveFeatures,
}: Props) => {
    return (
        <div className="flex lg:hidden z-50 justify-between items-center h-full w-full">
            <img src={logo} alt="logo" />
            {!activeNav && (
                <button onClick={() => setActiveNav(true)}>
                    <IconMenu />
                </button>
            )}

            <div
                className={`${
                    activeNav
                        ? 'translate-x-0 opacity-100'
                        : 'translate-x-full opacity-0 '
                } right-0 overflow-x-hidden transition-all w-[66%] absolute top-0 ease-in-out duration-300 bg-white  z-50`}
            >
                <button
                    className="absolute right-1 top-2 p-6"
                    onClick={() => setActiveNav(false)}
                >
                    <IconCloseMenu />
                </button>
                <div className="flex flex-col px-10 min-h-[100vh] items-start justify-start mt-24 lg:mt-0">
                    <ul className="flex gap-6 flex-col items-start justify-center h-full ">
                        <div className="relative">
                            <li
                                onClick={() =>
                                    setIsActiveFeatures((prev) => !prev)
                                }
                                className="flex items-center gap-3 cursor-pointer hoverActiveLinks "
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
                                className="flex items-center gap-3 cursor-pointer hoverActiveLinks"
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
                    <div className="flex gap-4 flex-col w-full mt-10">
                        <button className="hoverActiveLinks">Login</button>
                        <button className="hoverActiveLinks hover:border-almostBlack  border-[3px] py-3 px-7 rounded-2xl border-mediumGray">
                            Register
                        </button>
                    </div>
                </div>
            </div>

            {activeNav &&
                ReactDOM.createPortal(
                    <Backdrop setActiveNav={setActiveNav} />,
                    document.getElementById('backdrop')!
                )}
        </div>
    )
}

export default MobileNavigation
