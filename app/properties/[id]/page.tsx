import ReservationSidebar from "@/app/components/properties/ReservationSidebar";
import Image from "next/image";

export default function PropertyDetailPage() {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      {" "}
      <div className="w-full h-[64vh] overflow-hidden rounded-xl relative">
        <Image
          fill
          src="/beach_1.jpg"
          className="object-cover w-full h-full"
          alt="Beach house"
        />
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="py-6 pr-6 col-span-3">
          <h1 className=" mb-4 text-4xl"> Property Name</h1>
          <span className="mb-6 block text-lg text-gray-500">
            4 guests - 3 bedrooms -1 bathroom
          </span>
          <hr />
          <div className="py-6 flex items-center space-x-4">
            <Image
              src="/profile_pic_1.jpg"
              width={50}
              height={50}
              className="rounded-full"
              alt="The user name"
            />
            <p>
              <strong> Ishan Shrestha</strong> is your host
            </p>
          </div>
          <hr />
          <p className="mt-6 text-lg">
            Welcome to your dream home! This charming property boasts a perfect
            blend of modern amenities and cozy comfort. Featuring spacious
            living areas filled with natural light, a contemporary kitchen with
            state-of-the-art appliances, and a serene backyard perfect for
            relaxing or entertaining. Each room is thoughtfully designed to
            create a warm and inviting atmosphere. Whether you're looking for a
            peaceful retreat or a vibrant space to host friends and family, this
            home offers it all. Discover the perfect balance of style and
            functionality in every corner.
          </p>
        </div>
        <ReservationSidebar />
      </div>
    </main>
  );
}
