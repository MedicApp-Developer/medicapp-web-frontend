import React from 'react'
import DashboardLayout from '../../../layout/DashboardLayout'
import { useHistory } from 'react-router-dom';

function AllExpenses() {
	const history = useHistory();
	return (
		<DashboardLayout>
			<section class="user-dashboard">
				<div class="row justify-content-center">
					<div class="col-md-12 col-xl-10 pb-5">
						<h4 class="mb-4">All Expenses</h4>
						<div class="row">
							<div class="col-md-3">
								<div class="card" style={{ cursor: "pointer" }} onClick={() => history.push("allExpenses/1")} style={{ cursor: "pointer" }} onClick={() => history.push("allExpenses/1")}>
									<div class="card-body">
										<div class="media">
											<div class="media-body">
												<h5 class="mt-0">January 20XX</h5>
												<p>Total Income: XXXXX.XX AED</p>
												<p>Total Expenses: XXXX.XX AED</p>
												<p>Total Profit: XXX.XX AED</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-3">
								<div class="card" style={{ cursor: "pointer" }} onClick={() => history.push("allExpenses/1")}>
									<div class="card-body">
										<div class="media">
											<div class="media-body">
												<h5 class="mt-0">February 20XX</h5>
												<p>Total Income: XXXXX.XX AED</p>
												<p>Total Expenses: XXXX.XX AED</p>
												<p>Total Profit: XXX.XX AED</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-3">
								<div class="card" style={{ cursor: "pointer" }} onClick={() => history.push("allExpenses/1")}>
									<div class="card-body">
										<div class="media">
											<div class="media-body">
												<h5 class="mt-0">March 20XX</h5>
												<p>Total Income: XXXXX.XX AED</p>
												<p>Total Expenses: XXXX.XX AED</p>
												<p>Total Profit: XXX.XX AED</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-3">
								<div class="card" style={{ cursor: "pointer" }} onClick={() => history.push("allExpenses/1")}>
									<div class="card-body">
										<div class="media">
											<div class="media-body">
												<h5 class="mt-0">April 20XX</h5>
												<p>Total Income: XXXXX.XX AED</p>
												<p>Total Expenses: XXXX.XX AED</p>
												<p>Total Profit: XXX.XX AED</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-3">
								<div class="card" style={{ cursor: "pointer" }} onClick={() => history.push("allExpenses/1")}>
									<div class="card-body">
										<div class="media">
											<div class="media-body">
												<h5 class="mt-0">May 20XX</h5>
												<p>Total Income: XXXXX.XX AED</p>
												<p>Total Expenses: XXXX.XX AED</p>
												<p>Total Profit: XXX.XX AED</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-3">
								<div class="card" style={{ cursor: "pointer" }} onClick={() => history.push("allExpenses/1")}>
									<div class="card-body">
										<div class="media">
											<div class="media-body">
												<h5 class="mt-0">June 20XX</h5>
												<p>Total Income: XXXXX.XX AED</p>
												<p>Total Expenses: XXXX.XX AED</p>
												<p>Total Profit: XXX.XX AED</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-3">
								<div class="card" style={{ cursor: "pointer" }} onClick={() => history.push("allExpenses/1")}>
									<div class="card-body">
										<div class="media">
											<div class="media-body">
												<h5 class="mt-0">July 20XX</h5>
												<p>Total Income: XXXXX.XX AED</p>
												<p>Total Expenses: XXXX.XX AED</p>
												<p>Total Profit: XXX.XX AED</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-3">
								<div class="card" style={{ cursor: "pointer" }} onClick={() => history.push("allExpenses/1")}>
									<div class="card-body">
										<div class="media">
											<div class="media-body">
												<h5 class="mt-0">August 20XX</h5>
												<p>Total Income: XXXXX.XX AED</p>
												<p>Total Expenses: XXXX.XX AED</p>
												<p>Total Profit: XXX.XX AED</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-3">
								<div class="card" style={{ cursor: "pointer" }} onClick={() => history.push("allExpenses/1")}>
									<div class="card-body">
										<div class="media">
											<div class="media-body">
												<h5 class="mt-0">September 20XX</h5>
												<p>Total Income: XXXXX.XX AED</p>
												<p>Total Expenses: XXXX.XX AED</p>
												<p>Total Profit: XXX.XX AED</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-3">
								<div class="card" style={{ cursor: "pointer" }} onClick={() => history.push("allExpenses/1")}>
									<div class="card-body">
										<div class="media">
											<div class="media-body">
												<h5 class="mt-0">October 20XX</h5>
												<p>Total Income: XXXXX.XX AED</p>
												<p>Total Expenses: XXXX.XX AED</p>
												<p>Total Profit: XXX.XX AED</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-3">
								<div class="card" style={{ cursor: "pointer" }} onClick={() => history.push("allExpenses/1")}>
									<div class="card-body">
										<div class="media">
											<div class="media-body">
												<h5 class="mt-0">November 20XX</h5>
												<p>Total Income: XXXXX.XX AED</p>
												<p>Total Expenses: XXXX.XX AED</p>
												<p>Total Profit: XXX.XX AED</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-3">
								<div class="card" style={{ cursor: "pointer" }} onClick={() => history.push("allExpenses/1")}>
									<div class="card-body">
										<div class="media">
											<div class="media-body">
												<h5 class="mt-0">December 20XX</h5>
												<p>Total Income: XXXXX.XX AED</p>
												<p>Total Expenses: XXXX.XX AED</p>
												<p>Total Profit: XXX.XX AED</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</DashboardLayout>
	)
}

export default AllExpenses