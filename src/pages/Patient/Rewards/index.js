import React, { useContext, useEffect, useState, useRef } from 'react'
import AppLayout from '../../../layout/AppLayout'
import MOBILE_IMG from '../../../assets/images/mobile.png';
import CATEGORY_IMG from '../../../assets/images/category.png';
import PackagesApi from '../../../api/Packages';
import { ON_PERCENTAGE } from '../../../constants/package';
import { Link } from 'react-router-dom';
import RewardsApi from '../../../api/Rewards';
import { RootContext } from '../../../contextApi';
import { href } from '../../../constants/extra';
import { toast } from 'react-toastify';
import COPY_ICON from '../../../assets/images/copy.png';
import PLACEHOLDER_IMG from '../../../assets/images/placeholder_img.jpeg'
import { useTranslation } from 'react-i18next';

function Rewards() {
	const [popularPackages, setPopularPackages] = useState([]);
	const [recommendedPackages, setRecommendedPackages] = useState([]);
	const [allPopularPackages, setAllPopularPackages] = useState([]);
	const [allRecommendedPackages, setAllRecommendedPackages] = useState([]);
	const [rewards, setRewards] = useState([]);
	const [categories, setCategories] = useState([]);
	const { user } = useContext(RootContext);
	const [promoCode, setPromoCode] = useState(null);
	const [selectedCategory, setSelectedCategory] = useState("ALL");
	const buttonRef = useRef()
	const { i18n } = useTranslation()

	useEffect(() => {
		PackagesApi.getAllPackages().then(res => {
			setPopularPackages(res.data.data.popular);
			setRecommendedPackages(res.data.data.recommended);
			setAllPopularPackages(res.data.data.popular);
			setAllRecommendedPackages(res.data.data.recommended);
			setCategories(res.data.data.categories);
		});
		RewardsApi.getPatientRewards(user._id).then(res => {
			setRewards(res.data.data);
		})
	}, []);

	const copyToClipboard = (text) => {
		const elem = document.createElement('textarea');
		elem.value = promoCode;
		document.body.appendChild(elem);
		elem.select();
		document.execCommand('copy');
		document.body.removeChild(elem);
		navigator.clipboard.writeText(promoCode)
		toast.success("Copied to clipboard")
	}

	const categorySelected = (category) => {
		setSelectedCategory(category)
		if (category === "ALL") {
			setPopularPackages(allPopularPackages);
			setRecommendedPackages(allRecommendedPackages);
		} else {
			const pps = JSON.parse(JSON.stringify(allPopularPackages));
			const rps = JSON.parse(JSON.stringify(allRecommendedPackages));

			const filteredPps = pps.filter(pkg => pkg.category_id === category);
			const filteredRps = rps.filter(pkg => pkg.category_id === category);

			setPopularPackages(filteredPps);
			setRecommendedPackages(filteredRps);
		}
	}

	return (
		<AppLayout>
			{/* Header Section */}
			<section class="hero-section py-5">
				<div class="container">
					<div class="row align-items-center">
						<div class="col-md-12 col-lg-6 order-2 order-lg-1 text-center text-lg-left">
							<h1>Earn points in every
								doctors appointments.
							</h1>
							<h4>You have {user.points} Points</h4>
							<p>Get exclusive offers and discounts to
								your needs with MedicApp</p>
						</div>
						<div class="col-md-12 col-lg-6 text-center order-1 order-lg-2">
							<img class="img-fluid" src={MOBILE_IMG} alt="mobile" />
						</div>
					</div>
				</div>
			</section>

			{/* Category Section */}
			<section class="category-section bg-white">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<h1>Category</h1>
						</div>
					</div>
					<div class="row align-items-center">
						<div class="col-12">
							<ul>
								<li style={selectedCategory === "ALL" ? { cursor: 'pointer', border: "5px solid gray" } : { cursor: 'pointer' }} onClick={categorySelected.bind(this, "ALL")}>
									<a href={null} style={{ backgroundColor: "gray" }}>
										<p style={{ color: "white" }}>ALL</p>
									</a>
								</li>
								{categories?.map(cat => (
									<li style={selectedCategory === cat._id ? { cursor: 'pointer', border: "5px solid gray" } : { cursor: 'pointer' }} onClick={categorySelected.bind(this, cat._id)}>
										<a href={null} style={{ backgroundImage: `url(${cat?.image})` }}>
											<p style={{ color: "white" }}>{i18n.language === "ar" ? cat?.name_ar : cat?.name_en}</p>
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Popular Section */}
			{popularPackages?.map(item => {
				const subscribeBtn = item.points <= user.points && rewards.filter(reward => reward.packageId._id === item._id).length === 0;
				const subscribedBtn = rewards.filter(reward => reward.packageId._id === item._id).length !== 0;
				const insuficientPoints = item.points > user.points;

				return (
					<section class="popular-section">
						<div class="container">
							<div class="row">
								<div class="col-md-12">
									<h1>Most Popular</h1>
									<div className="row">



										<div className="col-md-4" key={item._id}>
											<div class="item">
												<div class="card">
													<img src={item.images[0] ? item.images[0] : PLACEHOLDER_IMG} class="card-img-top" alt="atlantis" />
													<div class="card-body">
														<h3 class="card-title">{item.type === ON_PERCENTAGE ? `${item.off}% Discount` : `Buy ${item.buyQuantity}, Get ${item.getQuantity}`}</h3>
														<h6 class="card-text">{item.vendorId.firstName + " " + item.vendorId.lastName}</h6>

														{
															subscribedBtn ? (
																<a href={href} style={{ color: "gray", cursor: 'pointer' }} onClick={(e) => { e.preventDefault(); setPromoCode(rewards.filter(reward => reward.packageId._id === item._id)[0]?.code); buttonRef.current.click(); }}>See Promo Code</a>
															) :
																insuficientPoints ? (
																	<p>{item.points} points</p>
																) : (
																	<p>{item.points} points</p>
																)
														}
													</div>
													<Link
														to={`reward/${item._id}`}
														className={subscribeBtn ? "btn btn-primary" : "disabled btn btn-secondary"}>
														{subscribedBtn ? "Subscribed" : insuficientPoints ? "Insufficient Points" : "Subscribe"}
													</Link>
												</div>
											</div>
										</div>
									</div>

								</div>
							</div>
						</div>
					</section>
				)
			})}

			{/* Recommended Section */}
			<section class="popular-section bg-gray">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<h1>Recommended</h1>
						</div>
					</div>
					<div class="row align-items-center">

						{recommendedPackages?.map(item => {

							const subscribeBtn = item.points <= user.points && rewards.filter(reward => reward.packageId._id === item._id).length === 0;
							const subscribedBtn = rewards.filter(reward => reward.packageId._id === item._id).length !== 0;
							const insuficientPoints = item.points > user.points;

							return (
								<div className="col-md-4" key={item._id}>
									<div class="item">
										<div class="card">
											<img src={item.images[0] ? item.images[0] : PLACEHOLDER_IMG} class="card-img-top" alt="atlantis" />
											<div class="card-body">
												<h3 class="card-title">{item.type === ON_PERCENTAGE ? `${item.off}% Discount` : `Buy ${item.buyQuantity}, Get ${item.getQuantity}`}</h3>
												<h6 class="card-text">{item.vendorId.firstName + " " + item.vendorId.lastName}</h6>

												{
													subscribedBtn ? (
														<a href={href} style={{ color: "gray", cursor: 'pointer' }} onClick={(e) => { e.preventDefault(); setPromoCode(rewards.filter(reward => reward.packageId._id === item._id)[0]?.code); buttonRef.current.click(); }}>See Promo Code</a>
													) :
														insuficientPoints ? (
															<p>{item.points} points</p>
														) : (
															<p>{item.points} points</p>
														)
												}
											</div>
											<Link
												to={`reward/${item._id}`}
												className={subscribeBtn ? "btn btn-primary" : "disabled btn btn-secondary"}>
												{subscribedBtn ? "Subscribed" : insuficientPoints ? "Insufficient Points" : "Subscribe"}
											</Link>
										</div>
									</div>
								</div>
							)
						})}

					</div>
				</div>
			</section>

			{/* PROMO CODE MODAL */}
			<div class="col-6 text-right" style={{ visibility: 'hidden' }}>
				<a ref={buttonRef} href={href} data-toggle="modal" data-target="#promoCode" class="btn btn-primary px-3"></a>
			</div>
			<div class="modal fade" id="promoCode" tabindex="-1" aria-labelledby="promoCodeLabel" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered modal-lg">
					<div class="modal-content">
						<div class="modal-body">
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span class="icon-close"></span>
							</button>
							<h4 class="text-center">Promo Code</h4>
							<p class="text-center">Use below promo code to get amazing offers</p>
							<p style={{ color: 'gray' }} class="text-center">Go to nearby vendor's outlet and get this offer</p>
							<form onSubmit={() => { }} encType="multipart/form-data" autocomplete="off">
								<div className="row">
									<div className="col-sm-12">
										<div class="input-group mb-2">
											<div class="input-group-prepend">
												<div class="input-group-text" style={{ cursor: "pointer" }} onClick={(e) => { copyToClipboard(promoCode) }}>
													<img src={COPY_ICON} style={{ height: '1.1rem', width: '1.1rem' }} />
												</div>
											</div>
											<input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Hospital Name" value={promoCode} />
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</AppLayout>
	)
}

export default Rewards