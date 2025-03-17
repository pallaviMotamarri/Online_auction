// import Spinner from "@/custom-components/Spinner";
// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const UserProfile = () => {
//   const { user, isAuthenticated, loading } = useSelector((state) => state.user);
//   const navigateTo = useNavigate();
//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigateTo("/");
//     }
//   }, [isAuthenticated]);
//   return (
//     <>
//       <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col min-h-screen py-4 justify-start bg-gradient-to-r from-[#2606f822] via-[#05e92822] to-[#eb101033]">
//         {loading ? (
//           <Spinner />
//         ) : (
//           <>
//             <div className="bg-gradient-to-r from-[#2606f822] via-[#05e92822] to-[#eb101033] mx-auto w-3/4 border-4 border-dashed border-stone-400 h-auto px-2 flex flex-col gap-4 items-center py-4 justify-center rounded-md">
//               <img
//                 src={user.profileImage?.url}
//                 alt="/imageHolder.jpg"
//                 className="w-36 h-36 rounded-full"
//               />

//               <div className="mb-6 w-full">
//                 <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Username
//                     </label>
//                     <input
//                       type="text"
//                       defaultValue={user.userName}
//                       className=" text-white w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                       disabled
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Email
//                     </label>
//                     <input
//                       type="text"
//                       defaultValue={user.email}
//                       className="w-ful text-white mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                       disabled
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Phone
//                     </label>
//                     <input
//                       type="number"
//                       defaultValue={user.phone}
//                       className="w-ful text-white mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                       disabled
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Address
//                     </label>
//                     <input
//                       type="text"
//                       defaultValue={user.address}
//                       className="w-ful text-white mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                       disabled
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Role
//                     </label>
//                     <input
//                       type="text"
//                       defaultValue={user.role}
//                       className="w-ful text-white mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                       disabled
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Joined On
//                     </label>
//                     <input
//                       type="text"
//                       defaultValue={user.createdAt?.substring(0, 10)}
//                       className="w-ful text-white mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                       disabled
//                     />
//                   </div>
//                 </div>
//               </div>

              // {user.role === "Auctioneer" && (
              //   <div className="mb-6 w-full">
              //     <h3 className="text-xl font-semibold mb-4">
              //       Payment Details
              //     </h3>
              //     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              //       <div>
              //         <label className="block text-sm font-medium text-gray-700">
              //           Bank Name
              //         </label>
              //         <input
              //           type="text"
              //           defaultValue={user.paymentMethods.bankTransfer.bankName}
              //           className="w-ful text-white mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
              //           disabled
              //         />
              //       </div>
              //       <div>
              //         <label className="block text-sm font-medium text-gray-700">
              //           Bank Account (IFSC)
              //         </label>
              //         <input
              //           type="text"
              //           defaultValue={
              //             user.paymentMethods.bankTransfer.bankAccountNumber
              //           }
              //           className="w-ful text-white mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
              //           disabled
              //         />
              //       </div>
              //       <div>
              //         <label className="block text-sm font-medium text-gray-700">
              //           User Name On Bank Account
              //         </label>
              //         <input
              //           type="text"
              //           defaultValue={
              //             user.paymentMethods.bankTransfer.bankAccountName
              //           }
              //           className="w-ful mt-1 p-2 text-white border-gray-300 rounded-md focus:outline-none"
              //           disabled
              //         />
              //       </div>
              //       <div>
              //         <label className="block text-sm font-medium text-gray-700">
              //           UPIID
              //         </label>
              //         <input
              //           type="text"
              //           defaultValue={
              //             user.paymentMethods.bankTransfer.bankAccountName
              //           }
              //           className="w-ful mt-1 p-2  text-white border-gray-300 rounded-md focus:outline-none"
              //           disabled
              //         />
              //       </div>
                    
              //     </div>
              //    </div>
              // )}

              // <div className="mb-6 w-full">
              //   <h3 className="text-xl font-semibold mb-4">
              //     Other User Details
              //   </h3>
              //   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              //     {user.role === "Auctioneer" && (
              //       <>
              //         <div>
              //           <label className="block text-sm font-medium text-gray-700">
              //             Unpaid Commissions
              //           </label>
              //           <input
              //             type="text"
              //             defaultValue={user.unpaidCommission}
              //             className="w-ful mt-1  text-white p-2 border-gray-300 rounded-md focus:outline-none"
              //             disabled
              //           />
              //         </div>
              //       </>
              //     )}
              //     {user.role === "Bidder" && (
              //       <>
              //         <div>
              //           <label className="block text-sm font-medium text-gray-700">
              //             Auctions Won
              //           </label>
              //           <input
              //             type="text"
              //             defaultValue={user.auctionsWon}
              //             className="w-ful mt-1 p-2 text-white border-gray-300 rounded-md focus:outline-none"
              //             disabled
              //           />
              //         </div>
              //         <div>
              //           <label className="block text-sm font-medium text-gray-700">
              //             Money Spent
              //           </label>
              //           <input
              //             type="text"
              //             defaultValue={user.moneySpent}
              //             className="w-ful mt-1 p-2 text-white border-gray-300 rounded-md focus:outline-none"
              //             disabled
              //           />
              //         </div>
              //       </>
              //     )}
              //   </div>
