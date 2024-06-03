import React from "react";

const AuthLayout = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  return (
    <div className="h-full flex items-center justify-center bg-sky-500">{children}</div>
  );
};

export default AuthLayout;
