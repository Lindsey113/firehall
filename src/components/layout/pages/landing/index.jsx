import React from "react"
export const LandingPage = () => {
  return (
    <div className="min-h-svh">
      <div>
        <section className="flex flex-col items-center text-center font-mono bg-[#FFB86A]">
          <h1 className="py-3 text-2xl">WELCOME TO FIREHALL.NET!</h1>
          <p className="text-xl mx-4">
            We’re excited to introduce our brand-new site, designed specifically to give firehall teams a faster,
            smoother, and more reliable experience when managing day-to-day operations. From organizing personnel
            to maintaining hall records, every feature has been built with efficiency in mind.
            The new platform also includes improved data storage and automatic backup systems,
            ensuring your information is always secure and easy to access when you need it.
          </p>
          <p className="text-[#E7180B] py-5">
            ~Considering this is a brand new site, please keep us updated on any bugs or anything you think could be improved~
          </p>
        </section>
        <section className="flex-col pt-10">
          <div className="flex-col font-mono">
            <div className="flex justify-center m-14 gap-20 text-2x1">
              <div className="flex-col gap-3">
                <h1 className="text-2xl">Simplify Hall Management with Ease</h1>
                <p>Let our software do the heavy lifting—so you can focus on what matters most.
                  Designed specifically for firehalls, our platform helps you save time, minimize
                  liabilities, and stay organized without the stress. Whether it's submitting
                  attendance, tracking personnel, or keeping your training records up to date,
                  everything is in one place—easy to access, easy to use. With automated backups
                  and secure data storage, you'll never lose important information again. It's
                  like having an extra admin on your team—without the extra cost.
                </p>
              </div>
              <div className="flex-col font-mono">
                <h1 className="text-2xl">Packed with Features</h1>
                <p>Our software is both powerful and affordable. Track certifications, training
                  sessions, and incidents all from one intuitive dashboard. Schedule maintenance
                  for equipment, store lesson plans, and even manage payroll for paid-on-call
                  departments. You’ll also receive automatic email reminders when records are
                  about to expire—helping you stay compliant and reducing the risk of missed
                  deadlines. Plus, with web-based access, your team can log in anytime, from
                  anywhere. Simple. Secure. Smart.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="flex flex-col items-center p-4 text-xl text-center">
          <button className="logging-btn">Let's get started</button>
        </div>
      </div>
    </div>
  )
}