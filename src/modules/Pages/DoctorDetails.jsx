import { useParams, useNavigate } from "react-router-dom";
import { useTheme } from "../../core/createContext";
import { ArrowRight, Award, Users, Video, Star, Calendar } from "lucide-react";
import { Card, CardContent } from "../../shared/ui/Card";
import { useEffect } from "react";
import Navbar from "../components/Navbar";

const DoctorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isDark } = useTheme();

  // ✅ رجوع الصفحة لفوق عند الدخول
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    console.log("Doctor ID:", id);
  }, [id]);

  // بيانات تجريبية للعرض
  const doctor = {
    id: id,
    nameAr: "د. محمد أحمد أبو النجا",
    roleAr: "استشاري تقويم وزراعة الأسنان",
    img: "https://via.placeholder.com/400x500",
    bio: "دكتور متخصص ذو خبرة واسعة في مجال طب الأسنان، ملتزم بتقديم أفضل رعاية صحية للمرضى باستخدام أحدث التقنيات والأساليب العلاجية.",
    experience: "15+",
  };

  const stats = [
    { icon: Users, number: "5000+", label: "مريض سعيد" },
    { icon: Award, number: "15+", label: "سنة خبرة" },
    { icon: Star, number: "4.9", label: "تقييم" },
    { icon: Calendar, number: "200+", label: "عملية شهرياً" },
  ];

  const achievements = [
    "ماجستير في تقويم الأسنان",
    "عضو الجمعية الأمريكية لتقويم الأسنان",
    "خبرة 15 عام في مجال طب الأسنان",
    "أكثر من 5000 حالة ناجحة",
  ];

  const specializations = [
    "تقويم الأسنان",
    "زراعة الأسنان",
    "تجميل الأسنان",
    "علاج الجذور",
    "جراحة الفم",
    "ابتسامة هوليود",
  ];

  const doctorVideos = [
    {
      id: 1,
      title: "نصائح للعناية بالأسنان",
      thumbnail: "https://via.placeholder.com/400x300",
      duration: "05:30",
    },
    {
      id: 2,
      title: "أهمية التقويم الشفاف",
      thumbnail: "https://via.placeholder.com/400x300",
      duration: "08:15",
    },
    {
      id: 3,
      title: "كيفية اختيار الطبيب المناسب",
      thumbnail: "https://via.placeholder.com/400x300",
      duration: "06:45",
    },
  ];

  const patientReviews = [
    {
      id: 1,
      name: "أحمد محمد",
      rating: 5,
      comment: "دكتور ممتاز ومحترف، أنصح الجميع بالتعامل معه",
      date: "منذ أسبوع",
    },
    {
      id: 2,
      name: "سارة علي",
      rating: 5,
      comment: "تجربة رائعة، النتائج فاقت التوقعات",
      date: "منذ أسبوعين",
    },
    {
      id: 3,
      name: "محمد خالد",
      rating: 5,
      comment: "دكتور ماهر وصبور، شكراً على الخدمة الممتازة",
      date: "منذ 3 أسابيع",
    },
  ];

  return (
    <>
    <Navbar/>
      {" "}
      <div
        className={`min-h-screen transition-colors duration-300 ${
          isDark ? "bg-[#1a2332]" : "bg-gray-50"
        }`}
      >
        {/* Hero Section */}
        <section
          className={`mt-5 py-20 ${isDark ? "bg-[#193D66]" : "bg-[#DDEAF8]"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
            {/* Back Button */}
            {/* <button
              onClick={() => navigate(-1)}
              className={`flex items-center gap-2 mb-8 px-4 py-2 rounded-lg transition-all hover:scale-105 ${
                isDark
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
              style={{ fontFamily: '"Cairo", sans-serif' }}
            >
              <ArrowRight className="w-5 h-5" />
              العودة للرئيسية
            </button> */}

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Doctor Image */}
              <div className="order-2 md:order-1">
                <div
                  className={`rounded-3xl overflow-hidden shadow-2xl ${
                    isDark
                      ? "border-2 border-gray-700"
                      : "border-2 border-gray-200"
                  }`}
                >
                  <img
                    src={doctor.img}
                    alt={doctor.nameAr}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Doctor Info */}
              <div className="order-1 md:order-2 text-right">
                <h1
                  className={`text-4xl md:text-5xl font-bold mb-4 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                  style={{ fontFamily: '"Cairo", sans-serif' }}
                >
                  {doctor.nameAr}
                </h1>
                <p
                  className={`text-2xl mb-6 ${
                    isDark ? "text-blue-400" : "text-blue-600"
                  }`}
                  style={{ fontFamily: '"Cairo", sans-serif' }}
                >
                  {doctor.roleAr}
                </p>
                <p
                  className={`text-lg leading-relaxed mb-8 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                  style={{ fontFamily: '"Cairo", sans-serif' }}
                >
                  {doctor.bio}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => {
                    const IconComponent = stat.icon;
                    return (
                      <div
                        key={index}
                        className={`p-4 rounded-xl text-center transition-all hover:scale-105 ${
                          isDark
                            ? "bg-[#1a2837] border border-gray-700"
                            : "bg-white border border-gray-200 shadow-md"
                        }`}
                      >
                        <IconComponent
                          className={`w-8 h-8 mx-auto mb-2 ${
                            isDark ? "text-blue-400" : "text-blue-600"
                          }`}
                        />
                        <div
                          className={`text-2xl font-bold mb-1 ${
                            isDark ? "text-white" : "text-gray-900"
                          }`}
                          style={{ fontFamily: '"Cairo", sans-serif' }}
                        >
                          {stat.number}
                        </div>
                        <div
                          className={`text-sm ${
                            isDark ? "text-gray-400" : "text-gray-600"
                          }`}
                          style={{ fontFamily: '"Cairo", sans-serif' }}
                        >
                          {stat.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className={`text-3xl font-bold mb-8 text-right ${
                isDark ? "text-white" : "text-gray-900"
              }`}
              style={{ fontFamily: '"Cairo", sans-serif' }}
            >
              المؤهلات والإنجازات
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl flex items-start gap-4 transition-all hover:scale-105 ${
                    isDark
                      ? "bg-[#243447] border border-gray-700"
                      : "bg-white border border-gray-200 shadow-md"
                  }`}
                >
                  <Award
                    className={`w-6 h-6 flex-shrink-0 ${
                      isDark ? "text-blue-400" : "text-blue-600"
                    }`}
                  />
                  <p
                    className={`text-right ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                    style={{ fontFamily: '"Cairo", sans-serif' }}
                  >
                    {achievement}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specializations Section */}
        <section className={`py-16 ${isDark ? "bg-[#2a2a2a]" : "bg-gray-100"}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className={`text-3xl font-bold mb-8 text-right ${
                isDark ? "text-white" : "text-gray-900"
              }`}
              style={{ fontFamily: '"Cairo", sans-serif' }}
            >
              التخصصات
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {specializations.map((spec, index) => (
                <div
                  key={index}
                  className={`px-6 py-4 rounded-lg text-center font-medium transition-all hover:scale-105 ${
                    isDark
                      ? "bg-blue-900/50 text-blue-300 border border-blue-700/50 hover:bg-blue-800/60"
                      : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                  }`}
                  style={{ fontFamily: '"Cairo", sans-serif' }}
                >
                  {spec}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Videos Section */}
        <section className={`py-16 ${isDark ? "bg-[#1a2332]" : "bg-white"}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className={`text-3xl font-bold mb-8 text-right ${
                isDark ? "text-white" : "text-gray-900"
              }`}
              style={{ fontFamily: '"Cairo", sans-serif' }}
            >
              فيديوهات الدكتور
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {doctorVideos.map((video) => (
                <Card
                  key={video.id}
                  className={`overflow-hidden cursor-pointer transition-all hover:scale-105 ${
                    isDark
                      ? "bg-[#243447] border-gray-700"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Video className="w-16 h-16 text-white" />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs">
                      {video.duration}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3
                      className={`text-right font-bold ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                      style={{ fontFamily: '"Cairo", sans-serif' }}
                    >
                      {video.title}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Patient Reviews Section */}
        <section className={`py-16 ${isDark ? "bg-[#2a2a2a]" : "bg-gray-100"}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className={`text-3xl font-bold mb-8 text-right ${
                isDark ? "text-white" : "text-gray-900"
              }`}
              style={{ fontFamily: '"Cairo", sans-serif' }}
            >
              آراء المرضى
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {patientReviews.map((review) => (
                <Card
                  key={review.id}
                  className={`p-6 ${
                    isDark
                      ? "bg-[#243447] border-gray-700"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <div className="text-right mb-4">
                    <h4
                      className={`font-bold mb-2 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                      style={{ fontFamily: '"Cairo", sans-serif' }}
                    >
                      {review.name}
                    </h4>
                    <div className="flex gap-1 justify-end mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p
                      className={`text-sm mb-2 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                      style={{ fontFamily: '"Cairo", sans-serif' }}
                    >
                      "{review.comment}"
                    </p>
                    <p
                      className={`text-xs ${
                        isDark ? "text-gray-500" : "text-gray-500"
                      }`}
                      style={{ fontFamily: '"Cairo", sans-serif' }}
                    >
                      {review.date}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className={`py-16 ${isDark ? "bg-[#193D66]" : "bg-[#DDEAF8]"}`}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className={`text-3xl font-bold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
              style={{ fontFamily: '"Cairo", sans-serif' }}
            >
              هل تريد حجز موعد مع {doctor.nameAr}؟
            </h2>
            <p
              className={`text-lg mb-8 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
              style={{ fontFamily: '"Cairo", sans-serif' }}
            >
              احجز استشارتك المجانية الآن واحصل على ابتسامة أحلامك
            </p>
            <a
              href="#contact"
              className={`inline-flex items-center gap-2 px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-lg ${
                isDark
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
              style={{ fontFamily: '"Cairo", sans-serif' }}
            >
              احجز موعدك الآن
              <Calendar className="w-5 h-5" />
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default DoctorDetails;
