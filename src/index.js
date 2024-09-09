import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import NotificationList from './State_Basic/NotificationList'; // State_Basic
// import Accomodate from './Hook_Basic/Accomodate'; // Hook_basic
// import ConfirmBtn from './Event_Basic/ConfirmBtn'; //Event_Basic
// import LandingPage from './ConditionalRendering_Basic/LandingPage'; //Event_Basic
// import AttendanceBook from './ListAndKey_Basic/AttendanceBook'; //ListAndKey_Basic
// import SignUp from './Form_Basic/SignUp'; //Form_Basic
// import Cal from './LiftingStateUp_Basic/Cal'; //LiftingStateUp_Basic
// import ProfileCard from './CompositionAndInheritance_Basic/ProfileCard'; //LiftingStateUp_Basic
// import DarkOrLight from './Context_Basic/DarkOrLight'; //Context_Basic
// import Library from './JSX_Basic/Library'; // JSX_Basic
// import Clock from './Element_Basic/Clock'; // Element_Basic
// import CommentList from './Component_Basic/CommentList'; // Component_Basic
import Blocks from './Styling_Basic/Blocks';

//JSX_Basic
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Library />
//   </React.StrictMode>,
// );

//Element_Basic
// setInterval(() => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>,
//     document.getElementById('root'),
//   );
// }, 1000); //1000 m/s 마다 새롭게 Clock Component를 root div에 랜더링 하도록 만들었다.

//Component_Basic
// ReactDOM.render(
//   <React.StrictMode>
//     <CommentList />
//   </React.StrictMode>,
//   document.getElementById('root'),
// );

//State_Basic
// ReactDOM.render(
//   <React.StrictMode>
//     <NotificationList />
//   </React.StrictMode>,
//   document.getElementById('root'),
// );

//Hook_Basic
// ReactDOM.render(
//   <React.StrictMode>
//     <Accomodate />
//   </React.StrictMode>,
//   document.getElementById('root'),
// );

//Event_Basic
// ReactDOM.render(
//   <React.StrictMode>
//     <ConfirmBtn />
//   </React.StrictMode>,
//   document.getElementById('root'),
// );

//Event_Basic
// ReactDOM.render(
//   <React.StrictMode>
//     <LandingPage />
//   </React.StrictMode>,
//   document.getElementById('root'),
// );

//ListAndKey_Basic
// ReactDOM.render(
//   <React.StrictMode>
//     <AttendanceBook />
//   </React.StrictMode>,
//   document.getElementById('root'),
// );

//Form_Basic
// ReactDOM.render(
//   <React.StrictMode>
//     <SignUp />
//   </React.StrictMode>,
//   document.getElementById('root'),
// );

//LiftingStateUp_Basic
// ReactDOM.render(
//   <React.StrictMode>
//     <Cal />
//   </React.StrictMode>,
//   document.getElementById('root'),
// );

//CompositionAndInheritance_Basic
// ReactDOM.render(
//   <React.StrictMode>
//     <ProfileCard />
//   </React.StrictMode>,
//   document.getElementById('root'),
// );

//Context_Basic
// ReactDOM.render(
//   <React.StrictMode>
//     <DarkOrLight />
//   </React.StrictMode>,
//   document.getElementById('root'),
// );

//styling
ReactDOM.render(
  <React.StrictMode>
    <Blocks />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
