import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import axios from "axios";

import Form from "./components/Form/Form";
import Nav from "./components/Nav/Nav";
import Cards from "./components/Cards/Cards";
import Favorites from "./components/Favorites/Favorites";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error/Error";

import "./App.css";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [characters, setCharacters] = useState([]);
  const [randomCharacter, setRandomCharacter] = useState([]);
  const [access, setAccess] = useState(false);

  /*   const email = "prueba@email.com";
  const password = "Prueba123";  */

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    } catch (error) {
      alert(error.message);
    }
  }

  const logout = () => {
    setAccess(false);
    navigate("/");
  };

  useEffect(() => {
    if (!access) {
      navigate("/");
    }
  }, [access]);

  const getRandomCharacter = () => {
    const randomId = Math.floor(Math.random() * 825) + 1;
    axios(`http://localhost:3001/rickandmorty/character/${randomId}`)
      .then(({ data }) => {
        if (data.name) {
          data.onClose = () => handleClose(data.id);
          setRandomCharacter((oldChars) => [...oldChars, data]);
        } else {
          alert("No se pudo obtener un personaje aleatorio.");
        }
      })
      .catch((error) => {
        console.error("Error al obtener el personaje aleatorio:", error);
        alert(error.message);
      });
  };

  async function onSearch(id) {
    try {
      const characterId = characters.filter((char) => char.id === Number(id));
      if (characterId.length) return alert(`${characterId[0].name} ya existe!`);
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      }
    } catch (error) {
      console.error("Error: ", error);
      window.alert("¡No hay personajes con este ID!");
    }
  }

  function handleClose(id) {
    setCharacters((oldChars) => oldChars.filter((char) => char.id !== id));
    setRandomCharacter((oldChars) => oldChars.filter((char) => char.id !== id));
  }

  return (
    <div className="App">
      {location.pathname !== "/" && (
        <Nav
          getRandomCharacter={getRandomCharacter}
          onSearch={onSearch}
          logout={logout}
        />
      )}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={
            <Cards
              characters={[...characters, ...randomCharacter]}
              handleClose={handleClose}
            />
          }
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
