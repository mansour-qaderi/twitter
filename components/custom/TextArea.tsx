import classNames from "classnames";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLSpanElement> {}

export const TextArea = ({ children, className, ...rest }: TextAreaProps) => {
  const TextAreaClassName = classNames(
    {
      "textarea block w-full resize-none outline-none overflow-hidden min-h-[28px]":
        true,
    },
    className
  );

  return (
    <span
      className={TextAreaClassName}
      role="textbox"
      contentEditable
      {...rest}
    />
  );
};
