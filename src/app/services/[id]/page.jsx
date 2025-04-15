 import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import React from "react";

 export default async function ServiceDetailsPage({params}){
    const p = await params;
    const servicesCollection = dbConnect(collectionNamesObj.servicesCollection);
    const data = await servicesCollection.findOne({_id: new ObjectId(p.id)});
    return (
        <div>
            <p>{p.id}</p>
            <p>{JSON.stringify(data)}</p>
        </div>
    );
 }