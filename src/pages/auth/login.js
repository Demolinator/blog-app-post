import Form from "@/components/auth/form";
import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

    const onSubmit = async (email, password) => {
    const result = await signIn('credentials', {redirect: false, email, password});

    if (!result.error) {
      router.replace("/profile");
    }
  };
  return <Form signin={true} onFormSubmit={onSubmit} />
}


