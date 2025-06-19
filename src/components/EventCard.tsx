
import { Link } from "react-router-dom";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  price: number;
  category: string;
  attendees: number;
  image: string;
  description: string;
}

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover-lift group">
      <div className="relative overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
            {event.category}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
            ${event.price}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-semibold text-lg text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {event.title}
        </h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600 text-sm">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{formatDate(event.date)}</span>
          </div>
          
          <div className="flex items-center text-gray-600 text-sm">
            <Clock className="w-4 h-4 mr-2" />
            <span>{event.time}</span>
          </div>

          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="truncate">{event.location}</span>
          </div>

          <div className="flex items-center text-gray-600 text-sm">
            <Users className="w-4 h-4 mr-2" />
            <span>{event.attendees} registered</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {event.description}
        </p>

        <Link
          to={`/event/${event.id}`}
          className="w-full bg-primary text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors inline-block"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
