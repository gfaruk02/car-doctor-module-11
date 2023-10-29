import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const {_id, title, img, price } = service;
    return (
        <div className="pt-2 card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-left">{title}</h2>
                <div className="flex justify-between gap-2 text-orange-500">
                    <p className=" text-xl font-semibold"> Price : ${price}  </p>
                    <Link to={`/checkout/${_id}`}>
                        <button className="pl-28 hover:text-orange-800"><FaArrowRight></FaArrowRight> </button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default ServiceCard;