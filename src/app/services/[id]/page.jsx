 import { collectionNamesObj } from "@/lib/dbConnect";
import React from "react";

 export default async function ServiceDetailsPage({params}){
    const p = await params;
    const serviceCollection = dbConnect(collectionNamesObj.servicesCollection)
    return (
        <div>
            <p>{p.id}</p>
        </div>
    );
 }