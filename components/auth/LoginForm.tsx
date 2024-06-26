// "use client";

// import { CardWrapper } from "./CardWrapper";
// import * as z from "zod";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { LoginSchema } from "@/schemas";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "../ui/form";
// import { Input } from "../ui/input";
// import { Button } from "../ui/button";
// import { FormError } from "../FormError";
// import { login } from "@/actions/login";
// import { startTransition, useState } from "react";


// export const LoginForm = () => {
//     const [error, setError] = useState("");
//     const [success, setSuccess] = useState("");
  
//     const form = useForm<z.infer<typeof LoginSchema>>({
//       resolver: zodResolver(LoginSchema),
//       defaultValues: {
//         email: "",
//         password: "",
//       },
//     });
  
//     const onSubmit = (values: z.infer<typeof LoginSchema>) => {
//       setError("");
//       setSuccess("");
  
//       startTransition(() => {
//         login(values).then((data) => {
//           if (data.error) {
//             setError(data.error);
//           } else {
//             setSuccess("Login successful!");
//           }
//         });
//       });
//     };
  

//   return (
//     <CardWrapper
//       headerLabel="Welcome back"
//       backBtnLabel="Don`t have an acount"
//       backBtnHref="/auth/register"
//       showSocial
//     >
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//           <div className="space-y-4">
//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Email</FormLabel>
//                   <FormControl>
//                     <Input
//                       {...field}
//                       placeholder="email@example.com"
//                       type="email"
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="password"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Password</FormLabel>
//                   <FormControl>
//                     <Input {...field} placeholder="password" type="password" />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>
//           <FormError message=""/>
//           <Button type="submit" className="w-full">
//             Login
//           </Button>
//         </form>
//       </Form>
//     </CardWrapper>
//   );
// };
