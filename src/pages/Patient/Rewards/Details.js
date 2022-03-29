import React, { useContext, useEffect, useState, useRef } from 'react'
import AppLayout from '../../../layout/AppLayout'
import PATIENT_IMG from '../../../assets/images/patient.png';
import PackagesApi from '../../../api/Packages';
import { Link, useParams } from 'react-router-dom';
import { ON_PERCENTAGE } from '../../../constants/package';
import { RootContext } from '../../../contextApi';
import RewardsApi from '../../../api/Rewards';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { href } from '../../../constants/extra';
import COPY_ICON from '../../../assets/images/copy.png';
import PLACEHOLDER_IMG from '../../../assets/images/placeholder_img.jpeg'

function Details() {

	const history = useHistory();
	const { id } = useParams();
	const [packge, setPackge] = useState({});
	const [popularPackages, setPopularPackages] = useState([]);
	const { user, setUser } = useContext(RootContext);
	const [promoCode, setPromoCode] = useState(null);
	const buttonRef = useRef();
	const [subscribed, setSubscribed] = useState(false);
	const [rewards, setRewards] = useState([]);

	useEffect(() => {
		PackagesApi.getSinglePackage(id).then(res => {
			setPackge(res.data.data);

			PackagesApi.getVendorPackages(res.data.data.vendorId._id).then(res => {
				setPopularPackages(res.data.data);
			});
		});

		RewardsApi.getPatientRewards(user._id).then(res => {
			setRewards(res.data.data);
		})
	}, [id]);

	const openRecommendedPackage = (packageId) => {
		PackagesApi.getSinglePackage(packageId).then(res => {
			setPackge(res.data.data);
		});
	}

	const subscribePackage = (e) => {
		e.preventDefault();
		const data = {
			packageId: packge._id,
			patientId: user._id,
			vendorId: packge.vendorId
		}

		RewardsApi.subscribePackage(data).then(res => {
			toast.success("Package subscribed");
			setUser({ ...user, points: user.points - 20 })
			setSubscribed(true);
			setPromoCode(res.data.data.reward.code);
			buttonRef.current.click();
		});
	}

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

	const subscribeBtn = packge.points <= user.points && rewards.filter(reward => reward.packageId._id === packge._id).length === 0;
	const subscribedBtn = rewards.filter(reward => reward.packageId._id === packge._id).length !== 0;
	const insuficientPoints = packge.points > user.points;

	return (
		<AppLayout>
			<section class="slide-section">
				<div class="container">
					<div class="row">
						<div class="col-md-12 col-lg-8">
							<h3><strong>{packge?.vendorId?.firstName + " " + packge?.vendorId?.lastName}</strong></h3>
							<h6>{packge?.vendorId?.address}</h6>
							<h4 class="text-danger mb-2"><strong>{packge?.type === ON_PERCENTAGE ? `${packge?.off}% Discount` : `Buy ${packge?.buyQuantity}, Get ${packge?.getQuantity}`}</strong></h4>

							<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
								<div class="carousel-inner">
									{packge.images?.length > 0 ? (
										<>
											{packge.images.map((img, index) => (
												<div class={index === 0 ? "carousel-item active" : "carousel-item"}>
													<img src={img} class="d-block w-100" alt="..." />
												</div>
											))}
										</>
									) : (
										<div class="carousel-item active">
											<img src={PLACEHOLDER_IMG} class="d-block w-100" alt="..." />
										</div>
									)}
								</div>
								<button class="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
									<span class="carousel-control-prev-icon" aria-hidden="true"></span>
								</button>
								<button class="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
									<span class="carousel-control-next-icon" aria-hidden="true"></span>
								</button>
							</div>

							<div class="row mt-4 mb-5">
								{packge.vendorId?.images.length > 0 ? (
									<>
										{packge.vendorId?.images?.map(img => (
											<div class="col-4 col-md-3">
												<img src={img} class="img-fluid" alt="atlantis" />
											</div>
										))}
									</>
								) : (
									<>
										<div class="col-4 col-md-3">
											<img src={PLACEHOLDER_IMG} class="img-fluid" alt="atlantis" />
										</div>
									</>
								)}
							</div>

						</div>
						<div class="col-md-12 col-lg-4 mt-md-5 pt-2">
							<a href="javascript:void(0)" class="btn btn-primary btn-block mb-3">{packge?.points} points</a>
							<div class="card">
								<div class="card-body text-center">
									<img width="80" src={PATIENT_IMG} alt="patient" />
									<h4>{packge?.vendorId?.firstName + " " + packge?.vendorId?.lastName}</h4>
									<h6>{packge?.vendorId?.address}</h6>
									<p>{packge?.vendorId?.about} </p>
									<a
										href={null}
										onClick={subscribePackage}
										className={subscribed ? "disabled btn btn-secondary" : subscribeBtn ? "btn btn-primary" : "disabled btn btn-secondary"}
									>
										{subscribed ? "Subscribed" : subscribedBtn ? "Subscribed" : insuficientPoints ? "Insufficient Points" : "Subscribe"}
									</a>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-12">
							<h2 class="mb-3 mt-4 mt-md-0"><strong>About the Offer</strong></h2>
							<p>{packge?.about}</p>

							<h2 class="mt-5 mb-3"><strong>Terms & Conditions</strong></h2>
							<p>{packge?.termsAndConditions}</p>

						</div>
					</div>
				</div>
			</section>

			<section class="popular-section">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<h1>Most Popular</h1>
							<div className="row">
								{popularPackages?.map(item => {

									const subscribeBtn = item.points <= user.points && rewards.filter(reward => reward.packageId._id === item._id).length === 0;
									const subscribedBtn = rewards.filter(reward => reward.packageId._id === item._id).length !== 0;
									const insuficientPoints = item.points > user.points;

									return (
										<div className="col-md-4" key={item._id}>
											<div class="item">
												<div class="card">
													<img src={item?.images?.length === 0 ? PLACEHOLDER_IMG : item?.images[0]} class="card-img-top" alt="atlantis" />
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
														to={`/reward/${item._id}`}
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
		</AppLayout >
	)
}

export default Details