import BASE_URL from '../BASEURL';

const attendanceAPI = {
  getAll: async () => {
    const response = await fetch(`${BASE_URL}/api/attendances`);
    return await response.json();
  },

  create: async (attendanceData) => {
    const response = await fetch(`${BASE_URL}/api/attendances`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(attendanceData),
    });
    return await response.json();
  },
};

export { attendanceAPI };