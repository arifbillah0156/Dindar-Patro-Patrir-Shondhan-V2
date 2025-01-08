import Link from "next/link.js";
import data from "./getData.jsx";
import Text from "./single_text.jsx";
export default async function SingleBiodata({ params }) {
  const { id } = await params;
  const fullData = await data(id);

  const {
    boyOrGirl,
    name,
    age,
    height,
    weight,
    birthDate,
    address,
    permanentAddress,
    growupAddress,
    bodyColor,
    bloodGroup,
    islamiShoriah,
    dinerKaj,
    watchNatok,
    sharirikRog,
    marriedStatus,
    dari,
    porda,
    quran,
    namaj,
    mazhab,
    division,
    sscEducation,
    hscEducation,
    honorsEducation,
    education,
    selectMediumOfEducation,
    selectOccupation,
    occupation,
    monthlyIncome,
    shokh,
    wifePorda,
    wifeEducation,
    wifeJob,
    wifeLeaving,
    marriedGift,
    personalDetails,
    familyDetails,
    partnerDetails,
    fatherOccupation,
    motherOccupation,
    brotherDetails,
    sisterDetails,
    mamaDetails,
    familyDiniPoribesh,
    guardianPermission,
    new1,
    new2,
    new3,
    new4,
    new5,
    new6,
    new7,
    new8,
    new9,
  } = fullData;

  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-gray-100 p-4 mt-4 text-center border rounded-3xl">
        <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl w-full">
          <h1 className="text-3xl font-bold text-center mb-6 underline underline-offset-8 decoration-double text-purple-900">
            “সম্পূর্ণ বায়োডাটা”
          </h1>
          <div className="space-y-4">
            {" "}
            <hr />
            <Text text={"নাম"} value={name} />
            <hr />
            <Text text={"বয়স"} value={age} />
            <hr />
            <Text text={"জন্ম তারিখ"} value={birthDate} />
            <hr />
            <Text text={"বৈবাহিক অবস্থা"} value={marriedStatus} />
            <hr />
            <Text text={"উচ্চতা"} value={height} />
            <hr />
            <Text text={"শিক্ষা মাধ্যম"} value={selectMediumOfEducation} />
            <hr />
            <Text
              text={"শিক্ষাগত যোগ্যতা (এসএসসি/সমমান)"}
              value={sscEducation}
            />
            <hr />
            <Text
              text={"শিক্ষাগত যোগ্যতা (এইচএসসি/সমমান)"}
              value={hscEducation}
            />
            <hr />
            <Text
              text={"শিক্ষাগত যোগ্যতা (অনার্স/সমমান)"}
              value={honorsEducation}
            />
            <hr />
            <Text text={"শিক্ষাগত যোগ্যতা (অন্যান্য)"} value={education} />
            <hr />
            <Text text={"পেশা"} value={selectOccupation} />
            <hr />
            <Text text={"পেশার বিস্তারিত বিবরণ"} value={occupation} />
            <hr />
            <Text text={"মাসিক ইনকাম"} value={monthlyIncome} />
            <hr />
            <Text text={"ওজন"} value={weight} />
            <hr />
            <Text text={"গায়ের রং"} value={bodyColor} />
            <hr />
            <Text text={"মাহরাম/নন মাহরাম মেনে পর্দা"} value={porda} />
            <hr />
            <Text text={"সহিহ-শুদ্ধভাবে কোরআন তেলোয়াত"} value={quran} />
            <hr />
            <Text text={"নিয়মিত পাচঁ ওয়াক্ত নামাজ"} value={namaj} />
            <hr />
            <Text text={"মাযহাব অনুসরণ"} value={mazhab} />
            <hr />
            <Text
              text={"অন্যান্য ইসলামি শরিয়াহ্ বিধিবিধান মেনে চলা"}
              value={islamiShoriah}
            />
            <hr />
            <Text
              text={"দ্বীনের কোনো বিশেষ মেহনতে যুক্ত থাকা"}
              value={dinerKaj}
            />
            <hr />
            <Text
              text={"নাটক/সিনেমা/সিরিয়াল/গান দেখা বা শুনা"}
              value={watchNatok}
            />
            <hr />
            <Text
              text={"কোনো মানসিক/শারিরিক রোগ/অঙ্গহানী আছে কিনা"}
              value={sharirikRog}
            />
            <hr />
            <Text
              text={"শখ, পছন্দ, অপছন্দ, রুচিবোধ, স্বপ্ন ইত্যাদি"}
              value={shokh}
            />
            <hr />
            <Text text={"ব্যাক্তিগত অন্যান্য তথ্য"} value={personalDetails} />
            <hr />
            <Text text={"রক্তের গ্রুপ"} value={bloodGroup} />
            <hr />
            <Text text={"বিভাগ"} value={division} />
            <hr />
            <Text text={"বর্তমান ঠিকানা"} value={address} />
            <hr />
            <Text text={"স্থায়ী ঠিকানা"} value={permanentAddress} />
            <hr />
            <Text text={"কোথায় বড় হয়েছেন"} value={growupAddress} />
            <hr />
            {boyOrGirl === "পাত্র" && (
              <div>
                <Text text={"সুন্নতি দাড়ি"} value={dari} />
                <hr />
                <Text
                  text={"বিয়ের পর স্ত্রীকে পর্দায় রাখবেন?"}
                  value={wifePorda}
                />{" "}
                <hr />
                <Text
                  text={"বিয়ের পর স্ত্রীকে পড়াশোনা করতে দিবেন?"}
                  value={wifeEducation}
                />{" "}
                <hr />
                <Text
                  text={"বিয়ের পর স্ত্রীকে চাকরি করতে দিতে চান?"}
                  value={wifeJob}
                />{" "}
                <hr />
                <Text
                  text={"বিয়ের পর স্ত্রীকে নিয়ে কোথায় থাকতে চান?"}
                  value={wifeLeaving}
                />
                <hr />
              </div>
            )}
            <Text
              text={"অপর পক্ষের কাছ থেকে কোনো উপহার আশা করবেন?"}
              value={marriedGift}
            />
            <hr />
            <Text text={"যেমন জীবনসঙ্গী চাই"} value={partnerDetails} />
            <hr />
            <Text
              text={"অভিভাবকের সম্মতি আছে কিনা"}
              value={guardianPermission}
            />
            <hr />
            <Text text={"পিতার পেশার বিবরণ"} value={fatherOccupation} />
            <hr />
            <Text text={"মাতার পেশার বিবরণ"} value={motherOccupation} />
            <hr />
            <Text text={"ভাইদের তথ্য"} value={brotherDetails} />
            <hr />
            <Text text={"বোনদের তথ্য"} value={sisterDetails} />
            <hr />
            <Text text={"চাচা এবং মামাদের তথ্য"} value={mamaDetails} />
            <hr />
            <Text
              text={"পারিবারিক অর্থনৈতিক অবস্থার বর্ণনা"}
              value={familyDetails}
            />
            <hr />
            <Text text={"পারিবারিক দ্বীনি পরিবেশ"} value={familyDiniPoribesh} />
            <hr />
            <Text
              text={"যোগাযোগের তথ্য"}
              value={"সকল তথ্য পেতে আমাদের ফেসবুক পেইজে মেসেজ দিন।"}
            />
            <Link
              href="/guide"
              className="text-lg  mx-2 px-3 py-2 underline text-blue-700"
            >
              যোগাযোগের নিয়ম জানুন
            </Link>{" "}
            <br />
            <Link
              href="https://www.facebook.com/DeendarPatraPatrisandhan"
              passHref
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg  mx-2 px-3 py-2 underline text-blue-700"
            >
              আমাদের ফেসবুক পেইজে যেতে এখানে ক্লিক করুন
            </Link>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}
