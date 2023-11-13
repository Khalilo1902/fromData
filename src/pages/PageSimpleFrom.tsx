import axios, { AxiosResponse } from "axios";
import { FormEvent } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { IEmployee } from "../interface";

export const PageSimpleFrom = () => {
  const navigate = useNavigate();
  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    console.log(data);
    const employees:IEmployee = {...Object.fromEntries(formData), age: Number(formData.get("age"))} as IEmployee;

    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };

    try {
      const response: AxiosResponse = await axios.post(
        "http://localhost:4801/employees",
        employees,
        { headers }
      );

      if (response.status === 201) {
        navigate("/employees");
      } else {
        console.log(`ERROR: ${response.status}`);
      }
    } catch (error: any) {
      console.log(`ERROR: ${error.message}`);
    }
  };

  return (
    <form action="" onSubmit={handleFormSubmit} className=" bg-slate-300">
      <fieldset className=" border border-slate-500 p-4 rounded">
        <legend>New Employee</legend>

        <div className="mb-4 flex gap-2">
          <label className="w-[10rem]" htmlFor="firstName">
            first Name:
          </label>
          <input type="text" id="firstName" name="firstName" required />
        </div>
        <div className="mb-4 flex gap-2">
          <label className="w-[10rem]" htmlFor="lastName">
            Last Name:
          </label>
          <input type="text" id="lastName" name="lastName" required />
        </div>
        <div className="mb-4 flex gap-2">
          <label className="w-[10rem]" htmlFor="age">
            Age:
          </label>
          <input type="number" id="age" name="age" required />
        </div>

        <div className="mb-4 flex gap-2">
          <label className="w-[10rem]" htmlFor="hireDate">
            Hire Date:
          </label>
          <input type="date" id="hireDate" name="hireDate" required />
        </div>

        <div className="mb-4 flex gap-2">
          <label className="w-[10rem]" htmlFor="employeeNumber">
            Employee Number:
          </label>
          <div>
            <input
              type="text"
              id="employeeNumber"
              name="employeeNumber"
              pattern="^[DSM]-\d{4}$"
              required
            />
            <p className="text-sm">e.g. D-2832, S-7771, M-8123</p>
          </div>
        </div>

        <div className="mb-4 flex gap-2">
          <label className="w-[10rem]" htmlFor="notes">
            Notes:
          </label>
          <textarea id="notes" name="notes"></textarea>
        </div>

        <div className="mt-5 flex justify-end pr-3 ">
          <button className=" bg-slate-700 px-4 py-1 rounded hover:text-slate-300">
            Add Employee
          </button>
        </div>
      </fieldset>
    </form>
  );
};
