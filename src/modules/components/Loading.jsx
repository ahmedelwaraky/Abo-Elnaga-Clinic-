import { useEffect, useState } from "react";
import MainLogo from "../../assets/images/main/MainLogo.png";

const Loading = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2C5F8D] via-[#4A90E2] to-[#87CEEB]">
      {/* خلفية متحركة بأشكال هندسية */}
      <div className="absolute inset-0 overflow-hidden">
        {/* دوائر كبيرة متحركة */}
        <div
          className="absolute -top-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "5s", animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-300/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "6s", animationDelay: "2s" }}
        />

        {/* أشكال هندسية صغيرة */}
        <div
          className="absolute top-20 right-1/4 w-4 h-4 bg-yellow-400/30 rounded-full animate-bounce"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="absolute bottom-40 left-1/3 w-3 h-3 bg-white/40 rounded-full animate-bounce"
          style={{ animationDuration: "4s", animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 right-20 w-5 h-5 bg-blue-200/30 rounded-full animate-bounce"
          style={{ animationDuration: "3.5s", animationDelay: "0.5s" }}
        />

        {/* خطوط قطرية */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      </div>

      {/* المحتوى الرئيسي */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-12">
        {/* اللوجو مع الحلقة الدوارة */}
        <div className="relative">
          {/* حلقات دوارة متعددة */}
          <div className="absolute -inset-6">
            <div
              className="w-full h-full border-[3px] border-transparent border-t-yellow-400 border-r-yellow-400 rounded-full animate-spin"
              style={{ animationDuration: "3s" }}
            />
          </div>
          <div className="absolute -inset-8">
            <div
              className="w-full h-full border-[2px] border-transparent border-b-white/40 border-l-white/40 rounded-full animate-spin"
              style={{ animationDuration: "4s", animationDirection: "reverse" }}
            />
          </div>

          {/* توهج خلف اللوجو */}
          <div
            className="absolute inset-0 bg-yellow-400/20 rounded-full blur-2xl animate-pulse"
            style={{ animationDuration: "2s" }}
          />

          {/* اللوجو */}
          <div className="relative bg-white rounded-full p-10 shadow-[0_25px_70px_rgba(0,0,0,0.2)]">
            <img
              src={MainLogo}
              alt="Dental Clinic Logo"
              className="w-36 h-36 object-contain"
            />
          </div>
        </div>

        {/* النص */}
        <div className="text-center space-y-3 px-4">
          <h1 className="pb-2 text-5xl font-bold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
            التميز في رعاية الأسنان
          </h1>
          <p className="text-xl text-white/95 font-medium drop-shadow-lg">
            عيادات أبو النجا لتقويم وزراعة الأسنان
          </p>
          <p className="text-lg text-white/85 drop-shadow-md">
            Abo Elnaga Dental Clinics
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-96 max-w-md px-4" dir="ltr">
          {/* شريط التقدم */}
          <div className="relative h-3 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm shadow-lg">
            {/* الخلفية المتوهجة */}
            <div
              className="absolute right-0 top-0 bottom-0 bg-gradient-to-l from-yellow-400 to-yellow-500 rounded-full transition-all duration-300 ease-out"
              style={{
                width: `${progress}%`,
                boxShadow: "0 0 20px rgba(253, 185, 19, 0.6)",
              }}
            >
              {/* تأثير اللمعان المتحرك */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/30 to-transparent animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
