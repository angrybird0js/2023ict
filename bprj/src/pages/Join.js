
const Join = () => {};

export default Join;


// // 예시 1
// import React, { useState } from 'react';
//
// const MemberJoinForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Name:', name);
//     console.log('Email:', email);
//   };
//
//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="name">Name:</label>
//       <input
//         type="text"
//         id="name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//
//       <label htmlFor="email">Email:</label>
//       <input
//         type="email"
//         id="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//
//       <button type="submit">Join</button>
//     </form>
//   );
// };
//
//
//
// // 예시 2
// export default MemberJoinForm;
//
//
//
// import React from 'react';
//
// // Define reusable components
// const Header = () => {
//   return <h1>Welcome to the Member Join Page</h1>;
// };
//
// const Form = () => {
//   return (
//     <form>
//       <label htmlFor="name">Name:</label>
//       <input type="text" id="name" />
//       <button type="submit">Join</button>
//     </form>
//   );
// };
//
// const MemberJoinPage = () => {
//   return (
//     <div>
//       <Header />
//       <Form />
//     </div>
//   );
// };
//
// export default MemberJoinPage;
//
//
//
// // 예시 3
// import React from 'react';
//
// const MemberList = ({ members }) => {
//   return (
//     <ul>
//       {members.map((member, index) => (
//         <li key={index}>{member}</li>
//       ))}
//     </ul>
//   );
// };
//
// const MemberJoinPage = () => {
//   const members = ['Tom', 'Jason', 'Chris'];
//
//   return (
//     <div>
//       <h1>Welcome to the Member Join Page</h1>
//       <MemberList members={members} />
//     </div>
//   );
// };
//
// export default MemberJoinPage;
