import z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoadingSpinner } from "@/shared/common";
import { Button } from "@/components/ui/button";
import useRenderFormErrors from "@/shared/hooks/useRenderFormErrors";
import { usersFormControls } from "@/shared/constants";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from "@/components/ui/select";
import {
  SheetContent,
  SheetTitle,
  SheetHeader,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";

type UserFormPropsT = {
  type: "add" | "edit";
  onSubmit: (data: UserFormData) => void;
  initialData?: Partial<UserFormData>;
  isSuccess?: boolean;
  isPending?: boolean;
};

// 💡 Zod Schema updated to match the User type from user-columns.ts
const formSchemas = z.object({
  username: z.string().min(1, { message: "username is required." }).max(50),
  phone: z.string().min(1, { message: "Last name is required." }).max(50),
  location: z.string().min(1, { message: "Last name is required." }).max(50),
  email: z.string().email({ message: "Invalid email address!" }),
  role: z.enum(["Super Admin", "Admin", "Editor", "Moderator", "User"]),
  status: z.enum(["Active", "Inactive", "Suspended"]),
  // role: z.enum(["Super Admin", "Admin", "Editor", "Moderator", "User"], {
  //   errorMap: () => ({ message: "Please select a valid role." }),
  // }),
  // status: z.enum(["Active", "Inactive", "Suspended"], {
  //   errorMap: () => ({ message: "Please select a valid status." }),
  // }),
});

type UserFormData = z.infer<typeof formSchemas>;

const defaultValues: UserFormData = {
  username: "",
  email: "",
  phone: "",
  location: "",
  role: "User", // Default to the least privileged role
  status: "Active",
};

const UserForm = ({
  type,
  onSubmit,
  initialData,
  isSuccess = false,
  isPending = false,
}: UserFormPropsT) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<UserFormData>({
    resolver: zodResolver(formSchemas),
    // 💡 Apply initialData if provided, otherwise use default values
    defaultValues: initialData || defaultValues,
  });

  const { renderFormErrors } = useRenderFormErrors();

  useEffect(() => {
    if (isSuccess) {
      reset(initialData || defaultValues); // Reset to initial state or defaults on success
    }
  }, [isSuccess, reset, initialData]);

  useEffect(() => {
    reset(initialData || defaultValues);
  }, [initialData, reset]);

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>
          {type === "edit" ? "Edit" : "Add"} user information
        </SheetTitle>
        <SheetDescription>
          {type === "edit"
            ? "You can update user information manually"
            : "You can create a new user"}
        </SheetDescription>
      </SheetHeader>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 px-3">
        <div className="flex flex-col gap-3">
          {usersFormControls.map((formControl) => {
            return (
              <div className="flex flex-col gap-2" key={formControl.name}>
                <Label htmlFor={formControl.name}>{formControl.label}</Label>
                <Controller
                  control={control}
                  name={formControl.name as keyof UserFormData}
                  render={({ field }) => {
                    const fieldValue = field.value || "";

                    switch (formControl.componentType) {
                      case "input":
                        return (
                          <div className="relative">
                            <Input
                              {...field}
                              id={formControl.name}
                              name={formControl.name}
                              placeholder={formControl.placeholder}
                              type={formControl.type}
                              // Ensure input value is correctly cast to string
                              value={String(fieldValue)}
                              onChange={(e) => field.onChange(e.target.value)}
                            />
                            {errors[formControl.name as keyof UserFormData] &&
                              renderFormErrors(
                                errors[formControl.name as keyof UserFormData]
                                  ?.message as string
                              )}
                          </div>
                        );
                      case "select":
                        return (
                          <div className="relative">
                            <Select
                              {...field}
                              onValueChange={field.onChange}
                              // Ensure select value is a string
                              value={String(fieldValue)}
                            >
                              <SelectTrigger className="w-full">
                                <SelectValue
                                  placeholder={formControl.placeholder}
                                />
                              </SelectTrigger>
                              <SelectContent className="w-full">
                                {formControl.options &&
                                  formControl.options.map((option) => (
                                    <SelectItem
                                      key={option.value}
                                      value={String(option.value)}
                                    >
                                      {option.label}
                                    </SelectItem>
                                  ))}
                              </SelectContent>
                            </Select>
                            {errors[formControl.name as keyof UserFormData] &&
                              renderFormErrors(
                                errors[formControl.name as keyof UserFormData]
                                  ?.message as string
                              )}
                          </div>
                        );
                      default:
                        return <></>;
                    }
                  }}
                />
              </div>
            );
          })}
        </div>

        <div className="flex gap-2 w-full items-center justify-end">
          <div className="">
            <SheetClose asChild>
              <Button
                className="cursor-pointer relative w-full"
                type="button"
                size={"sm"}
                variant={"outline"}
              >
                Cancel
              </Button>
            </SheetClose>
          </div>

          <div className="">
            <Button
              className="cursor-pointer relative w-full"
              type="submit"
              size={"sm"}
              disabled={isSubmitting || isPending}
            >
              {isSubmitting || isPending ? <LoadingSpinner /> : "Submit"}
            </Button>
          </div>
        </div>
      </form>
    </SheetContent>
  );
};

export default UserForm;
