import Form from "@/components/auth/form";
import { useRouter } from "next/router";

export default function SignUp() {
  const router = useRouter();

  const onSubmit = async (email, password, firstname, lastname, profileImage) => {
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({ email, password, firstname, lastname, profileImage }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        router.push("/profile");
      } else {
        alert("Sign up failed. Please check your details and try again.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred. Please try again later.");
    }
  };

  return <Form signin={false} onFormSubmit={onSubmit} />;
}
