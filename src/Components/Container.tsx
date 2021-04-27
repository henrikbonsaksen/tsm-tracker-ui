import { ReactNode } from 'react';
import './Container.css';

interface ContainerProps {
  children: ReactNode,
}

const Container = ({children }: ContainerProps) => (
  <div style={{
    margin: "0 auto",
    padding: '2rem',
    width: "80%",
    minHeight: '400px',
    backgroundColor: "white"
  }}>
    {children}
  </div>
);

export default Container;