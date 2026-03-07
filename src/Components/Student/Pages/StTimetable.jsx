import { useEffect, useState } from "react";

function StTimetable() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/timetable")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>

      <h2>Timetable</h2>

      {data.map((item) => (
        <div key={item._id}>
          {item.day} - {item.subject} ({item.time})
        </div>
      ))}

    </div>
  );
}

export default StTimetable;

