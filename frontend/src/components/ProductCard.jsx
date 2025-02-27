import { useEffect , useState} from "react";
import Card from "./Card";
import axios from "axios";

const ProductCard = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
    axios
        .get("https://logitrack-be.onrender.com/all-products")
        .then((response) => {
            setProducts(response.data);
            console.log("Products fetched successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching Products:", error);
      });
  }, []);

    return (
        <div>

        <h1 className="text-3xl text-bold">Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {products.map(({ name, price, description, image, stock }) => (
            <Card 
            key={name}
            name={name}
            price={price}
            description={description}
            image={image}
            stock={stock} />
        ))}
        </div>
        </div>
    );
};

export default ProductCard;