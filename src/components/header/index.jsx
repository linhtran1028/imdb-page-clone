import React from "react";
import { HeaderPage, Nav, NavContent, SearchBarCont } from "../../styles/NavbarStyles";
import logo from "../../assets/images/imdb.png";
import { useCatalogPageContext } from "../../CatalogPageContext";
import { Link } from "react-router-dom";

const Header = () => {
	const { tab, setTab } = useCatalogPageContext();
	return (
		<Nav>
			<NavContent>
				<div>
					<img src={logo} alt="" width="80" height="35" />
				</div>
				<HeaderPage>
					<nav>
						<Link
							to="/"
							onClick={() => setTab("movies")}
							style={
								tab === "movies"
									? {
											textDecorationLine: "none",
											marginRight: "40px",
									}
									: {
											textDecorationLine: "none",
											marginRight: "40px",
											color: "#808080",
											cursor: "pointer",
									}
							}
						>
							MOVIES
						</Link>

						<Link
							to="/"
							onClick={() => setTab("TVs")}
							style={
								tab === "TVs"
									? { textDecorationLine: "none" }
									: {
											textDecorationLine: "none",
											color: "#808080",
											cursor: "pointer",
									}
							}
						>
							TV SHOWS
						</Link>
					</nav>
				</HeaderPage>
				<SearchBarCont></SearchBarCont>
			</NavContent>
		</Nav>
	);
};

export default Header;
