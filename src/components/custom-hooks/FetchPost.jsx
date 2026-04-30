import { useState } from "react";
import useFetch from "../../hooks/useFetch";


export default function FetchPost() {
  const [currentPost, setCurrentPost] = useState(1);
  const { finalData, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/" + currentPost
  );

  if (error) {
    return <div>Error loading post</div>;
  }

  return (
    <div>
      {[1, 2, 3, 4].map((id) => (
        <button key={id} onClick={() => setCurrentPost(id)}>
          {id}
        </button>
      ))}

      {loading ? (
        <p>Loading...</p>
      ) : (
        finalData && (
          <div>
            <h2>{finalData.title}</h2>
            <p>{finalData.body}</p>
          </div>
        )
      )}
    </div>
  );
}