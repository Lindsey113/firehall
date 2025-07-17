import React from "react"
export const PersonnelLandingPage = () => {
  return (
    <div className="flex flex-col mb-auto">
      <section className="flex-col">
        <div className="flex-col">
          <div className='flex justify-center m-14 gap-20'>
            <div className="flex-col">
              <h1 className="flex m-10 font-bold text-xl">Add New Personnel:</h1>
              <div className="m-10">
                <form className="flex flex-col border rounded-xl p-4 gap-4 w-[500px]">
                  <input
                    maxLength={50}
                    className="border"
                    placeholder="First name" />
                  <input
                    maxLength={50}
                    className="border"
                    placeholder="Middle name"
                  />
                  <input
                    maxLength={50}
                    className="border"
                    placeholder="Last name"
                  />
                  <input
                    maxLength={50}
                    className="border"
                    placeholder="Pay class"
                  />
                  <input
                    maxLength={255}
                    className="border"
                    placeholder="Address"
                  />
                  <input
                    maxLength={255}
                    className="border"
                    placeholder="Address 2 (optional)"
                  />
                  <input
                    maxLength={255}
                    className="border"
                    placeholder="City"
                  />
                  <input
                    maxLength={255}
                    className="border"
                    placeholder="Province"
                  />
                  <input
                    maxLength={255}
                    className="border"
                    placeholder="Postal Code"
                  />
                  <input
                    maxLength={255}
                    className="border"
                    placeholder="Country"
                  />
                  <input
                    maxLength={10}
                    className="border"
                    placeholder="Home phone"
                  />
                  <input
                    maxLength={10}
                    className="border"
                    placeholder="Mobile Phone"
                  />
                  <input
                    maxLength={50}
                    className="border"
                    placeholder="Mobile provider"
                  />
                  <input
                    maxLength={10}
                    className="border"
                    placeholder="Work phone"
                  />
                  <input
                    maxLength={50}
                    className="border"
                    placeholder="Email"
                  />
                  <input
                    maxLength={255}
                    className="border"
                    placeholder="Related records"
                  />
                  <input
                    maxLength={500}
                    className="border"
                    placeholder="Notes"
                  />
                </form>
              </div>
              <div className="flex gap-5 m-10">
                <button className="logging-btn">Add</button>
                <button className="logging-btn">Select Existing Personnel</button>
              </div>
            </div>
            <div>
              <h1 className="flex m-10 font-bold text-xl">Search Personnel:</h1>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  )
}