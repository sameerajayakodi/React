function Main({ name, university, age, city, image }) {
  return (
    <div className=" my-4 mx-4 border-slate-950 border-4 justify-center rounded-lg">
      <img
        className="flex flex-col relative p-2 "
        src={
          image
            ? `${image}`
            : `https://images.unsplash.com/photo-1598214886806-c87b84b7078b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW1hZ2V8ZW58MHwwfDB8fHww`
        }
      />
      <div className=" font-mono   text-center justify-center m-2">
        <h2 className="text-lg  font-bold underline uppercase">
          {name ? `${name}` : `John Doe`}
        </h2>
        <h3 className=" text-xl">{university}</h3>
        <p className="">{age}</p>
        <p className="">{city}</p>
      </div>
    </div>
  );
}

export default Main;
