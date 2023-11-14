import * as config from "../config";

import React, { useState } from "react";

const initialFormInfo = {
  fields: {
    firstName: {
      label: "firstName",
      value: "",
      isRequired: true,
      isValid: true,
    },
    lastName: {
      label: "lastName",
      value: "",
      isRequired: true,
      isValid: true,
    },
    age: {
      label: "Age",
      value: "",
      isRequired: true,
      isValid: true,
    },
  },
};

export const PageStateForm = () => {
  const [formInfo, setFormInfo] = useState(initialFormInfo);

  const handleFieldFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const _formInfo = structuredClone(formInfo);
    _formInfo.fields.firstName.value = value;
    setFormInfo(_formInfo);

    // setFormInfo({
    //   ...formInfo,
    //   fields: {
    //     ...formInfo.fields,
    //     firstName: {
    //       ...formInfo.fields.firstName,
    //       value: e.target.value,
    //     },
    //   },
    // });
  };

  const handleFieldLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const _formInfo = structuredClone(formInfo);
    _formInfo.fields.lastName.value = value;
    setFormInfo(_formInfo);

    // setFormInfo({
    //   ...formInfo,
    //   fields: {
    //     ...formInfo.fields,
    //     firstName: {
    //       ...formInfo.fields.firstName,
    //       value: e.target.value,
    //     },
    //   },
    // });
  };
  const handleFieldAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const _formInfo = structuredClone(formInfo);
    _formInfo.fields.age.value = value;
    setFormInfo(_formInfo);
  };
  return (
    <form
      action=""
      className=" bg-slate-300 flex items-center justify-center gap-10"
    >
      <fieldset className=" border border-slate-500 p-4 rounded">
        <legend>New Menmber</legend>
        <div className="mb-4 flex gap-2">
          <label className="w-40" htmlFor="firstName">
            {" "}
            firstName :{" "}
          </label>
          <input
            type="text"
            id="firstName"
            value={formInfo.fields.firstName.value}
            onChange={handleFieldFirstName}
          />
        </div>
        <div className="mb-4 flex gap-2">
          <label className="w-40" htmlFor="lastName">
            {" "}
            lastName :{" "}
          </label>
          <input
            type="text"
            id="lastName"
            value={formInfo.fields.lastName.value}
            onChange={handleFieldLastName}
          />
        </div>
        <div className="mb-4 flex gap-2">
          <label className="w-[10rem]" htmlFor="Age">
            {" "}
            Age :{" "}
          </label>
          <input
            type="text"
            id="Age"
            value={formInfo.fields.age.value}
            onChange={handleFieldAge}
          />
        </div>

        <button className="bg-slate-700 px-4 py-1 rounded hover:text-slate-300">
          Submit
        </button>
      </fieldset>
      {config.debugging && (
        <section>
          <pre className=" text-red-700">
            {JSON.stringify(formInfo, null, 2)}
          </pre>
        </section>
      )}
    </form>
  );
};
