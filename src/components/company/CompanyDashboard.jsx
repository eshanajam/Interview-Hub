import React from 'react'

const CompanyDashboard = () => {

  const cardsData = [
    {
      id: 1,
      title: 'Today Job Posts',
      view: '0 0 24 24',
      path: 'M18.5 2h-13C3.6 2 2 3.6 2 5.5v13C2 20.4 3.6 22 5.5 22H16l6-6V5.5C22 3.6 20.4 2 18.5 2M7 12.5l1.3-1.4 2.1 2.1L15.6 8 17 9.4 10.5 16 7 12.5m8 7.5v-1.5c0-1.9 1.6-3.5 3.5-3.5H20l-5 5z',
      registrations: 5
    },
    {
      id: 2,
      title: 'Today Applications',
      view: '0 0 24 24',
      path: 'M18.5 2h-13C3.6 2 2 3.6 2 5.5v13C2 20.4 3.6 22 5.5 22H16l6-6V5.5C22 3.6 20.4 2 18.5 2M7 12.5l1.3-1.4 2.1 2.1L15.6 8 17 9.4 10.5 16 7 12.5m8 7.5v-1.5c0-1.9 1.6-3.5 3.5-3.5H20l-5 5z',
      registrations: 20
    },
    {
      id: 3,
      title: 'Total Job Posts',
      view: '0 0 24 24',
      path: 'M18.5 2h-13C3.6 2 2 3.6 2 5.5v13C2 20.4 3.6 22 5.5 22H16l6-6V5.5C22 3.6 20.4 2 18.5 2M7 12.5l1.3-1.4 2.1 2.1L15.6 8 17 9.4 10.5 16 7 12.5m8 7.5v-1.5c0-1.9 1.6-3.5 3.5-3.5H20l-5 5z',
      registrations: 32
    },
    {
      id: 4,
      title: 'Total Applications',
      view: '0 0 24 24',
      path: 'M18.5 2h-13C3.6 2 2 3.6 2 5.5v13C2 20.4 3.6 22 5.5 22H16l6-6V5.5C22 3.6 20.4 2 18.5 2M7 12.5l1.3-1.4 2.1 2.1L15.6 8 17 9.4 10.5 16 7 12.5m8 7.5v-1.5c0-1.9 1.6-3.5 3.5-3.5H20l-5 5z',
      registrations: 130
    },
    {
      id: 5,
      title: 'Today Interviews',
      view: '0 0 24 24',
      path: 'M18.5 2h-13C3.6 2 2 3.6 2 5.5v13C2 20.4 3.6 22 5.5 22H16l6-6V5.5C22 3.6 20.4 2 18.5 2M7 12.5l1.3-1.4 2.1 2.1L15.6 8 17 9.4 10.5 16 7 12.5m8 7.5v-1.5c0-1.9 1.6-3.5 3.5-3.5H20l-5 5z',
      registrations: 3
    },
    {
      id: 6,
      title: 'Total Interviews',
      view: '0 0 24 24',
      path: 'M18.5 2h-13C3.6 2 2 3.6 2 5.5v13C2 20.4 3.6 22 5.5 22H16l6-6V5.5C22 3.6 20.4 2 18.5 2M7 12.5l1.3-1.4 2.1 2.1L15.6 8 17 9.4 10.5 16 7 12.5m8 7.5v-1.5c0-1.9 1.6-3.5 3.5-3.5H20l-5 5z',
      registrations: 55
    },
    {
      id: 7,
      title: 'Pending Interviews',
      view: '0 0 24 24',
      path: 'M18.5 2h-13C3.6 2 2 3.6 2 5.5v13C2 20.4 3.6 22 5.5 22H16l6-6V5.5C22 3.6 20.4 2 18.5 2M7 12.5l1.3-1.4 2.1 2.1L15.6 8 17 9.4 10.5 16 7 12.5m8 7.5v-1.5c0-1.9 1.6-3.5 3.5-3.5H20l-5 5z',
      registrations: 17
    },
  ]

  return (
    <div className="pl-10 p-4 flex flex-wrap gap-3 animate-in fade-in-0 duration-1000">
      {cardsData.map((items, index) => {
        const isGreen = [10, 11, 12, 13].includes(items.id);
        return (
          <div
            className={`border-gray-600 border-2 w-72 flex gap-2}`}
            key={index}
          >
            <svg viewBox={items.view} fill={"black"} className="h-20 w-24 p-2">
              <path d={items.path} />
            </svg>
            <div className="flex items-center flex-col justify-center">
              <h1 className={`title ${isGreen ? 'text-white' : ''}`}>{items.title}</h1>
              <p className={`range ${isGreen ? 'text-white' : ''}`}>{items.registrations}</p>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default CompanyDashboard