import { useEffect, useState } from "react";

function Github() {
  const [data,setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/hamzabaloch08"
        );
        const JSONResponse = await response.json();
        console.log(JSONResponse);
        setData(JSONResponse)
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchData();
  }, []);

return (
  <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
    <div className="bg-white shadow-2xl rounded-2xl p-6 w-full max-w-md text-center">
      <img
        src={data.avatar_url}
        alt="GitHub Profile"
        className="w-32 h-32 mx-auto rounded-full border-4 border-indigo-500"
      />
      <h2 className="text-2xl font-semibold mt-4">{data.name}</h2>
      <p className="text-sm text-gray-500">@{data.login}</p>

      {data.bio && (
        <p className="mt-2 text-gray-600 text-sm italic">"{data.bio}"</p>
      )}

      <div className="mt-4 flex justify-around text-sm text-gray-600">
        <div>
          <p className="font-bold">{data.followers}</p>
          <p>Followers</p>
        </div>
        <div>
          <p className="font-bold">{data.following}</p>
          <p>Following</p>
        </div>
        <div>
          <p className="font-bold">{data.public_repos}</p>
          <p>Repos</p>
        </div>
      </div>

      {data.location && (
        <p className="mt-4 text-gray-700 text-sm">
          📍 <span className="font-medium">{data.location}</span>
        </p>
      )}

      <p className="text-gray-500 text-xs mt-1">
        🗓️ Joined on {new Date(data.created_at).toLocaleDateString()}
      </p>

      <a
        href={data.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-5 px-4 py-2 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition"
      >
        View GitHub Profile
      </a>
    </div>
  </div>
);


}

export default Github;