//               // </div>
//            // </div>
// //           </>
// //         )}
// //       </section>
// //     </>
// //   );
// // };

// // export default UserProfile;

// import Spinner from "@/custom-components/Spinner";
// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { updateUserProfile } from "@/actions/userActions"; // Make sure this action exists

// const UserProfile = () => {
//   const { user, isAuthenticated, loading } = useSelector((state) => state.user);
//   const navigateTo = useNavigate();
//   const dispatch = useDispatch();
  
//   const [editMode, setEditMode] = useState(false);
//   const [formData, setFormData] = useState({
//     userName: user?.userName || "",
//     email: user?.email || "",
//     phone: user?.phone || "",
//     address: user?.address || "",
//   });

//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigateTo("/");
//     }
//   }, [isAuthenticated]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleUpdate = () => {
//     dispatch(updateUserProfile(formData)); // Send request to backend
//     setEditMode(false);
//   };

//   return (
//     <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col min-h-screen py-4 justify-start bg-gradient-to-r from-[#2606f822] via-[#05e92822] to-[#eb101033]">
//       {loading ? (
//         <Spinner />
//       ) : (
//         <div className="bg-gradient-to-r from-[#2606f822] via-[#05e92822] to-[#eb101033] mx-auto w-3/4 border-4 border-dashed border-stone-400 h-auto px-2 flex flex-col gap-4 items-center py-4 justify-center rounded-md">
//           <img
//             src={user.profileImage?.url}
//             alt="Profile"
//             className="w-36 h-36 rounded-full"
//           />

//           <div className="mb-6 w-full">
//             <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {["userName", "email", "phone", "address"].map((field) => (
//                 <div key={field}>
//                   <label className="block text-sm font-medium text-gray-700">
//                     {field.charAt(0).toUpperCase() + field.slice(1)}
//                   </label>
//                   <input
//                     type={field === "email" ? "email" : "text"}
//                     name={field}
//                     value={formData[field]}
//                     onChange={handleChange}
//                     className="w-full text-white mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                     disabled={!editMode}
//                   />
//                 </div>
//               ))}
//             </div>


//             <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                      Role
//                      </label>
//                      <input
//                        type="text"
//                        defaultValue={user.role}
//                        className="w-ful text-white mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                        disabled
//                      />
//                    </div>
//                    <div>
//                      <label className="block text-sm font-medium text-gray-700">
//                        Joined On
//                     </label>
//                      <input
//                        type="text"
//                        defaultValue={user.createdAt?.substring(0, 10)}
//                        className="w-ful text-white mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                        disabled
//                      />
//                    </div>

//                    {user.role === "Auctioneer" && (
//                 <div className="mb-6 w-full">
//                   <h3 className="text-xl font-semibold mb-4">
//                     Payment Details
//                   </h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">
//                         Bank Name
//                       </label>
//                       <input
//                         type="text"
//                         defaultValue={user.paymentMethods.bankTransfer.bankName}
//                         className="w-ful text-white mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                         disabled
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">
//                         Bank Account (IFSC)
//                       </label>
//                       <input
//                         type="text"
//                         defaultValue={
//                           user.paymentMethods.bankTransfer.bankAccountNumber
//                         }
//                         className="w-ful text-white mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                         disabled
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">
//                         User Name On Bank Account
//                       </label>
//                       <input
//                         type="text"
//                         defaultValue={
//                           user.paymentMethods.bankTransfer.bankAccountName
//                         }
//                         className="w-ful mt-1 p-2 text-white border-gray-300 rounded-md focus:outline-none"
//                         disabled
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">
//                         UPIID
//                       </label>
//                       <input
//                         type="text"
//                         defaultValue={
//                           user.paymentMethods.bankTransfer.bankAccountName
//                         }
//                         className="w-ful mt-1 p-2  text-white border-gray-300 rounded-md focus:outline-none"
//                         disabled
//                       />
//                     </div>
                    
//                   </div>
//                  </div>
//               )}

//               <div className="mb-6 w-full">
//                 <h3 className="text-xl font-semibold mb-4">
//                   Other User Details
//                 </h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {user.role === "Auctioneer" && (
//                     <>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">
//                           Unpaid Commissions
//                         </label>
//                         <input
//                           type="text"
//                           defaultValue={user.unpaidCommission}
//                           className="w-ful mt-1  text-white p-2 border-gray-300 rounded-md focus:outline-none"
//                           disabled
//                         />
//                       </div>
//                     </>
//                   )}
//                   {user.role === "Bidder" && (
//                     <>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">
//                           Auctions Won
//                         </label>
//                         <input
//                           type="text"
//                           defaultValue={user.auctionsWon}
//                           className="w-ful mt-1 p-2 text-white border-gray-300 rounded-md focus:outline-none"
//                           disabled
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">
//                           Money Spent
//                         </label>
//                         <input
//                           type="text"
//                           defaultValue={user.moneySpent}
//                           className="w-ful mt-1 p-2 text-white border-gray-300 rounded-md focus:outline-none"
//                           disabled
//                         />
//                       </div>
//                     </>
//                   )}
//                 </div>
//               </div>

