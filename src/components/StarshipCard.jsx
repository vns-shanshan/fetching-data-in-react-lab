const StarshipCard = ({ starship }) => {
  const { name, starship_class, manufacturer, model } = starship;

  return (
    <li>
      <h3>{name}</h3>

      <p>Class: {starship_class}</p>
      <p>Manufacturer: {manufacturer}</p>
      <p>Model: {model}</p>
    </li>
  );
};

export default StarshipCard;
