import AuthForm from '@/components/AuthForm';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

import bgImage from '../assets/images/bg-image.png';
import pillImage from '../assets/images/pill-image.png';

const AuthPage = () => {
  return (
    <MaxWidthWrapper className="relative pt-28 md:pt-44 xl:pt-48">
      <div className="mx-auto max-w-screen-lg h-full items-center lg:flex lg:justify-between">
        <h1 className="max-w-[335px] text-3xl font-semibold md:max-w-xl md:text-5xl">
          Your medication, delivered Say goodbye to all{' '}
          <span className="text-green-600">your healthcare</span> worries with
          us
        </h1>
        <AuthForm />
      </div>

      {/* background images */}
      <img
        className="absolute left-[70%] top-[6%] -z-10 h-24 w-24 md:left-[60%] md:top-[5%] md:h-44 md:w-44 lg:left-[40%]"
        src={pillImage}
        alt="pill image"
        width={93}
        height={93}
        aria-hidden="true"
      />
      <img
        className="absolute -bottom-[50%] left-[40%] -z-10 xsm:left-[60%] md:-bottom-[60%] md:left-[70%] lg:-bottom-[90%] lg:left-[80%] 2xl:hidden"
        src={bgImage}
        alt="bg image"
        width={465}
        height={345}
        aria-hidden="true"
      />
    </MaxWidthWrapper>
  );
};

export default AuthPage;
