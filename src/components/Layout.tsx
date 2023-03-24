import React, { ReactNode } from 'react'
import Navigation from './Navigation/Navigation'

interface Props {
    children: ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <div className="bg-almostWhite overflow-x-hidden min-h-screen">
            <header>
                <Navigation />
            </header>

            <main className="w-full">{children}</main>
        </div>
    )
}

export default Layout
