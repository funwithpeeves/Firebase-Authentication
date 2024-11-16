import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { update,resetPassword } from "../firebase";
import { setUserData } from '../utils';

const UpdateProfile = () => {
    const { user } = useSelector((state) => state.auth);
    const [displayName, setDisplayName] = useState(user.displayName || "");
    const [avatar, setAvatar] = useState(user.photoURL || "");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await update({ displayName, photoURL: avatar })
        setUserData();
    }

    const handleResetPassword = async (e) => {
        e.preventDefault();
       const result = await resetPassword(password);
       if (result) {
        setPassword("");
       }
    }

  return (
    <div className='grid gap-y-10'>
        <form onSubmit={handleSubmit} className='grid gap-y-4'>
            <h1 className='text-2xl font-bold mb-4'>Profili Güncelle</h1>
            <div>
                <label className="block text-gray-700 text-sm font-medium">
                    Adınız ve Soyadınız
                </label>
                <div className='mt-1'>
                    <input 
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder='Adınız ve Soyadınız'
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
            </div>

            <div>
                <label className='block text-gray-700 text-sm font-medium'>
                Profil Resminizi Güncelleyiniz.  
                </label>
                <div className='mt-1'>
                    <input 
                    type="text"
                    value={avatar} 
                    onChange={(e) => setAvatar(e.target.value)}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
            </div>

            <div>
                <button
                className='inline-flex disabled:opacity-50 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer'
                type='submit'
                >
                    Profili Güncelle
                </button>
            </div>
        </form>

        <form onSubmit={handleResetPassword} className='grid gap-y-4'>
            <h1 className='text-2xl font-bold mb-4'>Profili Güncelle</h1>
            <div>
                <label className="block text-gray-700 text-sm font-medium">
                    Yeni Parola
                </label>
                <div className='mt-1'>
                    <input 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Yeni Parola'
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
            </div>

            

            <div>
                <button
                disabled={!password}
                className='inline-flex disabled:opacity-50 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer'
                type='submit'
                >
                    Parola Güncelle
                </button>
            </div>
        </form>

    </div>
  )
}

export default UpdateProfile