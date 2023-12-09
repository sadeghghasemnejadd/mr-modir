import { ReactNode } from 'react'

interface IMainProps {
    children: ReactNode
}

export default function Main({ children }: IMainProps) {
    return (
        <main className="mt-6 w-full overflow-auto px-1 pt-6">{children}</main>
    )
}
