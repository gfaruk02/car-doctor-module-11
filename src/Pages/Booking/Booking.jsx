import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";


const Booking = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user.email}`;
    useEffect(() => {
        axios.get(url, {
            //for cookies
            withCredentials:true,
        })
        .then(res=>{
            setBookings(res.data);
        })
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => {
        //         setBookings(data);
        //     })
    }, [url])

    const handleDalete = id =>{
        const proceed = confirm('Are you sure you want to delete');
        if(proceed){
            fetch(`http://localhost:5000/bookings/${id}`,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount > 0){
                    alert('Deleted successful');
                    const remaining = bookings.filter(booking => booking._id !==id);
                    setBookings(remaining);
                }
            })
        }
    }
    const handleBookingConfirm = id =>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCound > 0){
                //update state
                const remaining = bookings.filter(booking => booking._id !==id);
                const update = bookings.find(booking=>booking._id === id);
                update.status ='confirm '
                const newBookings = [update, ...remaining];
                setBookings(newBookings);
            }
        })
    }

    return (
        <div>
            {bookings.length}

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings.map(booking=> <BookingRow 
                                key={booking._id}
                                booking={booking}
                                handleDalete={handleDalete}
                                handleBookingConfirm = {handleBookingConfirm}
                                >

                                </BookingRow> )
                        }

                    </tbody>
                   

                </table>
            </div>
        </div>
    );
};

export default Booking;