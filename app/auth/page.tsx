"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/sections/footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  Phone,
  User,
} from "lucide-react";
import { useState } from "react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center justify-center py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <AnimatedSection>
              <Card className="bg-white shadow-2xl border-0 overflow-hidden">
                <CardContent className="p-0">
                  {/* Header Section */}
                  <div className="bg-gradient-to-r from-saloon-brown to-saloon-dark-brown p-8 text-center text-white">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img src="/images/logo.png" alt="logo" className="mx-auto mb-4" />
                      <p className="font-gilroy-regular text-black">
                        {isLogin
                          ? "Welcome back to your beauty journey"
                          : "Start your beauty journey with us"}
                      </p>
                    </motion.div>
                  </div>

                  {/* Toggle Buttons */}
                  <div className="p-6 pb-0">
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
                  </div>

                  {/* Form Section */}
                  <div className="px-6 pb-6">
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

                          <Button className="w-full h-12 bg-saloon-brown hover:bg-saloon-dark-brown text-white font-gilroy-medium text-lg">
                            Sign In
                          </Button>
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

                          <div className="space-y-2">
                            <Label
                              htmlFor="confirmPassword"
                              className="font-gilroy-medium text-gray-700"
                            >
                              Confirm Password
                            </Label>
                            <div className="relative">
                              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                              <Input
                                id="confirmPassword"
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm your password"
                                className="pl-10 pr-10 h-12 border-gray-200 focus:border-saloon-brown focus:ring-saloon-brown"
                              />
                              <button
                                type="button"
                                onClick={() =>
                                  setShowConfirmPassword(!showConfirmPassword)
                                }
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-saloon-brown"
                              >
                                {showConfirmPassword ? (
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

                          <Button className="w-full h-12 bg-saloon-brown hover:bg-saloon-dark-brown text-white font-gilroy-medium text-lg">
                            Create Account
                          </Button>
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
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Additional Info */}
            <AnimatedSection delay={0.3}>
              <div className="text-center mt-8">
                <p className="font-gilroy-regular text-gray-600 text-sm">
                  By {isLogin ? "signing in" : "creating an account"}, you'll
                  get access to:
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-4">
                  <span className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-gilroy-medium text-saloon-brown">
                    ✨ Exclusive Offers
                  </span>
                  <span className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-gilroy-medium text-saloon-brown">
                    📅 Easy Booking
                  </span>
                  <span className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-gilroy-medium text-saloon-brown">
                    🎁 Loyalty Rewards
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
