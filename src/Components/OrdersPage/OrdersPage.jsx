import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

function OrdersPage() {
  const { orders } = useContext(StoreContext);

  return (
    <div>
      <h1>Your Orders</h1>

      {orders.map((order, i) => (
        <div key={i}>
          <p>Size: {order.size}</p>

          {order.Picture.map((img, id) => (
            <img key={id} src={img} width={70} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default OrdersPage;
