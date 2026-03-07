import React from "react";
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';



import StHome from './Components/Student/Pages/StHome';
import StSubject from './Components/Student/Pages/StSubject';
import StTest from './Components/Student/Pages/StTest';
import StStudyMaterials from './Components/Student/Pages/StStudyMaterials';
import StAssiment from './Components/Student/Pages/StAssiment';
import StHomeWork from './Components/Student/Pages/StHomeWork';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TeClasses from './Components/Teacher/Pages/TeClasses';
import TeAttentence from './Components/Teacher/Pages/TeAttentence';
import TeMaterials from './Components/Teacher/Pages/TeMaterials';
import TeTestsMarks from './Components/Teacher/Pages/TeTestsMarks';
import TeAssiments from './Components/Teacher/Pages/TeAssiments';
import TeMarkAttendance from './Components/Teacher/Pages/TeMarkAttendance';
import TeAttendanceHistory from './Components/Teacher/Pages/TeAttendanceHistory';
import TeAnnouncement from './Components/Teacher/Pages/TeAnnouncement';
import TeMyClass from './Components/Teacher/Pages/TeMyClass';
import TeStudentMnt from './Components/Teacher/Pages/TeStudentMnt';
import AdHome from './Components/Admin/Pages/AdHome';
import AdClassManagment from './Components/Admin/Pages/AdClassManagment';
import AdAssineTeachers from './Components/Admin/Pages/AdAssineTeachers';
import AdClasess from './Components/Admin/Pages/AdClasess';
import AdManageStudent from './Components/Admin/Pages/AdManageStudent';
import AdSummery from './Components/Admin/Pages/AdSummery';
import AdMonitor from './Components/Admin/Pages/AdMonitor';
import AdTeacherMonitor from './Components/Admin/Pages/teMoniter/AdTeacherMonitor';
import AdStudentMonitor from './Components/Admin/Pages/teMoniter/AdStudentMonitor';
import AdTeacherMoPage from './Components/Admin/Pages/teMoniter/AdTeacherMoPage';
import AdStudentMoPage from './Components/Admin/Pages/teMoniter/AdStudentMoPage';
import AdAnalticsClassCart from './Components/Admin/Pages/AdAnaltics/AdAnalticsClassCart';
import AdAnalticsClassReport from './Components/Admin/Pages/AdAnaltics/AdAnalticsClassReport';
import AdAnnouncement from './Components/Admin/Pages/Announcement/AdAnnouncement';
import AdAnnouncementAddPage from './Components/Admin/Pages/Announcement/AdAnnouncementAddPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<StHome />} />
        <Route path="/stsubject" element={<StSubject />} />
        <Route path="/sttest" element={<StTest />} />
        <Route path="/ststudymaterials" element={<StStudyMaterials />} />
        <Route path="/stassiment" element={<StAssiment />} />
        <Route path="/sthomework" element={<StHomeWork />} />
        
        

        {/* TEACHER */}
        <Route path="/teclasses/" element={<TeClasses />}>
          <Route index element={<TeAssiments />} />
          <Route path="assignments" element={<TeAssiments />} />
          <Route path="materials" element={<TeMaterials />} />
          <Route path="testsmarks" element={<TeTestsMarks />} />
          <Route path="teannouncement" element={<TeAnnouncement />} />
        </Route>
        <Route path="/attendance" element={<TeAttentence />} >
          <Route index element={<TeMarkAttendance />} />
          <Route path="markattendance" element={<TeMarkAttendance />} />
          <Route path="attendancehistory" element={<TeAttendanceHistory />} />
        </Route>
        <Route path="/temyclass" element={<TeMyClass />} />
        <Route path="/testudentmnt" element={<TeStudentMnt />} />


        {/* Admin */}

        <Route path="/adhome" element={<AdHome />} />
        <Route path="/adclasmag" element={<AdClassManagment />} >
          <Route index element={<AdClasess />} />
          <Route path="adclasses" element={<AdClasess />} />
          <Route path="adassineteachers" element={<AdAssineTeachers />} />
          <Route path="managestudent" element={<AdManageStudent />} />
          <Route path="adsummery" element={<AdSummery />} />

          {/* ---------------------------------------- */}

        </Route>
        <Route element={<AdMonitor />}>
          <Route path="/adteachermonitor" element={<AdTeacherMonitor />} />
          <Route path="/adStudentnonitor" element={<AdStudentMonitor />} />
          <Route path="/adteachermopage" element={<AdTeacherMoPage />} />
          <Route path="/adstudentmopage" element={<AdStudentMoPage />} />
        </Route>
        <Route path="/adanalticsclasscart" element={<AdAnalticsClassCart />} />
        <Route path="/adanalticsclassreport" element={<AdAnalticsClassReport />} />
        <Route path="/adannouncement" element={<AdAnnouncement />} />
        <Route path="/adannouncementaddpage" element={<AdAnnouncementAddPage />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
