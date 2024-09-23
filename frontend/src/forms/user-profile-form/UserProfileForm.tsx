import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
const formSchema = z.object({
  email: z.string().optional(),
  name: z.string().min(1, "name is required"), //must have atleast 1 character
  addressLine1: z.string().min(1, "Address Line 1 is required"), //must have atleast 1 character
  city: z.string().min(1, "city is required"), //must have atleast 1 character
  country: z.string().min(1, "country is required"), //must have atleast 1 character
});

//Using zod framework to infer or to automatically
//determine the type based on the formSchema
type UserFormData = z.infer<typeof formSchema>;

// can do all API stuff at the page level, can pass different func that can get called whenever the user submit the form
type Props = {
  onSave: (userProfileData: UserFormData) => void;
  isLoading: boolean;
};

const UserProfileForm = ({ onSave, isLoading }: Props) => {
  const form = useForm<UserFormData>({
    //type of the form is UserFormData
    resolver: zodResolver(formSchema), // handling form validation
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSave)}
        className="space-y-4 bg-gray-50 rounded-lg md:p-10"
      >
        <div>
          <h2 className="text-2xl font-bold">User Profile Form</h2>
          <FormDescription>
            View and Change your profile information here
          </FormDescription>
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} disabled className="bg-white" />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>name</FormLabel>
              <FormControl>
                <Input {...field}  className="bg-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col md:flex-row gap-4">
          <FormField
            control={form.control}
            name="addressLine1"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>address Line 1</FormLabel>
                <FormControl>
                  <Input {...field}  className="bg-white" />
                </FormControl>
                <FormMessage />

              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>city</FormLabel>
                <FormControl>
                  <Input {...field}  className="bg-white" />
                </FormControl>
                <FormMessage />

              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>country</FormLabel>
                <FormControl>
                  <Input {...field}  className="bg-white" />
                </FormControl>
                <FormMessage />

              </FormItem>
            )}
          />
        </div>

        {isLoading ? (
          <LoadingButton />
        ) : (
          <Button className="bg-orange-500">Submit</Button>
        )}
      </form>
    </Form>
  );
};

export default UserProfileForm
