import React, { useState, useRef, useEffect } from 'react';
import Webcam from 'react-webcam';
import QrScanner from 'qr-scanner';
import Navbar from '../components/Navbar';
import { attendanceAPI } from '../services/attendanceAPI';
import { Link } from 'react-router-dom';

const Attendance = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [attendanceMarked, setAttendanceMarked] = useState(false);
  const [scannedData, setScannedData] = useState(null);
  const [webcamReady, setWebcamReady] = useState(false);

  const webcamRef = useRef(null);
  const qrScannerRef = useRef(null);

  const startScanning = () => {
    setIsScanning(true);
    setAttendanceMarked(false);
    setScannedData(null);
    setWebcamReady(false);
  };

  const stopScanning = () => {
    if (qrScannerRef.current) {
      qrScannerRef.current.stop();
    }
    setIsScanning(false);
  };

  const onWebcamReady = () => {
    setWebcamReady(true);
    const video = webcamRef.current.video;

    qrScannerRef.current = new QrScanner(
      video,
      (result) => markAttendance(result.data),
      { highlightScanRegion: true, highlightCodeOutline: true }
    );

    qrScannerRef.current.start();
  };

  const markAttendance = async (qrData) => {
    const parts = qrData.split(':');
    if (parts[0] !== 'ATTENDANCE') {
      alert('Invalid QR Code');
      stopScanning();
      return;
    }

    const [_, studentName, studentId, qrTimestamp] = parts;

    const existing = await attendanceAPI.getAll();
    const alreadyMarked = existing.some(
      (a) => a.studentId === studentId && a.qrTimestamp === qrTimestamp
    );

    if (alreadyMarked) {
      alert('Attendance already marked!');
      stopScanning();
      return;
    }

    await attendanceAPI.create({ studentName, studentId, qrTimestamp });
    setScannedData({ name: studentName, id: studentId });
    setAttendanceMarked(true);
    stopScanning();
  };

  useEffect(() => {
    return () => qrScannerRef.current?.destroy();
  }, []);

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100 px-4 mt-20">
        <div className="w-full max-w-md bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8">

          <h2 className="text-3xl font-bold text-center text-indigo-700">
            Student Attendance
          </h2>

          <p className="text-center text-gray-600 mt-2 mb-6">
            Scan the instructor’s QR code to mark your attendance
          </p>

          <div className="text-center mb-6">
            <Link
              to="/registration"
              className="text-sm text-indigo-600 hover:underline"
            >
              New student? Register here
            </Link>
          </div>

          {!isScanning && (
            <button
              onClick={startScanning}
              className="w-full py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
            >
              📷 Start QR Scan
            </button>
          )}

          {isScanning && (
            <div className="space-y-4">
              {!webcamReady && (
                <p className="text-center text-gray-500">
                  Initializing camera...
                </p>
              )}

              <Webcam
                ref={webcamRef}
                audio={false}
                onUserMedia={onWebcamReady}
                className={`rounded-xl ${webcamReady ? '' : 'hidden'}`}
                videoConstraints={{ facingMode: 'environment' }}
              />

              <button
                onClick={stopScanning}
                className="w-full py-3 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition"
              >
                ❌ Stop Scanning
              </button>
            </div>
          )}

          {attendanceMarked && scannedData && (
            <div className="mt-6 bg-green-100 border border-green-400 text-green-700 p-4 rounded-lg text-center">
              ✅ Attendance marked successfully!
              <br />
              <span className="font-semibold">
                {scannedData.name} (ID: {scannedData.id})
              </span>
            </div>
          )}

        </div>
      </div>
    </>
  );
};

export default Attendance;
