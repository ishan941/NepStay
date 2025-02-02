import Image from "next/image";
import React from "react";
import apiService from "../services/apiService";
import Link from "next/link";
const MyReservationPage = async () => {
  const reservations = await apiService.get(`/api/auth/myreservations/`);

  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <h1 className="my-6 text-2xl"> My reservations </h1>
      <div className="space-y-4">
        {reservations.map((reservations: any) => {
          return (
            <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-100">
              <div className="col-span-1">
                <div className="relative overflow-hidden aspect-square rounded-xl">
                  <Image
                    fill
                    src={reservations.property.image_url}
                    className="hover:scale-110 object-cover transition h-full w-full"
                    alt="Beach house"
                  />
                </div>
              </div>
              <div className="col-span-3 space-y-2">
                <h2 className="mb-4 text-xl">
                  <strong>{reservations.property.title}</strong>
                </h2>
                <p className="col-span-1 md:col-span-3">
                  <strong>Check in date: </strong>
                  {reservations.start_date}
                </p>
                <p className="col-span-1 md:col-span-3">
                  <strong>Check out date: </strong>
                  {reservations.end_date}
                </p>
                <p className="col-span-1 md:col-span-3">
                  <strong>Number of nights: </strong>
                  {reservations.number_of_nights}
                </p>
                <p className="col-span-1 md:col-span-3">
                  <strong>Total Price: </strong>
                  {reservations.total_price}
                </p>
                <Link
                  href={`/properties/${reservations.property.id}`}
                  className="mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl"
                >
                  Go to property
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default MyReservationPage;
