import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";

export const Dropdown = ({ user, signout }) => {
  const [show, setShow] = useState(false);
  const buttonRef = useRef();
  const menuRef = useRef();

  const handleClick = () => {
    signout();
    setShow(false);
  };

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== buttonRef.current) {
      setShow(false);
    }
  });

  return (
    <div className="relative mr-6">
      <button
        className="cursor-pointer flex items-center gap-x-2 hover:text-indigo-400"
        onClick={() => setShow(!show)}
        ref={buttonRef}
      >
        <AiOutlineUser className="text-xl" />
        {user.username}
      </button>
      {show && (
        <ul
          ref={menuRef}
          className="absolute top-12 right-0 w-40 p-2 bg-white shadow-2xl z-50 rounded-b-md border-t"
        >
          <li>
            <Link
              onClick={() => setShow(false)}
              to="/profile"
              className="block p-2 hover:bg-indigo-400/10 rounded-md"
            >
              Profile
            </Link>
          </li>
          <li>
            <button
              className="block w-full text-left p-2 hover:bg-indigo-400/10 rounded-md"
              onClick={handleClick}
            >
              Logout
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};
