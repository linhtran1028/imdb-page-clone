import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Breadcrumb, ContentMovie, DetailMovie, DetailPage, Image, NoData, Title, DetailPageContainer } from "./styles/MovieDetailPageStyles";

const MovieDetailPage = () => {
	const location = useLocation();
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const fetchMovies = async () => {
			const { data } = await axios.get(
				`https://qjth0hsvqa.execute-api.ap-southeast-1.amazonaws.com/staging/movies${location.pathname}`
			);
			setLoading(false);
			setMovies(data.movie);
		};
		fetchMovies();
	}, []);

	if (loading) {
		return <></>;
	}

	return (
		<>
			{!loading && movies === null ? (
				<NoData>No data</NoData>
			) : (
				<DetailPageContainer>
					<Breadcrumb>
						<nav>
							<Link to="/" className="breadcrumb-active">
								Movies
							</Link>
							<span className="breadcrumb"> / </span>
							<Link to="" className="breadcrumb-active">
								{movies.title}
							</Link>
						</nav>
					</Breadcrumb>
					<DetailPage>
						<DetailMovie key={movies.id}>
							<Image>
								<img src={movies.image} width={"100%"} height={"auto"} />
							</Image>
							<ContentMovie>
								<Title>{movies.fullTitle}</Title>
								<div className="information-movie">
									{movies.genres && (
										<div className="information">
											{movies.genres?.map((genre, index) => (
												<React.Fragment key={index}>
													{index !== 0 && <span>, </span>}
													<span>{genre}</span>
												</React.Fragment>
											))}
										</div>
									)}
									{movies.year && (
										<div className="information">
											<span className="icon">
												<i class="fa fa-calendar"></i>{" "}
											</span>
											{movies.year}
										</div>
									)}
									{movies.duration && (
										<div className="information">
											<span className="icon">
												<i class="fa fa-clock-o"></i>
											</span>
											{movies.duration} min
										</div>
									)}
								</div>
								<div className="plot"> {movies.plot}</div>
							</ContentMovie>
						</DetailMovie>
					</DetailPage>
				</DetailPageContainer>
			)}
		</>
	);
};

export default MovieDetailPage;
