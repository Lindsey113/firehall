import React from "react"

export default function Footer() {
    return (
        <footer className='flex flex-col justify-center px-14 bg-[#FFECD3]'>
      <section className='flex justify-center pt-4 pb-8'>
        <div className='footer-address flex-col text-[#99A1AF] pt-4'>
          <p>Valon Technologies Inc©2025</p>
          <p>Email: info@firehall.net</p>
          <p>1-888-526-7898</p>
        </div>
      </section>
      <nav className='footer-links text-sm text-[#99A1AF] flex gap-10 justify-center pb-4'>
        <button>About Us</button>
        <button>Contact Us</button>
        <button>Terms & Privacy</button>
        <button>Sign Up</button>
        <button>Careers</button>
      </nav>
    </footer>
    )
}