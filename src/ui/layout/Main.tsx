import { ReactNode } from 'react';

interface IMainProps {
  children: ReactNode;
}

export default function Main({ children }: IMainProps) {
  return <main className="overflow-auto mt-12 ml-12">{children}</main>;
}
