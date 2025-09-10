import React, { useState } from "react"
import axios from "axios"

export const PersonnelLandingPage = () => {

  const [formData, setFormData] = useState({
    first_name: '',
    middle_name: '',
    last_name: '',
    pay_class: '',
    address: '',
    address_2: '',
    city: '',
    province: '',
    postal_code: '',
    country: '',
    home_phone: '',
    mobile_phone: '',
    email: '',
    related_records: '',
    notes: '',
    active: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:8000/api/personnel_roster', formData)
      alert(`Personnel Added Successfully: ${res.first_name}`)
      setFormData({
        first_name: '',
        middle_name: '',
        last_name: '',
        pay_class: '',
        address: '',
        address_2: '',
        city: '',
        province: '',
        postal_code: '',
        country: '',
        home_phone: '',
        mobile_phone: '',
        email: '',
        related_records: '',
        notes: '',
        active: false
      })
    } catch (err) {
      console.error(err)
      alert('Error Adding Personnel')
    }
  }

  return (
    <div className="flex flex-col mb-auto min-h-svh">
      <section className="flex-col">
        <div className="flex-col">
          <div className='flex justify-center m-14 gap-20'>
            <div className="flex-col">
              <h1 className="flex m-10 font-bold font-mono text-xl">Add New Personnel:</h1>
              <div className="m-10">
                <form onSubmit={handleSubmit} className="flex flex-col border rounded-xl p-4 gap-4 w-[500px]">
                  <input
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    maxLength={50}
                    className="border"
                    placeholder=" First name" />
                  <input
                    name="middle_name"
                    value={formData.middle_name}
                    onChange={handleChange}
                    maxLength={50}
                    className="border"
                    placeholder=" Middle name"
                  />
                  <input
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    maxLength={50}
                    className="border"
                    placeholder=" Last name"
                  />
                  <input
                    name="pay_class"
                    value={formData.pay_class}
                    onChange={handleChange}
                    maxLength={50}
                    className="border"
                    placeholder=" Pay class"
                  />
                  <input
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    maxLength={255}
                    className="border"
                    placeholder=" Address"
                  />
                  <input
                    name="address_2"
                    value={formData.address_2}
                    onChange={handleChange}
                    maxLength={255}
                    className="border"
                    placeholder=" Address 2 (optional)"
                  />
                  <input
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    maxLength={255}
                    className="border"
                    placeholder=" City"
                  />
                  <input
                    name="province"
                    value={formData.province}
                    onChange={handleChange}
                    maxLength={255}
                    className="border"
                    placeholder=" Province"
                  />
                  <input
                    name="postal_code"
                    value={formData.postal_code}
                    onChange={handleChange}
                    maxLength={255}
                    className="border"
                    placeholder=" Postal Code"
                  />
                  <input
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    maxLength={255}
                    className="border"
                    placeholder=" Country"
                  />
                  <input
                    name="home_phone"
                    value={formData.home_phone}
                    onChange={handleChange}
                    maxLength={10}
                    className="border"
                    placeholder=" Home phone"
                  />
                  <input
                    name="mobile_phone"
                    value={formData.mobile_phone}
                    onChange={handleChange}
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
                    name="work_phone"
                    value={formData.work_phone}
                    onChange={handleChange}
                    maxLength={10}
                    className="border"
                    placeholder=" Work phone"
                  />
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    maxLength={50}
                    className="border"
                    placeholder=" Email"
                  />
                  <input
                    name="related_records"
                    value={formData.related_records}
                    onChange={handleChange}
                    maxLength={255}
                    className="border"
                    placeholder=" Related records"
                  />
                  <input
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    maxLength={500}
                    className="border"
                    placeholder=" Notes"
                  />
                  <label className=""> Active Personnel
                    <input
                      name="active"
                      type="checkbox"
                      checked={formData.active}
                      onChange={handleChange}
                    />
                  </label>

                </form>
              </div>
              <div className="flex gap-5 m-10">
                <button type="submit" className="logging-btn">Save & Continue</button>
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