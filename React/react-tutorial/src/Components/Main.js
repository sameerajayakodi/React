function Main({ name, university, age, city, id }) {
  return (
    <div className=" my-4 mx-4 border-slate-950 border-4 justify-center rounded-lg">
      <img
        className="flex flex-col relative p-2 "
        src="https://media.istockphoto.com/id/2157912657/photo/seedless-watermelon-slice-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=3P2Y6JAUKDgdS3mG7gsweG1Hml5c3Dxj0xqK8GDq4hg="
      />
      <div className=" font-mono   text-center justify-center m-2">
        <h2 className="text-lg  font-bold underline uppercase">{name}</h2>
        <h3 className=" text-xl">{university}</h3>
        <p className="">{age}</p>
        <p className="">{city}</p>
      </div>
    </div>
  );
}

export default Main;
