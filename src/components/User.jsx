import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const User = () => {
  const params = useParams();
  console.log(params);
  const [userData, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${params.username}`)
      .then((res) => {
          setTimeout(() => {
              setData(res.data);
              setLoading(false);
          }, 1000);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      {!loading && (
        <div >
          {userData.name && <p className="mt-2 bg-gradient-to-bl from-blue-700 via-blue-800 to-gray-900 flex flex-col rounded-lg p-2 font-semibold font-serif">Name: {userData.name}</p>}
          {userData.company && <p className="mt-2 bg-gradient-to-bl from-blue-700 via-blue-800 to-gray-900 flex flex-col rounded-lg p-2 font-semibold font-serif">Company: {userData.company}</p>}
          {userData.location && <p className="mt-2 bg-gradient-to-bl from-blue-700 via-blue-800 to-gray-900 flex flex-col rounded-lg p-2 font-semibold font-serif">Location: {userData.location}</p>}
          {userData.followers && <p className="mt-2 bg-gradient-to-bl from-blue-700 via-blue-800 to-gray-900 flex flex-col rounded-lg p-2 font-semibold font-serif">No. of Followers: {userData.followers}</p>}
          {userData.following && <p className="mt-2 bg-gradient-to-bl from-blue-700 via-blue-800 to-gray-900 flex flex-col rounded-lg p-2 font-semibold font-serif">Following: {userData.following}</p>}
          {userData.public_repos && <p className="mt-2 bg-gradient-to-bl from-blue-700 via-blue-800 to-gray-900 flex flex-col rounded-lg p-2 font-semibold font-serif">Repos: {userData.public_repos}</p>}
        </div>
      )}
      {loading && (
        <div role="status" class="max-w-sm animate-pulse">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </>
  );
};

export default User;
