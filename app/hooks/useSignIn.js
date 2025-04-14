import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { LoginFormSchema } from "../lib/utils";

const useSignIn = () => {
  const [error, setError] = useState({});
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const validationData = LoginFormSchema.safeParse({
      email: formData.get('email'),
      password: formData.get('password'),
    });

    //If there are errors in the form inputs return the errors to show them
    if(!validationData.success) {
      setError(validationData.error.flatten().fieldErrors);
      return;
    }

    const { email, password } = validationData.data;
    
    /* Call the signIn function from next-auth with the redirect option set to false to handle the 
    redirection manually */
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if(result?.error) {
      setError({
        credentialSigning: 'Invalid email or password'
      });
      
      return;
    }

    // If there are not errors redirect to main page
    router.push('/');
  }

  return { handleSubmit, error }
};

export default useSignIn;