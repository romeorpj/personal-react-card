import "../css/card.css";
import RicahardPicture from "../img/richard-fortnum-min.jpg";
import PersonalDetails from "./PersonalDetails"

export default function Card() {
    return (
			<main className="card">
				<img
					src={RicahardPicture}
					alt="richard jackson"
					className="card__image"
				/>
				<div className="container">
					<PersonalDetails />
				</div>
			</main>
		);
}