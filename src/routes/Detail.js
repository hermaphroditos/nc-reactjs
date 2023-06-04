import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
	const { id } = useParams();
	const [movie, setMovie] = useState({});
	const [loading, setLoading] = useState(true);
	const getMovie = async () => {
		const json = await (
			await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
		).json();
		setMovie(json.data.movie);
		console.log(json.data.movie);
		setLoading(false);
	};
	useEffect(() => {
		getMovie();
	}, []);

	return loading ? (
		<h1>loading...</h1>
	) : (
		<div>
			<h1>{movie.title}</h1>
			<img src={movie.medium_cover_image} alt={movie.title} />
			<h4>{movie.year}</h4>
			<p>{movie.description_full}</p>
		</div>
	);
}

export default Detail;
