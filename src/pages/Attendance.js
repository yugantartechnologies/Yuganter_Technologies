import React, { useState, useRef, useEffect } from 'react';
import Webcam from 'react-webcam';
import QrScanner from 'qr-scanner';

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

  const onWebcamReady = () => {
    setWebcamReady(true);
    if (isScanning && webcamRef.current && webcamRef.current.video) {
      const videoElement = webcamRef.current.video;
      qrScannerRef.current = new QrScanner(
        videoElement,
        (result) => {
          console.log('QR Code scanned:', result);
          markAttendance(result.data);
        },
        {
          onDecodeError: (err) => {
            console.error('QR decode error:', err);
          },
          highlightScanRegion: true,
          highlightCodeOutline: true,
        }
      );
      qrScannerRef.current.start().catch(err => {
        console.error('Error starting QR scanner:', err);
        alert('Error starting camera. Please check camera permissions.');
        setIsScanning(false);
      });
    }
  };

  const onWebcamError = (err) => {
    console.error('Webcam error:', err);
    alert('Camera access denied or unavailable. Please check camera permissions.');
    setIsScanning(false);
  };

  const stopScanning = () => {
    if (qrScannerRef.current) {
      qrScannerRef.current.stop();
    }
    setIsScanning(false);
  };

  const markAttendance = (qrData) => {
    // Parse QR data: ATTENDANCE:name:id:timestamp
    const parts = qrData.split(':');
    if (parts.length >= 4 && parts[0] === 'ATTENDANCE') {
      const studentName = parts[1];
      const studentId = parts[2];
      
      const attendanceRecord = {
        name: studentName,
        id: studentId,
        timestamp: new Date().toISOString(),
        qrTimestamp: parts[3],
      };

      // Store in localStorage (in real app, send to backend)
      const existingRecords = JSON.parse(localStorage.getItem('attendance') || '[]');
      existingRecords.push(attendanceRecord);
      localStorage.setItem('attendance', JSON.stringify(existingRecords));

      setScannedData({ name: studentName, id: studentId });
      setAttendanceMarked(true);
      stopScanning();
      alert('Attendance marked successfully!');
    } else {
      alert('Invalid QR code. Please scan a valid attendance QR code.');
      stopScanning();
    }
  };

  useEffect(() => {
    return () => {
      if (qrScannerRef.current) {
        qrScannerRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Student Attendance</h2>
        
        <p className="text-gray-600 text-center mb-6">
          Scan the QR code provided by your instructor to mark your attendance.
        </p>

        {!isScanning ? (
          <button
            onClick={startScanning}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Start Scanning QR Code
          </button>
        ) : (
          <div className="mb-4">
            {!webcamReady && (
              <div className="text-center py-4">
                <p className="text-gray-600">Initializing camera...</p>
              </div>
            )}
            <Webcam
              ref={webcamRef}
              audio={false}
              screenshotFormat="image/jpeg"
              videoConstraints={{
                width: 1280,
                height: 720,
                facingMode: 'environment',
              }}
              onUserMedia={onWebcamReady}
              onUserMediaError={onWebcamError}
              className={`w-full rounded-md ${webcamReady ? '' : 'hidden'}`}
            />
            {webcamReady && (
              <button
                onClick={stopScanning}
                className="w-full mt-4 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Stop Scanning
              </button>
            )}
          </div>
        )}

        {attendanceMarked && scannedData && (
          <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
            Attendance marked successfully for {scannedData.name} (ID: {scannedData.id})!
          </div>
        )}
      </div>
    </div>
  );
};

export default Attendance;