import React from 'react'

const CompanyCard = () => {
    return (
        <ul className="lg:absolute left-0 top-12 w-[140px] lg:shadow-lg flex gap-1 flex-col justify-center rounded-xl p-5 bg-white">
            <li className="flex items-center gap-3 p-1.5 hoverActiveLinks">
                <a href="#">History</a>
            </li>
            <li className="flex items-center gap-3 p-1.5 hoverActiveLinks">
                <a href="#">Our Team</a>
            </li>
            <li className="flex items-center gap-3 p-1.5 hoverActiveLinks">
                <a href="#">Blog</a>
            </li>
        </ul>
    )
}

export default CompanyCard
