import { FC } from "react";
import { team } from "../../../utils/ team";
import EmployeeСardButtons from "./buttons";
interface IEmployeeСardProps {
  employeeСard: (typeof team)[0];
}
const EmployeeСard: FC<IEmployeeСardProps> = ({ employeeСard }) => {
  return (
    <section
      style={{
        width: 300,
        height: 350,
        display: "grid",
        justifyContent: "center",
        gap: 15,
      }}
    >
      <img
        style={{
          margin: "auto",
          width: 200,
          height: 200,
          borderRadius: 200,
          objectFit: "cover",
        }}
        src={employeeСard.image}
        alt="Моё изображение"
      />
      <h4 style={{ textAlign: "center", margin: 0, padding: 0 }}>
        {employeeСard.fullName}
      </h4>
      <p style={{ textAlign: "center", margin: 0, padding: 0 }}>
        {employeeСard.jobTitle}
      </p>
      <EmployeeСardButtons employeeСard={employeeСard} />
    </section>
  );
};
export default EmployeeСard;
