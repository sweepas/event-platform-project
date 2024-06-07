import React from "react";
import { useForm } from "react-hook-form";

export const RegisterForm: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form submitted with data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("username")} placeholder="Username" />
      <input {...register("firstName")} placeholder="First Name" />
      <input {...register("lastName")} placeholder="Last Name" />
      <input {...register("email")} placeholder="email@example.com" type="email" />
      <input {...register("password")} placeholder="password" type="password" />
      <button type="submit">Register</button>
    </form>
  );
};
