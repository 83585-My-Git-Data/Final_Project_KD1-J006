import Footer from "../components/footerComponent"
import MultiSelectDropdown from "../components/multiSelectComponent"
import Navbar from "../components/navbar"

function Engage(){
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card my-5">
                            <div className="card-header bg-primary text-white">
                                <h5>Alumni Help Desk</h5>
                                <p>Manage alumni related queries</p>
                            </div>
                            <div className="card-body">
                                <p>Your go-to destination for all the alumni related queries</p>
                                <form>
                                    <div className="form-group mb-3">
                                        {/* <label htmlFor="institution">Institution*</label>
                                        <select id="institution" className="form-control">
                                            <option>United College of Engineering & Research, Prayagraj</option>
                                        </select> */}
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="service">Service Required*</label>
                                        {/* <select id="service" className="form-control" defaultValue="">
                                            <option value="" disabled>Select a Service</option>
                                            <option value="Be a Mentor">Be a Mentor</option>
                                            <option value="As a Speaker">As a Speaker</option>
                                            <option value="Wish to Recruit">Wish to Recruit</option>
                                        </select> */}
                                        <MultiSelectDropdown/>
                                    </div>
                                    <div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
} 
export default Engage