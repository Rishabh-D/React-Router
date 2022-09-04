import React from "react"
import {useParams} from "react-router-dom"
import servicesData from "./servicesData"

function ServiceDetail(props) {
    const serviceid = useParams()
    console.log(serviceid)
    const thisService = servicesData.find(data => (data._id == serviceid.serviceid))
    console.log(thisService)
    return (
        <>
        <h1>Service Detail Page</h1>
        <h3>{thisService.name}</h3>
        </>
    )
}

export default ServiceDetail