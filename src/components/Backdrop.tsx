import React from 'react'

interface Props {
    setActiveNav: React.Dispatch<React.SetStateAction<boolean>>
}

const Backdrop = ({ setActiveNav }: Props) => {
    return (
        <div
            onClick={() => setActiveNav(false)}
            className="absolute w-full min-h-[64rem] bg-almostBlack/60 top-0 left-0 lg:hidden"
        ></div>
    )
}

export default Backdrop
