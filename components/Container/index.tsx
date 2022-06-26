export type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps): JSX.Element => {
  return (
    <div className="container mx-auto px-4" {...props}>
      {children}
    </div>
  );
};

export default Container;
