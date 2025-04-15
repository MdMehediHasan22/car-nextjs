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
            <section>
                <figure className="flex justify-center w-full">
                <Image src={"/assets/images/checkout/checkout.png"}
                width={1137}
                height={300}
                alt={"banner"}
                />
                </figure>
            </section>
            <p>{p.id}</p>
            <p>{JSON.stringify(data)}</p>
        </div>
    );
 }