import { PlanetsManager } from '@/components/PlanetsManager';
import styles from './page.module.css';

export default async function Page() {
    const response = await fetch('http://localhost:3000/api/planets');
    const planets = await response.json();

    return (
        <div className={styles.page}>
            <h1>Planetas</h1>
            <PlanetsManager startingPlanets={planets} />
        </div>
    );
};
