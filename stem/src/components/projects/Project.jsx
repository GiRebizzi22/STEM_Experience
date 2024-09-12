import "./project.scss";
import ProjetoX from "./../../assets/insta.png";

const items = [
  {
    id: 1,
    title: "Projeto 1",
    img: { ProjetoX },
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Projeto 2",
    img: { ProjetoX },
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Projeto 3",
    img: { ProjetoX },
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  },
  {
    id: 4,
    title: "Projeto 4",
    img: { ProjetoX },
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  },
];

// eslint-disable-next-line react/prop-types
const Single = ({ item }) => {
  // eslint-disable-next-line react/prop-types
  return <section>{item.title}</section>;
};

const Project = () => {
  return (
    <div className="project">
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Project;
