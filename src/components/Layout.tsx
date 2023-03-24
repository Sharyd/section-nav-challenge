import React, { ReactNode } from 'react'
import Navigation from './Navigation/Navigation'

interface Props {
    children: ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <div className="bg-almostWhite md:min-h-[92vh] h-full">
                <header>
                    <Navigation />
                </header>

                <main className="w-full h-full">{children}</main>
            </div>
            <div className="text-[11px] mt-6 text-center hidden lg:block">
                Challenge by{' '}
                <a
                    className="text-linkColor"
                    href="https://www.frontendmentor.io?ref=challenge"
                    target="_blank"
                >
                    Frontend Mentor
                </a>
                . Coded by <a href="#">Daniel</a>.
            </div>
        </>
    )
}

export default Layout
