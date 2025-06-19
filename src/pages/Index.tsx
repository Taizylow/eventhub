
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { getFeaturedEvents } from "@/data/events";
import { Link } from "react-router-dom";
import { Calendar, Search, Users, ArrowRight } from "lucide-react";

const Index = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Discover
                <span className="text-primary"> Amazing</span>
                <br />
                Events Near You
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join workshops, seminars, and conferences that inspire, educate, and connect 
                you with like-minded professionals. Your next opportunity is just a click away.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/events"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors group"
                >
                  Browse Events
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-primary hover:text-primary transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 gradient-bg rounded-3xl transform rotate-6"></div>
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop"
                alt="People at a conference"
                className="relative z-10 w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose EventHub?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make it easy to discover, register, and attend the events that matter to you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Easy Discovery</h3>
              <p className="text-gray-600 leading-relaxed">
                Find events that match your interests with our intuitive search and filtering system
              </p>
            </div>

            <div className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Simple Registration</h3>
              <p className="text-gray-600 leading-relaxed">
                Register for events in just a few clicks with our streamlined booking process
              </p>
            </div>

            <div className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Great Community</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with professionals and enthusiasts who share your passions and interests
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Featured Events
              </h2>
              <p className="text-xl text-gray-600">
                Don't miss these popular upcoming events
              </p>
            </div>
            <Link
              to="/events"
              className="hidden sm:inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors group"
            >
              View All Events
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map((event, index) => (
              <div key={event.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <EventCard event={event} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12 sm:hidden">
            <Link
              to="/events"
              className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors group"
            >
              View All Events
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Join thousands of professionals who use EventHub to discover 
            amazing learning opportunities and networking events.
          </p>
          <Link
            to="/events"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors group text-lg"
          >
            Explore Events Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
