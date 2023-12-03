import { ReactNode } from 'react'

interface IMainProps {
    children: ReactNode
}

export default function Main({ children }: IMainProps) {
    return <main className="ml-12 mt-6 overflow-auto">{children}</main>
}
