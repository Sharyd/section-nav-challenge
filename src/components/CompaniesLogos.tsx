import React from 'react'
import databiz from '/images/client-databiz.svg'
import audiophile from '/images/client-audiophile.svg'
import meet from '/images/client-meet.svg'
import maker from '/images/client-maker.svg'

const CompaniesLogos = () => {
    return (
        <div className="flex  items-center w-16 sm:w-full justify-center lg:justify-start gap-8 lg:w-full lg:flex-wrap ">
            <img src={databiz} alt="logo of company databiz" />
            <img src={audiophile} alt="logo of company audiophile" />
            <img src={meet} alt="logo of company meet" />
            <img src={maker} alt="logo of company maker" />
        </div>
    )
}

export default CompaniesLogos
