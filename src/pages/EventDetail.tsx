
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getEventById } from "@/data/events";
import { Calendar, Clock, MapPin, Users, User, Building, CheckCircle, ArrowLeft } from "lucide-react";

const EventDetail = () => {
  const { id } = useParams();
  const event = getEventById(id || "");

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Event Not Found</h1>
          <p className="text-gray-600 mb-8">The event you're looking for doesn't exist.</p>
          <Link to="/events" className="text-primary font-semibold hover:text-primary/80">
            ← Back to Events
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

  const spotsRemaining = event.maxAttendees - event.attendees;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Back Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/events"
            className="inline-flex items-center text-gray-600 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Events
          </Link>
        </div>
      </div>

      {/* Event Header */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="mb-4">
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {event.category}
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {event.title}
              </h1>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-700">
                  <Calendar className="w-5 h-5 mr-3 text-primary" />
                  <span className="font-medium">{formatDate(event.date)}</span>
                </div>
                
                <div className="flex items-center text-gray-700">
                  <Clock className="w-5 h-5 mr-3 text-primary" />
                  <span>{event.time}</span>
                </div>
                
                <div className="flex items-center text-gray-700">
                  <MapPin className="w-5 h-5 mr-3 text-primary" />
                  <span>{event.location}</span>
                </div>
                
                <div className="flex items-center text-gray-700">
                  <Users className="w-5 h-5 mr-3 text-primary" />
                  <span>{event.attendees} registered • {spotsRemaining} spots remaining</span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">${event.price}</p>
                    <p className="text-gray-600">per person</p>
                  </div>
                  <Link
                    to={`/register/${event.id}`}
                    className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Register Now
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-96 lg:h-full object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Event</h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  {event.fullDescription}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Agenda</h3>
                <ul className="space-y-3 mb-8">
                  {event.agenda.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Requirements</h3>
                <ul className="space-y-3">
                  {event.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Speaker Info */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Featured Speaker</h3>
                <div className="flex items-start space-x-4">
                  <img
                    src={event.speaker.image}
                    alt={event.speaker.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{event.speaker.name}</h4>
                    <div className="flex items-center text-gray-600 text-sm mb-2">
                      <User className="w-4 h-4 mr-1" />
                      <span>{event.speaker.position}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm mb-3">
                      <Building className="w-4 h-4 mr-1" />
                      <span>{event.speaker.company}</span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {event.speaker.bio}
                    </p>
                  </div>
                </div>
              </div>

              {/* Event Stats */}
              <div className="bg-primary/5 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Event Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Registered</span>
                    <span className="font-semibold text-gray-900">{event.attendees}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Available Spots</span>
                    <span className="font-semibold text-gray-900">{spotsRemaining}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price</span>
                    <span className="font-semibold text-gray-900">${event.price}</span>
                  </div>
                </div>
              </div>

              {/* Register CTA */}
              <div className="bg-primary text-white rounded-xl p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Ready to Join?</h3>
                <p className="text-primary-foreground/80 text-sm mb-4">
                  Secure your spot today and don't miss out on this amazing opportunity.
                </p>
                <Link
                  to={`/register/${event.id}`}
                  className="block w-full bg-white text-primary py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventDetail;
