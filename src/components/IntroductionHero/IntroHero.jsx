import heroImage from "../../../public/images/heroImage.jpg";
const IntroHero = () => {
  return (
    <div className="custom-container border-b-4 border-b-baseColor p-6 py-10 flex flex-col-reverse lg:flex-row text-center md:text-left md:justify-between items-center">
      <div className="md:w-2/3 flex flex-col gap-2">
        <div className="font-bold  text-baseColor text-xl md:text-4xl flex flex-col gap-2 ">
          <p>विजय कुमार शुक्ल &apos;रिंकू&apos;:</p>{" "}
          <p>गोला गोकर्णनाथ के जनप्रिय नेता</p>
        </div>
        <div className="md:w-[78%] text-base md:text-xl leading-10 mt-2">
          <span className="italic">गोला गोकर्णनाथ,</span> जिसे{" "}
          <span className="font-semibold">छोटी काशी</span> के नाम से जाना जाता
          है, के निवासी विजय कुमार शुक्ल &apos;रिंकू&apos;{" "}
          <span className="text-baseColor font-semibold">
            भारतीय जनता पार्टी
          </span>{" "}
          के वरिष्ठ नेता हैं। वे{" "}
          <span className="italic font-medium">
            लखीमपुर-खीरी में भाजपा के जिला-उपाध्यक्ष एवं नगर पालिका परिषद-गोला
            गोकर्णनाथ के अध्यक्ष
          </span>{" "}
          के रूप में अपनी सेवाएँ दे रहे हैं।
          <div>
            <br /> शिक्षा में{" "}
            <span className="font-semibold">एम.ए. और एल.एल.बी.</span> की योग्यता
            रखने वाले रिंकू जी समाज, जन एवं गौ सेवा में सक्रिय हैं। उन्होंने
            नवीन योजनाओं का सफल क्रियान्वन किया,<span className="font-semibold"> &apos;हेल्पलाइन&apos;  की शुरुआत </span>
            कर शिकायतों का त्वरित समाधान किया, तथा नगर की लाइब्रेरी को पुनः जीवन
            दिया।
          </div>
          <div>
            <br />
            <span>
              सम्पूर्ण गोला गोकर्णनाथ नगर में <span className="font-semibold">नाले-नालियों, मार्ग लाईटों, मार्ग
              स्वच्छता</span> के उचित प्रबन्धन हेतु तत्परता से कार्य <span className="font-semibold"> (हेल्पलाइन व
              ऑनलाइन माध्यम से), माँ अन्नपूर्णा रसोई का प्रारंभ जिसमें प्रत्येक
              जन को 10 रुपए में भरपेट भोजन मिलेगा, </span> गोला गोकर्णनाथ में ऑडिटोरियम
              के लिए बजट आवंटन व कार्य प्रारंभ, स्त्रियों द्वारा रखें जाने वाले
              व्रत (हरियाली तीज, वट सावित्री, छठ पूजा आदि) पर जल आदि उचित
              व्यवस्थाओं का प्रारंभ करवाया।
            </span>
            <br />
            <div className="mt-5">
            <span className="font-semibold">88 वर्षों</span> के बाद नगर पालिका
            को प्रतीक चिन्ह दिलवाने जैसे कई उल्लेखनीय कार्य किए हैं।  गोला नगर के उत्थान एवं विकास में तत्परता से संलग्न हैं। उनके
            नेतृत्व में गोला गोकर्णनाथ एक नए उजाले की ओर बढ़ रहा है!
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-full md:w-1/3">
        <img
          className="rounded-full"
          alt="netaji image"
          src={heroImage}
          height="330px"
          width="330px"
        />
      </div>
    </div>
  );
};
export default IntroHero;
