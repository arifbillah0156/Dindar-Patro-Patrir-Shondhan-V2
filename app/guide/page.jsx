"use client";
import GuideSection from "./guideSection";
export default function Guide() {
  return (
    <div
      className="h-max w-[100%] bg-cover bg-center transition-all duration-1000 py-12 mb-[-41px] rounded-3xl"
      style={{
        backgroundImage: `url(/Images/GuideBG.jpg)`,
      }}
    >
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold underline decoration-double text-gray-900 bg-white w-max px-6  py-4 rounded-lg decoration-pink-400 underline-offset-4">
            ~সাধারণ নির্দেশিকা~
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4">
        <GuideSection
          header="১. সতর্কতা:-"
          text="কর্তৃপক্ষ কেবল পাত্র বা পাত্রীর কাছ থেকে বায়োডাটা সংগ্রহ করে এবং আগ্রহী পক্ষের মধ্যে পছন্দ অনুযায়ী বায়োডাটা সরবরাহ করে। তবে, বায়োডাটা যাচাই-বাছাই বা ভেরিফিকেশনের কোনো সুযোগ কর্তৃপক্ষের নেই। তাই আপনাদের প্রতি অনুরোধ, নিজ দায়িত্বে প্রয়োজনীয় যাচাই-বাছাই করে সিদ্ধান্ত নেবেন। কোনো ধরনের সমস্যা বা প্রতারণার শিকার হলে তার সম্পূর্ণ দায়ভার সংশ্লিষ্ট পক্ষের ওপর বর্তাবে। এক্ষেত্রে কর্তৃপক্ষ দুনিয়া বা আখিরাতে কোনোভাবেই দায়ী থাকবে না এবং কারো কাছে জবাবদিহি করতে বাধ্য নয়। এই শর্ত মেনে চলতে রাজি থাকলে তবেই আগ্রহী হন।"
        />{" "}
        <br />
        <GuideSection
          header="২. বায়োডাটা জমা দিতে কত টাকা লাগে:-"
          text="দ্বীনদার পাত্র-পাত্রীর সন্ধান ওয়েবসাইটে সম্পূর্ণ বিনামূল্যে বায়োডাটা জমা দেওয়ার সুযোগ রয়েছে।"
        />
        <br />
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 underline decoration-wavy underline-offset-4">
            ৩. পাত্র/পাত্রীর বায়োডাটায় আগ্রহী হলে কিভাবে যোগাযোগ করবো?
          </h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2 text-lg">
            <li>এক্ষেত্রে আপনাকে নির্দিষ্ট ফি প্রদান করতে হবে।</li>
            <li>
              প্রথমে আমাদের বিকাশ/নগদ পার্সোনাল নাম্বারে{" "}
              <s
                onClick={() =>
                  alert("বর্তমানে 3৫০ টাকা ডিসকাউন্ট দেওয়া হচ্ছে!")
                }
                title="বর্তমানে 3৫০ টাকা ডিসকাউন্ট দেওয়া হচ্ছে!"
                className="px-2 cursor-pointer text-pink-600"
              >
                ৪০০
              </s>{" "}
              <span className="underline underline-offset-[6px] text-xl">
                ৫০ (পঞ্চাশ)
              </span>{" "}
              টাকা সেন্ড মানি করতে হবে।
            </li>
            <li>
              আমাদের বিকাশ/নগদ পার্সোনাল নাম্বার:-{" "}
              <span className="font-mono text-xl">01831-606920</span>
            </li>
            <li>
              টাকা সেন্ড মানি করার পর ট্রান্জেকশন আইডি আমাদের ফেসবুক পেইজে মেসেজ
              করে দিবেন।
            </li>
            <li>
              তারপর আপনাকে আপনার পছন্দকৃত পাত্র/পাত্রীর সাথে যোগাযোগ করিয়ে দেওয়া
              হবে।
            </li>
            <li>বিবাহকে সহজ করাই আমাদের মূল লক্ষ্য।</li>
          </ul>
        </section>{" "}
        <br />
        <GuideSection
          header="৪. আমার জমা দেওয়া বায়োডাটা এডিট করবেন কিভাবে?"
          text="আপনার জমা হওয়া বায়োডাটা এডিট করতে আমাদের ফেসবুক পেইজে মেসেজ দিয়ে বলুন।"
        />{" "}
        <br />
        <GuideSection
          header="৫. আমার জমা দেওয়া বায়োডাটা ডিলিট করবো কিভাবে?"
          text="আপনার জমা হওয়া বায়োডাটা ডিলিট করাতে আমাদের ফেসবুক পেইজে মেসেজ দিয়ে বলুন।"
        />
      </main>
    </div>
  );
}
