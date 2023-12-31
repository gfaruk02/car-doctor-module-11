import img1 from "../../assets/images/banner/1.jpg"
import img2 from "../../assets/images/banner/2.jpg"
import img3 from "../../assets/images/banner/3.jpg"
import img4 from "../../assets/images/banner/4.jpg"
import img5 from "../../assets/images/banner/5.jpg"
import img6 from "../../assets/images/banner/6.jpg"

const Banner = () => {
    return (
        <div className="carousel w-full h-[700px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute flex items-center transform pl-16 h-full bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(25, 25, 25, 0)] rounded-xl">
                    <div className="text-white space-y-7 w-1/2">
                        <h1 className="text-7xl ">
                            Affordable Price For Car Servicing
                        </h1>
                        <p>
                            There are many variations of passages of  available, but the majority have suffered alteration in some form
                        </p>
                        <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
                            <button className="btn btn-secondary">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
                    <a href="#slide6" className="btn mr-5 bg-slate-500 btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-slate-500">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute flex items-center transform pl-16 h-full bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(25, 25, 25, 0)] rounded-xl">
                    <div className="text-white space-y-7 w-1/2">
                        <h1 className="text-7xl ">
                            Affordable Price For Car Servicing
                        </h1>
                        <p>
                            There are many variations of passages of  available, but the majority have suffered alteration in some form
                        </p>
                        <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
                            <button className="btn btn-secondary">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
                    <a href="#slide1" className="btn mr-5 bg-slate-500 btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-slate-500">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="absolute flex items-center transform pl-16 h-full bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(25, 25, 25, 0)] rounded-xl">
                    <div className="text-white space-y-7 w-1/2">
                        <h1 className="text-7xl ">
                            Affordable Price For Car Servicing
                        </h1>
                        <p>
                            There are many variations of passages of  available, but the majority have suffered alteration in some form
                        </p>
                        <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
                            <button className="btn btn-secondary">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
                    <a href="#slide2" className="btn mr-5 bg-slate-500 btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-slate-500">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" />
                <div className="absolute flex items-center transform pl-16 h-full bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(25, 25, 25, 0)] rounded-xl">
                    <div className="text-white space-y-7 w-1/2">
                        <h1 className="text-7xl ">
                            Affordable Price For Car Servicing
                        </h1>
                        <p>
                            There are many variations of passages of  available, but the majority have suffered alteration in some form
                        </p>
                        <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
                            <button className="btn btn-secondary">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
                    <a href="#slide3" className="btn mr-5 bg-slate-500 btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle bg-slate-500">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full" />
                <div className="absolute flex items-center transform pl-16 h-full bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(25, 25, 25, 0)] rounded-xl">
                    <div className="text-white space-y-7 w-1/2">
                        <h1 className="text-7xl ">
                            Affordable Price For Car Servicing
                        </h1>
                        <p>
                            There are many variations of passages of  available, but the majority have suffered alteration in some form
                        </p>
                        <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
                            <button className="btn btn-secondary">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
                    <a href="#slide4" className="btn mr-5 bg-slate-500 btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle bg-slate-500">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full" />
                <div className="absolute flex items-center transform pl-16 h-full bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(25, 25, 25, 0)] rounded-xl">
                    <div className="text-white space-y-7 w-1/2">
                        <h1 className="text-7xl ">
                            Affordable Price For Car Servicing
                        </h1>
                        <p>
                            There are many variations of passages of  available, but the majority have suffered alteration in some form
                        </p>
                        <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
                            <button className="btn btn-secondary">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
                    <a href="#slide5" className="btn mr-5 bg-slate-500 btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-slate-500">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;