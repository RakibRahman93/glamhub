import { Header } from "@/components/layout/header"
import { Footer } from "@/components/sections/footer"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Page Header */}
        <section className="py-16 bg-gradient-to-r from-saloon-brown to-saloon-dark-brown text-white">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center">
                <h1 className="font-gilroy-bold text-4xl md:text-5xl mb-4 text-saloon-brown">Contact Us</h1>
                <p className="font-gilroy-regular text-lg max-w-2xl mx-auto text-saloon-brown">
                  Get in touch with us for appointments, inquiries, or any questions. We're here to help you look and
                  feel your best.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <AnimatedSection>
                <Card className="bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="font-gilroy-bold text-2xl text-gray-900">Send us a Message</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="font-gilroy-medium">
                          First Name
                        </Label>
                        <Input id="firstName" placeholder="Enter your first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="font-gilroy-medium">
                          Last Name
                        </Label>
                        <Input id="lastName" placeholder="Enter your last name" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-gilroy-medium">
                        Email
                      </Label>
                      <Input id="email" type="email" placeholder="Enter your email address" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-gilroy-medium">
                        Phone Number
                      </Label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="font-gilroy-medium">
                        Subject
                      </Label>
                      <Input id="subject" placeholder="What is this regarding?" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="font-gilroy-medium">
                        Message
                      </Label>
                      <Textarea id="message" placeholder="Tell us how we can help you..." rows={6} />
                    </div>

                    <Button
                      size="lg"
                      className="w-full bg-saloon-brown hover:bg-saloon-dark-brown text-white font-gilroy-medium"
                    >
                      Send Message
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Contact Information */}
              <AnimatedSection delay={0.3}>
                <div className="space-y-8">
                  {/* Contact Details */}
                  <Card className="bg-white shadow-lg">
                    <CardHeader>
                      <CardTitle className="font-gilroy-bold text-xl text-gray-900">Get in Touch</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <Phone className="w-6 h-6 text-saloon-brown mt-1" />
                        <div>
                          <h4 className="font-gilroy-bold text-gray-900 mb-1">Phone</h4>
                          <p className="font-gilroy-regular text-gray-600">(555) 123-4567</p>
                          <p className="font-gilroy-regular text-gray-600">(555) 123-4568</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <Mail className="w-6 h-6 text-saloon-brown mt-1" />
                        <div>
                          <h4 className="font-gilroy-bold text-gray-900 mb-1">Email</h4>
                          <p className="font-gilroy-regular text-gray-600">info@hairstyle.com</p>
                          <p className="font-gilroy-regular text-gray-600">booking@hairstyle.com</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <MapPin className="w-6 h-6 text-saloon-brown mt-1" />
                        <div>
                          <h4 className="font-gilroy-bold text-gray-900 mb-1">Address</h4>
                          <p className="font-gilroy-regular text-gray-600">
                            123 Beauty Street
                            <br />
                            Downtown, City 12345
                            <br />
                            United States
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Business Hours */}
                  <Card className="bg-white shadow-lg">
                    <CardHeader>
                      <CardTitle className="font-gilroy-bold text-xl text-gray-900 flex items-center">
                        <Clock className="w-5 h-5 mr-2 text-saloon-brown" />
                        Business Hours
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="font-gilroy-medium">Monday - Friday</span>
                        <span className="font-gilroy-regular">9:00 AM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-gilroy-medium">Saturday</span>
                        <span className="font-gilroy-regular">9:00 AM - 7:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-gilroy-medium">Sunday</span>
                        <span className="font-gilroy-regular">10:00 AM - 6:00 PM</span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Social Media */}
                  <Card className="bg-white shadow-lg">
                    <CardHeader>
                      <CardTitle className="font-gilroy-bold text-xl text-gray-900">Follow Us</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex space-x-4">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-saloon-brown text-saloon-brown hover:bg-saloon-brown hover:text-white"
                        >
                          <Facebook className="w-4 h-4 mr-2" />
                          Facebook
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-saloon-brown text-saloon-brown hover:bg-saloon-brown hover:text-white"
                        >
                          <Instagram className="w-4 h-4 mr-2" />
                          Instagram
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-saloon-brown text-saloon-brown hover:bg-saloon-brown hover:text-white"
                        >
                          <Twitter className="w-4 h-4 mr-2" />
                          Twitter
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="font-gilroy-bold text-3xl text-gray-900 mb-4">Find Us</h2>
                <p className="font-gilroy-regular text-lg text-gray-600">
                  Located in the heart of downtown, easily accessible by public transport and with ample parking.
                </p>
              </div>
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-saloon-brown mx-auto mb-4" />
                  <p className="font-gilroy-medium text-gray-600">Interactive Map Coming Soon</p>
                  <p className="font-gilroy-regular text-sm text-gray-500">123 Beauty Street, Downtown</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
