import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CreateUserRequest = {
  auth0Id: string;
  email: string;
};

export const useCreateMyUser = () => {

  // fetch user token from offzero server by Auth0
  const { getAccessTokenSilently } = useAuth0();

  //hook
  const createMyUserRequest = async (user: CreateUserRequest) => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/my/user`, {

      method: "POST",
      headers: {
        Authorization : `Bearer ${accessToken}`, 
        "Content-Type": "application/json", //type of body request
      },
      body: JSON.stringify(user), //pass the user info to backend from here
    });

    if (!response.ok) {
      throw new Error("Failed to create user");
    }
  };

  const {
    mutateAsync: createUser, //This renames mutateAsync to createUser. When called, createUser will trigger the mutation
    isLoading, //showing loading states in the UI
    isError,
    isSuccess,
  } = useMutation(createMyUserRequest);

  return {
    createUser,
    isLoading,
    isError,
    isSuccess,
  };
};
