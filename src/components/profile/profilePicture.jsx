import React from 'react'
import { useUser } from '../../context/homeContext'

const ProfilePicture = () => {
  const { user } = useUser()
  return (
    <div className="relative w-full md:w-min flex justify-center md:block md:justify-normal">
        <div className="rounded-full w-40 p-1">
            <img src={user?.profile_picture} alt="Profile" className="w-full h-full rounded-full object-cover" />
        </div>
    </div>
  )
}

export default ProfilePicture
