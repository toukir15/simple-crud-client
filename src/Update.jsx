import { useLoaderData } from "react-router-dom";
export default function Update() {
  const loadedData = useLoaderData();
  console.log(loadedData);
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    fetch(`http://127.0.0.1:5173/users/${loadedData._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <h2>user name: {loadedData.name}</h2>
      <form onSubmit={handleUpdate}>
        <input type="text" name="name" defaultValue={loadedData?.name} />
        <br />
        <input type="email" name="email" defaultValue={loadedData?.email} />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
}
