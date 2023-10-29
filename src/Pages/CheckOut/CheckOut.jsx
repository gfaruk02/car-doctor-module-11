import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const CheckOut = () => {
    const service = useLoaderData();
     const {_id, title, price, service_id, img} = service;
     const {user} = useContext(AuthContext)
     const handleBookService = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user.email;
        const booking = {
            customerName: name,
            email,
            date,
            img,
            service: title,
            service_id: _id,
            price: price
        }
        console.log(booking);
        fetch('http://localhost:5000/bookings', {
          method: "POST",
          headers: {
            "content-type" : "Application/json"
          },
          body: JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          if(data.insertedId){
            alert('data book successfully')
          }
        })
     }
    return (
        <div>
            <p>Service Id: {service_id}</p>
            <h1>Service Title: {title}</h1>
            <p>Price: $ {price}
            </p>


      <form className="card-body" onSubmit={handleBookService}>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
<div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" defaultValue={user?.displayName} name="name" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Data</span>
          </label>
          <input type="date" name="date" placeholder="date" className="input input-bordered" required />
        </div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
<div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Dew Amount</span>
          </label>
          <input type="text" defaultValue={'$'+ price} className="input input-bordered" required />
        </div>
</div>
        <div className="form-control mt-6">
          <input className="btn btn-primary btn-block" type="submit" value="SUbmit" />
        </div>
      </form>
    </div>
    );
};

export default CheckOut;