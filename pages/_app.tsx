import { useEditState } from "tinacms/dist/react";
import "../styles.css";

const App = ({ Component, pageProps }) => {
  const { edit } = useEditState();
  const slug = typeof window !== "undefined" ? window.location.pathname : "/";
  const isPreviewDeploy = process.env.VERCEL_ENV === "preview";
  return (
    <>
      {isPreviewDeploy && !edit && (
        <div>
          <a href={`/admin/index.html#/~${slug}`}>Edit with Tina</a>{" "}
        </div>
      )}
      {isPreviewDeploy && edit && (
        <div>
          <a
            onClick={() => {
              window.parent.location.href = slug.replace(
                "/admin/index.html#/~",
                ""
              );
            }}
          >
            Back to page
          </a>{" "}
        </div>
      )}
      <Component {...pageProps} />
    </>
  );
};

export default App;
