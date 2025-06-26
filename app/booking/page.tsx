import { Header } from "@/components/layout/header"
import { Footer } from "@/components/sections/footer"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin } from "lucide-react"

export default function BookingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Page Header */}
        <section className="py-16 bg-gradient-to-r from-saloon-brown to-saloon-dark-brown text-saloon-brown">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center">
                <h1 className="font-gilroy-bold text-4xl md:text-5xl mb-4">Book Appointment</h1>
                <p className="font-gilroy-regular text-lg max-w-2xl mx-auto">
                  Schedule your appointment with our expert stylists and barbers. Choose your preferred service, date,
                  and time.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Booking Form */}
              <AnimatedSection>
                <Card className="bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="font-gilroy-bold text-2xl text-gray-900">Schedule Your Appointment</CardTitle>
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="font-gilroy-medium">
                          Email
                        </Label>
                        <Input id="email" type="email" placeholder="Enter your email" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="font-gilroy-medium">
                          Phone
                        </Label>
                        <Input id="phone" type="tel" placeholder="Enter your phone number" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service" className="font-gilroy-medium">
                        Service
                      </Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="haircut">Hair Cut</SelectItem>
                          <SelectItem value="beard">Beard Styling</SelectItem>
                          <SelectItem value="coloring">Hair Coloring</SelectItem>
                          <SelectItem value="treatment">Hair Treatment</SelectItem>
                          <SelectItem value="bridal">Bridal Package</SelectItem>
                          <SelectItem value="full">Full Service</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date" className="font-gilroy-medium">
                          Preferred Date
                        </Label>
                        <Input id="date" type="date" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time" className="font-gilroy-medium">
                          Preferred Time
                        </Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="09:00">9:00 AM</SelectItem>
                            <SelectItem value="10:00">10:00 AM</SelectItem>
                            <SelectItem value="11:00">11:00 AM</SelectItem>
                            <SelectItem value="12:00">12:00 PM</SelectItem>
                            <SelectItem value="13:00">1:00 PM</SelectItem>
                            <SelectItem value="14:00">2:00 PM</SelectItem>
                            <SelectItem value="15:00">3:00 PM</SelectItem>
                            <SelectItem value="16:00">4:00 PM</SelectItem>
                            <SelectItem value="17:00">5:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes" className="font-gilroy-medium">
                        Special Requests
                      </Label>
                      <Textarea
                        id="notes"
                        placeholder="Any special requests or notes for your appointment..."
                        rows={4}
                      />
                    </div>

                    <Button
                      size="lg"
                      className="w-full bg-saloon-brown hover:bg-saloon-dark-brown text-white font-gilroy-medium"
                    >
                      Book Appointment
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Booking Info */}
              <AnimatedSection delay={0.3}>
                <div className="space-y-8">
                  {/* Contact Info */}
                  <Card className="bg-white shadow-lg">
                    <CardHeader>
                      <CardTitle className="font-gilroy-bold text-xl text-gray-900">Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-saloon-brown" />
                        <span className="font-gilroy-regular">(555) 123-4567</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-saloon-brown" />
                        <span className="font-gilroy-regular">info@hairstyle.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-saloon-brown" />
                        <span className="font-gilroy-regular">123 Beauty Street, Downtown</span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Business Hours */}
                  <Card className="bg-white shadow-lg">
                    <CardHeader>
                      <CardTitle className="font-gilroy-bold text-xl text-gray-900">Business Hours</CardTitle>
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

                  {/* Booking Policy */}
                  <Card className="bg-white shadow-lg">
                    <CardHeader>
                      <CardTitle className="font-gilroy-bold text-xl text-gray-900">Booking Policy</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="font-gilroy-regular text-sm text-gray-600">
                        • Please arrive 10 minutes before your appointment
                      </p>
                      <p className="font-gilroy-regular text-sm text-gray-600">
                        • Cancellations must be made 24 hours in advance
                      </p>
                      <p className="font-gilroy-regular text-sm text-gray-600">
                        • Late arrivals may result in shortened service time
                      </p>
                      <p className="font-gilroy-regular text-sm text-gray-600">
                        • We accept cash and all major credit cards
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
