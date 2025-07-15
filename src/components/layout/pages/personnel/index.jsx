import React from "react"
export const PersonnelLandingPage = () => {
  return (
    <div>
      <section>
        <h1 className="flex m-10 font-bold text-xl">Add New Personnel:</h1>
        <div className="m-10">
        <form className="flex flex-col border rounded-xl p-4 gap-4 w-[500px]">
          <input 
          maxLength={50}
          className="border"
          placeholder="First name"/>
          <input 
          className="border"
          placeholder="Middle name"
          />
          <input 
          className="border"
          placeholder="Last name"
          />
          <input 
          className="border"
          placeholder="Pay class"
          />
          <input 
          className="border"
          placeholder="Address"
          />
          <input 
          className="border"
          placeholder="Address 2 (optional)"
          />
          <input 
          className="border"
          placeholder="City"
          />
          <input 
          className="border"
          placeholder="Province"
          />
          <input 
          className="border"
          placeholder="Postal Code"
          />
          <input 
          className="border"
          placeholder="Country"
          />
          <input 
          className="border"
          placeholder="Home phone"
          />
          <input 
          className="border"
          placeholder="Mobile Phone"
          />
          <input 
          className="border"
          placeholder="Mobile provider"
          />
          <input 
          className="border"
          placeholder="Work phone"
          />
          <input 
          className="border"
          placeholder="Email"
          />
          <input 
          className="border"
          placeholder="Related records"
          />
          <input 
          className="border"
          placeholder="Notes"
          />
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