import { ChevronRight } from "lucide-react"

const Introduction = () => {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-20 lg:px-8">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">We help businesses succeed</h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Small companies to Fortune 500 giants digitize, automate, and scale their businesses with airSlate.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First Card */}
          <div className="bg-gray-900 p-6 relative overflow-hidden rounded-lg">

            <div className="relative aspect-[4/3]">

              <img src="https://plus.unsplash.com/premium_photo-1670917243492-712ce3634244?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Success Story" className="w-full h-full object-cover rounded-lg" />

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                <div className="text-6xl font-bold">500+</div>
                <p className="text-xl">weekly requests automatically processed</p>
              </div>

            </div>

          </div>

          {/* Second Card */}
          <div className="bg-gray-900 p-6 flex flex-col justify-between rounded-lg">
            <img src="https://brand.mit.edu/sites/default/files/styles/tile_narrow/public/2023-08/logo-colors-BG-mit-red.png?itok=Dk9W1mWh" alt="Bryant & Stratton College Logo" className="w-100 h-50 mb-3" />
            <div>
              <p className="text-lg mb-6">
                "All of our filing cabinets are now empty. Stopping the printing and filing process has probably saved
                us at least one salary each year."
              </p>
              <div className="flex items-center space-x-3">
                <img src="https://d2gjqh9j26unp0.cloudfront.net/profilepic/9899570b6ce910c296c66a10db5e23be" alt="Doreen Justinger" className="w-10 h-10 rounded-full" />
                <div>
                  <p className="font-semibold">Doreen Justinger</p>
                  <p className="text-sm text-gray-400">Academic Affairs Analyst at MIT</p>
                </div>
              </div>
            </div>
          </div>

          {/* Third Card */}
          <div className="bg-gray-900 p-6 flex flex-col justify-between rounded-lg">

            <img src="https://media.theprovidencegroup.com/259/2020/11/5/14307-GreenBrick-Logo-final-no-space.1000x750.png" alt="Green Brick Partners Logo" className="w-100 h-39" />

            <div>
              <p className="text-lg mb-12">
                "Using pdfFiller has saved us 110 hours per year at $35.00 per hour, and that was just the beginning of
                the savings."
              </p>
              <div className="flex items-center space-x-3">

                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5d/John_Schnatter_at_Charlotte_Motor_Speedway_2013_%288929996982%29.jpg" alt="John Hampton" className="w-10 h-10 rounded-full" />
                
                <div>
                  <p className="font-semibold">John Hampton</p>
                  <p className="text-sm text-gray-400">Lawyer at Green Brick Title, LLC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction;