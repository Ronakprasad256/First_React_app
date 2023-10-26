
const Language = () => {
  // const cStyle = {
  //   color: "teal"
  // }
  const Lang = ['Hindi', 'English', 'Urdu', 'Marathi', 'Assamese'];
  return (
    <>
      <p>Language Available</p>
      {Lang.map((ln, index) => (
        <p key={index} className="bg-blue-700 p-3 m-2 border border-yellow-600 flex justify-center cursor-pointer">
          {ln}
        </p>
      ))}
    </>
  );
};

export default Language;

// style={cStyle} under any elemant tag to change the style
