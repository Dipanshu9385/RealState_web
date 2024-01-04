import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { app } from '../firebase'


const Profile = () => {
  const { currentUser } = useSelector(state => state.user);
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const [filePres, setFilePres] = useState(0);
  const [fileUploadingError, setFileUploadingError] = useState(false);
  const [formData, setFormData] = useState({})
  // console.log(file)
  // console.log(filePres)
  // console.log(formData)


  useEffect(() => {
    if (file) {
      handleUploadFile(file);
    }
  }, [file]);

  const handleUploadFile = (file) => {
    const storage = getStorage(app)
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePres(Math.round(progress))
      },
      (error) => {
        setFileUploadingError(true)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then
          ((downloadUrl) => {
            setFormData({ ...formData, avatar: downloadUrl })
          })
      }
    );
  }

  const handleUserName=(e)=>{
    setFormData({...formData, username:e.target.value})
  }
  const handleEmail=(e)=>{
    setFormData({...formData, email:e.target.value})
  }
  const handlePassword=(e)=>{
    setFormData({...formData, password:e.target.value})
  }
return (
    <div className='max-w-lg  mx-auto my-10 py-7'>
      <h1 className='text-3xl text-blue-600 text-center font-bold'>Profile</h1>

      <form className=' px-20 sm:px-4 text-sm rounded-lg'>
        <div className='flex flex-col gap-5 pt-10'>
          <input onChange={(e) => setFile(e.target.files[0])} type="file" name="" id="" ref={fileRef} hidden accept='images/*' />
          <img onClick={() => fileRef.current.click()} src={formData.avatar || currentUser.avatar} className='w-32 mb-6 rounded-full self-center cursor-pointer' alt="" />
          <p className='text-center text-sm'>
            {
              fileUploadingError ? (
                <span className='text-red-700'>Error Image Upload (file must be less then 2 mb)</span>
              ) : filePres > 0 && filePres < 100 ? (
                <span className='text-green-500'>{`uploading ${filePres} %`}</span>
              ) : filePres === 100 ? (
                <span className='text-green-700'>Image Uploaded Successfully </span>
              ) : (
                ''
              )
            }

          </p>

          {/* hello today is 4 jan 2024 today i want to change username and email like image but there is an issue // when i clear input value in application then currentUser.email value is fill input automatically , i will fix this problam in future  */}

          <input onChange={handleUserName}  defaultValue={currentUser.username} type="text" id='username' placeholder='username' className='py-1 px-3 outline-none rounded-md min-w-50 ' />
          <input onChange={handleEmail}  defaultValue={currentUser.email} type="email" id='email' placeholder='email' className='py-1 px-3 outline-none rounded-md min-w-50 ' />
          <input type="password" onChange={handlePassword}  id='password' placeholder='password' className='py-1 px-3 outline-none rounded-md min-w-50 ' />
          <button className='py-2 px-3 bg-blue-600 text-white outline-none rounded-md min-w-50 '>Update</button>
        </div>
      </form>
      <div className='flex justify-between px-20 sm:px-4 mt-2 font-semibold'>
        <span className='text-red-600 cursor-pointer'>account delete</span>
        <span className='text-red-600 cursor-pointer'>sign out</span>
      </div>

    </div>
  )
}

export default Profile;
