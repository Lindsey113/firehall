import React from "react"
export const PersonnelLandingPage = () => {
  return (
    <div className="flex flex-col mb-auto">
      <section className="flex-col">
        <div className="flex-col">
          <div className='flex justify-center m-14 gap-20'>
            <div className="flex-col">
              <h1 className="flex m-10 font-bold font-mono text-xl">Add New Personnel:</h1>
              <div className="m-10">
                <form className="flex flex-col border rounded-xl p-4 gap-4 w-[500px]">
                  <input
                    maxLength={50}
                    className="border"
                    placeholder=" First name" />
                  <input
                    maxLength={50}
                    className="border"
                    placeholder=" Middle name"
                  />
                  <input
                    maxLength={50}
                    className="border"
                    placeholder=" Last name"
                  />
                  <input
                    maxLength={50}
                    className="border"
                    placeholder=" Pay class"
                  />
                  <input
                    maxLength={255}
                    className="border"
                    placeholder=" Address"
                  />
                  <input
                    maxLength={255}
                    className="border"
                    placeholder=" Address 2 (optional)"
                  />
                  <input
                    maxLength={255}
                    className="border"
                    placeholder=" City"
                  />
                  <input
                    maxLength={255}
                    className="border"
                    placeholder=" Province"
                  />
                  <input
                    maxLength={255}
                    className="border"
                    placeholder=" Postal Code"
                  />
                  <input
                    maxLength={255}
                    className="border"
                    placeholder=" Country"
                  />
                  <input
                    maxLength={10}
                    className="border"
                    placeholder=" Home phone"
                  />
                  <input
                    maxLength={10}
                    className="border"
                    placeholder=" Mobile Phone"
                  />
                  <select className="border" placeholder=" Mobile provider">
                    <option>----Mobile Provider----</option>
                    <option>Telus</option>
                    <option>Koodo</option>
                    <option>Shaw</option>
                    <option>Rogers</option>
                    <option>Other</option>
                  </select>
                  <input
                    maxLength={10}
                    className="border"
                    placeholder=" Work phone"
                  />
                  <input
                    maxLength={50}
                    className="border"
                    placeholder=" Email"
                  />
                  <input
                    maxLength={255}
                    className="border"
                    placeholder=" Related records"
                  />
                  <input
                    maxLength={500}
                    className="border"
                    placeholder=" Notes"
                  />
                  <label className=""> Active Personnel
                    <input
                    name="Active"
                    type="checkbox"
                     />
                  </label>
                  
                </form>
              </div>
              <div className="flex gap-5 m-10">
                <button className="logging-btn">Save & Continue</button>
                <button className="font-bold underline hover:border-[#E2F0F7] border-transparent border-1 py-3 px-4 rounded-xl">Clear form</button>
              </div>
            </div>
            <div>
              <h1 className="flex m-10 font-bold font-mono text-xl">Search Personnel:</h1>
              <div className="m-10">
                <form className="flex flex-col border rounded-xl p-4 gap-4 w-[450px]">

                  <input
                    maxLength={50}
                    className="border"
                    placeholder="First name" />
                  <input
                    maxLength={50}
                    className="border"
                    placeholder="Last name"
                  />


                  <button className="logging-btn">Search</button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}