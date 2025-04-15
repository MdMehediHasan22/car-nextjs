 import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import React from "react";

 export default async function ServiceDetailsPage({params}){
    const p = await params;
    const servicesCollection = dbConnect(collectionNamesObj.servicesCollection);
    const data = await servicesCollection.findOne({_id: new ObjectId(p.id)});
    return (
        <div>
            <section className="flex justify-center">
                <figure className=" relative">
                <Image src={"/assets/images/checkout/checkout.png"}
                width={1137}
                height={300}
                alt={"banner"}
                />
                <div className="transparent-layer overlay-bg absolute w-full h-full border-2 border-red-400 top-0">
                  <div className="w-full h-full font-bold text-2xl flex items-center ps-16 ">
                  <h1 className="text-white">Service Details</h1>
                  </div>
                </div>
                </figure>
            </section>
            <p>{p.id}</p>
            <p>{JSON.stringify(data)}</p>
        </div>
    );
 }