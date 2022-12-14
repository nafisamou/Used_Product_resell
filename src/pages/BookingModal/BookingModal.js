import React from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";

const BookingModal = ({ secondHandProduct, setSecondHandProduct }) => {
  const { user } = useContext(AuthContext);
  const { brand, price, img } = secondHandProduct;
  //   console.log(secondHandProduct);
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const brand = form.brand.value;
    const location = form.location.value;
    const price = form.price.value;
    const img = form.img.value;

    const booking = {
      Buyer: name,
      email,
      phone,
      brand,
      location,
      price,
      img,
    };
    // console.log(booking);
    fetch("https://e-commerce-server-gamma.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setSecondHandProduct(null);
          toast.success("Booking confirmed");
        } else {
          toast.error(data.message);
        }
      });
  };
  return (
    <div>
      <>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="booking-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold">{brand}</h3>
            <form
              onSubmit={handleBooking}
              className="grid grid-cols-1 gap-3 mt-10"
            >
              <input
                name="name"
                type="text"
                defaultValue={user?.displayName}
                disabled
                placeholder="Your Name"
                className="input w-full input-bordered"
              />
              <input
                name="brand"
                type="text"
                defaultValue={brand}
                disabled
                className="input w-full input-bordered"
              />
              <input
                name="email"
                type="email"
                defaultValue={user.email}
                disabled
                className="input w-full input-bordered"
              />
              <input
                name="img"
                type="url"
                defaultValue={img}
                disabled
                className="input w-full input-bordered"
              />
              <input
                name="price"
                type="text"
                defaultValue={price}
                disabled
                className="input w-full input-bordered"
              />
              <input
                name="location"
                type="location"
                placeholder="Location"
                className="input w-full input-bordered"
              />
              <input
                name="phone"
                type="text"
                placeholder="Phone Number"
                className="input w-full input-bordered"
              />
              <br />
              <input className="btn  w-full" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </>
    </div>
  );
};

export default BookingModal;
