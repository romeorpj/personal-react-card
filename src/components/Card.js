import "../css/card.css";
import RicahardPicture from "../img/richard-fortnum-min.jpg";
import Blobs from "../img/blobs.png";
import PersonalDetails from "./PersonalDetails";
import EmailBtn from "./EmailBtn";
import SocialMedia from "./SocialMedia";

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
					<EmailBtn />
				</div>
            <SocialMedia />
            <img src={Blobs} alt="blob" className="blobs"/>
			</main>
		);
}