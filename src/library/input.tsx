import React from "react";

const InputContext = React.createContext({
  title: "",
});

const SignupInput = ({ title }: { title: string }) => {
  const contextValue = { title };
  return (
    <InputContext.Provider value={contextValue}>{title}</InputContext.Provider>
  );
};

export const Input = ({ ...props }) => {
  const { title } = React.useContext(InputContext);
  return (
    <input {...props}>
      <h5>{title}</h5>
    </input>
  );
};
