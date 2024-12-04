import React from 'react'
import { Link } from 'react-router-dom'
import HealthInfoDatabase from '../../constants/healthdata'

const HealthList = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 mt-4">
          {HealthInfoDatabase.map((info, index) => (
            <Link to={`/healthdetail/${index}`} key={index}>
              <div className="border p-4 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-bold">{info.title}</h3>
                <p className="text-gray-600 text-sm">
                  {info.sections[0].content?.substring(0, 50)}...
                </p>
                {info.sections[0].image && (
                  <img
                    src={info.sections[0].image}
                    alt={info.title}
                    className="h-24 w-full object-cover mt-2"
                  />
                )}
                {!info.sections[0].image && (
                  <div className="h-24 mt-2">
                    <img
                      src={info.defaultImage}
                      alt={info.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
    </div>
  )
}

export default HealthList