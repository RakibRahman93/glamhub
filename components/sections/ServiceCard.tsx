
interface Service {
  id: number;
  name: string;
  category: 'women' | 'men' | 'kids';
  price: number;
  rating: number;
  image: string;
  description: string;
}

interface ServiceCardProps {
  service: Service;
  onBookNow?: (serviceId: number) => void;
}

const ServiceCard = ({ service, onBookNow }: ServiceCardProps) => {
  return (
    <div className="service-card">
      <img src={service.image} alt={service.name} />
      <div className="service-content">
        <h3>{service.name}</h3>
        <div className="rating">
          {[...Array(5)].map((_, index) => (
            <span key={index} className={index < service.rating ? "filled" : ""}>★</span>
          ))}
        </div>
        <p>{service.description}</p>
        <p className="price">Rs {service.price.toFixed(2)}</p>
        <button onClick={() => onBookNow?.(service.id)}>
          BOOK NOW
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;