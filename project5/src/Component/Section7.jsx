function Section7() {
    return(
        <div className="blog-section">
			<div className="container">
				<div className="row mb-5">
					<div className="col-md-6">
						<h2 className="section-title">Recent Blog</h2>
					</div>
					<div className="col-md-6 text-start text-md-end">
						<a className="more">View All Posts</a>
					</div>
				</div>

				<div className="row">

					<div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
						<div className="post-entry">
							<a className="post-thumbnail"><img src="images/post-1.jpg" alt="Image" className="img-fluid"/></a>
							<div className="post-content-entry">
								<h3><a>First Time Home Owner Ideas</a></h3>
								<div className="meta">
									<span>by <a>Kristin Watson</a></span> <span>on <a>Dec 19, 2021</a></span>
								</div>
							</div>
						</div>
					</div>

					<div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
						<div className="post-entry">
							<a className="post-thumbnail"><img src="images/post-2.jpg" alt="Image" className="img-fluid"/></a>
							<div className="post-content-entry">
								<h3><a>How To Keep Your Furniture Clean</a></h3>
								<div className="meta">
									<span>by <a>Robert Fox</a></span> <span>on <a>Dec 15, 2021</a></span>
								</div>
							</div>
						</div>
					</div>

					<div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
						<div className="post-entry">
							<a className="post-thumbnail"><img src="images/post-3.jpg" alt="Image" className="img-fluid"/></a>
							<div className="post-content-entry">
								<h3><a>Small Space Furniture Apartment Ideas</a></h3>
								<div className="meta">
									<span>by <a>Kristin Watson</a></span> <span>on <a>Dec 12, 2021</a></span>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
    )
    
}
export default Section7;