import React from "react"
import servicesData from "./servicesData"
import {Link} from "react-router-dom"
function ServicesList() {
    const serviceList = servicesData.map(service => {
        return(
            <Link to={`/services/${service._id}`} key={service._id}> 
                <h4>{service.name} - ${service.price}</h4>
            </Link>
            )
    })
    
    return (
        <div>
            <h1>Services List Page</h1>
            {serviceList}
        </div>
    )
}

export default ServicesList