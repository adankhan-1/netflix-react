/* eslint-disable react/prop-types */
export const SeriesCard = ({ data }) => {
    const { img_url, name, description, rating, genre, cast, watch_url } = data;

    const btn = {
        padding: '1.2rem 2.4rem',
        border: 'none',
        fontSize: '1.6rem',
        backgroundColor: rating > 8.5 ? '#7dcea0' : '#f7dc6f',
        color: 'var(--btn-color)',
        marginTop: '1.5rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        };
    const ratingClass = `rating ${rating > 8.5 ? 'super-hit' : 'average'}`;
    return (
        <li className='card'>
            <div>
                <div>
                    <img src={img_url} alt={name} height='40%' width='40%' />
                </div>
                <div className='card-content'>
                <h2> {name} </h2>
                <h3> Rating : <span className = {`${ratingClass}`}> {rating} </span> </h3>
                <p> Summary : {description} </p>
                <p> Genre : {genre.join(", ")} </p>
                <p> Cast : {cast.join(", ")} </p>
                <a href={watch_url} target="_blank">
                    <button style={btn}> Watch Now </button>
                </a>
                </div>
            </div>
        </li>
    );
}