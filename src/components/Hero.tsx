import React from 'react'
import CompaniesLogos from './CompaniesLogos'
import imageHeroDesktop from '/images/image-hero-desktop.png'
import imageHeroMobile from '/images/image-hero-mobile.png'

const Hero = () => {
    return (
        <section className="flex p-0 lg:p-20 flex-col  gap-12 lg:gap-10 items-center lg:flex-row justify-center lg:items-end lg:justify-evenly xl:gap-0 m-auto">
            <img
                className="block lg:hidden max-h-full"
                src={imageHeroMobile}
                alt="image of hero section"
            />
            <div className="max-w-[50%] h-full items-center lg:items-start justify-center xl:justify-end flex flex-col gap-12 lg:gap-32">
                <div className="flex px-4 lg:px-0 flex-col gap-10 w-[400px] sm:w-full justify-center items-center lg:items-start">
                    <h1 className="text-almostBlack w-max gap-4 lg:gap-0 leading-[1.05] tracking-tight font-bold text-[2.2rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[5rem] 2xl:text-[6rem] flex lg:flex-col">
                        <span className="">Make</span>remote work
                    </h1>
                    <p className="max-w-full lg:max-w-[470px] text-center lg:text-start">
                        Get your team in sync, no matter your location.
                        Streamline processes, create team rituals, and watch
                        productivity soar.
                    </p>
                    <a
                        className="bg-almostBlack w-max py-3 px-6 rounded-xl border-2 transition-all text-almostWhite hover:bg-almostWhite hover:text-almostBlack hover:border-almostBlack "
                        href="#"
                    >
                        Learn more
                    </a>
                </div>

                <CompaniesLogos />
            </div>
            <div>
                <img
                    className="hidden lg:block max-h-[700px]"
                    src={imageHeroDesktop}
                    alt="image of hero section"
                />
            </div>
        </section>
    )
}

export default Hero
