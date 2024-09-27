import seriesData from '../api/NetflixSeries.json';
import { SeriesCard } from './SeriesCard';

export const NetflixSeries = () => {
    return (
        <ul className="grid grid-three--cols">
            {
                seriesData.map(series => {
                    return <SeriesCard key={series.id} data={series} />
                })
            }
        </ul>
    );
};