import React from 'react';
import Link from 'next/link';
import classes from './Button.module.scss';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

const Button = ({ href, children }: ButtonProps) => {
  return (
    <Link className={classes.btn_text} href={href}>
      {children}
    </Link>
  );
};

export { Button };
