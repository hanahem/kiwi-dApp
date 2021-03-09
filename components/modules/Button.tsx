import React, {FC, ReactNode, SyntheticEvent} from 'react';

type Props = {
  children: ReactNode;
  handler: (e: SyntheticEvent) => void;
  disabled?: boolean;
  inv?: boolean;
}

const Button: FC<Props> = ({children, handler, disabled, inv}) => {
  const normalStyle = `${!disabled && 'hover:bg-green-700'} text-white bg-green-500`;
  const invertedStyle = `${!disabled && 'hover:bg-green-100'} text-green-500 text-green-500 bg-white border-2 border-green-500`;
  return (
    <button
      className={`disabled:cursor-not-allowed disabled:opacity-50 ${inv ? invertedStyle : normalStyle} font-bold py-2 px-4 rounded`}
      onClick={handler}
      disabled={disabled || false}
    >
      {children}
    </button>
  );
};

export default Button;