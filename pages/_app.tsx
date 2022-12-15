import { useEditState } from "tinacms/dist/react";
import "../styles.css";

const FakeVercelWidget = () => {
  const { edit } = useEditState();
  const slug = typeof window !== "undefined" ? window.location.pathname : "/";
  const isPreviewDeploy = process.env.VERCEL_ENV === "preview";

  if (!isPreviewDeploy) return null;

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 rounded-full border border-[1px] border-white/20">
      <div className="rounded-full flex items-center bg-black/80 backdrop-blur-xl shadow-[0px_8px_30px_rgba(0,0,0,0.25)] p-2">
        <div className="w-8 h-8 flex-0 text-white rounded-full hover:bg-white/10 flex items-center justify-center">
          <svg
            data-testid="geist-icon"
            fill="none"
            height="16"
            shape-rendering="geometricPrecision"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            width="16"
            className="w-4 h-4 fill-transparent"
          >
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
          </svg>
        </div>
        {!edit && (
          <a
            className="w-8 h-8 flex-0 text-white rounded-full hover:bg-white/10 flex items-center justify-center"
            href={`/admin/index.html#/~${slug}`}
          >
            <svg
              className="w-[14.5px] h-[14.5px]"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.3324 1.96875C17.754 2.42578 18 2.95312 18 3.58594C18 4.21875 17.754 4.74609 17.3324 5.16797L4.9634 17.543L0.852123 18C0.57101 18 0.360176 17.9297 0.219619 17.7188C0.0439239 17.543 -0.0263543 17.332 0.00878477 17.0508L0.465593 13.043L12.8346 0.667969C13.2562 0.246094 13.7833 0 14.4158 0C15.0483 0 15.5754 0.246094 16.0322 0.667969L17.3324 1.96875ZM4.19034 15.9258L13.3968 6.71484L11.2884 4.60547L2.08199 13.8164L1.80088 16.207L4.19034 15.9258ZM16.1376 3.97266C16.243 3.86719 16.3133 3.72656 16.3133 3.58594C16.3133 3.44531 16.243 3.30469 16.1376 3.16406L14.8375 1.86328C14.6969 1.75781 14.5564 1.6875 14.4158 1.6875C14.2753 1.6875 14.1347 1.75781 14.0293 1.86328L12.4832 3.41016L14.5915 5.51953L16.1376 3.97266Z"
                fill="white"
              />
            </svg>
          </a>
        )}
        {edit && (
          <a
            className="w-8 h-8 flex-0 text-white rounded-full hover:bg-white/10 flex items-center justify-center"
            href="#"
            onClick={() => {
              window.parent.location.href = slug.replace(
                "/admin/index.html#/~",
                ""
              );
            }}
          >
            <svg
              className="w-[14.5px] h-[14.5px]"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.5 16.0129L1.88889 16.0129L1.88889 2.10324L8.5 2.10324L8.5 0.11615L1.88889 0.11615C0.85 0.11615 -3.90864e-08 1.01034 -8.68586e-08 2.10324L-6.94869e-07 16.0129C-7.42641e-07 17.1058 0.85 18 1.88889 18L8.5 18L8.5 16.0129Z"
                fill="white"
              />
              <path
                d="M11.6961 5.49125L14.1328 8.06454L5 8.06454L5 10.0516L14.1328 10.0516L11.6961 12.6249L13.0278 14.0258L17.75 9.05808L13.0278 4.09035L11.6961 5.49125Z"
                fill="white"
              />
            </svg>
          </a>
        )}
        <div className="w-8 h-8 flex-0 text-white rounded-full hover:bg-white/10 flex items-center justify-center">
          <svg
            data-testid="geist-icon"
            fill="none"
            height="16"
            shape-rendering="geometricPrecision"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            width="16"
            className="w-4 h-4 fill-transparent"
          >
            <path d="M22 12h-6l-2 3h-4l-2-3H2"></path>
            <path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z"></path>
          </svg>
        </div>
        <span className="h-6 bg-white/20 w-px mx-4"></span>
        <div className="flex gap-1">
          <span className="rounded-full w-6 h-6 border border-[2px] border-[rgb(138,99,210)] overflow-hidden">
            <img
              data-version="v1"
              alt=""
              className="image_intrinsic__85bgY avatar_ready__X97MY"
              decoding="async"
              height="20"
              loading="lazy"
              title=""
              width="20"
              src="https://vercel.com/api/www/avatar/?u=sbyrne&s=40"
            />
          </span>
          <span className="rounded-full w-6 h-6 border border-[2px] border-[rgb(248,28,229)] overflow-hidden">
            <img
              data-version="v1"
              alt=""
              className="image_intrinsic__85bgY avatar_ready__X97MY"
              decoding="async"
              height="20"
              loading="lazy"
              title=""
              width="20"
              src="https://vercel.com/api/www/avatar/?u=logan-anderson&amp;s=40"
            />
          </span>
        </div>
        <span className="h-6 bg-white/20 w-px mx-4"></span>
        <div className="w-8 h-8 flex-0 text-white rounded-full hover:bg-white/10 flex items-center justify-center">
          <svg
            data-testid="geist-icon"
            fill="none"
            height="16"
            shape-rendering="geometricPrecision"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            width="16"
            className="w-4 h-4 fill-transparent"
          >
            <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"></path>
            <path d="M16 6l-4-4-4 4"></path>
            <path d="M12 2v13"></path>
          </svg>
        </div>
        <div className="w-8 h-8 flex-0 text-white rounded-full hover:bg-white/10 flex items-center justify-center">
          <svg
            data-testid="geist-icon"
            fill="none"
            height="16"
            shape-rendering="geometricPrecision"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            width="16"
            className="w-4 h-4 fill-transparent"
          >
            <circle cx="12" cy="12" r="1" fill="currentColor"></circle>
            <circle cx="19" cy="12" r="1" fill="currentColor"></circle>
            <circle cx="5" cy="12" r="1" fill="currentColor"></circle>
          </svg>
        </div>
      </div>
    </div>
  );
};

const App = ({ Component, pageProps }) => {
  return (
    <>
      {/* <FakeVercelWidget /> */}
      <Component {...pageProps} />
      <script
        src="https://vercel-live-git-hackathon2022.vercel.sh/_next-live/feedback/feedback.js"
        async
      ></script>
    </>
  );
};

export default App;
