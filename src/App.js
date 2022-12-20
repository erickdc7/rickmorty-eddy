import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Characters from "./components/Characters";
import Episodes from "./components/Episodes";
import Error404 from "./components/Error404";
import Home from "./components/Home";
import Locations from "./components/Locations";

function App() {
	/* CHANGE BACKGROUND HEADER */
	const [header, setHeader] = useState(false);

	function scrollHeader() {
		if (this.scrollY >= 50) {
			setHeader(header => header = true)
		} else {
			setHeader(header => header = false)
		}
	}

	window.addEventListener('scroll', scrollHeader)

	let headerShadow = header ? 'scroll-header' : '';

	/* MENU SHOW/HIDDEN */
	const [clickedShowMenu, setClickedShowMenu] = useState(false);
	const [clickedHiddenMenu, setClickedHiddenMenu] = useState(false);

	function handleClickShowMenu() {
		setClickedShowMenu(clickedShowMenu => !clickedShowMenu)
	}

	function handleClickHiddenMenu() {
		setClickedHiddenMenu(clickedHiddenMenu => !clickedHiddenMenu)
	}

	let showMenu = clickedShowMenu ? 'show-menu' : '';
	let hiddenMenu = clickedHiddenMenu ? 'hidden-menu' : '';

	return (
		<div>
			<header className={`header ${headerShadow}`} id="header">
				<nav className="nav container">
					<Link to="/rickmorty-eddy" className="nav__logo">
						Rick and Morty API
					</Link>

					<div className={`nav__menu ${showMenu} ${hiddenMenu}`} id="nav-menu">
						<ul className="nav__list">
							<li className="nav__item">
								<Link to="/rickmorty-eddy/characters" className="nav__link">Characters</Link>
							</li>

							<li className="nav__item">
								<Link to="/rickmorty-eddy/episodes" className="nav__link">Episodes</Link>
							</li>

							<li className="nav__item">
								<Link to="/rickmorty-eddy/locations" className="nav__link">Locations</Link>
							</li>
						</ul>

						{/* Close button */}
						<div className='nav__close' id="nav-close" onClick={handleClickHiddenMenu}>
							<i className="ri-close-line"></i>
						</div>
					</div>

					{/* Toggle button */}
					<div className='nav__toggle' id="nav-toggle" onClick={handleClickShowMenu}>
						<i className="ri-menu-line"></i>
					</div>
				</nav>
			</header>
			<Routes>
				<Route path="/rickmorty-eddy" element={<Home />} />
				<Route path="/rickmorty-eddy/characters" element={<Characters />} />
				<Route path="/rickmorty-eddy/episodes" element={<Episodes />} />
				<Route path="/rickmorty-eddy/locations" element={<Locations />} />
				<Route path="/rickmorty-eddy/*" element={<Error404 />} />
			</Routes>
		</div>
	);
}

export default App;
