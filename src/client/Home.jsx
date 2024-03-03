import { CompanyDetails } from "../constants/datas"

const Home = () => {
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                        <div className="max-w-md">
                        <h1 className="text-5xl font-bold">{CompanyDetails.name}</h1>
                        <p className="py-6">{CompanyDetails.description2}</p>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Home