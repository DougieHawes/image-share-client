const Image = ({ item }) => {
  return (
    <img
      src={`http://localhost:8000/image/photo/${item._id}`}
      alt={item.name}
    />
  );
};

export default Image;
