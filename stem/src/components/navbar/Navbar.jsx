import { motion } from "framer-motion";
import Stem from "../../assets/stemlogo.png";
import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";

// Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        {/* <Sidebar/> */}
        <Sidebar />
        <div className="wrapper">
          <motion.span
            className="title"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ durantion: 0.5 }}
          >
            Welcome to Trivium World!
          </motion.span>

          <div className="logo">
            <a href="#">
              <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ durantion: 0.5 }}
                src={Stem}
                alt="Logo Colégio"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
