import { FC } from "react";
import { team } from "../../../../../data/ team";
import { TelegramIcon } from "../../../../../components/ui/icons/telegram-icon";
import { GitIcon } from "../../../../../components/ui/icons/git-icon";
import { LinkdnIcon } from "../../../../../components/ui/icons/linkdn-icon";
interface IEmployeeСardProps {
  employeeСard: (typeof team)[0];
}
const buttonsStyle = {
  display: "flex",
  width: 48,
  height: 48,
  background: "#12F3AF",
  borderRadius: 24,
  justifyContent: "center",
  alignItems: "center",
};
const EmployeeСardButtons: FC<IEmployeeСardProps> = ({ employeeСard }) => {
  return (
    <section style={{ display: "flex", gap: 8 }}>
      <a
        style={{
          display: "flex",
          width: 106,
          height: 48,
          border: " 0.7px solid #282A2E",
          borderRadius: " 24px",
          justifyContent: "center",
          alignItems: "center",
          textDecoration: "none",
        }}
        href={employeeСard.resume}
        target="_blank"
        rel="noopener noreferrer"
      >
        Резюме
      </a>
      <a
        style={buttonsStyle}
        href={employeeСard.telegram}
        target="_blank"
        rel="noopener noreferrer"
      >
        <TelegramIcon />
      </a>
      <a
        style={buttonsStyle}
        href={employeeСard.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkdnIcon />
      </a>
      <a
        style={buttonsStyle}
        href={employeeСard.gitHub}
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitIcon />
      </a>
    </section>
  );
};
export default EmployeeСardButtons;
