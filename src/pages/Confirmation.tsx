import { useLocation, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  CheckCircle,
  Calendar,
  Clock,
  MapPin,
  Mail,
  Phone,
  Download,
} from "lucide-react";

const Confirmation = () => {
  const location = useLocation();
  const { event, registrationData } = location.state || {};

  if (!event || !registrationData) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Registration Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            We couldn't find your registration information.
          </p>
          <Link
            to="/events"
            className="text-primary font-semibold hover:text-primary/80"
          >
            Browse Events
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const confirmationNumber = `EVT-${Date.now().toString().slice(-6)}`;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Registration Confirmed!
          </h1>
          <p className="text-xl text-gray-600">
            Thank you for registering. We've sent a confirmation email to{" "}
            {registrationData.email}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Registration Details */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Registration Details
            </h2>

            <div className="space-y-6">
              {/* Confirmation Number */}
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm font-medium text-gray-700 mb-1">
                  Confirmation Number
                </p>
                <p className="text-lg font-bold text-primary">
                  {confirmationNumber}
                </p>
              </div>

              {/* Personal Information */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Personal Information
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex">
                    <span className="text-gray-600 w-24">Name:</span>
                    <span className="text-gray-900">
                      {registrationData.firstName} {registrationData.lastName}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-gray-600 w-20">Email:</span>
                    <span className="text-gray-900">
                      {registrationData.email}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-gray-600 w-20">Phone:</span>
                    <span className="text-gray-900">
                      {registrationData.phone}
                    </span>
                  </div>
                  {registrationData.company && (
                    <div className="flex">
                      <span className="text-gray-600 w-24">Company:</span>
                      <span className="text-gray-900">
                        {registrationData.company}
                      </span>
                    </div>
                  )}
                  {registrationData.jobTitle && (
                    <div className="flex">
                      <span className="text-gray-600 w-24">Job Title:</span>
                      <span className="text-gray-900">
                        {registrationData.jobTitle}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Ticket Information */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Ticket Information
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex">
                    <span className="text-gray-600 w-24">Ticket Type:</span>
                    <span className="text-gray-900 capitalize">
                      {registrationData.ticketType}
                    </span>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              {(registrationData.dietaryRestrictions ||
                registrationData.emergencyContact) && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Additional Information
                  </h3>
                  <div className="space-y-2 text-sm">
                    {registrationData.dietaryRestrictions && (
                      <div>
                        <span className="text-gray-600 block mb-1">
                          Dietary Restrictions:
                        </span>
                        <span className="text-gray-900">
                          {registrationData.dietaryRestrictions}
                        </span>
                      </div>
                    )}
                    {registrationData.emergencyContact && (
                      <div>
                        <span className="text-gray-600 block mb-1">
                          Emergency Contact:
                        </span>
                        <span className="text-gray-900">
                          {registrationData.emergencyContact}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Event Details */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Event Details
            </h2>

            <div className="aspect-video mb-6 rounded-lg overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {event.title}
            </h3>

            <div className="space-y-4 mb-6">
              <div className="flex items-center text-gray-700">
                <Calendar className="w-5 h-5 mr-3 text-primary" />
                <span>{formatDate(event.date)}</span>
              </div>

              <div className="flex items-center text-gray-700">
                <Clock className="w-5 h-5 mr-3 text-primary" />
                <span>{event.time}</span>
              </div>

              <div className="flex items-center text-gray-700">
                <MapPin className="w-5 h-5 mr-3 text-primary" />
                <span>{event.location}</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h4 className="font-semibold text-gray-900 mb-3">What's Next?</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• You'll receive a confirmation email shortly</li>
                <li>
                  • Event details and joining instructions will be sent 24 hours
                  before
                </li>
                <li>
                  • Add this event to your calendar using the button below
                </li>
                <li>• Contact us if you have any questions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors">
            <Download className="w-5 h-5 mr-2" />
            Download Ticket
          </button>

          <button className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors">
            <Calendar className="w-5 h-5 mr-2" />
            Add to Calendar
          </button>

          <Link
            to="/events"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 transition-colors"
          >
            Browse More Events
          </Link>
        </div>

        {/* Contact Information */}
        <div className="mt-12 bg-gray-50 rounded-xl p-8 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Need Help?
          </h3>
          <p className="text-gray-600 mb-4">
            If you have any questions about your registration or the event,
            don't hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm">
            <a
              href="mailto:support@eventhub.com"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              support@eventhub.com
            </a>
            <a
              href="tel:+15551234567"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              +855 23 222 333
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Confirmation;
