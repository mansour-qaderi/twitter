interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = (rest: InputProps) => {
  return <input {...rest} />;
};
