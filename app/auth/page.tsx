"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { AnimatePresence, motion } from "framer-motion";
import {
  Chrome,
  Eye,
  EyeOff,
  Facebook,
  Lock,
  Mail,
  MoveLeft,
  Phone,
  User,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";


import { useRouter } from "next/navigation";

import Cookies from "js-cookie";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        Cookies.set("user", JSON.stringify(data));
        router.push("/dashboard");
      } else {
        setError(data.error || "Login failed");
      }
    } catch (err) {
      setError("An error occurred during login");
    }
  };

  const handleSignup = async () => {
    if (!firstName || !lastName || !email || !password || !phone) {
      setError("All fields are required");
      return;
    }
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, email, password, phone }),
      });
      const data = await response.json();
      if (response.ok) {
        Cookies.set("user", JSON.stringify(data));
        router.push("/dashboard");
      } else {
        setError(data.error || "Signup failed");
      }
    } catch (err) {
      setError("An error occurred during signup");
    }
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setShowPassword(false);
    setShowConfirmPassword(false);
    setError("");
  };

  return (
    <main className="min-h-screen bg-gray-50">
        <div className="relative flex min-h-screen">
        <div className="absolute top-8 left-8 z-10">
            <Button asChild variant="outline" className="bg-white/80 backdrop-blur-sm">
              <Link href="/">
                <MoveLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
          {/* Left Side - Form */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 lg:p-16">
            <div className="w-full max-w-md">
              <AnimatedSection>
                <div className="text-center mb-8">
                  <a href="/">
                    <img
                      src="/images/logo.png"
                      alt="logo"
                      className="mx-auto mb-4"
                    />
                  </a>
                  <h1 className="text-3xl font-gilroy-bold text-saloon-dark-brown">
                    {isLogin ? "Welcome Back!" : "Create an Account"}
                  </h1>
                  <p className="text-gray-600 font-gilroy-regular mt-2">
                    {isLogin
                      ? "Sign in to continue your beauty journey."
                      : "Join us to discover a world of beauty."}
                  </p>
                </div>

                {/* Toggle Buttons */}
                <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
                  <button
                    onClick={() => setIsLogin(true)}
                    className={`flex-1 py-3 px-4 rounded-md font-gilroy-medium transition-all duration-300 ${
                      isLogin
                        ? "bg-saloon-brown text-white shadow-md"
                        : "text-gray-600 hover:text-saloon-brown"
                    }`}
                  >
                    Login
                  </button>
                  <button
                    onClick={() => setIsLogin(false)}
                    className={`flex-1 py-3 px-4 rounded-md font-gilroy-medium transition-all duration-300 ${
                      !isLogin
                        ? "bg-saloon-brown text-white shadow-md"
                        : "text-gray-600 hover:text-saloon-brown"
                    }`}
                  >
                    Sign Up
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  {isLogin ? (
                    <motion.div
                      key="login"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      {/* Login Form */}
                      <div className="space-y-2">
                        <Label
                          htmlFor="loginEmail"
                          className="font-gilroy-medium text-gray-700"
                        >
                          Email Address
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            id="loginEmail"
                            type="email"
                            placeholder="Enter your email"
                            className="pl-10 h-12 border-gray-200 focus:border-saloon-brown focus:ring-saloon-brown"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="loginPassword"
                          className="font-gilroy-medium text-gray-700"
                        >
                          Password
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            id="loginPassword"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="pl-10 pr-10 h-12 border-gray-200 focus:border-saloon-brown focus:ring-saloon-brown"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-saloon-brown"
                          >
                            {showPassword ? (
                              <EyeOff className="w-5 h-5" />
                            ) : (
                              <Eye className="w-5 h-5" />
                            )}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="remember" />
                          <Label
                            htmlFor="remember"
                            className="font-gilroy-regular text-sm text-gray-600"
                          >
                            Remember me
                          </Label>
                        </div>
                        <button className="font-gilroy-regular text-sm text-saloon-brown hover:text-saloon-dark-brown">
                          Forgot password?
                        </button>
                      </div>

                      <Button
                        onClick={handleLogin}
                        className="w-full h-12 bg-saloon-brown hover:bg-saloon-dark-brown text-white font-gilroy-medium text-lg transition-transform transform hover:scale-105"
                      >
                        Sign In
                      </Button>
                      {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="signup"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      {/* Sign Up Form */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label
                            htmlFor="firstName"
                            className="font-gilroy-medium text-gray-700"
                          >
                            First Name
                          </Label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <Input
                              id="firstName"
                              placeholder="First name"
                              className="pl-10 h-12 border-gray-200 focus:border-saloon-brown focus:ring-saloon-brown"
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label
                            htmlFor="lastName"
                            className="font-gilroy-medium text-gray-700"
                          >
                            Last Name
                          </Label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <Input
                              id="lastName"
                              placeholder="Last name"
                              className="pl-10 h-12 border-gray-200 focus:border-saloon-brown focus:ring-saloon-brown"
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="signupEmail"
                          className="font-gilroy-medium text-gray-700"
                        >
                          Email Address
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            id="signupEmail"
                            type="email"
                            placeholder="Enter your email"
                            className="pl-10 h-12 border-gray-200 focus:border-saloon-brown focus:ring-saloon-brown"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="phone"
                          className="font-gilroy-medium text-gray-700"
                        >
                          Phone Number
                        </Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="Enter your phone number"
                            className="pl-10 h-12 border-gray-200 focus:border-saloon-brown focus:ring-saloon-brown"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="signupPassword"
                          className="font-gilroy-medium text-gray-700"
                        >
                          Password
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            id="signupPassword"
                            type={showPassword ? "text" : "password"}
                            placeholder="Create a password"
                            className="pl-10 pr-10 h-12 border-gray-200 focus:border-saloon-brown focus:ring-saloon-brown"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-saloon-brown"
                          >
                            {showPassword ? (
                              <EyeOff className="w-5 h-5" />
                            ) : (
                              <Eye className="w-5 h-5" />
                            )}
                          </button>
                        </div>
                      </div>

                      

                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <Label
                          htmlFor="terms"
                          className="font-gilroy-regular text-sm text-gray-600"
                        >
                          I agree to the{" "}
                          <button className="text-saloon-brown hover:text-saloon-dark-brown underline">
                            Terms of Service
                          </button>{" "}
                          and{" "}
                          <button className="text-saloon-brown hover:text-saloon-dark-brown underline">
                            Privacy Policy
                          </button>
                        </Label>
                      </div>

                      <Button
                        onClick={handleSignup}
                        className="w-full h-12 bg-saloon-brown hover:bg-saloon-dark-brown text-white font-gilroy-medium text-lg transition-transform transform hover:scale-105"
                      >
                        Create Account
                      </Button>
                      {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Social Login */}
                <div className="mt-6">
                  <div className="relative">
                    <Separator className="my-6" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="bg-white px-4 text-sm text-gray-500 font-gilroy-regular">
                        Or continue with
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <Button
                      variant="outline"
                      className="h-12 border-gray-200 hover:border-saloon-brown hover:text-saloon-brown font-gilroy-medium bg-transparent"
                    >
                      <Chrome className="w-5 h-5 mr-2" />
                      Google
                    </Button>
                    <Button
                      variant="outline"
                      className="h-12 border-gray-200 hover:border-saloon-brown hover:text-saloon-brown font-gilroy-medium bg-transparent"
                    >
                      <Facebook className="w-5 h-5 mr-2" />
                      Facebook
                    </Button>
                  </div>
                </div>

                {/* Footer Text */}
                <div className="text-center mt-6">
                  <p className="font-gilroy-regular text-sm text-gray-600">
                    {isLogin
                      ? "Don't have an account? "
                      : "Already have an account? "}
                    <button
                      onClick={toggleAuthMode}
                      className="text-saloon-brown hover:text-saloon-dark-brown font-gilroy-medium underline"
                    >
                      {isLogin ? "Sign up here" : "Sign in here"}
                    </button>
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Right Side - Image */}
          <div
            className="hidden md:block md:w-1/2 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/saloon-bg.jpg')" }}
          >
            <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-50 text-white p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <h2 className="text-4xl font-gilroy-bold mb-4">
                  Your Personal Beauty Sanctuary
                </h2>
                <p className="text-lg font-gilroy-regular mb-8 max-w-md">
                  Discover top-rated salons, book appointments effortlessly, and
                  unlock exclusive beauty rewards.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-4">
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-gilroy-medium">
                    ✨ Exclusive Offers
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-gilroy-medium">
                    📅 Easy Booking
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-gilroy-medium">
                    🎁 Loyalty Rewards
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
  );
}
