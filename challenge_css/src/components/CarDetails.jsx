import styles from './CarDetails.module.css'

const CarDetails = () => {

	const allCars = [
		{id: 1, brand: 'Fiat', color: 'Branco', year: '2022'},
		{id: 2, brand: 'Reunalt', color: 'Vermelho', year: '2020'},
		{id: 3, brand: 'Gol', color: 'Preto', year: '2017'},
	]

	return (
		<>
			<div className={styles.div_cars}>
				{allCars.map((car) => (

					<div key={car.id} className={styles.car_detail}>

						<p>Marca: <strong>{car.brand}</strong></p>
						<p>Ano: <strong>{car.year}</strong></p>
						<p>Cor: <strong>{car.color}</strong></p>
					</div>
				))}
			</div>
		</>
	)
}

export default CarDetails;