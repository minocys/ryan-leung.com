import classNames from "classnames";

export type ContainerProps = React.HTMLProps<HTMLSpanElement> & {
  children: React.ReactNode;
  className?: string;
  [x: string]: any;
};

const Container = ({
  children,
  className,
  ...props
}: ContainerProps): JSX.Element => {
  return (
    <span
      className={classNames("container mx-auto px-4", className || false)}
      {...props}
    >
      {children}
    </span>
  );
};

export default Container;
