import React from "react";
import Link from "next/link";

// হোম পেজে “বায়োডাটা তৈরি করুন” বাটন/লিংক।

export default function HomeAddBiodata() {
  return (
    <div className="mt-12 flex justify-center">
      <div
        className="text-center w-full sm:w-[max-content] my-5 px-4"
        title="ফ্রিতে আপনার বায়োডাটা তৈরি করুন।"
      >
        <Link
          href={"/create_new_biodata"}
          className="text-2xl sm:text-4xl bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white px-12 py-8 rounded-full shadow-lg shadow-rose-300 block"
        >
          + বায়োডাটা তৈরি করুন
        </Link>
      </div>
    </div>
  );
}
