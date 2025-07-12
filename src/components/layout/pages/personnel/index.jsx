import React from "react"
export const PersonnelLandingPage = () => {
  return (
    <div>
      <section>
        <h1 className="flex m-10 font-bold text-xl">Add New Personnel:</h1>
        <div className="m-10">
        <form className="flex flex-col border rounded-xl p-4 gap-4 w-[500px]">
          <input className="border"
          placeholder="First name"
          ></input>
          <input className="border"
          placeholder="Middle name"
          ></input>
          <input className="border"
          placeholder="Last name"
          ></input>
          <input className="border"
          placeholder="Pay class"
          ></input>
          <input className="border"
          placeholder="Address"
          ></input>
          <input className="border"
          placeholder="Address 2 (optional)"
          ></input>
          <input className="border"
          placeholder="City"
          ></input>
          <input className="border"
          placeholder="Province"
          ></input>
          <input className="border"
          placeholder="Postal Code"
          ></input>
          <input className="border"
          placeholder="Country"
          ></input>
          <input className="border"
          placeholder="Home phone"
          ></input>
          <input className="border"
          placeholder="Mobile Phone"
          ></input>
          <input className="border"
          placeholder="Mobile provider"
          ></input>
          <input className="border"
          placeholder="Work phone"
          ></input>
          <input className="border"
          placeholder="Email"
          ></input>
          <input className="border"
          placeholder="Related records"
          ></input>
          <input className="border"
          placeholder="Notes"
          ></input>
        </form>
        </div>
        <div className="flex gap-5 m-10">
          <button className="logging-btn">Add</button>
          <button className="logging-btn">Select Existing Personnel</button>
        </div>
      </section>
    </div>
  )
}