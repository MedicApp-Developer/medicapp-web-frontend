import React, { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import RewardsApi from '../../../../api/Rewards';
import { href } from '../../../../constants/extra';
import { ON_PERCENTAGE } from '../../../../constants/package';
import { RootContext } from '../../../../contextApi';

function Rewards() {
	const [rewards, setRewards] = useState([]);
	const { user } = useContext(RootContext);
	const { t } = useTranslation()

	useEffect(() => {
		RewardsApi.getPatientRewards(user._id).then(res => {
			console.log("----> Rewards => ", res.data.data);
			setRewards(res.data.data);
		})
	}, []);

	return (
		<section class="user-dashboard">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-md-12 col-xl-10 pb-5">
						<h4 class="mb-4">{t("rewards")}</h4>
						{rewards?.map(reward => (
							<div class="card lab-result mb-2">
								<div class="card-body py-2">
									<div class="row align-items-center">
										<div class="col-md-12 col-lg-11">
											<ul>
												<li>
													{t("vendorName")}
													<small class="d-block">{reward?.vendorId?.firstName + " " + reward?.vendorId?.lastName}</small>
												</li>
												<li>
													{t("package")}
													<small class="d-block">{reward?.packageId?.type === ON_PERCENTAGE ? `${reward?.packageId?.off}% Off` : `BUY ${reward?.packageId?.buyQuantity} GET ${reward?.packageId?.getQuantity} FREE`}</small>
												</li>
												<li>
													{t("code")}
													<small class="d-block">{reward?.code}</small>
												</li>
												<li>
													{t("points")}
													<small class="d-block">{reward?.packageId?.points}</small>
												</li>
												<li>
													{t("status")}
													<small class="d-block">{reward?.status}</small>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						))}
						{rewards?.length === 0 && (
							<div style={{ backgroundColor: "lightgray", padding: '1rem', borderRadius: '5px' }}>
								{t("no_rewards_yet")} !
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Rewards