//           </div>


          





//           <button
//             onClick={() => setEditMode(!editMode)}
//             className="bg-blue-500 text-white px-4 py-2 rounded-md"
//           >
//             {editMode ? "Cancel" : "Edit Profile"}
//           </button>

//           {editMode && (
//             <button
//               onClick={handleUpdate}
//               className="bg-green-500 text-white px-4 py-2 rounded-md mt-2"
//             >
//               Save Changes
//             </button>
//           )}
//         </div>
//       )}
//     </section>
//   );
// };

// export default UserProfile;







import Spinner from "@/custom-components/Spinner";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUserProfile } from "@/actions/userActions"; // Ensure this action exists

const UserProfile = () => {
  const { user, isAuthenticated, loading } = useSelector((state) => state.user);
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    userName: user?.userName || "",
    email: user?.email || "",
    phone: user?.phone || "",
    address: user?.address || "",
  });

  useEffect(() => {
    if (!isAuthenticated) {
      navigateTo("/");
    }
  }, [isAuthenticated, navigateTo]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    dispatch(updateUserProfile(formData));
    setEditMode(false);
  };

  return (
    <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col min-h-screen py-4 justify-start bg-gradient-to-r from-[#2606f822] via-[#05e92822] to-[#eb101033]">
      {loading ? (
        <Spinner />
      ) : (
        <div className="bg-gradient-to-r from-[#2606f822] via-[#05e92822] to-[#eb101033] mx-auto w-3/4 border-4 border-dashed border-stone-400 h-auto px-2 flex flex-col gap-4 items-center py-4 justify-center rounded-md">
          <img
            src={user?.profileImage?.url}
            alt="Profile"
            className="w-36 h-36 rounded-full"
          />

          <div className="mb-6 w-full">
            <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.keys(formData).map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full text-white mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
                    disabled={!editMode}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div>
              <label className="block text-sm font-medium text-gray-700">Role</label>
              <input type="text" value={user?.role} className="w-full text-white mt-1 p-2 border-gray-300 rounded-md focus:outline-none" disabled />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Joined On</label>
              <input type="text" value={user?.createdAt?.substring(0, 10)} className="w-full text-white mt-1 p-2 border-gray-300 rounded-md focus:outline-none" disabled />
            </div>
          </div>

          {user?.role === "Auctioneer" && (
            <div className="mb-6 w-full">
              <h3 className="text-xl font-semibold mb-4">Payment Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(user?.paymentMethods?.bankTransfer || {}).map(([key, value]) => (
                  <div key={key}>
                    <label className="block text-sm font-medium text-gray-700">{key.replace(/([A-Z])/g, ' $1').trim()}</label>
                    <input type="text" value={value} className="w-full text-white mt-1 p-2 border-gray-300 rounded-md focus:outline-none" disabled />
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {user?.paymentMethods?.Online?.UPIID && (
        <div>
          <label className="block text-sm font-medium text-gray-700">UPI ID</label>
          <input
            type="text"
            value={user.paymentMethods.Online.UPIID}
            className="w-full text-white mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
            disabled
          />
        </div>
      )}

          <div className="mb-6 w-full">
            <h3 className="text-xl font-semibold mb-4">Other User Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {user?.role === "Auctioneer" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">Unpaid Commissions</label>
                  <input type="text" value={user?.unpaidCommission} className="w-full text-white mt-1 p-2 border-gray-300 rounded-md focus:outline-none" disabled />
                </div>
              )}
              {user?.role === "Bidder" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Auctions Won</label>
                    <input type="text" value={user?.auctionsWon} className="w-full text-white mt-1 p-2 border-gray-300 rounded-md focus:outline-none" disabled />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Money Spent</label>
                    <input type="text" value={user?.moneySpent} className="w-full text-white mt-1 p-2 border-gray-300 rounded-md focus:outline-none" disabled />
                  </div>
                </>
              )}
            </div>
          </div>

          <button onClick={() => setEditMode(!editMode)} className="bg-blue-500 text-white px-4 py-2 rounded-md">
            {editMode ? "Cancel" : "Edit Profile"}
          </button>

          {editMode && (
            <button onClick={handleUpdate} className="bg-green-500 text-white px-4 py-2 rounded-md mt-2">
              Save Changes
            </button>
          )}
        </div>
      )}
    </section>
  );
};

export default UserProfile;