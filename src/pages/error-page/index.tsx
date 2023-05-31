import { useNavigate } from "react-router-dom";
import { ErrorPageIcon } from "../../components/ui/icons/error-page-icon";
import { H2 } from "../../components/ui/typography/h2/h2";
import { ArrowRightSmallIcon } from "../../components/ui/icons/arrow-right-small-icon";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <section
      style={{
        height: "max-content",
        display: "grid",
        gridTemplateColumns: "max-content",
        justifyContent: "center",
        marginTop: 40,
      }}
    >
      <H2>К сожалению, этой страницы не существует.</H2>
      <ErrorPageIcon />
      <button
        onClick={() => navigate("/")}
        style={{
          display: "flex",
          margin: "auto",
          width: 284,
          height: 48,
          background: "#12F3AF",
          borderRadius: 24,
          border: "none",
          cursor: "pointer",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        Перейти на главную
        <ArrowRightSmallIcon />
      </button>
    </section>
  );
};
export default ErrorPage;
