"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useGeolocated } from "react-geolocated";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import intlTelInput from "intl-tel-input";
import Link from "next/link";
import axios from "axios";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
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
import {
  DropdownMenu,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useForm } from "react-hook-form";
import * as regionsData from "../../data/regions.json";
import "../../node_modules/intl-tel-input/build/css/intlTelInput.css";
import { ChevronDownCircle, Loader2 } from "lucide-react";

const regions: Array<{ name: string; hospitals: string[] }> =
  regionsData.regions;

interface regionType {
  name: string;
  hospitals: string[];
}

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const signInFormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z
    .string()
    .min(1, {
      message: "Email cannot be blank.",
    })
    .email("Please enter a valid email"),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  phone: z.string().regex(phoneRegex, "Enter a valid phone number"),
});

const loginFormSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email cannot be blank.",
    })
    .email("Please enter a valid email"),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

const Auth = () => {
  const router = useRouter();
  const session = useSession();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [region, setRegion] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [variant, setVariant] = useState("login");

  const signUpForm = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      phone: "",
    },
  });

  const loginForm = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function locationPrompt(
    handleSuccess: (position: GeolocationPosition) => void
  ) {}

  const retreiveCoords = (position: GeolocationPosition) => {
    let x = position.coords.latitude;
    let y = position.coords.longitude;
    setLocation(JSON.stringify({ x, y }));
  };

  const { coords } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
    isOptimisticGeolocationEnabled: false,
    onSuccess: (position) => {
      retreiveCoords(position);
    },
  });

  const login = useCallback(async () => {
    try {
      let res = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/",
      });
      console.log(res);
      if (res?.status === 200) router.push("/");
      if (res?.error) setErrorMessage(res.error);
    } catch (error) {
      console.log(error);
    }
  }, [email, password]);

  const register = useCallback(async () => {
    console.log("hello");

    try {
      await axios.post("http://localhost:3000/api/register", {
        email,
        name: username,
        password,
        phone,
      });
      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, username, password, phone]);

  console.log(email, username, password, phone);

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  useEffect(() => {
    const initInput = () => {
      const input = document.querySelector("#phone");
      if (input) {
        intlTelInput(input, {
          onlyCountries: ["ke"],
          utilsScript: "../../node_modules/intl-tel-input/src/js/utils",
          customContainer: "reg-form",
          allowDropdown: true,
        });
      }
    };

    initInput();
  }, [variant]);

  return (
    <>
      <nav className="flex flex-row lg:justify-between justify-center px-0 pt-12 lg:px-48 lg:py-9">
        <div></div>
        <div>
          {variant === "login" && (
            <p className="text-gray-500 text-sm">
              Don't have an Account? &nbsp;{" "}
              <span
                className="font-bold text-orange-500 cursor-pointer"
                onClick={() => toggleVariant()}
              >
                Sign up
              </span>
            </p>
          )}
          {variant === "register" && (
            <p className="text-gray-500 text-sm">
              Already have an Account? &nbsp;{" "}
              <span
                className="font-bold text-orange-500 cursor-pointer"
                onClick={() => toggleVariant()}
              >
                Log in
              </span>
            </p>
          )}
        </div>
      </nav>
      <div className="py-14 mt-6 ml-2 flex items-center flex-col md:p-20	md:pt-6 md:mt-1">
        {/* {location && <i className="text-gray-700 text-sm">{location}</i>} */}
        {variant === "login" && (
          <h4 className="text-lg font-medium py-8">
            <span className="text-black">Log in to your account</span>
          </h4>
        )}
        {variant === "register" && (
          <h4 className="text-lg font-medium py-8 text-black">
            <span className="text-orange-500 italic">Create</span> a new account
          </h4>
        )}
        <button
          type="button"
          className="flex items-center drop-shadow-lg gap-x-3 text-xs font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#4285F4] mb-4 text-primary-foreground hover:bg-[#4285F4]/90 px-0 w-[300px] md:w-3/4 lg:w-[580px] h-[50px] rounded-3xl flex-row justify-items-start relative"
          onClick={() => signIn("google")}
        >
          <div className="flex w-12 rounded-l-3xl bg-[#ffffff] border border-[#4285F4] h-full p-0 m-0 items-center justify-items-center justify-center">
            {/* <FaGoogle size={22} color={'#4285F4'}/> */}
            <img
              alt="svgImg"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiNmYmMwMmQiIGQ9Ik00My42MTEsMjAuMDgzSDQyVjIwSDI0djhoMTEuMzAzYy0xLjY0OSw0LjY1Ny02LjA4LDgtMTEuMzAzLDhjLTYuNjI3LDAtMTItNS4zNzMtMTItMTIJczUuMzczLTEyLDEyLTEyYzMuMDU5LDAsNS44NDIsMS4xNTQsNy45NjEsMy4wMzlsNS42NTctNS42NTdDMzQuMDQ2LDYuMDUzLDI5LjI2OCw0LDI0LDRDMTIuOTU1LDQsNCwxMi45NTUsNCwyNHM4Ljk1NSwyMCwyMCwyMAlzMjAtOC45NTUsMjAtMjBDNDQsMjIuNjU5LDQzLjg2MiwyMS4zNSw0My42MTEsMjAuMDgzeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNlNTM5MzUiIGQ9Ik02LjMwNiwxNC42OTFsNi41NzEsNC44MTlDMTQuNjU1LDE1LjEwOCwxOC45NjEsMTIsMjQsMTJjMy4wNTksMCw1Ljg0MiwxLjE1NCw3Ljk2MSwzLjAzOQlsNS42NTctNS42NTdDMzQuMDQ2LDYuMDUzLDI5LjI2OCw0LDI0LDRDMTYuMzE4LDQsOS42NTYsOC4zMzcsNi4zMDYsMTQuNjkxeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM0Y2FmNTAiIGQ9Ik0yNCw0NGM1LjE2NiwwLDkuODYtMS45NzcsMTMuNDA5LTUuMTkybC02LjE5LTUuMjM4QzI5LjIxMSwzNS4wOTEsMjYuNzE1LDM2LDI0LDM2CWMtNS4yMDIsMC05LjYxOS0zLjMxNy0xMS4yODMtNy45NDZsLTYuNTIyLDUuMDI1QzkuNTA1LDM5LjU1NiwxNi4yMjcsNDQsMjQsNDR6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzE1NjVjMCIgZD0iTTQzLjYxMSwyMC4wODNMNDMuNTk1LDIwTDQyLDIwSDI0djhoMTEuMzAzYy0wLjc5MiwyLjIzNy0yLjIzMSw0LjE2Ni00LjA4Nyw1LjU3MQljMC4wMDEtMC4wMDEsMC4wMDItMC4wMDEsMC4wMDMtMC4wMDJsNi4xOSw1LjIzOEMzNi45NzEsMzkuMjA1LDQ0LDM0LDQ0LDI0QzQ0LDIyLjY1OSw0My44NjIsMjEuMzUsNDMuNjExLDIwLjA4M3oiPjwvcGF0aD4KPC9zdmc+"
            />
          </div>
          {variant === "login" && (
            <span className="relative inline-block box-border uppercase z-10 text-white">
              Log In with Google
            </span>
          )}
          {variant === "register" && (
            <span className="relative inline-block box-border uppercase z-10 text-white">
              Sign up with Google
            </span>
          )}
        </button>
        {variant === "login" && (
          <Form {...loginForm}>
            <form
              onSubmit={loginForm.handleSubmit(login)}
              className="space-y-6 w-[300px] md:w-3/4 lg:w-[580px]"
            >
              <FormField
                control={loginForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setEmail(e.target.value);
                      }}
                    >
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    {errorMessage.includes("mail") && (
                      <p className="text-red-500 ml-1">{errorMessage}</p>
                    )}
                    <FormDescription className="text-gray-400">
                      Your email address.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={loginForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setPassword(e.target.value);
                      }}
                    >
                      <Input
                        placeholder="Password"
                        {...field}
                        type="password"
                      />
                    </FormControl>
                    {errorMessage.includes("pass") && (
                      <p className="text-red-500 ml-1">{errorMessage}</p>
                    )}
                    <FormDescription className="text-gray-400">
                      Enter your password.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-center content-center">
                <a
                  href=""
                  className="text-sm text-orange-500 cursor-pointer hover:text-blue-600/80"
                >
                  Don't remember your password?
                </a>
              </div>
              <Button
                className="w-full rounded-3xl bg-orange-500 text-white font-semibold"
                type="submit"
              >
                Log In
              </Button>
            </form>
          </Form>
        )}
        {variant === "register" && (
          <Form {...signUpForm}>
            <form
              onSubmit={signUpForm.handleSubmit(register)}
              className="reg-form space-y-6 w-[300px] md:w-3/4 lg:w-[580px]"
            >
              <FormField
                control={signUpForm.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setUsername(e.target.value);
                      }}
                    >
                      <Input placeholder="Username" {...field} />
                    </FormControl>
                    <FormDescription className="text-gray-400">
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={signUpForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setEmail(e.target.value);
                      }}
                    >
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormDescription className="text-gray-400">
                      Your email address.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={signUpForm.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <div className="phone-cont w-full space-y-2">
                      <FormLabel className="mr-3">Phone</FormLabel>
                      <FormControl
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          console.log(e.target.value);
                          setPhone(e.target.value);
                        }}
                      >
                        <Input
                          id="phone"
                          placeholder="Phone"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          {...field}
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
              {/* <FormField
                control={signUpForm.control}
                name="region"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex flex-col">
                      <DropdownMenu>
                        <FormLabel className="mb-4">Region</FormLabel>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" className="w-2/5 mb-0">
                            <span className="mr-2">
                              <ChevronDownCircle size={20} />
                            </span>{" "}
                            {region ? region : "Select your Region"}
                          </Button>
                        </DropdownMenuTrigger>
                        <FormDescription className="text-gray-400 !mt-2">
                          Your region.
                        </FormDescription>
                        <DropdownMenuContent className="w-56 h-56 overflow-scroll overflow-x-hidden bg-white">
                          <DropdownMenuLabel>Kenya</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuRadioGroup
                            value={region}
                            onValueChange={setRegion}
                          >
                            {regions.map((reg, index) => (
                              <DropdownMenuRadioItem
                                key={index}
                                value={reg.name}
                              >
                                {reg.name}
                              </DropdownMenuRadioItem>
                            ))}
                          </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </FormItem>
                )}
              /> */}
              <FormField
                control={signUpForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setPassword(e.target.value);
                      }}
                    >
                      <Input
                        placeholder="Password"
                        {...field}
                        type="password"
                      />
                    </FormControl>
                    <FormDescription className="text-gray-400">
                      Enter a strong password.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="confirmpassword"
                render={() => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setConfirmPassword(e.target.value);
                      }}
                    >
                      <Input placeholder="Confirm Password" type="password" />
                    </FormControl>
                    <FormDescription className="text-gray-400">
                      Confirm password
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {confirmPassword !== password ? (
                <Button
                  className="w-full rounded-3xl bg-gray-300 cursor-default"
                  disabled
                  type="submit"
                >
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Passwords do not match
                </Button>
              ) : (
                <Button
                  className="w-full rounded-3xl bg-orange-500 text-white font-semibold"
                  type="submit"
                >
                  Sign Up
                </Button>
              )}
            </form>
          </Form>
        )}
      </div>
    </>
  );
};

export default Auth;
